<template>
    <div class="social-container">
        <div class="podcast-container">
            <iframe frameborder="0" loading="lazy" id="ausha-2UFu" style="border: none; width:100%" :src="podcastSrc"></iframe>

            <ul class="podcast-list">
                <li v-for="podcast in podcastList" :key="podcast.index" @click="podcastId = podcast.link" :style="computeStyle(podcast.link)">{{podcast.title}}</li>
            </ul>
            <a :href="deezerUrl" target="_blank"><img src="../static/deezer_small.png" alt="Deezer" width="130px"></a>
            <a :href="spotifyUrl" target="_blank"><img src="../static/spotify_small.png" alt="Spotify" width="100px"></a>
            <a :href="appleUrl" target="_blank"><img src="../static/apple_pod.png" alt="Apple Podcast" width="140px"></a>
        </div>
        <div class="instagram-container">
            <div v-for="post in instaList" :key="post.index" class="image-container">
                <div class="insta-image" :style="{backgroundImage: 'url(' + post.media_url + ')'}" @click="openLink(post.permalink)"><img src="../static/insta_white_small.png" class="insta-logo"></div>
            </div>
        </div>
        <div class="link-container">
            <iframe v-if="youtubeId" width="95%" height="315" :src=youtubeUrl title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <a href="https://www.instagram.com/ledispositif4/" target="_blank"><img src="../static/insta_color_small.png" alt="Instagram" height="100px"></a>
            <a href="https://www.youtube.com/channel/UCOj9C0pNhzzN3tK8TSvTkHA" target="_blank"><img src="../static/youtube_small.png" alt="Youtube" height="100px"></a>
            <a href="https://www.tiktok.com/@le_dispositif" target="_blank"><img src="../static/tiktok_small.png" alt="Tiktok" height="100px"></a>
            <a href="mailto:ledispositif4@gmail.com"><img src="../static/email.svg" alt="Email" height="100px"></a>
        </div>
        </div>
</template>

<script>
const axios = require('axios')
export default {
    name: 'SocialFeed',
    data() {
        return {
            podcastId: "yO1DOtaZrRep",
            podcastList: [],
            spotifyUrl: "https://open.spotify.com/show/5MK6onjagYvFkjXMbYNlrY",
            deezerUrl: "https://www.deezer.com/fr/show/3214392",
            appleUrl: "https://podcasts.apple.com/us/podcast/le-dispositif/id1598818189",
            instaList: [],
            youtubeId: null
        }
    },
    computed: {
        podcastSrc() {
            return "https://player.ausha.co/index.html?podcastId=" + this.podcastId + "&playlist=false&color=%2372238e&v=3&playerId=ausha-2UFu" 
        },
        youtubeUrl(){
            return "https://www.youtube.com/embed/" + this.youtubeId
        }
    },
    methods: {
        computeStyle(podcastlink){
            if (podcastlink == this.podcastId){
                return {backgroundColor: '#eb661b', textDecoration: 'underline'}
            } 
            return {}
        },
        async getLastPodcastId(){
            try{
                let res = await axios.get('/api/ausha/y0kM2IkYmzQ9')
                let index = res.data.indexOf('enclosure')
                this.podcastId = res.data.substring(index+38, index+50)
                let text = res.data;
                index = text.indexOf('<item>')
                while (index > 0) {
                    text = text.substring(index);
                    let titleIndex = text.indexOf('<title>')
                    let title = decodeURI(text.substring( titleIndex + 7, text.indexOf('</title>'))).replace('&amp;','&')
                    index = text.indexOf('enclosure')
                    let link = text.substring(index+38, index+50)
                    text = text.substring(index)
                    this.podcastList.push({title: title, link: link})
                    index = text.indexOf('<item>')
                }
            } catch(err){
                console.log(err)
            }
        },
        async getLastYoutube() {
            try {
                let res = await axios.get('/youtube')
                this.youtubeId = res.data
            }
            catch(err){
                console.log(err)
            }
        },
        async getInstaPosts() {
            try {
                let res = await axios.get('/instagram')
                this.instaList = res.data
            }catch(err) {
                console.log(err);
            }
        },
        openLink(link){
            window.open(link)
        }
    },
    mounted(){
        this.getLastPodcastId();
        this.getLastYoutube();
        this.getInstaPosts();
    }
}
</script>

