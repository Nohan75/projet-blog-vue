<template>
  <div class="container">
    <div class="row">
        <form>
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-1"><label for="titre"> <span class="label"> Titre:</span></label></div>
                <div class="col-sm-3"><input class="form-control" name="titre" type="text" placeholder="Titre" v-model="titre"></div>
                <div class="col-sm-6"></div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-1"><label for="auteur">Auteur:</label></div>
                <div class="col-sm-3"><input class="form-control" name="auteur" type="text" placeholder="Auteur" v-model="author"></div>
                <div class="col-sm-6"></div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-1"><label for="intro">Introduction:</label></div>
                <div class="col-sm-6">
                    <textarea class="form-control" maxlength="70" rows="3" id="intro" name="intro" type="text" placeholder="Introduction" style="resize: none;" v-model="intro">
                        <p></p>
                    </textarea>
                </div>
                <div class="col-sm-3"></div>
            </div>
            <br>
            <div class="row">
                <div class="col-sm-2"></div>
                <div class="col-sm-1"><label for="contenu">Contenu:</label></div>
                <div class="col-sm-6">
                    <textarea class="form-control" id="contenu" rows="14" name="contenu" type="text" placeholder="Contenu" style="resize: none;" v-model="contenu" >
                        <p></p>
                    </textarea>
                </div>
                <div class="col-sm-3"></div>
            </div>
            <br> 
        </form>
        <div class="row">
            <div class="col-sm-8"></div>
            <div class="col-sm-1" v-if="titre == '' || author == '' || intro== '' || contenu == ''">
                <button class="btn btn-outline-dark" disabled>Poster</button>
            </div>
            <div class="col-sm-1" v-else>
                <button  class="btn btn-outline-dark" @click="addArticle(); resetForm()">Poster</button>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Admin",
  props:{

  },
  data(){
      return{
          id: null,
          titre:'',
          author:'',
          intro:'',
          contenu:'',
          date:new Date()
      }
  },
  methods:{
      addArticle(){
          this.$store.dispatch('addArticle',{id: this.getPosts.posts.length, titre:this.titre, intro:this.intro, date:this.formDate, author:this.author, content:this.contenu})
          alert('Post Ajouter')
      },
      resetForm() {
          this.titre = this.intro = this.date = this.author = this.contenu = ""
      }
  },
  computed: {
      formDate(){
          let day = this.date.getDate() < 10 ? `0${this.date.getDate()}` : this.date.getDate();
          let month = this.date.getMonth() < 10 ? `0${this.date.getMonth()}` : this.date.getMonth();
          let year = this.date.getYear();

          return `${day}/${month}/${year}`
      },
      getPosts() {
        return this.$store.state.posts
    },
  }
  
};
</script>

<style>
    .btn{
    background-color: bisque;
    }

    .container{
        margin-top: 15px;
    }
</style>