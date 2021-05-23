const { MessageEmbed } = require("discord.js")
const discord = require("discord.js")
const client = new discord.Client(
  {
    disableEveryone: false
  }
)

client.on("ready", () => {

  setInterval(function() {

    let guild = client.guilds.cache.get("730071537377607702");

    let user = guild.members.cache.get("810146229732376589")
    let status = user.presence.status
    client.channels.cache.get("839554426595311616").messages.fetch("839556904023883828").then(msg => {

      let offline = new MessageEmbed()
        .setTitle("Gaming Family Music")
        .setDescription("Gaming Family Music is Offline for some maintenance and it ll back online soon :red_circle:")
        .setColor("#ff0000")
        .setTimestamp()
      let online = new MessageEmbed()
        .setTitle("Gaming Family Music")
        .setDescription("Gaming Family Music is Online :green_circle:")
        .setColor("GREEN")
        .setTimestamp()

      if (status === "online") {
        msg.edit(online)
      } else {
        if (status === "dnd") {
          msg.edit(online)
        } else {
          if (status === "idle") {
            msg.edit(online)
          } else {
            if (status === "offline") {
              msg.edit(offline)
            }
          }
        }
      }
    }).catch(err => {})
  }, 5000) 
  console.log("Gaming Family Music is now online")
})

client.on("message", async message => {

  if (message.content === "c!status") {

    let execute = new MessageEmbed()
      .setTitle("Status")
      .setDescription("Gaming Family Music is Online :green_circle:")
      .setColor("#00ff21")
      .setTimestamp()

    return message.channel.send(execute)

  }
})

client.on("ready", () => {

  setInterval(function() {

    let guild = client.guilds.cache.get("730071537377607702");

    let user = guild.members.cache.get("810725754374979616")
    let status = user.presence.status
    client.channels.cache.get("839554426595311616").messages.fetch("839560322242445342").then(msg => {

      let offline = new MessageEmbed()
        .setTitle("Gaming Family Status")
        .setDescription("Gaming Family Status is Offline for some maintenance and it ll back online soon... :red_circle:")
        .setColor("#ff0000")
        .setTimestamp()
      let online = new MessageEmbed()
        .setTitle("Gaming Family Status")
        .setDescription("Gaming Family Status is Online :green_circle:")
        .setColor("GREEN")
        .setTimestamp()

      if (status === "online") {
        msg.edit(online)
      } else {
        if (status === "dnd") {
          msg.edit(online)
        } else {
          if (status === "idle") {
            msg.edit(online)
          } else {
            if (status === "offline") {
              msg.edit(offline)
            }
          }
        }
      }
    }).catch(err => {})
  }, 5000) 
  console.log("Gaming Family Status is now online")
})

client.on("message", async message => {

  if (message.content === "c!status1") {

    let execute = new MessageEmbed()
      .setTitle("Status")
      .setDescription("Gaming Family Status is Online :green_circle:")
      .setColor("#00ff21")
      .setTimestamp()

    return message.channel.send(execute)

  }
})

client.on("ready", () => {

  setInterval(function() {

    let guild = client.guilds.cache.get("730071537377607702");

    let user = guild.members.cache.get("657336447505924127")
    let status = user.presence.status
    client.channels.cache.get("839554426595311616").messages.fetch("839563596987367514").then(msg => {

      let offline = new MessageEmbed()
        .setTitle("**Developer**")
        .setDescription("Developer is may be sleeping right now but watch yourself he sees you :smiling_imp: ")
        .setColor("#000000")
        .setTimestamp()
      let online = new MessageEmbed()
        .setTitle("**Developer**")
        .setDescription("WOW! status of developer is online which that mean somebody made his day try not upset him or i ll dug your grave :smiling_imp:  :green_circle:")
        .setColor("GREEN")
        .setTimestamp()
      let dnd = new MessageEmbed()
        .setTitle("**Developer**")
        .setDescription("Hmmm, his status do not disturb, he dont want to receive any message now please be carefully if you dm him now")
        .setColor("#ff0000")
        .setTimestamp()
      let idle = new MessageEmbed()
        .setTitle("**Developer**")
        .setDescription("He is idle maybe he is AFK or leaved his pc without any job to do dm him later")
        .setColor("#ffa700")
        .setTimestamp()

      if (status === "online") {
        msg.edit(online)
      } else {
        if (status === "dnd") {
          msg.edit(dnd)
        } else {
          if (status === "idle") {
            msg.edit(idle)
          } else {
            if (status === "offline") {
              msg.edit(offline)
            }
          }
        }
      }
    }).catch(err => {})
  }, 5000) 
  console.log("Developer is now online")
})

