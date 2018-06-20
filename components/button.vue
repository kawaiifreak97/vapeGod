<template>
    <v-container grid-list-md>
      <v-layout row wrap align-content-center>
        <v-flex xs12>
          <!-- <v-card class="white--text text-xs-center">
            <v-card-actions> -->
              <div class="text-xs-center">

                <v-btn fab  @click="decrease(value, playerName)">
                  <v-icon>remove</v-icon>
                </v-btn>
                <v-btn flat>
                  <h4>{{name}}</h4>
                </v-btn>
                <v-btn fab @click="increase(value, playerName)">
                  <v-icon>add</v-icon>
                </v-btn>
              </div>
            <!-- </v-card-actions>
          </v-card> -->
        </v-flex>

      </v-layout>
    </v-container>
  </template>

<script>
export default {
  data(){
    return{
    }
  },
  computed:{

  },
  methods:{
    increase(value, playerName){
      console.log("increse " + this.value);
      console.log("increse " +  this.playerName);
      this.$store.commit('increase', {
        value: value,
        player: playerName
      })
    },
    decrease(value, playerName){
      this.$store.commit('decrease', {
        value: value,
        player: playerName
      })
    }
  },
  props:{
    playerName:{
      type: String,
      required: true
    },
    name:{
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
}
</script>

