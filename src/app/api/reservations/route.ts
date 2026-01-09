import { NextRequest, NextResponse } from 'next/server';

// Mock database for demo purposes
let reservations: any[] = [];

export async function GET() {
  return NextResponse.json(reservations);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const reservation = {
      id: Date.now().toString(),
      ...body,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    reservations.push(reservation);

    // TODO: Send email notification, save to database, etc.
    console.log('New reservation:', reservation);

    return NextResponse.json(reservation, { status: 201 });
  } catch (error) {
    console.error('Error creating reservation:', error);
    return NextResponse.json({ error: 'Failed to create reservation' }, { status: 500 });
  }
}
