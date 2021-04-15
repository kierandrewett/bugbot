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
    intents: ['GUILDS', 'GUILD_MESSAGES']
}