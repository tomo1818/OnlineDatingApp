<template>
  <div class="user-detail">
    <div class="container">
      <h2>ユーザー詳細ページです</h2>
      <div class="user-detail-card">
        <div class="img-box">
          <img class="bd-placeholder-img card-img-top" v-bind:src="user.picture" style="width: 100%; height:100%;">
        </div>
        <div>
          <router-link :to="{ name: 'chat', params: { userId: user.id }}">chat</router-link>
        </div>
        <div>
          <table class="table table-striped">
            <tbody>
              <tr>
                <th scope="row">Nmae</th>
                <td>{{ user.name.first }} {{ user.name.last }}</td>
              </tr>
              <tr>
                <th scope="row">Gender</th>
                <td>{{ user.gender }}</td>
              </tr>
              <tr>
                <th scope="row">Age</th>
                <td>{{ user.age }}</td>
              </tr>
              <tr>
                <th scope="row">State</th>
                <td>{{ user.state }}</td>
              </tr>
              <tr>
                <th scope="row">City</th>
                <td>{{ user.city }}</td>
              </tr>
              <tr>
                <th scope="row">Email</th>
                <td>{{ user.email }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default ({
  data() {
    return {
      user: ""
    }
  },
  created: function() {
    this.user = this.$store.getters.getUserById(this.$route.params.userId);
  },
  computed: {
  }
})
</script>

<style scoped>
  .user-detail-card {
    border: 1px solid #dee2e6;
    margin-bottom: 1rem;
  }
  .img-box img {
    width: 100%;
    max-width: 300px;
  }
  .table {
    margin-bottom: 0;
  }
</style>
