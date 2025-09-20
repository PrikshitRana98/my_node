const EventEmiiter = require('events');

const eventEmiiter= new EventEmiiter();

// eventEmiiter.on('myEvent', (arg1, arg2) => {
//     console.log('myEvent triggered with args:', arg1, arg2);
// });

// eventEmiiter.on('greet', (name) => {
//     console.log(`Hello, ${name}! welcome to the event-driven world.`);
// });


// eventEmiiter.once('pushNotify', () => {
//     console.log('This will be logged only once.');
// });

// eventEmiiter.emit('greet', 'Alice'); // Triggers the greet event and calls the listener
// eventEmiiter.emit('pushNotify'); // Triggers the pushNotify event and calls the listener
// eventEmiiter.emit('pushNotify'); // This will not trigger the listener again    
// eventEmiiter.emit('myEvent', 'arg1Value', 'arg2Value'); // Triggers the event and calls the listener


const sayHi = () => console.log('Hi there!');

eventEmiiter.on('hi', sayHi);

eventEmiiter.emit('hi'); // Output: Hi there!

eventEmiiter.off('hi', sayHi);

eventEmiiter.emit('hi'); // No output


// Define a listener function
function greetListener(name) {
  console.log(`Hello, ${name}!`);
}

// Add the listener to the "greet" event
eventEmiiter.on('greet', greetListener);

// Trigger the event
eventEmiiter.emit('greet', 'Prikshit'); // Output: Hello, Prikshit!

// Remove the listener
// eventEmiiter.removeListener('greet', greetListener);

// Trigger again (no output, since listener removed)
eventEmiiter.on('greet', ()=>{
    console.log('Hello, Prikshit!');
});

eventEmiiter.emit('greet', 'Prikshit'); // Output: Hello, Prikshit!

console.log(eventEmiiter.listeners('greet')); 
console.log(eventEmiiter.listenerCount('greet'))// Output: 2


