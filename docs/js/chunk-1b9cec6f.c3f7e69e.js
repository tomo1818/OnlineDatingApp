(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b9cec6f"],{"0259":function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"chat"},[t("div",{staticClass:"container"},[t("h2",[s._v("チャットページです")]),t("router-link",{attrs:{to:{name:"UserDetail",userId:this.$route.params.userId}}},[s._v("戻る")]),s.messages!=[]?t("div",s._l(s.messages,(function(e,a){return t("div",{key:e.id,staticClass:"chat-box"},[t("div",{staticClass:"messages d-flex"},[t("div",{staticClass:"message-box"},[t("p",{staticClass:"message"},[s._v(s._s(e[0]))]),t("p",{staticClass:"time"},[s._v(s._s(e[1]))])]),a%2===1?t("div",{staticClass:"person-img text-left rounded-circle"},[t("img",{staticClass:"rounded-circle",attrs:{src:s.user.picture,alt:""}})]):s._e(),a%2===0?t("div",{staticClass:"person-img text-left rounded-circle"},[t("img",{staticClass:"rounded-circle",attrs:{src:s.me,alt:""}})]):s._e()])])})),0):s._e(),t("form",{staticClass:"submit"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.currMessage,expression:"currMessage"}],attrs:{type:"text"},domProps:{value:s.currMessage},on:{input:function(e){e.target.composing||(s.currMessage=e.target.value)}}}),t("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:s.sendMessage}},[s._v("送信")])])],1)])},r=[],i={data:function(){return{currMessage:"",messages:[],user:"",me:""}},created:function(){void 0!==this.$store.state.messages.messages[this.$route.params.userId]&&(this.messages=this.$store.state.messages.messages[this.$route.params.userId]),this.user=this.$store.getters.getUserById(this.$route.params.userId),this.me=this.$store.state.users.me},methods:{sendMessage:function(){console.log(this.currMessage),this.$store.commit("setMessages",{id:this.$route.params.userId,message:this.currMessage,date:new Date}),this.messages=this.$store.state.messages.messages[this.$route.params.userId],this.currMessage=""}}},c=i,u=(t("ba2d"),t("2877")),o=Object(u["a"])(c,a,r,!1,null,"4f467e4a",null);e["default"]=o.exports},"82ad":function(s,e,t){},ba2d:function(s,e,t){"use strict";t("82ad")}}]);
//# sourceMappingURL=chunk-1b9cec6f.c3f7e69e.js.map