<template>
<div class="contact">
  <main class="contact" id="contact">
    <section class="container mb-4">
      <h2 class="h1-responsive font-weight-bold mb-5 my-4 text-center mx-auto animate__animated animate__flip" id="head">Reach me
      </h2>
      <div class="row mb-5">
        <div class="col-md-7 mb-md-0 mb-5">
          <div class="col-md-5 text-center mt-4">

            <form action="https://formspree.io/f/xyyqlwyy" id="contact-form" name="contact-form" method="POST">

              <div class="row mb-4">
                <div class="col-md-6 mb-2">
                  <div class="md-form mb-0">
                    <input type="text" id="name" name="name" class="form-control">
                    <label for="name" class="label">Your name</label>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <input type="text" id="email" name="email" class="form-control">
                    <label for="email" class="label">Your email</label>
                  </div>
                </div>


              </div>

              <div class="row mb-4">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="text" id="subject" name="subject" class="form-control">
                    <label for="subject" class="label">Subject</label>
                  </div>
                </div>
              </div>


              <div class="row">

                <div class="col-md-12">


                  <div class="md-form">
                    <textarea type="text" id="message" name="message" rows="2"
                      class="form-control md-textarea"></textarea>
                    <label for="message">Your message</label>
                  </div>
                </div>
              </div>
              <div class="text-center text-md-left mt-4">
                <a id="btncontact" class="btn btn-secondary"
                  onclick="document.getElementById('contact-form').submit();">Send</a>
              </div>

            </form>
          </div>
        </div>
      
      


      <div class="col-md-5 text-center mt-4">
        <div class="col-5-md-3 text-center mt-4" id="text">
          <ul class="list-unstyled mb-0">
            <li><i class="fas fa-map-marker-alt fa-2x"></i>
              <p>7 Dorr Street, Cape Town, SA</p>
            </li>


            <li><i class="fas fa-phone mt-4 fa-2x"></i>
              <p>021 361 3404</p>
            </li>


            <li><i class="fas fa-envelope mt-4 fa-2x"></i>
              <p>fortuinpinda@gmail.com</p>
            </li>



            <a target="_blank" href="https://www.linkedin.com/in/pinda-fortuin-0a4043180/"><i id="icon"
                class="bi bi-linkedin mx-2"></i></a>


            <a target="_blank" href="https://github.com/fortuinp"><i id="icon" class="bi bi-github mx-2"></i></a>



          </ul>
        </div>




      </div>
    </div>

    </section>
  </main>

</div>
</template>


<script>
export default {

}
</script>


<style scoped>
#text {
  color: #538f48;
  font-size: 1.5rem;
  text-shadow:red;
}

#contact {
  color: #538f48;
  font-weight: bolder;
  font-size: large;
}

label {
  color: black;
  font-size: larger;
  
}

#icon {
  font-size: 1.5rem;
  color: black;
  /* color: #692525; */
}
#head{
  font-size: 2rem;
  color: #538f48;
  font-family: "Days One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>

