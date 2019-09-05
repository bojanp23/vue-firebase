<template>
    <div class="login">
        <section class="section">
            <div class="container">
                <h1 class="section-title">Login</h1>
                
                <div class="row justify-content-center">
                    <div class="col-sm-6">
                        <div class="form-group">
                            <input class="form-control" type="text" v-model="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input class="form-control" type="password" v-model="password" placeholder="Password">
                        </div>
                        <button class="btn btn-primary" @click="login">Login</button>
                        <router-link class="btn btn-secondary" to="/">Go Back</router-link>
                    </div>
                </div>
            </div>
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
                        this.$router.go({path: this.$router.path})
                    },
                    (err) => {
                        alert('Oops. ' + err.message)
                    }
                );
            }
        }
    }
</script>