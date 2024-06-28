import http from '/src/shared/services/http-common';
import { BusRoute } from '/src/tracking/model/buses/bus-route.entity';

export class BusRouteService {
    static async getAllBusRoutes() {
        try {
            const response = await http.get('/bus-route');
            return response.data;
        } catch (error) {
            console.error('Error fetching all bus routes:', error);
            throw error;
        }
    }
}