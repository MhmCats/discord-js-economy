const { Client } = require('pg');

let client

module.exports = {
    read: async function (user_id){
        try {
            var res = await client.query(
                `SELECT balance FROM balance WHERE user_id=$1`,
                [user_id]
            );
            for (let row of res.rows) {
                return (row['balance']);
            }
        }
        catch (err) {
            console.error(err)
            if (err instanceof TypeError) {
            }
        }
    },
    write: async function (user_id, value){
        var query = `
        SELECT balance FROM balance WHERE user_id='${user_id}';
        `
        var res = await client.query(query);
        if (!res.rows[0]) {
            query = `
            INSERT INTO balance(user_id, balance) VALUES(${user_id}, ${value});
            `
            await client.query(query)
        }
        else {
            for (let row of res.rows) {
                var bal = row['balance'];
                query = `
                UPDATE balance SET balance=${parseInt(bal)}+${parseInt(value)} WHERE user_id='${user_id}';
                `
                await client.query(query);
            }
        }
    },
    connect: function () {
        client = new Client({
            user: 'esmecat',
            password: 'password',
            host: 'localhost',
            database: 'balance',
            port: 5432,
        });
        client.connect()
    },
    end: function () {
        client.end()
    }
}