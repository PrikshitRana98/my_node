const ChatRoom=require('./chatRoom');

const chatRoom=new ChatRoom();

chatRoom.on('join', (user)=>{
    console.log(`${user} has joined the chat`);
});

chatRoom.on('message', (user, msg)=>{
    console.log(`${user}: send the messge: ${msg}`);
});

chatRoom.on('leave', (user, msg)=>{
    console.log(`${user}: has left the chat`);
});


// simulating the chat

chatRoom.join('Alice');
chatRoom.join('Bob');

chatRoom.join('Alice'); // Alice is already in chat

chatRoom.sendMessage('Alice', 'Hello everyone!');


chatRoom.sendMessage('Bob', 'Hi Alice!');
chatRoom.sendMessage('Alice', 'Are you still there?');
chatRoom.sendMessage('Bob', 'Yes, I am here!');


chatRoom.leave('Alice');
chatRoom.sendMessage('Alice', 'Goodbye!'); // Alice is not in chat
chatRoom.leave('Bob');

// Output: