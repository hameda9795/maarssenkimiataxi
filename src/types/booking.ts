export interface BookingDetails {
  pickupAddress: string;
  destinationAddress: string;
  distanceKm: number;
  price: number;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  date?: string;
  time?: string;
}

export interface LocationSuggestion {
  display_name: string;
  lat: string;
  lon: string;
}

export interface PriceCalculation {
  distanceKm: number;
  price: number;
}
