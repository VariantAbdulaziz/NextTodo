import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { SignJWT } from "jose";
import { getJwtSecretKey } from "./get_secret";
import { getUsers } from "@/app/db";

export async function POST(request: NextRequest) {
    let body = await request.json()

    const saltRounds = 10
    let users = getUsers()
    users = users.filter((user)=> user.username == body.username)
    let user = users[0]
    let id = user.id
    let hash = user.passwordHash
    
    const match = await bcrypt.compare(body.password, hash)

    if(match) {
        const token = await new SignJWT({
            "uid": id,
            })
            .setProtectedHeader({ alg: "HS256" })
            .setIssuedAt()
            .sign(getJwtSecretKey());
            const response = NextResponse.json(
                { success: true },
                { status: 200, headers: { "content-type": "application/json" } }
            );
            response.cookies.set({
                name: "token",
                value: token,
            });
            return response;
    }
    return NextResponse.json( {error: "incorrect password"}, {status: 401})
    
}