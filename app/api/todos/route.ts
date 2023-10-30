import { NextRequest, NextResponse } from "next/server";
import { AddTodo, getTodos } from "@/app/db";

export function GET(request: NextRequest) {
    return NextResponse.json(getTodos())
}

export async function POST(request: NextRequest) {
    let todos = getTodos()
    let id = todos.length
    let body = await request.json()
    
    AddTodo({
        id: id,
        content: body.content,
        completed: false
    })

    todos = getTodos()
    return NextResponse.json(todos[id])
}