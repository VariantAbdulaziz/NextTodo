'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const BASE_URL = 'http://localhost:3000'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

    const submitHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const res = await fetch(`${BASE_URL}/api/login`, {
            method: "POST",
            body: JSON.stringify({ username, password }),
        })
        router.push('/')
    }

    return (
        <div className="relative flex flex-col justify-center h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                <h1 className="text-3xl font-semibold text-center text-purple-700">Todo or NotTodo</h1>
                <form className="space-y-4">
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input type="text" placeholder="username" 
                            onChange={(e)=>setUsername(e.target.value)}
                            className="w-full input input-bordered input-primary" />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Enter Password"
                            onChange={(e)=>setPassword(e.target.value)}
                            className="w-full input input-bordered input-primary" />
                    </div>
                    <Link href="#" className="text-xs text-gray-600 hover:underline hover:text-blue-600">Forget Password?</Link>
                    <div>
                        <button className="btn btn-primary" onClick={(e) => submitHandler(e)}>login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm