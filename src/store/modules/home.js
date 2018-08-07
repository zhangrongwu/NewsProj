import request from "../../services/network";
const state = {
  skip: 0,
  events: []
};
// mutations与actions方法互相对应
// 协调回调action
const mutations = {
  loadMore(state, payload) {
    state.skip += 10;
    state.events = state.events.concat(payload.res);
  }
};
// 外部直接调用的方法
const actions = {
  loadMore({ commit, state }) {
    request({
      url: "event/list?loc=108288&start=" + state.skip + "&count=10",
      methods: "get",
      dataType: "jsonp",
      params: ""
    })
      .then(function(response) {
        console.log(response);
        commit({
          type: "loadMore",
          res: response.body.events
        });
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {
        console.log("请求最后一步");
      });
  }
};
export default {
  state,
  mutations,
  actions
};
