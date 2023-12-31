<img align="right" src="https://raw.githubusercontent.com/onrirr/onrirr/main/small.png" alt="Essence logo">

<h1 style="font-size: 36px">Essence</h1>

Pure, Type-Safe and Minimal template for Discord Bots using [Discord.js v14](https://discord.js.org/)

<h1 style="display: flex; align-items: center; font-size: 24px;">Get Started</h1>

After cloning the repository with `git clone`, add your bot token to the `config` file

config:
```
token = XXXXXXXXXXXXXX_XXXXXXX_XXXXXXXXXXXXX
```

Then, install the dependencies and run the bot with `npm run dev`

```bash
npm install
npm run dev
```

<h1 style="display: flex; align-items: center; font-size: 24px;">Project Structure</h1>
  
```
Essence
├── src
│   ├── commands
│   │   ├── command.ts
│   │   └── subdirectory/
│   │       └── command.ts
│   ├── events
│   │   ├── event.ts
|   |
│   └── utils
│   |   ├── ...
│   |
│   ├── index.ts
│   ├── config
│   ├── logs.yml
│
├── .gitignore
├── package.json
├── tsconfig.json
└── nodemon.json
```

## Commands
Commands are positioned in the `commands/` directory (of course subdirectories to `commands/` are allowed, eg. `commands/moderation/ban.ts`), and are loaded automatically by the bot. Commands are structured as follows:

```ts
import { SlashCommandBuilder } from "@discordjs/builders";

export default {
  data: new SlashCommandBuilder()
  .setName("ping")             // check out the command builder docs for more info
  .setDescription("Pong!"),    
  run: async (client, interaction) => {
    // comamnd body
  }
};
```

## Events
Events are positioned in the `events/` directory, and are loaded automatically by the bot. Events are structured as follows:

```ts
import { Client } from "discord.js";

export default {
	name: 'ready',
	once: true, // true if event should only be executed once
	execute(client: Client) {
		// event body
	},
};
```

## Utils
Utils are positioned in the `utils/` directory, and are extra code that helps you with your bot. Utils have no structure, and can be anything you want them to be. By default there is a `console.ts` util for structured logging, `log.ts` util for logging to a file and the `configParser.js` to read the [NOML](https://github.com/onrirr/noml) config file.

### Structured Logging
The `console.ts` util is used for structured logging. It is used as follows:

```ts
import { Print, Warn, Inform, Error } from "./utils/console";

Print("Hello World!");
Warn("Hello World!");
Inform("Hello World!");
Error("Hello World!");
```

### Logging to a file
The `log.ts` util is used for logging to a file. It is used as follows:

Example;

```ts
import { Error } from "./utils/log";
import { $l } from "./utils/configParser";

catch (error) {
  Error("Hello World!", $l(error));
}
```

(this adds the error to the log file in `logs.yml`, and logs it to the console)

## Utils/intents.ts
This file is used to define the intents, shards and partials for your bot. By default, the intents are set to `GUILDS` and `GUILD_MESSAGES`. You can read more about intents [here](https://discordjs.guide/popular-topics/intents.html).


<h1 style="display: flex; align-items: center; font-size: 24px;">Requirements</h1>

- [Node.js](https://nodejs.org/en/) v16 or higher
