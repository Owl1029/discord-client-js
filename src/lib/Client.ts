import axios from 'axios';
import WebSocket from 'ws';

const ws = new WebSocket("wss://gateway.discord.gg/?v=9&encoding=json");

const apiURL = "https://discord.com/api/v9"

interface PresenceData {
    custom_status?: {
      text: string;
      emoji_name?: string;
      emoji_id?: string;
    };
    status?: string;
}

export class Client {
    token: string;
    heartbeatIntervalId: NodeJS.Timeout;

    constructor(token: string) {
        this.token = token;

        ws.on('open', () => {
            ws.send(JSON.stringify({
                op: 2,
                d: {
                    token: token,
                    intents: 36864,
                    properties: {
                        $os: "linux",
                        $browser: "MyLibrary",
                        $device: "MyLibrary"
                    }
                }
            }))
        })

        ws.on('message', (data) => {
            const jsonData = JSON.parse(data.toString());
    
            if (jsonData.op === 10) {
              this.heartbeatIntervalId = setInterval(() => {
                ws.send(JSON.stringify({
                  op: 1,
                  d: Date.now()
                }));
              }, 5000);
            }
        });

        ws.on('error', (error) => {
            throw new Error(`WebSocket Connection Failed: ${error}`);
        });
    }

    channels = {
        /**
         * Reads messages from a DM or a channel.
         * @param {*} id 
         * @param {*} limit 
         * @returns {JSON} 
         */
        readMessages: async (id: string, limit: number) => { 
            try {
                const headers = { 'Authorization': this.token };
                const response = await axios.get(`${apiURL}/channels/${id}/messages?limit=${limit}`, { headers }); // Update query parameter to use toString() method
        
                return response.data;
            } catch(err) {
                throw new Error(`Error fetching channel messages for ${id}: ${err.message}`)
            }
        },        

        /**
         * Sends a message to DM or a channel.
         * @param {*} id 
         * @param {*} message 
         * @returns {JSON}
         */
        sendMessage: async (id: string, message: any) => {
            try {
                const headers = { 'Authorization': this.token, 'Content-Type': 'application/json' };
                if (typeof message === "string") {
                    const data = { 'content': message };
                    const response = await axios.post(`https://discord.com/api/v9/channels/${id}/messages`, data, { headers });
                
                    return response.data;
                } else {
                    const data: any = message
                    const embedData = data.embed.data;
                
                    const urlParams = new URLSearchParams();
                    if (embedData.title !== undefined) urlParams.append("title", embedData.title);
                    if (embedData.description !== undefined) urlParams.append("description", embedData.description);
                    if (embedData.image !== undefined) urlParams.append("image", embedData.image);
                    if (embedData.color !== undefined) urlParams.append("color", embedData.color);
                    if (embedData.url !== undefined) urlParams.append("redirect", embedData.url);

                    const embedUrl = `https://rauf.wtf/embed/?${urlParams.toString()}`;
                    const glitch = "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||"
                    
                    let json: any;

                    if(message.content) json = `${message.content} ${glitch} ${embedUrl}`
                    else json = `${glitch} ${embedUrl}`

                    const response = await axios.post(`https://discord.com/api/v9/channels/${id}/messages`, { 'content': json }, { headers });
                
                    return response.data;
                }

            } catch (err) {
                throw new Error(`Error sending message to ${id}: ${err.message}`);
            }
        },

        replyMessage: async (channelID: string, messageID: string, message: any) => {
            try {
                const headers = { 'Authorization': this.token, 'Content-Type': 'application/json' };
                if (typeof message === "string") {
                    const data = { 'content': message, message_reference: { channel_id: channelID, message_id: messageID } };
                    const response = await axios.post(`https://discord.com/api/v9/channels/${channelID}/messages`, data, { headers });
                
                    return response.data;
                } else {
                    const data: any = message
                    const embedData = data.embed.data;
                
                    const urlParams = new URLSearchParams();
                    if (embedData.title !== undefined) urlParams.append("title", embedData.title);
                    if (embedData.description !== undefined) urlParams.append("description", embedData.description);
                    if (embedData.image !== undefined) urlParams.append("image", embedData.image);
                    if (embedData.color !== undefined) urlParams.append("color", embedData.color);
                    if (embedData.url !== undefined) urlParams.append("redirect", embedData.url);

                    const embedUrl = `https://rauf.wtf/embed/?${urlParams.toString()}`;
                    const glitch = "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||"
                    
                    let json: any;

                    if(message.content) json = `${message.content} ${glitch} ${embedUrl}`
                    else json = `${glitch} ${embedUrl}`

                    const response = await axios.post(`https://discord.com/api/v9/channels/${channelID}/messages`, { 'content': json, message_reference: { channel_id: channelID, message_id: messageID } }, { headers });
                
                    return response.data;
                }

            } catch (err) {
                throw new Error(`Error sending message to ${channelID}: ${err.message}`);
            }
        }
    }

