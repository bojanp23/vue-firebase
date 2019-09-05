<template>
  <div class="home">
    <section class="section">
      <div class="container">
        <h1>Welcome to Your Vue.js App Dashboard</h1>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Subject</th>
              <th scope="col">Message</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="message in messages" v-bind:key="message.id">
              <th scope="row">{{ message.message_id }}</th>
              <td>{{ message.email }}</td>
              <td>{{ message.name }}</td>
              <td>{{ message.subject }}</td>
              <td>{{ message.message }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../../main'

export default {
  name: 'dashboard',
  
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
                'message_id': doc.data().message_id,
                'name': doc.data().name,
                'email': doc.data().email,
                'subject': doc.data().subject,
                'message': doc.data().message,
                'isViewed': false
              }
              this.messages.push(data)
          })
      })
  }
}
</script>
