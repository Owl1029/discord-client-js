# What are events?

An event is a function that is automatically triggered by a certain action or occurrence within a Discord server. These events can range from user messages, reactions, voice channel activity, and more.

## Usage

To use events, you first need to create a new instance of the [Discord Client](/client#registering-a-client) and then attach event listeners to it using the `client.on()` method. This method takes two arguments: the name of the event you want to listen for, and a callback function that will be executed when the event occurs.

### Example

This is how a event usually looks:

```js
client.on('event', callback)
```

For example, to listen for the message event (which is triggered whenever a user sends a message in a server) for more information see the documentation for messages event, you could use the following code:

```js
client.on('message', (message) => {
  console.log(`${message.author.username} said: ${message.content}`);
});
```