client.on("message", async message => {

  if (message.content === "c!status2") {

    let execute = new MessageEmbed()
      .setTitle("Status")
      .setDescription("Gaming Family Status is Online :green_circle:")
      .setColor("#00ff21")
      .setTimestamp()

    return message.channel.send(execute)

  }
})

client.on("ready", () => {

  setInterval(function() {

    let guild = client.guilds.cache.get("730071537377607702");

    let user = guild.members.cache.get("598609048300027936")
    let status = user.presence.status
    client.channels.cache.get("839554426595311616").messages.fetch("839583177969893387").then(msg => {

      let offline = new MessageEmbed()
        .setTitle("**GF Support (! Tripix)**")
        .setDescription("! Tripix is may be sleeping right now but watch yourself he sees you :smiling_imp: ")
        .setColor("#000000")
        .setTimestamp()
      let online = new MessageEmbed()
        .setTitle("**GF Support (! Tripix)**")
        .setDescription("WOW! status of ! Tripix is online which that mean somebody made his day try not upset him or i ll dug your grave :smiling_imp:  :green_circle:")
        .setColor("GREEN")
        .setTimestamp()
      let dnd = new MessageEmbed()
        .setTitle("**GF Support (! Tripix)**")
        .setDescription("Hmmm, his status do not disturb, he dont want to receive any message now please be carefully if you dm him now")
        .setColor("#ff0000")
        .setTimestamp()
      let idle = new MessageEmbed()
        .setTitle("**GF Support (! Tripix)**")
        .setDescription("He is idle maybe he is AFK or leaved his pc without any job to do dm him later")
        .setColor("#ffa700")
        .setTimestamp()

      if (status === "online") {
        msg.edit(online)
      } else {
        if (status === "dnd") {
          msg.edit(dnd)
        } else {
          if (status === "idle") {
            msg.edit(idle)
          } else {
            if (status === "offline") {
              msg.edit(offline)
            }
          }
        }
      }
    }).catch(err => {})
  }, 5000) 
  console.log("GF Support is now online")
})

