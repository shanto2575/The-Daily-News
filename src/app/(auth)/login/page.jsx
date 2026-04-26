'use client'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const LoginPages = () => {
    const { register, handleSubmit,formState: { errors }, } = useForm()
    const handleLoginForm = (data) => {
        // console.log(data,'data')
    }
    // console.log(errors,'error')
    return (
        <div className='container mx-auto flex items-center justify-center h-screen bg-slate-300'>
            <form onSubmit={handleSubmit(handleLoginForm)}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-md border p-4 space-y-4">
                    <h2 className='text-center font-bold text-2xl'>Login Your Acount</h2>

                    <label className="label text-xl font-bold">Email Address</label>
                    <input type="email" className="input outline-none w-full" placeholder="Email" {...register("email",{ required: 'Email field is required' })} />
                    {errors.email && <span className='text-red-600'>{errors.email.message}</span>}

                    <label className="label text-xl font-bold">Password</label>
                    <input type="password" className="input outline-none w-full" placeholder="Password" {...register("password",{ required: 'Password field is required' })} />
                    {errors.password && <span className='text-red-600'>{errors.password.message}</span>}

                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className='text-center'>Don't have a Acount ?
                        <Link href={'/register'} className='font-bold px-2 text-blue-700 hover:text-pink-900'>Register</Link></p>
                </fieldset>
            </form>
        </div>
    )
}

export default LoginPages
