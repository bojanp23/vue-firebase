<template>

  <div class="home">
    <section class="section">
      <div class="container">
        <h1>Home Page</h1>
    
        <HelloWorld msg="Welcome to Your Vue.js App"/>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/front/HelloWorld'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
