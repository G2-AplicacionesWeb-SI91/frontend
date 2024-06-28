import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// PrimeVue
import PrimeVue from "primevue/config";

// PrimeVue Material Design Theme
import 'primevue/resources/themes/mdc-light-indigo/theme.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

// Import router
import router from "@/router/index.js";

// Import ToastService
import ToastService from 'primevue/toastservice';

// Import Components
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Toast from "primevue/toast";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Dropdown from "primevue/dropdown";
import Dialog from "primevue/dialog";
import InputIcon from "primevue/inputicon";
import IconField from "primevue/iconfield";
import Checkbox from "primevue/checkbox";
import ConfirmDialog from "primevue/confirmdialog";
import Textarea from "primevue/textarea";
import Menu from "primevue/menu";
import Rating from "primevue/rating";
import Row from "primevue/row";
import Tag from "primevue/tag";
import Sidebar from "primevue/sidebar";
import InputNumber from "primevue/inputnumber";
import { createPinia } from "pinia";
import FloatLabel from "primevue/floatlabel";
import Card from "primevue/card";

const pinia = createPinia();




const app = createApp(App)
    .use(PrimeVue, { ripple: true })
    .use(router)
    .use(pinia)
    .use(ToastService)  // Añadir ToastService aquí
    .component('pv-toast', Toast)
    .component('pv-float-label', FloatLabel)
    .component('pv-toolbar', Toolbar)
    .component('pv-button', Button)
    .component('pv-column', Column)
    .component('pv-data-table', DataTable)
    .component('pv-input-text', InputText)
    .component('pv-dialog', Dialog)
    .component('pv-dropdown', Dropdown)
    .component('pv-icon-field', IconField)
    .component('pv-input-icon', InputIcon)
    .component('pv-checkbox', Checkbox)
    .component('pv-confirm-dialog', ConfirmDialog)
    .component('pv-textarea', Textarea)
    .component('pv-menu', Menu)
    .component('pv-rating', Rating)
    .component('pv-row', Row)
    .component('pv-sidebar', Sidebar)
    .component('pv-tag', Tag)
    .component('pv-input-number', InputNumber)

app.mount('#app')