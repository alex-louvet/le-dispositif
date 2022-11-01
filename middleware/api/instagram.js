import token from './token'

const axios = require('axios')

export default async function (req, res, next) {
    let temp = await axios.get('https://graph.instagram.com/me/media?fields=caption,media_url,permalink&access_token=' + token.instagram)
    let besend = []
    for (let i = 0; i < 3; i++){
      besend.push(temp.data.data[i])
    }
    res.end(JSON.stringify(besend))
    return
  }
  