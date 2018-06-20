import Vuex from "vuex";

const vuexStore = () => {
  return new Vuex.Store({
    state: {
      winner: '',
      max: 0,
      order: 1,
      playerOrder: 1,
      completed: false,
      players: [
        {
          name: "Tamari",
          order: 0,
          id: 0,
          img:
            "https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/185809_193608513996815_4926837_n.jpg?_nc_cat=0&oh=e61109136b2a0cc31413b23fa7072953&oe=5BB22DE7",
          registered: false,
          vapeGod: false,
          playing: false,
          score: {
            round: 0,
            roundOne: 0,
            roundTwo: 0,
            roundThree: 0,
            total: 0,
            completed: false,
            position: 4,
            hasWon: false
          },
          wins: 0,
          highestScore: 0
        },
        {
          name: "Clayton",
          id: 1,
          order: 1,
          img:
            "https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/480320_574646915892413_1825050452_n.jpg?_nc_cat=0&oh=f93b32e30ba7c0b7f5742738e832af7a&oe=5BB99B67",

          registered: false,
          vapeGod: false,
          playing: false,
          score: {
            round: 1,
            roundOne: 0,
            roundTwo: 0,
            roundThree: 0,
            total: 0,
            completed: false,
            won: false,
            position: 4,
            hasWon: false
          },
          wins: 0,
          highestScore: 0
        },
        {
          name: "Matt",
          id: 2,
          order: 2,
          img:
            "https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-9/1017552_10201752209387181_913293591_n.jpg?_nc_cat=0&oh=9002285b3bf30f34a8399d69fb3340f9&oe=5BA90DD7",

          registered: false,
          vapeGod: false,
          playing: false,
          score: {
            round: 0,
            roundOne: 0,
            roundTwo: 0,
            roundThree: 0,
            total: 0,
            completed: false,
            position: 4,
            hasWon: false
          },
          wins: 0,
          highestScore: 0
        },
        {
          name: "jordan",
          id: 3,
          order: 3,
          img:
            "https://scontent-syd2-1.xx.fbcdn.net/v/t1.15752-9/33923643_10217288187943244_1688477374930223104_n.jpg?_nc_cat=0&oh=c83a88c9b66802a9769f6f64e7553ddf&oe=5BA5AB4C",
          registered: false,
          vapeGod: false,
          playing: false,
          score: {
            round: 0,
            roundOne: 0,
            roundTwo: 0,
            roundThree: 0,
            total: 0,
            completed: false,
            position: 4,
            hasWon: false
          },
          wins: 0,
          highestScore: 0
        }
      ],
      game: {
        playing: false
      },
      buttons: [
        {
          name: "0",
          points: 1
        },
        {
          name: "bendy 0",
          points: 2
        },
        {
          name: "jellyfish",
          points: 3
        },
        {
          name: "halo",
          points: 2
        },
        {
          name: "inhale",
          points: 2
        },
        {
          name: "style",
          points: 1
        }
      ]
    },
    getters: {
      registeredPlayers(state) {
        return state.players.filter(player => {
          return player.registered;
        });
      },
      isPlaying(state,getters) {
        return getters.registeredPlayers.filter(player => {
          return player.playing;
        });
      },
      compPlayers(state, getters) {
        return getters.registeredPlayers.filter(player => {
          return player.score.completed;
        });
      },
      winner(state) {
        return state.players.filter(player => {
          return player.score.hasWon;
        })
      }
    },
    mutations: {
      register(state, payload) {
        const thisPlayer = state.players.find(player => {
          return player.name == payload;
        });
        thisPlayer.registered = true;
        thisPlayer.order = state.playerOrder;
        ++state.playerOrder;
        console.log("registered " + thisPlayer.name)
      },
      unregister(state, payload) {
        const thisPlayer = state.players.find(player => {
          return player.name == payload;
        });
        thisPlayer.registered = false;
      },
      isPlaying(state, payload) {
        const test = payload;
        console.log("test " + test)
        const thisPlayer = state.players.find(player => {
          return player.name == payload;
        });
        thisPlayer.playing = true;
        thisPlayer.score.round = 1;
        console.log("is playing" + thisPlayer.name);
      },
      notPlaying(state, payload) {
        const thisPlayer = state.players.find(player => {
          return player.name == this.payload;
        });
        thisPlayer.playing = false;
      },
      playGame(state) {
        state.game.playing = false;
      },
      increase(state, payload) {
        console.log("one " + payload.player )
        const thisPlayer = state.players.find(player => {
          return player.name == payload.player;
          console.log('player ' + isplayer.name)
        });
        if (thisPlayer.score.round >= 1){
          thisPlayer.score.total = thisPlayer.score.total + payload.value;
        };
        if (thisPlayer.score.round == 1) {
          thisPlayer.score.roundOne = thisPlayer.score.roundOne + payload.value;
        };
        if (thisPlayer.score.round == 2) {
          thisPlayer.score.roundTwo = thisPlayer.score.roundTwo + payload.value;
        };
        if (thisPlayer.score.round == 3) {
          thisPlayer.score.roundThree = thisPlayer.score.roundThree + payload.value;
        }
      },
      decrease(state, payload) {
        const thisPlayer = state.players.find(player => {
          return player.name == payload.player;
        });
        if (thisPlayer.score.round >= 1){
          thisPlayer.score.total = thisPlayer.score.total - payload.value;
        };
        if (thisPlayer.score.round == 1) {
          thisPlayer.score.roundOne = thisPlayer.score.roundOne - payload.value;
        } else if (thisPlayer.score.round == 2) {
          thisPlayer.score.roundTwo = thisPlayer.score.roundTwo - payload.value;
        } else if (thisPlayer.score.round == 3) {
          thisPlayer.score.roundThree = thisPlayer.score.roundThree - payload.value;
        }
      },
      nextRound(state, payload){
        const thisPlayer = state.players.find(player => {
          return player.name == payload;
        });
        ++thisPlayer.score.round;
        if (thisPlayer.score.round >= 4) {
          thisPlayer.playing = false;
          thisPlayer.score.completed = true;
          if ( thisPlayer.score.total >= thisPlayer.highestScore) {
            thisPlayer.highestScore = thisPlayer.score.total
          }
          ++state.order;
        };
        const compPlayers = state.players.filter(player => {
          return player.score.completed;
        });
        const regPlayers = state.players.filter(player => {
          return player.registered;
        });
        if (compPlayers.length == regPlayers.length) {
          this.$router.push('../scoreboard');
          state.game.completed = true;

          const max = compPlayers.reduce(function(a, b) {
            return Math.max(a.score.total, b.score.total);
          });
          state.max = max;
          const winner = compPlayers.find(compPlayer => {
            return compPlayer.score.total == state.max
          });
          console.log('winner: ' + winner.name);
          ++winner.wins;
          state.winner = winner.name;
          winner.score.hasWon = true;
          console.log("max: " + state.max)
        }
      },
      reset(state){
        state.players.forEach(function(element) {
          element.registered = false;
          element.playing = false;
          element.score.round = 0;
          element.score.roundOne = 0;
          element.score.roundTwo = 0;
          element.score.roundThree = 0;
          element.score.total = 0;
          element.score.completed = false;
          element.score.position = 4;
          element.score.hasWon = false;
        });
        state.playerOrder = 1;
        state.order = 1;
        state.winner = '';
        this.$router.push('/');
      }
    }
  });
};

export default vuexStore;
