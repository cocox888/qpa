"use client"

import ButtonPrimary from "@/components/button/buttonPrimary";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router=useRouter();


  const gotoDashboard = () => {
    router.push('/admin/dashboard');
  }

  return (

    <>
      <div className="w-64 mb-8">
        <Image src="/images/logo.svg" width={100} height={100} alt="Logo" className="w-full" />
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2">Email*</label>
          <input type="email" placeholder="Enter your email" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200" />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Password*</label>
          <input type="password" placeholder="Enter your password" className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200" />
        </div>

        <label className="flex items-start gap-2 cursor-pointer">
          <input type="checkbox" className="mt-1 form-checkbox rounded border-gray-300" />
          <span className="text-sm text-gray-600">Remember me</span>
        </label>

        <ButtonPrimary title="Sign In" onClick={gotoDashboard}/>

        <p className="text-center text-gray-600 text-sm">
          Forgot your password?&nbsp;
          <Link href="/user/forget" className="text-gray-900 hover:underline">Reset it</Link>
        </p>
      </form>
    </>

  );
}
