<template>
  <div class="user-list">
    <div class="container">
      <h2>ユーザー一覧ページです</h2>
      <div class="d-flex flex-wrap">
        <router-link :to="{ name: 'UserDetail', params: { userId: user.id }}" class="card-one d-block" v-for="user in users" v-bind:key="user.id">
          <img class="bd-placeholder-img card-img-top" v-bind:src="user.picture" style="width: 100%; height:100%;">
          <div class="card-tt">
            <p class="card-text">Name : {{ user.name.first }} {{ user.name.last }}</p>
            <p class="card-text">Age : {{ user.age }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    created: function() {
      this.$store.dispatch('fetchUsers');
    },
    computed: {
      users() {
        return this.$store.state.users.users;
      }
    },
    methods: {
    },
  }
</script>

<style>
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
  }
</style>

<style scoped>
  .card-one {
    width: calc((100% - 90px) / 4);
    height:100%;
    color: #333;
    margin-right: 30px;
    margin-bottom: 20px;
    box-shadow: 5px 5px 10px #333;
  }

  .card-one:nth-child(4n) {
    margin-right: 0px;
  }

  .card-one:hover {
    text-decoration: none;
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    .card-one {
      width: calc((100% - 20px) / 2);
      height:100%;
      color: #333;
      margin-right: 20px;
      margin-bottom: 20px;
      box-shadow: 5px 5px 10px #333;
    }
    .card-one:nth-child(2n) {
      margin-right: 0px;
    }
  }
</style>
