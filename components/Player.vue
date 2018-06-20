<template>
  <v-flex xs12 sm6 md3 >
    <v-card elevation-5>
      <v-card-media :src="photo" height="300px">
      </v-card-media>
      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">{{name}}</h3>
          <div>wins: {{wins}}</div>
          <div>highscore: {{highScore}}</div>
        </div>
      </v-card-title>
      <v-card-actions v-if="!completed">
        <v-btn v-if="registered == false" flat color="purple" @click="register(name)">play</v-btn>
        <v-btn v-else-if="registered == true" flat color="purple" opacity="0.5" @click="unregister(name)">playing</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  computed: {
    //make getter to retrieve registered players then do method
  },
  methods: {
    register(name){
      this.$store.commit('register',name)
    },
    unregister(name){
      this.$store.commit('unregister',name)
    }
  },
  props: {
    completed: {
      type: Boolean,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    highScore: {
      type: Number,
      required: true
    },
    wins: {
      type: Number,
      required: true
    },
    registered: {
      type: Boolean,
      required: true
    },
    photo: {
      type: String,
      required: true
    }
  }

}
</script>

