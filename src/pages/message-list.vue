<template>
  <div class="message-list">
    <div class="container">
      <h2>メッセージ相手一覧</h2>
      <div class="list">
        <div v-for="(message, id) in messages" v-bind:key="id">
          <router-link :to="{ name: 'chat', params: { userId: id }}" class="d-flex d-block">
            <div class="icon-box">
              <img src="" alt="">
            </div>
            <div class="text-box">
              <p class="message">{{ getLastMessage(message) }}</p>
              <p class="time"></p>
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
    }
  },
  methods: {
    getLastMessage(message) {
      message = Object.values(message);
      let len = message.length;
      return message[len - 1];
    },
  }
})
</script>
