'use client'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const LoginPages = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()

    const [isShowPassword, setisShowPassword] = useState(false)

    const handleLoginForm = async (data) => {
        // console.log(data,'data')
        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: '/'
        })
        console.log(res, error)
    }
    // console.log(errors,'error')
    return (
        <div className='container mx-auto flex items-center justify-center h-screen bg-slate-300'>
            <form onSubmit={handleSubmit(handleLoginForm)}>
                <fieldset className=" relative fieldset bg-base-200 border-base-300 rounded-box w-md border p-4 space-y-4">
                    <h2 className='text-center font-bold text-2xl'>Login Your Acount</h2>

                    <label className="label text-xl font-bold">Email Address</label>
                    <input type="email" className="input outline-none w-full" placeholder="Email" {...register("email", { required: 'Email field is required' })} />
                    {errors.email && <span className='text-red-600'>{errors.email.message}</span>}

                    <div className="relative">
                        <label className="label text-xl font-bold">Password</label>
                        <input
                            type={isShowPassword ? "text" : "password"}
                            className="input outline-none w-full pr-12"
                            placeholder="Password"
                            {...register("password", { required: 'Password field is required' })}
                        />
                        <span
                            className="absolute right-3 top-12 -translate-y-1/2 text-xl cursor-pointer"
                            onClick={() => setisShowPassword(!isShowPassword)}
                        >
                            {isShowPassword ? <FaEye /> : <FaEyeSlash />}
                        </span>
                    </div>
                    {errors.password && <span className='text-red-600'>{errors.password.message}</span>}

                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className='text-center'>Don&apos;t have a Acount ?
                        <Link href={'/register'} className='font-bold px-2 text-blue-700 hover:text-pink-900'>Register</Link></p>
                </fieldset>
            </form>
        </div>
    )
}

export default LoginPages
