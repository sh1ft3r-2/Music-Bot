const client = require("../index.js");

client.on('ready', (msg) => {
  console.log(`SMH ready as - ${client.user.tag}`)
  client.user.setActivity('mario die', { type: 'WATCHING' });
})