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
import {db} from '@/main'

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
          this.$store.dispatch('firebaseRegister', user)
            .then((userRegistered) => {
                const data = {
                    uid: userRegistered.uid,
                    email: userRegistered.email,
                    role: 'customer'
                };
                db.collection('users').doc(userRegistered.uid).set(data).then(() => {
                    this.$store.commit('setRole', data.role)
                    this.$router.push('/')
                })
            })
            .catch((error) => {
                this.message = error.message.substr(0, 60);
                this.snackBar = true
                setTimeout(() => {
                    this.snackBar = false
                }, this.timeout)
            })
      }
  }
}
</script>

