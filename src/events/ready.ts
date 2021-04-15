import { Listener } from "discord-akairo";

export default class ReadyListener extends Listener {
    constructor() {
        super('ready', {
            emitter: 'client',
            event: 'ready'
        });
    }

    exec() {
        console.log(`Logged into ${this.client.user?.tag}`)

        this.client.user?.setActivity('people report bugs', { type: 'WATCHING' })
    }
}