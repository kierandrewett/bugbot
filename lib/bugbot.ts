import { AkairoClient } from "discord-akairo";

import { config, akairoConfig } from "@bugbot/config/index";

class BugBot extends AkairoClient {
    constructor() {
        super(akairoConfig, config);
    }
}

export default BugBot;