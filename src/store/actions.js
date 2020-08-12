import { SAVE_GET_ALL } from './mutations'
import ApiService from './api'

export default {
  getAllApi (context) {
    ApiService.getAll().then(res => {
      context.commit(SAVE_GET_ALL, res)
    })
  },
  saveUserApi (context, payload) {
    ApiService.addData(payload).then(res => {
      window.location.href = '/'
    })
  },
  getuserApi (context, id) {
    return ApiService.get(id)
  },
  updateUserApi (context, payload) {
    ApiService.update(payload).then(res => {
      window.location.href = '/'
    })
  },
  deleteUserApi ({ commit, dispatch }, id) {
    ApiService.delete(id).then(res => {
      dispatch('getAllApi')
    })
  }
}
