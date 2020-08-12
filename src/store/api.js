import Vue from 'vue'

const ApiService = {
  getAll () {
    return Vue.axios.get('/users')
  },
  addData (payload) {
    return Vue.axios.post('/users', payload)
  },
  get (id) {
    return Vue.axios.get(`/users/${id}`)
  },
  update (payload) {
    const id = payload.id
    delete payload.id
    return Vue.axios.put(`/users/${id}`, payload)
  },
  delete (id) {
    return Vue.axios.delete(`/users/${id}`)
  }
}

export default ApiService
