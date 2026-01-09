"use client";

import { useState, useEffect } from "react";

interface Booking {
  id: string;
  pickupAddress: string;
  destinationAddress: string;
  customerName: string;
  customerPhone: string;
  date: string;
  time: string;
  price: number;
  status: string;
}

export default function DriverDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch bookings from API
    setLoading(false);
    // Mock data for now
    setBookings([]);
  }, []);

  return (
    <div className="pt-20 min-h-screen">
      <div className="container-custom py-12">
        <h1 className="text-4xl font-bold mb-8">Chauffeur Dashboard</h1>
        
        <div className="glass-panel p-8 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Actieve Ritten</h2>
          
          {loading ? (
            <p>Laden...</p>
          ) : bookings.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🚗</div>
              <p className="text-gray-400">Geen actieve ritten op dit moment.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {bookings.map((booking) => (
                <div key={booking.id} className="glass-panel p-6 rounded-xl">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{booking.customerName}</h3>
                      <p className="text-gray-400">{booking.customerPhone}</p>
                    </div>
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {booking.status}
                    </span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-primary">📍</span>
                      <span>{booking.pickupAddress}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-secondary">🎯</span>
                      <span>{booking.destinationAddress}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-gray-400">
                        {booking.date} om {booking.time}
                      </span>
                    </div>
                    <div className="text-xl font-bold text-primary">
                      €{booking.price.toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
