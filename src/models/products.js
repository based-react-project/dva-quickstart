export default {
  namespace: 'products', // 在全局 state 上的 key
  state: [], // 初始值，在这里是空数组
  reducers: { // reducers:redux 里的 reducer，接收 action，同步更新 state
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  }
};
