import axios from 'axios';
import { environment } from '@/config/environment';
import type { LocationSuggestion, PriceCalculation } from '@/types/booking';

const api = axios.create({
  baseURL: environment.apiUrl,
  timeout: 10000,
});

export const bookingApi = {
  suggestAddresses: async (query: string): Promise<LocationSuggestion[]> => {
    const response = await api.get(`/locations/suggest`, {
      params: { query },
    });
    return response.data;
  },

  reverseGeocode: async (lat: number, lon: number): Promise<any> => {
    const response = await api.get(`/locations/reverse-geocode`, {
      params: { lat, lon },
    });
    return response.data;
  },

  calculatePrice: async (
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number
  ): Promise<PriceCalculation> => {
    const response = await api.post(`/reservations/calculate-price`, {
      lat1,
      lon1,
      lat2,
      lon2,
    });
    return response.data;
  },

  createReservation: async (reservationData: any): Promise<any> => {
    const response = await api.post(`/reservations`, reservationData);
    return response.data;
  },

  getReservations: async (): Promise<any[]> => {
    const response = await api.get(`/reservations`);
    return response.data;
  },
};
