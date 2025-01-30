'use server';
import { events } from '@/lib/data';
import { NextResponse } from 'next/server';

export async function getAllEvents() {
    try {
      return NextResponse.json(
        { events, message: "Events fetched successfully" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json(
        { message: 'Error fetching events' },
        { status: 500 }
      );
    }
  }
