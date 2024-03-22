<template>
  <div class="home ms-auto">
  <div class="container d-flex justify-content-center flex-column" id="home">
  
    <div class="row d-grid d-md-flex mb-5 ">
      <div class="col align-items-center ext-center">
        <h1 class="homehead mt-5">
          Nurture Your World
        </h1>
        <p class="homep">
       Fulfill Every Need with Our Array of Plant Selection.
        </p>
        <div>
        
        </div>
        <router-link :to="{ name: 'products' }"><button class="btn bg-black text-white mb-3 mx-3" id="hmbtn">
            Explore now </button> </router-link>
        <router-link :to="{ name: 'about' }"><button class="btn bg-black text-white mb-3" id="hmbtn2">
            Learn More</button> </router-link>
      </div>

      <div class="col d-none d-md-inline">
        <img src="https://i.ibb.co/4PFQ5vf/cov.png " id="aboutpic" alt="aboutpic" loading="lazy" >
      </div>

    </div>
   
      <div class="row gap-5 mx-auto mb-5 d-grid d-md-flex">
        <div class=" col-3 homecard">
          <Card class=" text-center" id="cardPro">
            <template #cardHeader>
              <img src="https://i.ibb.co/FHdwfXP/alooe.png" class="card-img-top mx-auto mt-4  w-75" alt="Pro">
              <h4 class="card-text text-dark mt-3 ">
                Plants for Medicinal Purposes
              </h4>
              <router-link :to="{ name: 'products' }"><button id="shopnow" class="btn bg-black text-white mb-3">
                  Shop now </button> </router-link>
            </template>

          </Card>
        </div>
        <div class=" col-3 homecard">
          <Card class=" text-center mx-5" id="cardPro">
            <template #cardHeader>
              <img src="https://i.ibb.co/B4hDYyp/herbs.png" class="card-img-top mx-auto mt-4  w-75" alt="Pro">
              <h4 class="card-text text-dark mt-3 ">
                Plants for Culinary Purposes
              </h4>
              <router-link :to="{ name: 'products' }"><button class="btn bg-black text-white mb-3">
                  Shop now </button> </router-link>
            </template>

          </Card>
        </div>
        <div class=" col-3 homecard">
          <Card class=" text-center" id="cardPro">
            <template #cardHeader>
              <img src="https://i.ibb.co/XWtPG54/covi.png" class="card-img-top mx-auto mt-4  w-75" alt="Pro">
              <h4 class="card-text text-dark mt-3 ">
                Plants for Decorative Purposes
              </h4>
              <router-link :to="{ name: 'products' }"><button class="btn bg-black text-white mb-3">
                  Shop now </button> </router-link>
            </template>

          </Card>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import Card from '../components/Card.vue';

export default {
  components: {
    Card
  }


}

</script>


<style>

#aboutpic {
  width: 22rem;
  box-shadow: #0e170c;
}
#shopnow{
  border-bottom: #538f48;
}

.homep{
  font-family: "Days One", sans-serif;
  font-weight: bolder;
  }
  .homehead{
    font-family: "Coiny", system-ui;
    color: #538f48;
    font-size: 3rem;
  }
  #hmtbn{
   background-color: #538f48;
  }
  #hmbtn2{

  }

.ProdCar {
  font-family: sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: x-large;

  ;
}

*/ .prodBtn {
  font-family: sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: x-large;
}

.ProdHead {
  font-family: sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: xx-large;
}

.home .container .card:hover {
  /* transform: translateY(-20px); */
  transform: scale(1.05); /* Increase size on hover */
  transition: transform 0.3s ease; /* Smooth transition */
}


.home .card {
  width: 16rem;
  height: 19rem;
  border-color: green;
  box-shadow: 0px 0px 23px 10px #538f48
    /* background-color: #538f48 */
}

.card-img-top {
  width: 8rem;
  height: 16rem;
 
}


#cardPro {
  width: auto;
  height: auto;

}


/* Product COntent */
.ProdCont {
  font-family: sans-serif;
  font-weight: 500;
  font-style: normal;
  font-size: x-large;
}


.Products {
  background-color: white;
}


@media screen and (max-width:412) {
  #cardPro {
    width: auto;
    height: auto;
  }

  .card {
    width: auto;
    height: auto;
    border-color: green;
    box-shadow: 0px 0px 23px 10px #538f48
  }

  .card-img-top {
    width: auto;
    height: auto;
  }


  #cardPro {
    width: auto;
    height: auto;

  }
  
}
</style>
