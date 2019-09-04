<template>
    <div class="login">
        <section class="section">
            <h1 class="section-title">Login</h1>
            <input type="text" v-model="email" placeholder="Email"><br>
            <input type="password" v-model="password" placeholder="Password"><br>
            <button @click="login">Login</button>
        </section>
    </div>
</template>

<script>
    import firebase from 'firebase'
    
    export default {
        name: 'login',

        data () {
            return {
                email: '',
                password: ''
            }
        },

        methods: {
            login: function() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                    (user) => {
                        this.$router.replace('home')
                    },
                    (err) => {
                        alert('Oops. ' + err.message)
                    }
                );
            }
        }
    }
</script>