client.on("message", async message => {

  if (message.content === "c!status3") {

    let execute = new MessageEmbed()
      .setTitle("Status")
      .setDescription("Gaming Family Status is Online :green_circle:")
      .setColor("#00ff21")
      .setTimestamp()
    return message.channel.send(execute)

  }
  if (message.content === "<@&781422513120083983>") {
  let gta = new MessageEmbed()
  .setTitle(`Wanna play gta?`)
  .setImage(`https://media.discordapp.net/attachments/830260684830015488/846010773641887824/52a03db4019d1fb82e52cbc46fe7d646_c4b3.jpg?width=1104&height=621`)
  .setColor(`#00f7ff`)
  .setDescription(`${message.author} Well, go there and wait and someone will join you in few minutes [Here](https://discord.gg/tSAEYrB37T)`)
  .setFooter(`Developed By CASPER AG#7384`);
return message.channel.send(gta)
}
 if (message.content === "<@&781422734412087318>") {
  let valorant = new MessageEmbed()
  .setTitle(`Wanna play valorant?`)
  .setImage(`https://media.discordapp.net/attachments/830260684830015488/846010816515276820/valorant-2020-4k-0f-scaled.jpg?width=782&height=440`)
  .setColor(`#00f7ff`)
  .setDescription(`${message.author} Well, go there and wait and someone will join you in few minutes [Here](https://discord.gg/GDFwVfNvM3)`)
  .setFooter(`Developed By CASPER AG#7384`);
return message.channel.send(valorant)
}
 if (message.content === "<@&781422975395430451>") {
  let fortnite = new MessageEmbed()
  .setTitle(`Wanna play fortnite?`)
  .setImage(`https://media.discordapp.net/attachments/830260684830015488/846010807896506398/14br-consoles-1920x1080-wlogo-1920x1080-432974386.jpg?width=782&height=440`)
  .setColor(`#00f7ff`)
  .setDescription(`${message.author} Well, go there and wait and someone will join you in few minutes [Here](https://discord.gg/BkSZPfgAuD)`)
  .setFooter(`Developed By CASPER AG#7384`);
return message.channel.send(fortnite)
}
if (message.content === "<@&781423087408644096>") {
  let cod = new MessageEmbed()
  .setTitle(`Wanna play Call Of Duty?`)
  .setImage(`https://media.discordapp.net/attachments/830260684830015488/846010816259948564/apps.39134.13835473807186336.304a128a-7199-43c4-a9ce-2fc111ee9ddb.9c145aa4-462b-499e-a6cd-2a1faf6616.jpg?width=782&height=440`)
  .setColor(`#00f7ff`)
  .setDescription(`${message.author} Well, go there and wait and someone will join you in few minutes [Here](https://discord.gg/KpJCGTwPQm)`)
  .setFooter(`Developed By CASPER AG#7384`);
return message.channel.send(cod)
}
if (message.content === "<@&781423224898584577>") {
  let pubg = new MessageEmbed()
  .setTitle(`Wanna play PUBG?`)
  .setImage(`https://media.discordapp.net/attachments/830260684830015488/846010810210844702/pubg.jpg?width=782&height=521`)
  .setColor(`#00f7ff`)
  .setDescription(`${message.author} Well, go there and wait and someone will join you in few minutes [Here](https://discord.gg/KQX3d2r37B)`)
  .setFooter(`Developed By CASPER AG#7384`);
return message.channel.send(pubg)
}
if (message.content === "<@&781423393089912862>") {
  let csgo = new MessageEmbed()
  .setTitle(`Wanna play CSGO?`)
  .setImage(`https://media.discordapp.net/attachments/830260684830015488/846010796269109268/CSGO-1536x864-1.jpg?width=782&height=440`)
  .setColor(`#00f7ff`)
  .setDescription(`${message.author} Well, go there and wait and someone will join you in few minutes [Here](https://discord.gg/KjXC8Kq6n5)`)
  .setFooter(`Developed By CASPER AG#7384`);
return message.channel.send(csgo)
}
if (message.content === "<@&781423496722776114>") {
  let amongus = new MessageEmbed()
  .setTitle(`Wanna play Among Us?`)
  .setImage(`https://media.discordapp.net/attachments/830260684830015488/846010791790641182/image001_f3bw.jpg?width=782&height=440`)
  .setColor(`#00f7ff`)
  .setDescription(`${message.author} Well, go there and wait and someone will join you in few minutes [Here](https://discord.gg/6FXKJnB7Qf)`)
  .setFooter(`Developed By CASPER AG#7384`);
return message.channel.send(amongus)
}
if (message.content === "<@&781423613164126209>") {
  let rocket = new MessageEmbed()
  .setTitle(`Wanna play Rocket League?`)
  .setImage(`https://media.discordapp.net/attachments/830260684830015488/846010820847468544/rocket-league-sideswipe-android-ios.jpg?width=782&height=409`)
  .setColor(`#00f7ff`)
  .setDescription(`${message.author} Well, go there and wait and someone will join you in few minutes [Here](https://discord.gg/F3rVp5rej4)`)
  .setFooter(`Developed By CASPER AG#7384`);
return message.channel.send(rocket)
}
if (message.content === "<@&802088389444763658>") {
  let apex = new MessageEmbed()
  .setTitle(`Wanna play Apex Legends?`)
  .setImage(`https://media.discordapp.net/attachments/830260684830015488/846010803664715776/apex.jpg?width=782&height=440`)
  .setColor(`#00f7ff`)
  .setDescription(`${message.author} Well, go there and wait and someone will join you in few minutes [Here](https://discord.gg/NUJZ6cxcj7)`)
  .setFooter(`Developed By CASPER AG#7384`);
return message.channel.send(apex)
}
if (message.content === "<@&802088404069515274>") {
  let brawlhalla = new MessageEmbed()
  .setTitle(`Wanna play Brawlhalla?`)
  .setImage(`https://media.discordapp.net/attachments/830260684830015488/846010789008506900/Brawlhalla-Reno-1.jpg?width=782&height=440`)
  .setColor(`#00f7ff`)
  .setDescription(`${message.author} Well, go there and wait and someone will join you in few minutes [Here](https://discord.gg/KECADX3YgA)`)
  .setFooter(`Developed By CASPER AG#7384`);
return message.channel.send(brawlhalla)
}
if (message.content === "<@&803182293328855040>") {
  let roblox = new MessageEmbed()
  .setTitle(`Wanna play Roblox?`)
  .setImage(`https://media.discordapp.net/attachments/830260684830015488/846010808580046858/---Roblox.jpg?width=782&height=411`)
  .setColor(`#00f7ff`)
  .setDescription(`${message.author} Well, go there and wait and someone will join you in few minutes [Here](https://discord.gg/CKeue6Vpxm)`)
  .setFooter(`Developed By CASPER AG#7384`);
return message.channel.send(roblox)
}
if (message.content.include == `<@&823995628778029056>`) {
  let gfsupport = new MessageEmbed()
  .set
}

})

client.login(process.env.TOKEN)
const mySecret = process.env['TOKEN']

