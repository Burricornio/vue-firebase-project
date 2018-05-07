<template>
  <div>
      <auth-form action="login" @process="login($event)"></auth-form>
      <app-snack-bar
      v-if="snackBar"
      :snackBar="snackBar"
      :text="message"
      :timeout="timeout"
      ></app-snack-bar>
  </div>
</template>

<script>
import AuthForm from '@/forms/Auth'
import AppSnackBar from '@/components/Snackbar'
import {db} from '@/main'

export default {
    name: 'Login',
    components: {
        AuthForm,
        AppSnackBar
    },
    data () {
        return {
            snackBar: false,
            message: '',
            timeout: 5000
        }
    },
    methods: {
        login(user) {
            this.$store.dispatch('firebaseLogin', user)
            .then(data => {
                db.collection('users').doc(data.uid).onSnapshot(snapshot => {
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


