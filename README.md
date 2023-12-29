[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.javascript.com/)

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Notice: Project Discontinuation

🚨 **Important Notice: Project Discontinued**

Dear users,

I regret to inform you that I am no longer actively working on this project, and I will not be providing any further updates or support.

Feel free to fork the project and continue its development if you find it valuable. However, please note that I won't be available to address issues, review pull requests, or provide support.

Thank you to everyone who has contributed, used, or shown interest in the project. I appreciate your support.

## Contents

- [Introduction](#introduction)
- [Risks](#risks)
- [Installation](#installation)
- [Usage](#usage)
- [Documentation](https://owl1029.github.io/discord-client-js/)
- [Support](#support)

## Introduction
Welcome to DiscordClientJS! This Node.js package allows you to interact with your bot/user account on Discord. With DiscordClientJS, you can send and read messages, among other functionalities. However, please note that using your user account with this package is against Discord's Terms of Service, so be sure to use it responsibly.

## Risks
> **Warning**:
 >Using your user account is against discord TOS. Do not do anything that's against Discord's TOS (Spamming, Advertising etc.) and you shouldn't get banned. Still use it at your own risk.

## Installation
> **NOTE**
> NodeJS 16.16.0 is recommended

```
npm install discord-client-js
```

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
* [Documentation](https://owl1029.github.io/discord-client-js/)
