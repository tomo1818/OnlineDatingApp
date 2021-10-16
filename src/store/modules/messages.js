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
      // let messagesLen = Object.keys(state.messages).length;
      // if (messagesLen !== 0) return;
      if (state.messages[payload.id] === undefined) state.messages[payload.id] = [payload.message];
      else state.messages[payload.id].push(payload.message);
      let num = Math.floor(Math.random() * (4 - 1) + 1);
      state.messages[payload.id].push(state.defMessages[num]);
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
