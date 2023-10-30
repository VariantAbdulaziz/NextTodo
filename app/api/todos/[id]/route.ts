import { getTodos } from "@/app/db";
import { NextRequest, NextResponse } from "next/server";
export function GET(request: NextRequest, {params : { id }} : { params : { id: string } }) {
    let todos = getTodos()
    return NextResponse.json(todos[parseInt(id)])
}

export function POST(request: NextRequest, {params : { id }} : { params : { id: string } }) {
    let todos = getTodos()
    let todo = todos.find(value => value.id === parseInt(id))
    if(!todo) {
        return NextResponse.json({error: "bad request"}, { status: 400 }) 
    }

    todo.completed = !todo.completed
    return NextResponse.json(todos[parseInt(id)])
}