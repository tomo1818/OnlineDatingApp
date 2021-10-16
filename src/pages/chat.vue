<template>
  <div class="chat">
    <div class="container">
      <h2>チャットページです</h2>
      <router-link :to="{name:'UserDetail', userId: this.$route.params.userId}">戻る</router-link>
      <div v-if="messages != []">
        <div class="chat-box" v-for="(message, index) in messages" v-bind:key="message.id">
          <div class="messages d-flex">
            <div class="message-box">
              <p class="message">{{ message[0] }}</p>
              <p class="time">{{ message[1] }}</p>
            </div>
            <div class="person-img text-left rounded-circle" v-if="index % 2 === 1">
              <img class="rounded-circle" v-bind:src="user.picture" alt="">
            </div>
            <div class="person-img text-left rounded-circle" v-if="index % 2 === 0">
              <img class="rounded-circle" v-bind:src="me" alt="">
            </div>
          </div>
        </div>
      </div>
      <form class="submit">
        <input type="text" v-model="currMessage">
        <button type="button" class="btn btn-primary" v-on:click="sendMessage">送信</button>
      </form>
    </div>
  </div>
</template>

<script>

export default ({
  data () {
    return {
      currMessage: '',
      messages: [],
      user: '',
      me: ''
    }
  },
  created: function() {
    if (this.$store.state.messages.messages[this.$route.params.userId] !== undefined) {
        this.messages = this.$store.state.messages.messages[this.$route.params.userId];
    }
    this.user = this.$store.getters.getUserById(this.$route.params.userId);
    this.me = this.$store.state.users.me;
  },
  methods: {
    sendMessage() {
      console.log(this.currMessage);
      this.$store.commit('setMessages', {id: this.$route.params.userId, message: this.currMessage, date: new Date()});
      this.messages = this.$store.state.messages.messages[this.$route.params.userId];
      this.currMessage = '';
    }
  }
})
</script>

<style scoped>
  .messages {
    margin-bottom: 10px;
  }

  .chat-box .message-box {
    text-align: left;
  }
  
  .chat-box:nth-child(2n) .message-box .time {
    text-align: right;
  }

  .chat-box:nth-child(2n) .person-img {
    margin-right: auto;
  }

  .chat-box:nth-child(2n + 1) .person-img {
    margin-left: auto;
  }

  .chat-box:nth-child(2n) .messages {
    flex-direction: row-reverse;
  }

  .person-img img {
    width: 50px;
  }

  .message {
    color: #333;
  }

  .message-box {
    max-width: 50%;
  }

  .message-box p {
    margin-bottom: 3px;
  }

  .time {
    color: darkgray;
    font-size: 14px;
  }
</style>
