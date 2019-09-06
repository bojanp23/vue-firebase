<template>
  <div class="home">
    <section class="section">
      <div class="container">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import firebase from 'firebase';
import { db } from '../../main'

export default {
  name: 'admin',
  
}
</script>
