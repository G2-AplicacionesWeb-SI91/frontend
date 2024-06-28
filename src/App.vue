<script >
  import Toolbar from "@/public/pages/toolbar.component.vue";
  import SearchRoutes from "@/tracking/pages/search-routes.component.vue"
  import PayTicket from "@/tracking/pages/pay-ticket.component.vue"
  export default {
    name: "App",
    title: "TrackMyRoute",
    components: {SearchRoutes, Toolbar, PayTicket},
  }
</script>

<template>
  <div class="">
    <div class="sidebar-container">
      <toolbar></toolbar>
    </div>
    <div class="main-container">
<!--      <search-routes></search-routes>-->
    </div>
  </div>
</template>

<style scoped>
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
body{
  background-color:white;
}

</style>
