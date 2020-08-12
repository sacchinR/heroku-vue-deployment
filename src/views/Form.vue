<template>
  <div class='Form container w-25 mt-5 shadow-lg p-3 mb-5 bg-white rounded'>
    <form @submit.prevent="handleSubmit">
      <b-form-group id = 'input-group-1' label='Name:' label-for='input-1'>
        <b-form-input
          id='input-1'
          v-model='$v.formData.name.$model'
          placeholder='Enter name'
          :class="{ 'is-invalid': validationStatus($v.formData.name)}"
        ></b-form-input>
        <small v-if="submited && !$v.formData.name.required" class="text-danger">Name field is required</small>
      </b-form-group>
      <b-form-group id = 'input-group-3' label='Email:' label-for='input-3'>
        <b-form-input
          id='input-3'
          type="email"
          v-model='$v.formData.email.$model'
          placeholder='Enter email'
          :class="{ 'is-invalid': validationStatus($v.formData.email)}"
        ></b-form-input>
        <small v-if="submited && !$v.formData.email.required" class="text-danger">Email field is required</small>
        <small v-if="submited && !$v.formData.email.email" class="text-danger">Enter valid email</small>
      </b-form-group>
      <b-form-group id = 'input-group-4' label='Phone No:' label-for='input-4'>
        <b-form-input
          id='input-4'
          type="number"
          v-model='$v.formData.phoneNo.$model'
          placeholder='Enter phone number'
          :class="{ 'is-invalid': validationStatus($v.formData.phoneNo)}"
        ></b-form-input>
        <small v-if="submited && !$v.formData.phoneNo.required" class="text-danger">Phone number field is required</small>
        <small v-if="submited && $v.formData.phoneNo.required && !$v.formData.phoneNo.exactLength" class="text-danger">Phone number length should be 10</small>
      </b-form-group>
      <b-form-group id = 'input-group-45' label='City:' label-for='input-5'>
        <b-form-input
          id='input-5'
          v-model='$v.formData.city.$model'
          placeholder='Enter phone number'
          :class="{ 'is-invalid': validationStatus($v.formData.city)}"
        ></b-form-input>
        <small v-if="submited && !$v.formData.city.required" class="text-danger">City field is required</small>
      </b-form-group>
      <b-form-group id = 'input-group-6' label='Company name:' label-for='input-6'>
        <b-form-input
          id='input-6'
          v-model='$v.formData.companyName.$model'
          placeholder='Enter company name'
          :class="{ 'is-invalid': validationStatus($v.formData.companyName)}"
        ></b-form-input>
        <small v-if="submited && !$v.formData.companyName.required" class="text-danger">Company name field is required</small>
      </b-form-group>
      <button class="btn btn-primary">Save</button>
      <router-link to="/" class="btn btn-outline-primary ml-3">Go back</router-link>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, email } from 'vuelidate/lib/validators'

const exactLength = (value) => {
  return value.length === 10
}

export default {
  name: 'form',
  data () {
    return {
      formData: {
        name: '',
        email: '',
        phoneNo: '',
        companyName: '',
        city: ''
      },
      submited: false,
      paramId: null
    }
  },
  validations: {
    formData: {
      name: { required },
      email: { required, email },
      phoneNo: {
        required,
        exactLength
      },
      companyName: { required },
      city: { required }
    }
  },
  methods: {
    ...mapActions([
      'saveUserApi',
      'getuserApi',
      'updateUserApi'
    ]),
    validationStatus: (validate) => {
      return typeof validate !== 'undefined' ? validate.$error : false
    },
    handleSubmit () {
      this.submited = true
      this.$v.$touch()
      if (this.$v.$pendding || this.$v.$error) return
      if (this.paramId) {
        this.updateUserApi(this.formData)
      } else {
        this.saveUserApi(this.formData)
      }
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.paramId = id
    if (id) {
      this.getuserApi(id).then(res => {
        if (res.status === 200) {
          const data = res.data
          this.formData = {
            id: data.id,
            name: data.name,
            email: data.email,
            phoneNo: data.phoneNo,
            companyName: data.companyName,
            city: data.city
          }
        }
      })
    }
  }
}
</script>
