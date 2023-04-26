[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.javascript.com/)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Discord](https://img.shields.io/discord/1043936305127632927?color=%23697EC6&label=discord)](https://discord.gg/svqDa5TaxA)

## Contents

- [Introduction](#introduction)
- [Risks](#risks)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](https://owl1029.github.io/discord-client-js/)
- [Support](#support)

## Introduction
Welcome to DiscordClientJS! This Node.js package allows you to interact with your bot/user account on Discord. With DiscordClientJS, you can send and read messages, among other functionalities. However, please note that using your user account with this package is against Discord's Terms of Service, so be sure to use it responsibly. If you encounter any issues during installation or usage, feel free to join the [Discord support server](https://discord.gg/svqDa5TaxA) for assistance.

## Risks
> **Warning**:
 >Using your user account is against discord TOS. Do not do anything that's against Discord's TOS (Spamming, Advertising etc.) and you shouldn't get banned. Still use it at your own risk.

## Installation
> **NOTE**
> NodeJS 16.16.0 is recommended

```
npm install discord-client-js
```

If you are having some trouble setting up the package, Feel free to join my [Discord Server](https://discord.gg/fmDQYhhQdC).

## Usage

Commands as a selfbot:

```js
import { Client } from 'discord-client-js'

const client = new Client(paste-your-token);

client.on('ready', () => {
    console.log("Logged in");
});

client.on('message', async (message) => {
    const content = message.content.toLowerCase();

    if (content === "how are you?") {
        await client.channels.sendMessage(message.channel_id, "I am fine")
    }
});
```

There are more functions and events. Check them out at our [Documentation](https://owl1029.github.io/discord-client-js/).

## Support
* [Discord](https://discord.gg/svqDa5TaxA)
* [Documentation](https://owl1029.github.io/discord-client-js/)
