const axios = require('axios')
import token from './token'

export default async function (req, res, next) {
    let temp = await axios.get('https://www.googleapis.com/youtube/v3/search?channelId=UCOj9C0pNhzzN3tK8TSvTkHA&key=' + token.youtube + '&order=date&part=snippet&type=video&maxResults=1')
    res.end(temp.data.items[0].id.videoId)
    return
  }
  