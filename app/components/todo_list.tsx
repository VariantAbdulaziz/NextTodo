'use client';

import React, { useRef } from 'react'
import { Todo } from '../db'

const BASE_URL = 'http:localhost:3000'

const TodoList = ({ todos }: { todos: Todo[]}) => {

    const textRef = useRef<HTMLSpanElement>(null)


    const handleToggle = (id: number, state: boolean) => {
        if(!state)
            textRef.current?.classList.add('line-through')
        else
            textRef.current?.classList.remove('line-through')

        todos[id].completed = !todos[id].completed
        fetch(`${BASE_URL}/api/todos/${id}`, {
            method: 'POST'
        })
    }

    return (
        <ul>
            {todos.map((item, key) => {
                return <li key={key} className='flex my-2 text-justify'>
                            <span ref={textRef} className='flex-auto mr-5'>{item.content}</span>
                            <button className='btn' onClick={() => handleToggle(item.id, item.completed)}>toggle</button>
                            <button className='btn ml-2'>delete</button>
                        </li>
            })}
        </ul>
    )
}

export default TodoList