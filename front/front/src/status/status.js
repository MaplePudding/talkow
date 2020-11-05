let status = {
    userStatus: false,
    userName: "",

    getUserStatus: function(){
        return this.userStatus;
    },

    changeUserStatus: function(){
        this.userStatus === false ? this.userStatus = true : this.userStatus = false;
    },

    getUserName: function(){
        return this.userName;
    },

    changeUserName: function(userName){
        this.userName = userName;
    }
}

export default status;