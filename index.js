var{Client,GatewayIntentBits}=require("discord.js");var c=new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent]});c.on("ready",()=>{require("express")().get("/",function(q, r){r.redirect(`https://discord.com/api/oauth2/authorize?client_id=${c.user.id}&permissions=3072&scope=bot`)}).listen(0);console.log(`Logged in as ${c.user.tag}!`);});c.on("messageCreate",async m=>{if(m.mentions.users.has(c.user.id) && !m.author.bot){var r=await require("node-fetch")(`${process.env.u}&uid=${m.author.id}&msg=${encodeURIComponent(m.content)}`);var d =await r.json();m.reply(d.cnt);}});c.login(process.env.t);
