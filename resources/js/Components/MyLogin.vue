<template>
  <div>
    <div class="row">
      <form action="#" @submit.prevent="handleLogin">
        <div class="form-row">
          <input type="email" v-model="formData.email">
        </div>
        <div class="form-row">
          <input type="password" v-model="formData.password">
        </div>
        <div class="form-row">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handleLogin() {
      axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post('/login', this.formData).then(response => {
          console.log('User signed in!');
          axios.get('/protected').then(response => {
            console.log(response.data)
          });
        }).catch(error => console.log(error)); // credentials didn't match
      });
    }
  }
}
</script>