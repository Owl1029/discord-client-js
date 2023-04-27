> **NOTE**
> You have to first [Register The Client](/client#register-the-client) before you can use any of the Client functions.

## Channels

### Sending a message
```js
const sendMessage = await client.channels.sendMessage(channelID, message);

// If you need details about the message being send
console.log(sendMessage)

// Sending embed

const embed = new EmbedBuilder()
    .setURL("https://example.com")
    .setTitle("Hello World")
    .setImage("https://example.com/image.png")
    .setDescription("I don't know")
    .setColor("00ff40") // Colors are hexadecimal

const sendMessage = await client.channels.sendMessage(channelID, { content: message, embed: embed });

```

### Reading messages
```js
const messages = await client.channels.readMessages(channelID, limitToReadMsgs);

console.log(messages);
```

## Users

### Get user information
```js
const info = await client.users.getUserInformation(id);

console.log(info);
```

### Get user avatar
```js
const avatarURL = await client.users.getUserAvatar(id, resolution); // default resolution = 80

console.log(avatarURL);
```

### Get user discriminator
```js
const discriminator = await client.users.getUserDiscriminator(id);

console.log(discriminator);
```

### Get user bio
```js
const userBio = await client.users.getUserBio(id);

console.log(userBio);
```

## Guilds

### Get guild information
```js
const guildInfo = await client.guilds.getGuildInformation(id);

console.log(guildInfo);
```

### Get guild icon
```js
const iconURL = await client.guilds.getGuildIcon(id, resolution); // default resolution = 80

console.log(iconURL);
```

## User

### Set user presence
```js
const status = await client.user.setPresence(customStatus, emojiName, emojiID, status);
// Example:
// const res = await client.user.setPresence("Hello World!", "👍", null, "dnd");

// Status Modes: 
// online, invincible, dnd, idle

console.log(status)
```