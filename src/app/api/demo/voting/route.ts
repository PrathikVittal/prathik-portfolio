import { NextResponse } from "next/server";

export async function POST() {
    const walletId = `0xDEMO_${Math.random().toString(16).slice(2, 10).toUpperCase()}`;
    return NextResponse.json({ walletId });
}
