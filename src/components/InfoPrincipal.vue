<template>
  <div class="container">
    <h1>info principal</h1>
    
    <div class="row">
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4" v-for="(item,index)
    in datosApi" :key="index">
    <div class="card" style="width: 18rem;">
  <img :src="item.url" class="card-img-top" :alt="item.index">
  <div class="card-body">
    <h5 class="card-title">{{item.Name}}</h5>
    <p class="card-text">{{item.Description}}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Infoprincipal',
  data(){
    return {
     
    }
 
  },
  computed: {
    datosApi(){
      return this.$store.getters.enviarInfoApi;
    }
  }
}
</script>


<style scoped lang="scss">
</style>
