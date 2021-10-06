<template>
    <div>
        <p>testpost</p>
        <ul>
            <li v-for="(article,index) in articles" :key="article.titre">
                {{index}}-{{article.titre}} par {{article.auteur}} :{{article.intro}}
            </li>
            
        </ul>
    </div>
</template>
<script>
export default {
    name: 'ListPost',
    data(){
        return{
            articles:[
                {titre:"Test1",auteur:"Paul",intro:"Ceci est un test",contenu:"Voici mon test"},
            ]
        }
    }
}
</script>
<style>
    
</style>