import io from 'socket.io-client'
import Status from '../status/status'

 export let wsObj = {
    ws: undefined,
    timer: undefined,

    getWs: function(){
        if(this.ws){
            return this.ws
        }else{
            this.ws = io("ws://localhost:8080/events");

            this.ws.on("connect", (event) => {
                this.ws.emit("connection", Status.getUserName());
            })

            this.ws.on("revMsg", function(event){
                console.log(event.data)
            })

            if(!this.timer){
                this.timer = setInterval(() =>this.sendTestMsg(Status.getUserName(), this.ws), 15000)
            }

        }
    },

     sendTestMsg: function(userName, ws){
        ws.emit("test", userName)
     },

     sendMsg: function(){

    }
}