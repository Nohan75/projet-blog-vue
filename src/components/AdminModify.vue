<template>
  <div>
      <div v-for="(post, index) in getPosts.posts" :key="index">
        <p class="get"> 
          <span> {{ getPosts.posts[index].titre }} </span> | 
          <span> {{ getPosts.posts[index].author }} </span> | 
          <span> {{ getPosts.posts[index].date }} </span>
          <button @click="selectPost(index)" class="btn btn-dark">édit</button>
        </p>
      </div>
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
                <button class="btn btn-outline-dark" disabled>Edit</button>
            </div>
            <div class="col-sm-1" v-else>
                <button  class="btn btn-outline-dark" @click="editPost">Edit</button>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      titre: '',
      author:'',
      intro:'',
      contenu:'',
      date:new Date()
    }
  },
  methods: {
    selectPost(index) {
      this.id = index
      this.titre = this.getPosts.posts[index].titre
      this.author = this.getPosts.posts[index].author
      this.intro = this.getPosts.posts[index].intro
      this.contenu = this.getPosts.posts[index].content
    },
    editPost(){
      this.$store.dispatch('editPost',{id: this.id, titre:this.titre, intro:this.intro, date:this.formDate, author:this.author, content:this.contenu})
        .then(() => {
          // this.selectPost(this.id)
          this.resetForm()
        })
      
    },
    resetForm() {
      this.titre = this.intro = this.date = this.author = this.contenu = ""
    }
  },
  computed: {
    formDate(){

        let day = this.date.getDay() < 10 ? `0${this.date.getDay()}` : this.date.getDay();
        let month = this.date.getMonth() < 10 ? `0${this.date.getMonth()}` : this.date.getMonth();
        let year = this.date.getYear();

        return `${day}/${month}/${year}`
    },
    getPosts() {
        return this.$store.state.posts
    },
    getId() {
        return this.$route.params.id
    },
  }

}
</script>

<style> 
</style>