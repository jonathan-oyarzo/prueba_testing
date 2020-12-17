<template >
    <div>
    
      

    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <router-link  class="navbar-brand" to="/">Rick And Morty</router-link> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
      <li class="nav-item">
          <router-link class="nav-link active" to="/opiniones">Opiniones</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link " aria-current="page" to="/favoritos">Favoritos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/administracion">Administracion</router-link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
</template>>
<script>
export default {
    name: 'navega'
}
</script>
<style scoped>

</style>>