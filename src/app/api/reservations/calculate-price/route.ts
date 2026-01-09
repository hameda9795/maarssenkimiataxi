import { NextRequest, NextResponse } from 'next/server';

// Helper function to calculate distance using Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Price calculation (€2.50 per km base rate)
function calculatePrice(distanceKm: number): number {
  const baseRate = 2.5; // €2.50 per km
  const minimumFare = 7.5; // Minimum fare €7.50
  const price = distanceKm * baseRate;
  return Math.max(price, minimumFare);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lat1, lon1, lat2, lon2 } = body;

    if (!lat1 || !lon1 || !lat2 || !lon2) {
      return NextResponse.json(
        { error: 'All coordinates are required' },
        { status: 400 }
      );
    }

    const distanceKm = calculateDistance(
      parseFloat(lat1),
      parseFloat(lon1),
      parseFloat(lat2),
      parseFloat(lon2)
    );

    const price = calculatePrice(distanceKm);

    return NextResponse.json({
      distanceKm: parseFloat(distanceKm.toFixed(2)),
      price: parseFloat(price.toFixed(2)),
    });
  } catch (error) {
    console.error('Error calculating price:', error);
    return NextResponse.json({ error: 'Failed to calculate price' }, { status: 500 });
  }
}
