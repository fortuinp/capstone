<template>
    <div class="footer">
    <div class="container text-center">
        <div class="row">
            <p class="footer1 lead text-black   "> NatureNurtures &copy;
                <span> {{ currYear }}</span>
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "footerComp",
    data() {
        return {
            currYear: new Date().getFullYear()
        }
    }

}
</script>

<style scoped>
.footer {
  /* left: 0;/
  /* margin-top: 3rem; */
  background-color: #538f48;
  color: white;
  text-align: center;
  bottom: 0;
  width: 100%; 
}
</style>