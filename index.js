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
})

client.login(process.env.TOKEN)
const mySecret = process.env['TOKEN']