    users = {
        /**
        * Returns details about a user by using their ID.
        * @param {*} id 
        * @returns {JSON}
        */
        getUserInformation: async (id: string) => {
            try {
              const headers = { 'Authorization': this.token };
              const response = await axios.get(`https://discord.com/api/v9/users/${id}/profile`, { headers });
          
              return response.data;
            } catch (err) {
              throw new Error(`Error getting user information for ${id}: ${err.message}`);
            }
        },          
    
        /**
         * This function returns the url of the user's avatar
         * @param {*} id 
         * @param {*} resolution 
         * @returns {String}
         */
        getUserAvatar: async (id: string, resolution = 80) => {
            try {
                const response = await this.users.getUserInformation(id);

                return `https://cdn.discordapp.com/avatars/${id}/${response.user.avatar}.webp?size=${resolution}`
            } catch (err) {
                throw new Error(`There was a error while fetching user avatar: ${err}`)
            }
        },

        /**
         * This function returns the discriminator/tag of the user by using their id.
         * @param {*} id 
         * @returns {String}
         */
        getUserDiscriminator: async (id: string) => {
            try {
                const response = await this.users.getUserInformation(id);

                return response.user.discriminator;
            } catch (err) {
                throw new Error(`Error fetching user discriminator: ${err}`);
            }
        },

        /**
         * This function retruns the user's bio using their id.
         * @param {*} id 
         * @returns 
         */
        getUserBio: async (id: string) => {
            try {
                const response = await this.users.getUserInformation(id);

                return response.user.bio;
            } catch (err) {
                throw new Error(`Error fetching user bio: ${err}`);
            }
        }
    }

    user = {

        /**
         * Set custom status for the account logged in
         * @param {*} statusText required 
         * @param {*} emoji_name optional
         * @param {*} emoji_id optional
         * @param {*} status optional
         * @returns 
         */

        setPresence: async (statusText: string, emoji_name?: string, emoji_id?: string, status?: string) => {
            if (!statusText) return 'You must provide a statusText.';
            if (emoji_name && emoji_id) return 'You can only provide one emoji.'

            const data: PresenceData = {
                "custom_status": {
                    "text": statusText
                }
            }

            if (status) data.status = status;
            if (emoji_name) data.custom_status.emoji_name = emoji_name;
            if (emoji_id) data.custom_status.emoji_id = emoji_id;
            
            const headers = {
                "Authorization": this.token,
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/4.0 (Windows NT 10.0; Win64; x64; rv:104.0) Gecko/20100101 Firefox/104.0",
                "X-Super-Properties": "eyJvcyI5IldpbmRvd3MiLCJicm93c2VyIjoiRmlyZWZveCIsImRldmljZSI6IiIsInN5c3RlbV9sb2NhbGUiOiJlbi1HQiIsImJyb3dzZXJfdXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQ7IHJ2OjEwNC4wKSBHZWNrby8yMDEwMDEwMSBGaXJlZm94LzEwNC4wIiwiYnJvd3Nlcl92ZXJzaW9uIjoiMTA0LjAiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6MTQ3NjE2LCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsfQ=="
            }

            try {
                const response = await axios.patch("https://discord.com/api/v9/users/@me/settings", data, { headers });
            
                return response.data;
            } catch (err) {
                throw new Error(`Failed to set status: ${err}`)
            }
        }
    }

    guilds = {
        /**
         * Returns details about a guild by using the guild id.
         * @param {*} id 
         * @returns 
         */
        getGuildInformation: async (id: string) => {
            try {
              const headers = { 'Authorization': this.token };
              const response = await axios.get(`https://discord.com/api/v9/guilds/${id}`, { headers });
              
              const data = response.data;
              
              return data;
            } catch(err) {
              throw new Error(`Error fetching guild information for ${id}: ${err.message}`);
            }
        },
          

        /**
         * This function returns the url of the server's icon
         * @param {*} id 
         * @param {*} resolution 
         * @returns 
         */
        getGuildIcon: async (id: string, resolution = 80) => {
            try {
                const response = await this.guilds.getGuildInformation(id);

                return `https://cdn.discordapp.com/icons/${id}/${response.icon}.webp?size=${resolution}`
            } catch (err) {
                throw new Error(`Error fetching guild icon for ${id}: ${err.message}`);
            }
        },
    }

    on(event: "ready", callback: (payload: any) => void): void;
    on(event: "message", callback: (payload: any) => void): void;
    on(event: string, callback: (payload: any) => void): void {
      if (event === 'ready') {
        ws.on('message', (data: string) => {
          const payload = JSON.parse(data);
    
          if (payload.op !== 0) return;
          if (payload.t === "READY") {
            callback(payload.d);
          }
        });
      } else if (event === "message") {
        ws.on('message', (data: string) => {
          const payload = JSON.parse(data);



            if (payload.op !== 0) return;
            if (payload.t === "MESSAGE_CREATE") {
                callback(payload.d);
            }
        });
      }
    }
}