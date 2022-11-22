<template>
  <div class="homescreen">
    <div class="header">
      <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/ee037401cb5d31b23cf780808ee4ec1f.svg" alt="">
      <input v-model="user_search_restaurant" type="text" placeholder="De quoi avez-vous envie ?">
    </div>
    <div class="banniere"></div>
    <restaurant-row v-for="(data, i) in data_restaurant" :key="i" :three_restaurant="data"/>
  </div>
</template>

<script>
/*eslint-disable*/
//IMPORT
import BDD from '../BDD'
import { onMounted, ref, watch } from 'vue'
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
          this.name = name
          this.note = note
          this.image = image
          this.drive_time = drive_time
        }
      }

      let data_restaurant = ref([]);
      let all_restaurant = [];

      const makeDataRestaurant = () => {
        
        let three_restaurant = [];
        //creation d'un nouveau restaurant qu'on ajoute à un tableau de 3 élément
        for(const restaurant of BDD) {
          const new_restaurant = new Restaurant(restaurant.name, restaurant.note, restaurant.image, restaurant.drive_time)
          //make all restaurant array
          all_restaurant.push(new_restaurant);

          if(three_restaurant.length === 2) {
            three_restaurant.push(new_restaurant);
            data_restaurant.value.push(three_restaurant);
            three_restaurant = [];
          } else {
            three_restaurant.push(new_restaurant);
          }
        }
      }
      //user search restaurant
      let user_search_restaurant = ref('');

      watch(user_search_restaurant, new_Value => {

        let regex = RegExp(new_Value);

        let search_restaurant = all_restaurant.filter(restaurant => regex.test(restaurant.name));
        console.log(search_restaurant);

      })

      //
      onMounted (makeDataRestaurant);

      //
      return {
        data_restaurant,
        user_search_restaurant,
      }
    },
}
</script>

<style lang=scss>
.homescreen {
  .header {
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 200px;
    }

    input{
      background-color: #f6f6f6;
      border: none;
      height: 40px;
      width: 400px;
      outline: none;
      padding: 0px 25px;
    }
  }

  .banniere {
    height: 200px;
    width: 100%;
    background-image: url("https://www.ubereats.com/restaurant/_static/7b308f7cbbf8e335ceda0447a8bd7c63.png");
    background-size: cover;
    background-position: center center;

  }
}
</style>