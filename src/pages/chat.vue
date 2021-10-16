<template>
  <div class="chat">
    <h2>チャットページです</h2>
    <router-link :to="{name:'UserDetail', userId: this.$route.params.userId}">戻る</router-link>
    <div v-if="messages != []">
      <div class="chat-box" v-for="message in messages" v-bind:key="message.id">
        <div class="messages">
          <div class="message-box">
            <p class="message">{{ message }}</p>
            <p class="time"></p>
          </div>
          <div class="person-img">
            <img src="" alt="">
          </div>
        </div>
      </div>
    </div>
    <form class="submit">
      <input type="text" v-model="currMessage">
      <button type="button" class="btn btn-primary" v-on:click="sendMessage">送信</button>
    </form>
  </div>
</template>

<script>

export default ({
  data () {
    return {
      currMessage: '',
      messages: []
    }
  },
  computed: {
    // messages() {
    //   if (this.$store.state.messages.messages[this.$route.params.userId] !== undefined) {
    //     return this.$store.state.messages.messages[this.$route.params.userId];
    //   }
    //   return [];
    // }
  },
  created: function() {
    if (this.$store.state.messages.messages[this.$route.params.userId] !== undefined) {
        this.messages = this.$store.state.messages.messages[this.$route.params.userId];
    }
  },
  methods: {
    sendMessage() {
      this.$store.commit('setMessages', {id: this.$route.params.userId, message: this.currMessage});
      this.messages = this.$store.state.messages.messages[this.$route.params.userId];
      this.currMessage = '';
    }
  }
})
</script>
