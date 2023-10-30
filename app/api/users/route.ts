import { NextRequest, NextResponse } from "next/server";
import { getUsers } from '../../db';

export function GET(request: NextRequest) {
    let users = getUsers()
    return NextResponse.json(users)
}