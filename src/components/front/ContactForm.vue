<template>
    <section class="section">
        <div class="container">
            <h1>Contact Form</h1>
            <div class="row justify-content-center">
                <div class="col-sm-6">
                    <form id="contact">
                        <div class="row">
                            <div class="form-group col">
                                <input id="name" class="form-control" placeholder="Your name" type="text" tabindex="1" required autofocus>
                            </div>
                            <div class="form-group col">
                                <input id="email" class="form-control" placeholder="Email" type="email" tabindex="2" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <input id="subject" class="form-control" placeholder="Subject" type="tel" tabindex="3" required>
                        </div>
                        <div class="form-group">
                            <textarea id="message" class="form-control" rows="6" placeholder="Type your message here...." tabindex="4" required></textarea>
                        </div>
                        <button class="btn btn-success" type="submit" data-submit="...Sending">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'contactForm',

  data () {
      return {
          
      }
  },

  
}
</script>