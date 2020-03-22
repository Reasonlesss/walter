const { ShardClient } = require("detritus-client");

const client = new ShardClient(process.env.TOKEN);

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
