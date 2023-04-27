## What is a embed builder?

A embed builder is a class used to give information about a embed that can be later used by the `Client` class to [send embeds](/functions#sending-a-message).

## How to use a embed builder

There are 5 options in a embed builder that you can set. They are:

* Color
* Title
* Redirect URL
* Description *
* Image 

Since discord doesn't allow users to send embeds, some features such as fields, author information are limited. There are also some [other problems](/embedbuilder.md#problems).

> **NOTE**
> Description is required.

Example of how you can create an embed:

```js
const embed = new EmbedBuilder()
    .setURL("https://example.com")
    .setTitle("Hello World")
    .setImage("https://example.com/image.png")
    .setDescription("I don't know")
    .setColor("00ff40") // Colors are hexadecimal
```

## Sending a embed

Check [Client.SendMessages](/functions.md#sending-a-message) function for more information about sending a embed.

## Problems

Since discord doesn't allow non-bot accounts to send embeds, I had to find a way around it. 

The package currently uses [Rauf's Embed Generator](https://rauf.wtf/embed) to generate URLs for embeds, and website embeds doesn't have features such as fields, author information etc. 

The embed URL won't be visible because I take advantage of a discord glitch. Here is how it works:
Before the actual embed, there is a lot of `||` characters, this will bug out discord and cause discord not to show anything after the specific characters but it'll load website embeds. Here is a [Video By No Text To Speech](https://youtu.be/9OgpQHSP5qE?t=105) explaining how to replicate this. 

To redirect, there is a `redirect` parameter in [Rauf's Embed Generator](https://rauf.wtf/embed), it first takes it to the Rauf's website then redirect, so the users may see something like this:

<img src="/assets/redirect.PNG">

It may seem suspicous.
