import { AkairoClient, CommandHandler } from "discord-akairo";
import { resolve } from "path";

import { config, akairoConfig, discordConfig } from "../config";

class BugBot extends AkairoClient {
    public commandHandler: CommandHandler;

    constructor() {
        super(akairoConfig, config);

        this.commandHandler = new CommandHandler(this, {
            directory: "./src/commands",
            prefix: discordConfig.prefix
        });

        this.commandHandler.loadAll();

        this.on("ready", () => {
            console.log(`Logged into ${this.user?.tag}`)

            this.user?.setActivity('people report bugs', { type: 'WATCHING' })
        })
    }
}

export default BugBot;