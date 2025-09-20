const EventEmiiter=require('events');

class ChatEngine extends EventEmiiter{
    sendMessage(message){
        console.log('Message sent:', message);
        this.emit('messageSent---', message);
    }
}


const chatEngine=new ChatEngine();

    chatEngine.on('messageSent', (msg)=>{
        console.log('Message received:', msg);
    });

// trigger the event
chatEngine.sendMessage('Hello, this is a test message!');