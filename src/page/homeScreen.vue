<template>
  <div class="home-screen">
    <restaurant-row/>
  </div>
</template>

<script>
/*eslint-disable*/
//IMPORT
import BDD from '../BDD'
//COMPONENTS
import RestaurantRow from '../components/RestaurantRow.vue'
export default {
    name : "HomeScreen",
    components : {
      RestaurantRow,
    },
    //gérer le java script : déclaration de fonctions, watcher les data
    setup() {
      class Restaurant {
        constructor(name, note, image, drive_time) {
          this.name = name;
          this.note = note;
          this.image = image;
          this.drive_time;
        }
      }

      var resto = new Restaurant('toto', 4.5, 'img', '45min')

      console.log(resto)
    }

}
</script>

<style>

</style>