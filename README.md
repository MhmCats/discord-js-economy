# JavaScript Economy Bot

## Contents
1. [Packages used](https://github.com/MhmCats/discord-js-economy/blob/main/README.md#packages-used)
2. [Setting up PostgreSQL](https://github.com/MhmCats/discord-js-economy/blob/main/README.md#setting-up-postgresql)
3. [Getting it to run](https://github.com/MhmCats/discord-js-economy/blob/main/README.md#gettingg-it-to-run)
4. [Actually running it](https://github.com/MhmCats/discord-js-economy/blob/main/README.md#actually-running-it)
5. [Configuration](https://github.com/MhmCats/discord-js-economy/blob/main/README.md#configuration)
6. [Why I made this](https://github.com/MhmCats/discord-js-economy/blob/main/README.md#why-i-made-this)

## Packages used
The discord.js package: installable by 
```
$ npm install discord.js
```

Nodejs postgresql package: installable by 
```
$ npm install pg
```
Node dotenv:
```
$ npm install dotenv
```
## Setting up PostgreSQL
To set up postgres you should first have it installed which you can find [here](https://www.postgresql.org/download/)
Once this is installed you can run the following commands:
```
$ createdb balance
$ psql balance
= CREATE ROLE [your_role_name] superuser
= \password
= CREATE TABLE balance(user_id text primary key, balance int not null);
```

Then input your database credentials in the utils/database.js file:

```js
client = new Client({
            user: 'your_role_name',
            password: 'the password you specified in the /password command',
            host: 'localhost',
            database: 'balance',
            port: 5432,
        });
```
(If this doesn't work then just google a solution. I don't think I explained it very well...)

## Getting it to run
You will need to create a .`env` file which is on the same file level as the `index.js` file.
Inside the `.env` file it should look like:
```
TOKEN=[your_bot_token]
```
You will need to replace the `[your_bot_token]` with your own bot's token.

As well as this in the `index.js` file you should have the following lines as your last 3
```js
const dotenv = require('dotenv');
dotenv.config();
client.login(`${process.env.TOKEN}`);
```

### Actually running it
On your command line make sure that you are in the correct directory and once you are run the command: 
```
$ node index.js
```
If you have not got node installed then just install it...
*Also install `npm` at the moment (node package manager)*

## Configuration
Pretty much the only thing you can configure on this bot is the prefix which can be changed in the `config.json` file.

## Why I made this
I am more used to making discord bots in **python** so I thought JavaScript would be fun to attempt. So I googled a tutorial and made a *very basic bot*. Then I thought: **"I know let's make an economy bot with PostgreSQL"**.

So after much trying and failing I came up with this final product. It is not perfect and probably has a lot of bugs... If you find any then just make a pull request please.
