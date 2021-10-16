export default {
  state: {
    messages: {},
    defMessages: {
      1: "チャットなんかやってないでProjectを進めましょう",
      2: "すみません、さっきRecursionをやり始めたばかりではないしょうか、もっと集中しましょう",
      3: "早く大学の課題やりましょう",
      4: "実験、研究もしないといけないですよね"
    }
  },
  mutations: {
    setMessages(state, payload) {
      let date = payload.date;
      let now = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate() + " " + date.getHours() + ":"
          + date.getMinutes();
      if (state.messages[payload.id] === undefined) state.messages[payload.id] = [[payload.message, now]];
      else state.messages[payload.id].push([payload.message, now]);
      let num = Math.floor(Math.random() * (4 - 1) + 1);
      state.messages[payload.id].push([state.defMessages[num], now]);
    }
  },
  getters: {
    getMessagesById(state) {
      return id => {
        return state.messages.find(message => message.id === id)
      }
    }
  },
  actions: {

  }
}
