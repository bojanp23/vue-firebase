<template>
    <section class="section">
      <div class="container">
        <h1>Single Message</h1>

              <div>{{ email }}</div>
              <div>{{ name }}</div>
              <div>{{ subject }}</div>
              <div>{{ message }}</div>
              <router-link to="/admin/messages" class="btn btn-secondary">Back</router-link>
              <button class="btn btn-danger" @click="deleteMessage">Delete</button>
      </div>
    </section>
</template>

<script>
import firebase from 'firebase';
import { db } from '../../../main'

export default {
  name: 'view-message',
  
  data () {
    return {
      'name': null,
      'email': null,
      'subject': null,
      'message': null,
      'isViewed': true
    }
  },

  beforeRouteEnter (to, from, next) {
      db.collection('messages')
      .where(firebase.firestore.FieldPath.documentId(), '==', to.params.id)
      .get()
      .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            next(vm => {
              vm.id = doc.id,
              vm.name = doc.data().name,
              vm.email = doc.data().email,
              vm.subject = doc.data().subject,
              vm.message = doc.data().message,
              vm.isViewed = true
            })
          })
      })
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData () {
      db.collection('messages')
      .where(firebase.firestore.FieldPath.documentId(), '==', this.$route.params.id)
      .get()
      .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            this.id = doc.id,
            this.name = doc.data().name,
            this.email = doc.data().email,
            this.subject = doc.data().subject,
            this.message = doc.data().message,
            this.isViewed = true
          })
      })
    },

    deleteMessage () {
      if(confirm('Are You Sure?')) {
        db.collection('messages')
        .where(firebase.firestore.FieldPath.documentId(), '==', this.$route.params.id)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              doc.ref.delete();
              this.$router.push('/admin/messages')
            })
        })
      }
    }
  }
}
</script>