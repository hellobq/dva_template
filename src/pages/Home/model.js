
import service from '../../services'

export default {

  namespace: 'home',

  state: {
    count: 0,
    users: []
  },

  subscriptions: {
    setup({ dispatch, history }) {
    }
  },

  effects: {
    *getUsers (action, { call, put }) {
      const { data: {users} } = yield call(service, '/api/users', {test: true}) 
      yield put({
        type: 'save',
        users
      })
    }
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action };
    },
    add(state, action) {
      return {
        ...state,
        count: ++state.count
      }
    }
  }

};
