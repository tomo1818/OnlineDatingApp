<template>
  <div class="message-list">
    <div class="container">
      <h2>メッセージ相手一覧</h2>
      <div class="list">
        <div class="message" v-for="(message, id) in messages" v-bind:key="id">
          <router-link :to="{ name: 'chat', params: { userId: id }}" class="d-flex d-block">
            <div class="icon-box rounded-circle">
              <img class="rounded-circle" v-bind:src="getUserImage(id)" alt="">
            </div>
            <div class="text-box text-left">
              <p class="message">{{ getLastMessage(message)[0] }}</p>
              <p class="time">{{ getLastMessage(message)[1] }}</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default({
  computed: {
    messages() {
      return this.$store.state.messages.messages;
    },

  },
  methods: {
    getLastMessage(message) {
      message = Object.values(message);
      let len = message.length;
      return message[len - 1];
    },
    getUserImage(id) {
      console.log(id)
      return this.$store.getters.getUserById(id).picture
    }
  }
})
</script>

<style scoped>
  .icon-box {
    margin-right: 20px;
  }
  .icon-box img {
    width: 50px;
  }
  .text-box p {
    margin-bottom: 3px;
  }
  .message {
    margin-bottom: 10px;
  }
</style>
