import http from "@/shared/services/http-common.js";

/**
 * PaymentsApiService class
 * @description Service class for making HTTP requests to the API
 */
export class PaymentsApiService {

        /**
        * Get all payments
        * @returns
        */
        getAllPayments() {
            return http.get('/payments');
        }

        static async createPayment(payload) {
            return http.post('/payments', payload);
        }


}