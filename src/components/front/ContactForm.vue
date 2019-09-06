<template>
    <section class="section">
        <div class="container">
            <h1>Contact Form</h1>
            <div class="row justify-content-center">
                <div class="col-sm-6">
                    <form id="contact" @submit.prevent="sendMessage">
                        <div class="row">
                            <div class="form-group col">
                                <input v-model="name" class="form-control" placeholder="Your name" type="text" tabindex="1" required autofocus>
                            </div>
                            <div class="form-group col">
                                <input v-model="email" class="form-control" placeholder="Email" type="email" tabindex="2" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <input v-model="subject" class="form-control" placeholder="Subject" type="tel" tabindex="3" required>
                        </div>
                        <div class="form-group">
                            <textarea v-model="message" class="form-control" rows="6" placeholder="Type your message here...." tabindex="4" required></textarea>
                        </div>
                        <button class="btn btn-success" type="submit" data-submit="...Sending">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import firebase from 'firebase';
import jquery from 'jquery';
import { db } from '../../main'

export default {
  name: 'contactForm',

  data () {
      return {
        'id': null,
        'name': null,
        'email': null,
        'subject': null,
        'message': null,
        'isViewed': true
      }
  },

  methods: {
      sendMessage () {
        db.collection('messages')
        .add({
            name: this.name,
            email: this.email,
            subject: this.subject,
            message: this.message,
            isViewed: false
        })
        .then(docRef => {
            alert('Message sent')
            
        })

        document.getElementById('contact').reset();
      }
  }

  
}
</script>