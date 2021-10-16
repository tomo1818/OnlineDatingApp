export default{
  state: {
    users: [],
    me: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxH3o5f17r7jtfjqI4p6FdxmE8LhPhwCOgS4-rhGp5hVZLLCuTA2ztRqSupm4FEC_TgQ&usqp=CAU',
  },
  mutations: {
    // stateのusersの値を変更
    setUsers(state, payload) {
      if (state.users.length !== 0) return;
      state.users = payload;
    },
  },
  getters: {
    // idからUser情報を取得
    getUserById(state){
      return id => {
        return state.users.find(user => user.id === id);
      }
    },
  },
  actions: {
    // APIからユーザー情報を受け取る
    fetchUsers(context) {
      fetch('https://randomuser.me/api/?results=9').then(response=> response.json()).then(data=> {
        let users = [];
        for (let result of data.results) {
          let user = {
            id: result.login.uuid,
            name: result.name,
            gender: result.gender,
            age: result.dob.age,
            state: result.location.state,
            city: result.location.city,
            email: result.email,
            picture: result.picture.large
          }
          users.push(user);
        }
        // contextでmutationsに設定したsetUsersを呼び出す
        context.commit('setUsers', users);
      })
    }
  },
}
