<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <router-link v-if="!isLoggedIn" class="nav-item nav-link active" to="/">Home <span class="sr-only">(current)</span></router-link>
                <router-link v-if="!isLoggedIn" class="nav-item nav-link" to="/about">About</router-link>
                <router-link v-if="!isLoggedIn" class="nav-item nav-link" to="/contact">Contact</router-link>
                <router-link v-if="isLoggedIn" class="nav-item nav-link" to="/admin/messages">Messagesl</router-link>
                <button v-if="isLoggedIn" class="btn btn-secondary" @click="logout">Log Out</button>
            </div>
        </div>
    </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'navigation',

  data() {
      return {
          isLoggedIn: false,
          currentUser: false
      }
  },

  created() {
      if(firebase.auth().currentUser) {
          this.isLoggedIn = true;
          this.currentUser = firebase.auth().currentUser.email;
      }
  },

  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.go({path: this.$router.path})
      })
    }
  }
}
</script>