<style>
.podcast-container {
    background-color: #424242;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
    align-items: center;
    border-radius: 10px;
    box-shadow: 5px 10px 7px #eb661b;
}

.podcast-container a {
    color: white;
    text-decoration: none;
}

.podcast-container iframe {
    grid-column-start: 1;
    grid-column-end: 3;
    height: 220px;
}

.podcast-list {
    color: white;
    list-style-type: none;
    height: 200px;
    overflow: scroll;
    margin-left: 10px;
    margin-right: 10px;
    padding-left: 0;
}

.podcast-list li{
    border: 1px solid white;
}

.podcast-list li:hover {
    cursor: pointer;
}

.selected-podcast {
    background-color: #eb661b;
}

.instagram-container {
    background-color: #424242;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 5px 10px 7px #eb661b;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
    height: 410px;
}

.insta-image {
    background-size: contain;
    height: 300px;
    width: 300px;
    border-radius: 10px;
}

.insta-image:hover {
    background-size: contain;
    height: 400px;
    width: 400px;
}

.insta-logo {
    height: 150px;
    background-color: black;
    opacity: 0;
    padding: 75px;
}

.insta-logo:hover {
    opacity: 0.5;
    cursor: pointer;
    padding: 125px;
    border-radius: 10px;
}

.link-container {
    background-color: #424242;
    margin-left: calc(10% - 10px);
    margin-right: calc(10% - 10px);
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    display: grid; 
    padding: 10px;
    height: 315px;
    box-shadow: 5px 10px 7px #eb661b;
    grid-template-columns: 560px auto auto;
    justify-items: center;
    align-items: center;
}

.link-container iframe {
    border-radius: 10px;
    grid-row-start: 1;
    grid-row-end: 3;
}

@media (max-width: 1300px) { 
    .podcast-container {
        grid-template-columns: 1fr;
    }

    .podcast-container iframe {
        grid-column-start: 1;
        grid-column-end: 2;
    }

    .instagram-container {
        grid-template-columns: 1fr;
        height: 100%;
        grid-row-gap: 10px;;
    }

    .link-container {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 315px repeat(2,100px);
        height: 555px;
        grid-row-gap: 20px;
        grid-column-gap: 20px;
    }

    .link-container iframe {
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 3;
    }
}

@media (max-width: 1300px) and (min-width: 651px){ 
    .podcast-container {
        grid-template-columns: 1fr;
    }

    .podcast-container iframe {
        grid-column-start: 1;
        grid-column-end: 2;
    }

    .instagram-container {
        grid-template-columns: 1fr;
        height: 100%;
        grid-row-gap: 10px;;
    }

    .link-container {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 315px repeat(2,100px);
        height: 555px;
        grid-row-gap: 20px;
        grid-column-gap: 20px;
    }

    .link-container iframe {
        grid-row-end: 2;
        grid-column-start: 1;
        grid-column-end: 3;
    }
}


@media (max-width: 650px) and (min-width: 526px) {
    .podcast-container {
        width:98%;
        padding-left: 0;
        padding-right: 0;
    }

    .podcast-container iframe {
        height: 220px;;
    }

    .instagram-container {
        width: 98%;
        padding-left: 0;
        padding-right: 0;
    }
    .insta-image:hover {
        height: 350px;
        width: 350px;
    }
    .insta-logo:hover {
        padding: 100px;
    }

    .link-container {
        grid-template-columns: 1fr;
        grid-template-rows: 315px repeat(4,100px);
        width: calc(98% - 20px);
        margin-left: auto;
        margin-right: auto;
        height: 785px;
    }

    .link-container iframe {
        grid-row-end: 2;
        grid-column-end: 2;
    }
}

@media (max-width: 525px) {
    .podcast-container {
        width:98%;
        padding-left: 0;
        padding-right: 0;
    }

    .podcast-container iframe {
        height: 500px;
    }

    .instagram-container {
        width: 98%;
        padding-left: 0;
        padding-right: 0;
    }
    .insta-image:hover {
        height: 350px;
        width: 350px;
    }
    .insta-logo:hover {
        padding: 100px;
    }

    .link-container {
        grid-template-columns: 1fr;
        grid-template-rows: 315px repeat(4,100px);
        width: calc(98% - 20px);
        margin-left: auto;
        margin-right: auto;
        height: 785px;
    }

    .link-container iframe {
        grid-row-end: 2;
        grid-column-end: 2;
    }
}

</style>
