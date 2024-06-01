"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const loginUser = async () => {
    try {
      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false
      });

      console.log('pp resp', res);
      if (res?.ok) {
        router.push('/ChooseTemplate');
      } else {
        // Handle login failure
        console.error('Login failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const res = await signIn("google", { redirect: false });
      if (res?.ok) {
        router.push('/ChooseTemplate');
      } else {
        // Handle Google sign-in failure
        console.error('Google sign-in failed');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='mt-8 flex flex-col justify-center items-center content-center'>
      <p className='text-3xl m-2'>Login</p>
      <input
        type="text"
        className='m-2 rounded h-8 text-black'
        value={email}
        placeholder='email'
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className='m-2 rounded h-8 text-black'
        value={password}
        placeholder='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='bg-blue-500 rounded m-3 p-2' onClick={loginUser}>Login User</button>
      <button className='bg-gray-500 rounded m-3 p-2' onClick={signInWithGoogle}>Sign in with Google</button>
      <Link href="/register"><p className='text-blue-300'>Register</p></Link>
    </div>
  );
}

export default Page;
