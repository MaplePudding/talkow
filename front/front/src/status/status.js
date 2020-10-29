let status = {
    userStatus: false,

    getUserStatus: function(){
        return this.userStatus;
    },

    changeUserStatus: function(){
        this.userStatus === false ? this.userStatus = true : this.userStatus = false;
    }
}

export default status;