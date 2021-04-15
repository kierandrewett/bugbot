import { ClientOptions } from 'discord.js'

export * from './akairo'
export * from './discord'

export const config: ClientOptions = {
    disableMentions: "everyone" // disable @everyone mentions
}