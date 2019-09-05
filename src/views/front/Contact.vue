<template>
    <section class="section">
      <div class="container">
        <h1>Contact</h1>
    
        <ContactForm />
      </div>
    </section>
</template>

<script>
// @ is an alias to /src
import ContactForm from '@/components/front/ContactForm'

export default {
  name: 'contactForm',
  components: {
    ContactForm
  }
}
</script>
