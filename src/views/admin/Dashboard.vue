<template>
  <div class="home">
    <h1>Welcome to Your Vue.js App Dashboard</h1>
    <button @click="logout">Log Out</button>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'dashboard',
  
  components: {
    
  },

  methods: {
    logout: function() {
      firebase.auth().signOut().then(() => {
        this.$router.replace('/')
      })
    }
  }
}
</script>
