> **NOTE**:
> I recommend reading [What are events](/event#what-are-event) and basics of using events before continuing

## Ready 

The `ready` event is called when the account waas successfully able to login.

```js
client.on('ready', () => {
    // Console log or something
})
```

## Receving messages

The `message` event is called whenever the logged in user receives a message.

```js
client.on('message', (message) => {
    // Handle the message information
});
```
