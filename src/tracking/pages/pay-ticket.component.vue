<script>
import {BusRouteService} from "@/tracking/services/buses/bus-route-api.service.js";
import {PaymentsApiService} from "@/tracking/services/payments/payments-api.service.js";
import { ref, onMounted } from 'vue';
export default {
  name: "pay-ticket.component",
  data() {
    return {
      loading: false,
      selectedBus: null,
      selectedOrigin: null,
      selectedDestination: null,
      ticketPrice: "2.50",
      buses: [],
      origins: [],
      destinations: []
    };
  },
  mounted() {
    this.fetchBuses();
  },
  methods: {
    async fetchBuses() {
      try {
        const response = await BusRouteService.getAllBusRoutes();
        // Mapear los datos recibidos de la API
        this.buses = response.map(busRoute => ({
          name: busRoute.busName
        }));
        this.origins = response.map(busRoute => ({
          name: busRoute.originName
        }));
        this.destinations = response.map(busRoute => ({
          name: busRoute.destinationName
        }));
      } catch (error) {
        console.error('Error fetching bus routes:', error);
      }
    },
    async payTicket() {
      if(!this.selectedBus || !this.selectedOrigin || !this.selectedDestination) {
        alert("Selecciona todas las opciones antes de pagar");
      }
      try {
        const payload = {
          busName: this.selectedBus.name,
          originName: this.selectedOrigin.name,
          destinationName: this.selectedDestination.name,
          ticketPrice: this.ticketPrice
        };
        const response = await PaymentsApiService.createPayment(payload);
        console.log("Payment Response:", response);
        alert("Pago realizado con éxito");
      } catch (error) {
        console.error('Error paying ticket:', error);
        console.error("Error Response Data:", error.response.data);
        alert("Error al realizar el pago");
      }
    }
  }
};
</script>

<template>
  <div class="pay-ticket-container">
    <div class="header-section">
      <h1 class="text-3xl font-bold">Pagar Pasaje</h1>
    </div>
    <div class="form">
      <div class="select-field flex align-items-center">
        <p class="text-xl">Seleccionar Bus:</p>
        <pv-dropdown v-model="selectedBus" editable :options="buses" optionLabel="name" placeholder="Selecciona Bus" class="w-full md:w-20rem" />
      </div>

      <div class="select-field flex align-items-center">
        <p class="text-xl">Seleccionar Paradero de Origen:</p>
        <pv-dropdown v-model="selectedOrigin" editable :options="origins" optionLabel="name" placeholder="Selecciona Origen" class="w-full md:w-20rem" />
      </div>

      <div class="select-field flex align-items-center">
        <p class="text-xl">Seleccionar Paradero de Destino:</p>
        <pv-dropdown v-model="selectedDestination" editable :options="destinations" optionLabel="name" placeholder="Selecciona Destino" class="w-full md:w-20rem" />
      </div>

      <div class="select-field flex align-items-center">
        <p class="text-xl">Total a Pagar:</p>
        <p class="money-mount">S/<span id="quantity">{{ ticketPrice }}</span></p>
      </div>
    </div>
    <div class="btn-container grid p-3">
      <pv-button label="Pagar Pasaje" severity="info" @click="payTicket" raised/>
      <pv-button label="Generar Código de Validación" severity="warning" raised/>
    </div>
  </div>
</template>

<style scoped>

.pay-ticket-container{
  display: grid;
  justify-items: center;
  margin: 20px 0;
}

.money-mount, #quantity{
  font-weight: bold;
  font-size: 42px;
  color: #0038FF;
}

.btn-container{
  gap: 20px;
}

.select-field{
  gap: 20px;
}

</style>