<template>
<div class="container m-auto mt-10">
  <div class="p-4 mx-auto max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex justify-center my-7">
        <img src="@/static/Logo.png" alt="">
      </div>
        <div class="my-7">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
        </div>
        <div class="my-8">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
        </div>
        <button @click="login()" type="button" class="w-full text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg py-2 text-center">Login</button>
  </div>
</div>
</template>

<script>
export default {
    middleware: 'notAuthenticated',
    data() {
      return {
          email: '',
          password: ''
      }
    },
    methods: {
      async login () {
        const response = await this.$axios.$post('https://gym.stack.co.id/member/auth/login', 
        {email: this.email, password: this.password
        })
        .then((response) => {
          this.alertLoginSucces()
          this.$store.commit("loginToken", response.result.token)
          this.$router.replace({name:'admin-dashboard'})
        })
        .catch((error) => {
          this.alertLoginError(error)
        })
      },
        alertLoginSucces(){
          this.$swal({
            position: 'center',
            title: 'Log In Succes',
            timer: 1500
            });
          },
        alertLoginError(){
          this.$swal({
            position: 'center',
            title: 'Login Failed, Username or Password Wrong !!!',
            timer: 1500
            });
          },
  },
}
</script>

<style>

</style>
