<script>
import {Payment} from "@/tracking/model/payment/payment.entity.js";
import {PaymentsApiService} from "@/tracking/services/payments/payments-api.service.js";

export default {
  name: "history.component",
  title: "History",
  data() {
    return {
      trips: [],
      trip: null,
      selectedTrips: null,
      filters: {},
      submitted: false,
      paymentsService: null
    }
  },
  created() {
    this.initialize();
  },
  methods: {
    initialize() {
      console.log('created');
      this.paymentsService = new PaymentsApiService();
      this.paymentsService.getAllPayments()
          .then(response => {
            this.trips = response.data;
            this.trips = this.trips.map(
                (trip) =>{
                  return Payment.toDisplayablePayment(trip)
                }
            );
            console.log(response.data);
            console.log(this.trips);
          });

    }
  }
}

</script>

<template>
  <pv-data-table ref="dt" v-model:selection="selectedTrips"
                 :filters="filters"
                 :paginator="true"
                 :rows="10"
                 :rowsPerPageOptions="[5, 10, 15]"
                 :value="trips"
                 currentPageReportTemplate="Showing {first} to {last} of {totalRecords} trips"
                 dataKey="Id"
                 paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink
                                    LastPageLink CurrentPageReport RowsPerPageDropdown"
                 responsiveLayout="scroll">

      <template #header>
        <div class="table-header gap-2 align-items-center justify-content-between">
          <h4 class="m-0">Searching my routes</h4>
          <span class="p-input-icon-left">
              <i class="pi pi-search"/>
            </span>
        </div>
      </template>
      <pv-column :sortable="true" field="Id" header="Id" style="min-width: 16rem"/>
      <pv-column :sortable="true" field="BusName" header="BusName" style="min-width: 16rem"/>
      <pv-column :sortable="true" field="OriginName" header="OriginName" style="min-width: 12rem"/>
      <pv-column :sortable="true" field="DestinationName" header="DestinationName" style="min-width: 16rem"/>
      <pv-column :sortable="true" field="TicketPrice" header="TicketPrice" style="min-width: 12rem"/>
  </pv-data-table>
</template>

<style scoped>

</style>