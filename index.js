var d=require("discord.js");var c=new d.Client({intents:[d.GatewayIntentBits.Guilds,d.GatewayIntentBits.GuildMessages,d.GatewayIntentBits.MessageContent]});c.on("ready",()=>{require("express")().get("/",function(q,r){r.send("")}).listen(0);console.log(`Logged in as ${c.user.tag}!`);}).on("messageCreate",async m=>{if(m.mentions.users.has(c.user.id) && !m.author.bot){var r=await require("node-fetch")(`${process.env.u}&uid=${m.author.id}&msg=${encodeURIComponent(m.content)}`);var d =await r.json();m.reply(d.cnt);}}).login(process.env.t);
