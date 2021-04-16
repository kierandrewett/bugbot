import { ClientOptions } from 'discord.js'

export * from './akairo'
export * from './discord'

export const config: ClientOptions = {
    allowedMentions: {
        parse: [],
        users: [],
        roles: [],
        repliedUser: false,
    },
    messageCacheLifetime: 150,
    messageSweepInterval: 60,
    messageCacheMaxSize: 30,
    restSweepInterval: 30,
    partials: ["REACTION", "MESSAGE", "CHANNEL", "GUILD_MEMBER", "USER"],
    intents: [
        "GUILDS", 
        "GUILD_MEMBERS", 
        "GUILD_VOICE_STATES", 
        "GUILD_BANS", 
        "GUILD_INVITES", 
        "GUILD_MESSAGES", 
        "GUILD_MESSAGE_REACTIONS", 
        "GUILD_WEBHOOKS", 
        "DIRECT_MESSAGES", 
        "GUILD_VOICE_STATES"
    ]
}