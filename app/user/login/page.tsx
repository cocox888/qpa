'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

type dataType = { email: string; password: string };

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });



  const onSubmit = async (data: dataType) => {
    try {
      setLoading(true);
      console.log(register);
      const status = await fetch('http://localhost:5173/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: data.email, password: data.password })
      });
      setLoading(false);
      if (status.status === 200) {
        const responseData = await status.json();
        const { access_token, refresh_token } = responseData;
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
        router.push('/admin/dashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-64 mb-8">
        <Image
          src="/images/logo.svg"
          width={100}
          height={100}
          alt="Logo"
          className="w-full"
        />
      </div>

      <ToastContainer />

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="block text-gray-700 mb-2">Email*</div>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Enter a valid email'
              }
            })}
          />
          {errors.email && (
            <div className="mt-0.5 text-xs text-red-600">
              {errors.email.message}
            </div>
          )}
        </div>

        <div>
          <div className="block text-gray-700 mb-2">Password*</div>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            {...register('password', {
              required: 'Password is required',
              pattern: {
                value: /^.+$/,
                message: 'Password must be strong'
              }
            })}
          />
          {errors.password && (
            <div className="mt-0.5 text-xs text-red-600">
              {errors.password.message}
            </div>
          )}
        </div>

        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="mt-1 form-checkbox rounded border-gray-300"
          />
          <span className="text-sm text-gray-600">Remember me</span>
        </label>

        <button
          className="w-full bg-primary text-white py-3 rounded-lg hover:bg-green-800 transition-colors text-center"
          type="submit"
          disabled={loading}
        >
          {loading ? <>Sign In . . .</> : <>Sign In</>}
        </button>

        <p className="text-center text-gray-600 text-sm">
          Forgot your password?&nbsp;
          <Link href="/user/forget" className="text-gray-900 hover:underline">
            Reset it
          </Link>
        </p>
      </form>
    </>
  );
}
