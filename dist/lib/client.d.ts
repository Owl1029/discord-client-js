/// <reference types="node" />
export declare class Client {
    token: string;
    heartbeatIntervalId: NodeJS.Timeout;
    constructor(token: string);
    channels: {
        /**
         * Reads messages from a DM or a channel.
         * @param {*} id
         * @param {*} limit
         * @returns {JSON}
         */
        readMessages: (id: string, limit: number) => Promise<any>;
        /**
         * Sends a message to DM or a channel.
         * @param {*} id
         * @param {*} message
         * @returns {JSON}
         */
        sendMessage: (id: string, message: any) => Promise<any>;
    };
    users: {
        /**
        * Returns details about a user by using their ID.
        * @param {*} id
        * @returns {JSON}
        */
        getUserInformation: (id: string) => Promise<any>;
        /**
         * This function returns the url of the user's avatar
         * @param {*} id
         * @param {*} resolution
         * @returns {String}
         */
        getUserAvatar: (id: string, resolution?: number) => Promise<string>;
        /**
         * This function returns the discriminator/tag of the user by using their id.
         * @param {*} id
         * @returns {String}
         */
        getUserDiscriminator: (id: string) => Promise<any>;
        /**
         * This function retruns the user's bio using their id.
         * @param {*} id
         * @returns
         */
        getUserBio: (id: string) => Promise<any>;
    };
    user: {
        /**
         * Set custom status for the account logged in
         * @param {*} statusText required
         * @param {*} emoji_name optional
         * @param {*} emoji_id optional
         * @param {*} status optional
         * @returns
         */
        setPresence: (statusText: string, emoji_name?: string, emoji_id?: string, status?: string) => Promise<any>;
    };
    guilds: {
        /**
         * Returns details about a guild by using the guild id.
         * @param {*} id
         * @returns
         */
        getGuildInformation: (id: string) => Promise<any>;
        /**
         * This function returns the url of the server's icon
         * @param {*} id
         * @param {*} resolution
         * @returns
         */
        getGuildIcon: (id: string, resolution?: number) => Promise<string>;
    };
    on(event: "ready", callback: (payload: any) => void): void;
    on(event: "message", callback: (payload: any) => void): void;
}
