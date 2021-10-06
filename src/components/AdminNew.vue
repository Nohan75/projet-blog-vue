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
                <div class="col-sm-3"><input class="form-control" name="auteur" type="text" placeholder="Auteur" v-model="auteur"></div>
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
            <div class="row">
                <div class="col-sm-8"></div>
                <div class="col-sm-1" v-if="titre == '' || auteur == '' || intro== '' || contenu == ''">
                    <button class="btn btn-outline-dark" disabled>Poster</button>
                </div>
                <div class="col-sm-1" v-else>
                    <button id="btn" class="btn btn-outline-dark">Poster</button>
                </div>
                <div class="col-sm-3"></div>
            </div>
            
        </form>
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
          titre:'',
          auteur:'',
          intro:'',
          contenu:''
      }
  }
};
</script>

<style>
    #btn{
    background-color: bisque;
    }
</style>