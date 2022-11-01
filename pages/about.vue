<template>
    <div>
        <Banner />
        <Menu />
        <div class="about-container">
            Le dispositif est un collectif de cinq personnes passionnées par la culture dans son ensemble. Les membres du dispositif sont même plus que des passionnés, ce sont des artistes qui inscrivent leurs œuvres dans différents domaines de production (musicale, radio et vidéo). Le dispositif est alors né en novembre 2021, de la volonté des membres de regrouper plusieurs créateurs. Rapidement, le collectif a eu envie de tester ses ambitions avec des formats tels que la radio, la critique et l'analyse de contenus culturels, avec cette volonté de partager avec le plus grand nombre leur passion pour la culture dans son ensemble, mais également les travaux que les membres du dispositif produisent. Les membres du groupe impulsent par leurs productions diverses une jeunesse et des avis différents. A l'avenir, le dispositif envisage de gagner de nouveaux membres afin d'enrichir leurs avis sur leurs propres œuvres ou celles qui existent par ailleurs. Si ce concept et cet énergie communicative vous intéressent, vous pouvez retrouver le dispositif sur les plateformes suivantes : instagram, youtube, spotify, deezer, apple podcast, google podcast et sur la radio 666 !
        </div>
        <div class="credits">
            <span class="credit-1">Web development by <a href="https://gitlab.com/louveta">Alexandre Louvet</a></span> - 
            <span class="credit-2">Font is Gagalin by <a href="https://ipassas.com/">Iordanis Passas</a></span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.about-container {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
    margin-top: 20px;
}

.credits {
    color: white;
    background-color: #424242;
    position: absolute;
    bottom: 0px;
    right: 0px;
    padding-left: 10px;
    width: calc(100% - 10px);
    text-align: center;
}

.credits a {
    color: white;
}

.credits span {
    margin: 10px;
}
</style>