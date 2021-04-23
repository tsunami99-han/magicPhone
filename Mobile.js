class Mobile {
    constructor(_name,_type,_status) {
        this.name = _name;
        this.type = _type;
        this.battery = 100;
        this.message = '';
        this.inbox = [];
        this.outbox = [];
        this.status=_status;
    }

    writeMsg(msg){
        this.message = msg;
    }

    receiveMsg(msg){
        this.inbox.push(msg);
    }

    sendMsg(mobile){
        mobile.receiveMsg(this.message);
        this.outbox.push(this.message);
    }

    decreaseBattery(){
        if(this.battery > 0)
            this.battery-=20;
        else
            alert("Sạc pin vào bạn êiiii!");
    }
}

