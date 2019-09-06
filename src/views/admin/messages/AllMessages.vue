<template>
    <section class="section">
      <div class="container">
        <h1>Messages</h1>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="message in messages" v-bind:key="message.id">
              <td>{{ message.email }}</td>
              <td>{{ message.name }}</td>
              <td>{{ message.subject }}</td>
              <td>{{ message.message }}</td>
              <td><router-link class="btn btn-success" :to="{name:'view-message', params: {id: message.id}}">View</router-link>
              <button class="btn btn-danger" @click="deleteMessage">Delete</button></td>
            </tr>
          </tbody>
        </table>
        <router-view></router-view>
      </div>
    </section>
</template>

<script>
import firebase from 'firebase';
import { db } from '../../../main'

export default {
  name: 'messages',
  
  data () {
    return {
      messages: []
    }
  },

  created () {
      db.collection('messages').get().then(querySnapshot => {
          querySnapshot.forEach(doc => {
              const data = {
                'id': doc.id,
                'name': doc.data().name,
                'email': doc.data().email,
                'subject': doc.data().subject,
                'message': doc.data().message,
                'isViewed': false
              }
              this.messages.push(data)
          })
      })
  },

  methods: {
    deleteMessage () {
      if(confirm('Are You Sure?')) {
        db.collection('messages')
        .where(firebase.firestore.FieldPath.documentId(), '==', 'id')
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
