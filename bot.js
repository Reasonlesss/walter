const { ShardClient } = require("detritus-client");
const config = require("./config.json")

const client = new ShardClient(config.token);

client.on("messageCreate", async ctx => {
  const { message } = ctx;
  if (message.content === "walter") {
    message.reply("walter");
  }
});

(async () => {
  await client.run();
  console.log("Walter Bot Ready");
})();
