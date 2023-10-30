import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { addUser, getUsers } from "@/app/db";

const validate = (body: any) => {
    if(!body.username && !body.password)
        return false
    if(typeof body.username !== 'string') {
        return false
    }
    return true
    
}

export async function POST(request: NextRequest) {
    let body = await request.json()

    if (!validate(body)) {
        return NextResponse.json(
            { error: "bad request" },
            { status: 400, headers: { "content-type": "application/json" } }
        );
    }

    const saltRounds = 10
    let users = getUsers()
    let id = users.length
    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(body.password, salt, (err, hash) => {
            addUser({
                id,
                username: body.username,
                passwordHash: hash,
            })
        });
    });
    
    return NextResponse.json(
        { success: true },
        { status: 200, headers: { "content-type": "application/json" } }
    );
}