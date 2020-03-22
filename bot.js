const { ShardClient } = require("detritus-client");
const config = require("./config.json")

const client = new ShardClient(config.token);

client.on("messageCreate", async ctx => {
  const { message } = ctx;
  if (message.content === "walter") {
    message.reply("walter");
  }
  if (message.content == "i like fire trucks and monster trucks"){
    message.reply("https://c8.alamy.com/comp/C3MNXD/new-york-fire-department-fire-truck-engine-7-manhattan-C3MNXD.jpg")
  }
});

(async () => {
  await client.run();
  console.log("Walter Bot Ready");
})();
