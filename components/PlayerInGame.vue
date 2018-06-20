<template>
  <v-container v-show="order == this.$store.state.order && !completed">
    <v-layout>
      <v-flex xs12 sm6 md3>
      <v-card elevation-5>
        <v-card-media :src="photo" height="300px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{name}}</h3>
            <div>Round 1: {{roundOne}}</div>
            <div>Round 2: {{roundTwo}}</div>
            <div>Round 3: {{roundThree}}</div>
            <div>Total: {{total}}</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn v-if="playing">
            Round: {{round}}
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-btn flat @click="isPlaying(name)" v-if="!playing" color="purple"
            dark
            fab
            fixed
              bottom
              right>
            <v-icon>play_arrow</v-icon>
          </v-btn>
          <v-fab-transition>
            <v-btn
              v-if="playing"
              color="purple"
              dark
              fab
              fixed
              bottom
              right
              @click="nextRound(name)">
              <v-icon>play_arrow</v-icon>
            </v-btn>
          </v-fab-transition>
    </v-flex>
    <v-flex xs12 sm6>
      <Button
      v-for="button in buttons"
      :key="button.name"
      :name="button.name"
      :value="button.points"
      :playerName="name">
      </Button>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Button from '@/components/button.vue'
export default {
  data(){
    return {
      commence: true
    }
  },
  mounted() {

  },
  computed: {
    playerName(){
      return this.$store.getters.isPlaying
    },
    buttons(){
      return this.$store.state.buttons
    }
  },
  methods: {
    notPlaying(name){
      this.$store.commit('notPlaying',name)
    },
    isPlaying(name){
      this.$store.commit('isPlaying', name);
    },
    nextRound(name){
      this.$store.commit('nextRound', name)
    }
  },
  props: {
    playing:{
      type: Boolean,
      required: true
    },
    round:{
      type: Number,
      required: true
    },
    order:{
      type: Number,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    roundOne: {
      type: Number,
      required: true
    },
    roundTwo: {
      type: Number,
      required: true
    },
    roundThree: {
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    completed: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    }

  },
  components: {
    Button
  }

}
</script>

