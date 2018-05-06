<template>
  <div>
      <auth-form
        action="register"
        @process="register($event)"
      ></auth-form>

      <app-snack-bar
      v-if="snackBar"
      :snackBar="snackBar"
      :text="message"
      :timeout="timeout"
      />
  </div>
</template>

<script>
import appSnackBar from '@/components/Snackbar'
import authForm from '@/forms/Auth'

export default {
  name: 'Register',
  components: {
      appSnackBar,
      authForm
  },
  data () {
      return {
        snackBar: false,
        message: '',
        timeout: 5000
      }
  },
  methods: {
      register (user) {
          console.log(user)
      }
  }
}
</script>

