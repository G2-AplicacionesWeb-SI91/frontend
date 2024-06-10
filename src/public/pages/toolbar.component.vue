<script>
import { ref } from "vue";
const visibleRight = ref(false);

export default {
      name:'toolbar.component',
      title:'Toolbar',
      data() {
        return {
          drawer:false,
          items:[
            {label:'Notificaciones', to: '/notifications'},
            {label:'Buscar rutas', to: '/search-routes'},
            {label:'Pagar pasaje', to: '/pay-ticket'},
            {label:'Promociones', to: '/promos'},
            {label:'Historial de viajes', to: '/history'}
          ]
        };
      },
      methods: {
        toggleDrawer() {
          this.drawer = !this.drawer;
        },
        navigateTo(route) {
          this.$router.push(route);
          this.drawer = false;
        }
      }
}
</script>

<template>
  <pv-toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
    <template #start>
      <div class="menu-items flex align-items-center gap-2">
        <h1 class="toolbar-title">TrackMyRoute</h1>
        <router-link v-for="item in items" :key="item.label" v-slot="{navigate,href}" :to="item.to" custom>
          <pv-button  :href="href" class="p-button-text p-button-plain text-sm"  @click="navigate" style="color: blue;">
              {{item.label}}
          </pv-button>
        </router-link>
      </div>
    </template>

    <template #end>
      <div class="icons-container flex align-items-center gap-2">
        <pv-button
            icon="pi pi-cog"
            class="p-button-rounded p-button-text p-button-plain"
            aria-label="Settings"
            @click="navigateTo('/config')"
        />
        <pv-button
            icon="pi pi-question-circle"
            class="p-button-rounded p-button-text p-button-plain"
            severity="primary"
            aria-label="support"
            @click="navigateTo('/support')"
        />
      </div>
    </template>
  </pv-toolbar>
  <router-view></router-view>
</template>

<style scoped>

.toolbar-title {
  font-family: 'MuseoModerno', sans-serif;
  font-size: 1.5em;
  margin: 0 5px;
}

.menu-items {
  display: flex;
  flex-wrap: wrap;
}

.icons-container {
  margin: 0 20px;
}

@media (max-width: 768px) {
  .toolbar-title {
    font-size: 1.2em;
  }

  .menu-items {
    display: none;
  }

  .icons-container {
    margin: 0;
  }
}
</style>
