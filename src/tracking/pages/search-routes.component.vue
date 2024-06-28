<script>
import { BusRouteService } from "@/tracking/services/buses/bus-route-api.service.js";
export default {
  name: "search-routes.component",
  data() {
    return {
      loading: false,
      selectedOrigin: null,
      selectedDestination: null,
      origins: [],
      destinations: [],
      routes: [],
      map: null,
      directionsService: null,
      directionsRenderers: []
    };
  },
  methods: {
    // onMapReady(map) {
    //   this.map = map;
    //   this.directionsService = new google.maps.DirectionsService();
    //   for (let i = 0; i < 4; i++) {
    //     this.directionsRenderers.push(new google.maps.DirectionsRenderer({ map: this.map, polylineOptions: { strokeColor: this.getRandomColor() } }));
    //   }
    // },
    // async loadStops() {
    //   try {
    //     const routes = await BusRouteService.getAllBusRoutes();
    //     this.routes = routes;
    //     this.origins = [...new Set(routes.map(route => ({ name: route.OriginName, coord: route.OriginCoord })))];
    //     this.destinations = [...new Set(routes.map(route => ({ name: route.DestinationName, coord: route.DestinationCoord })))];
    //   } catch (error) {
    //     console.error('Error loading stops:', error);
    //   }
    // },
    // searchRoutes() {
    //   this.loading = true;
    //   try {
    //     const filteredRoutes = this.routes.filter(route =>
    //         route.OriginCoord === this.selectedOrigin.coord &&
    //         route.DestinationCoord === this.selectedDestination.coord
    //     );
    //     this.directionsRenderers.forEach((renderer, index) => {
    //       if (filteredRoutes[index]) {
    //         this.drawRoute(filteredRoutes[index], renderer);
    //       } else {
    //         renderer.setMap(null);
    //       }
    //     });
    //   } catch (error) {
    //     console.error('Error filtering routes:', error);
    //   } finally {
    //     this.loading = false;
    //   }
    // },
    // drawRoute(route, renderer) {
    //   const [originLat, originLng] = route.OriginCoord.split(',').map(Number);
    //   const [destLat, destLng] = route.DestinationCoord.split(',').map(Number);
    //   const request = {
    //     origin: { lat: originLat, lng: originLng },
    //     destination: { lat: destLat, lng: destLng },
    //     travelMode: 'DRIVING'
    //   };
    //   this.directionsService.route(request, (result, status) => {
    //     if (status === 'OK') {
    //       renderer.setDirections(result);
    //     } else {
    //       console.error("Directions request failed due to " + status);
    //     }
    //   });
    // },
    // getRandomColor() {
    //   const letters = '0123456789ABCDEF';
    //   let color = '#';
    //   for (let i = 0; i < 6; i++) {
    //     color += letters[Math.floor(Math.random() * 16)];
    //   }
    //   return color;
    // }
  }
};
</script>

<template>
  <div class="main_container">
    <div class="form_container">
      <pv-dropdown v-model="selectedOrigin" editable :options="origins" optionLabel="name" placeholder="Origen" class="w-full md:w-20rem" />
      <pv-dropdown v-model="selectedDestination" editable :options="destinations" optionLabel="name" placeholder="Destino" class="w-full md:w-20rem" />
      <pv-button type="button" label="Search" icon="pi pi-search" :loading="loading" @click="searchRoutes" class="w-full md:w-8rem"/>
    </div>
    <div class="map_container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15612.47171388243!2d-77.11399785!3d-11.966336250000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1714806679282!5m2!1ses-419!2spe" width="900" height="560" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>

<style scoped>

.main_container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.form_container{
  display: flex;
  align-items: start;
  gap: 30px;
  margin: 20px;
}

.map_container{
  margin:20px;
}

.map_container iframe{
  border-radius: 10px;
}
</style>