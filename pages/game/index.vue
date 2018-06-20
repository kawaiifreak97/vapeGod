<template>
  <v-container fluid class="pa-0">
    <v-layout row wrap align-center>
      <v-flex xs12>
        <PlayerInGame
        v-for="player in players"
        :key="player.name"
        :name="player.name"
        :photo="player.img"
        :order="player.order"
        :round="player.score.round"
        :playing="player.playing"
        :roundOne="player.score.roundOne"
        :roundTwo="player.score.roundTwo"
        :roundThree="player.score.roundThree"
        :total="player.score.total"
        :completed="player.score.completed"
        >
        </PlayerInGame>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
import PlayerInGame from '@/components/PlayerInGame.vue'

export default {
  data(){
    return{
    }
  },
  computed:{
    players(){
      return this.$store.getters.registeredPlayers
    },
    compPlayers(){
      return this.$store.getters.compPlayers
    },
  },
  methods: {
    // randNum(){
    //   Math.floor(Math.random() * 3)
    // }
  },
  components:{
    PlayerInGame
  }
}
</script>

