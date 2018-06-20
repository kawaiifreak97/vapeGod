<template>
  <v-layout row wrap>
    <v-flex xs12 justify-center>
      <div class="text-xs-center">
        <h1>Who will be VapeGod</h1>
      </div>
    </v-flex>
    <v-flex>
      <v-container grid-list-md>
        <v-layout row wrap>
          <Player
            v-for="player in players"
            :key="player.name"
            :order="player.order"
            :name="player.name"
            :photo="player.img"
            :highScore="player.highestScore"
            :wins ="player.wins"
            :registered ="player.registered"
            :completed ="player.score.completed"
            ></Player>
        </v-layout>
      </v-container>
    </v-flex>
      <v-fab-transition>
      <v-btn
        color="purple"
        :key="yo"
        dark
        fab
        fixed
        bottom
        right
        to="/game">
        <v-icon>play_arrow</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-layout>
</template>
<script>
import Player from '~/components/player.vue'

export default {
  data(){
    return{
      yo: "hi",
      hiddenBtn: false
    }
  },
  components: {
    Player
  },
  computed: {
    players(){
      return this.$store.state.players
    }
  },
  methods: {
  }
}
</script>
