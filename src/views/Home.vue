<template>
  <div class="home container">
    <router-link to="/add" class="btn btn-primary mt-3 mb-3">Add User</router-link>
    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          <th>Phone</th>
          <th>Company Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody  v-if='getAllUsers'>
        <tr v-for='name in getAllUsers' :key='name.id'>
          <td v-text="name.id"></td>
          <td v-text="name.name"  class="text-info"></td>
          <td v-text="name.email"></td>
          <td v-text="name.city"></td>
          <td v-text="name.phoneNo"></td>
          <td v-text="name.companyName"></td>
          <td>
            <router-link :to="`/edit/${name.id}`" class="btn btn-outline-primary">Edit</router-link>
            <button class="btn btn-primary ml-1" v-on:click='deleteUserApi(`${name.id}`)'>Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
import './home.scss'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'getAllUsers'
    ])
  },
  methods: {
    ...mapActions([
      'getAllApi',
      'deleteUserApi'
    ])
  },
  mounted () {
    this.getAllApi()
  }
}
</script>
