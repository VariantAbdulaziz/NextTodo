'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react'

let BASE_URL = "http://localhost:3000"

export const CreateTodo = () => {

    const [todo, setTodo] = useState('')
    const _dialog = useRef<HTMLDialogElement>(null)
    const router = useRouter()
    const token = Cookies.get('token')

    console.log(token)
    const openModal = () => {
        _dialog.current?.showModal();
    };

    const closeModal = () => {
        _dialog.current?.close();
    };

    const handleAddTodo = async () => {
        await fetch(`${BASE_URL}/api/todos`, {
            method: "POST",
            body: JSON.stringify({ content: todo }),
        })
        router.refresh()
        _dialog.current?.close()
    };

    return (
        <>
            <dialog ref={_dialog} className='modal'>
                <div className='modal-box'>
                    <input type="text" className='w-full p-2 m-2' onChange={(e)=> setTodo(e.target.value)}/>
                    <div className='modal-action'>
                        <button onClick={handleAddTodo} className='btn'>done</button>
                        <button onClick={closeModal} className='btn'>cancel</button>
                    </div>
                </div>
            </dialog>
            <div className='flex w-screen p-5 m-5'>
                <button className='flex-none btn ml-auto mr-5' onClick={openModal}>Add Todo</button>
            </div>
        </>
    )
}