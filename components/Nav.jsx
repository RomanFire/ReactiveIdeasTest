'use client'


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import {signIn, signOut, useSession, getProviders } from 'next-auth/react'



const Nav = () => {
  const { data : session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className='flex-between w-full mb-16 py-3 px-2 nav-background'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image 
          src="/assets/images/logo.svg" 
          alt="TestOpium Logo"
          width={30}
          height={30}
          className='object-contain'
        />
        <p className='logo_text'>ReactiveIdeas</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href="/create-post" className='black_btn'>
              Create Post
            </Link>
            <button type="button" onClick={signOut} className='outline_btn'>
              Sign Out
            </button>
            <Link href="/profile">
              <Image 
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='Profile'/>
            </Link>
          </div>
        ): (
        <>
          
          {
              <button
                type='button'
                key={'google'}
                onClick={() => signIn('google')}
                className='black_btn'
                >
                  Sign In
              </button>
            }
        </>
        )}
      </div>

      {/* Mobile Navigation*/}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <Image 
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='Profile'
              onClick={() => setToggleDropdown((prev) => !prev)}
              />
              {toggleDropdown && (
                <div className='dropdown'>
                  <Link 
                    href="/profile"
                    className='dropdown_link mt-2 w-full outline_btn'
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile
                  </Link>
                  <Link 
                    href="/create-post"
                    className='dropdown_link mt-2 w-full outline_btn'
                    onClick={() => setToggleDropdown(false)}
                  >
                    New Prompt
                  </Link>
                  <button 
                    type="button"
                    className='mt-2 w-full outline_btn'
                    onClick={() => {
                      setToggleDropdown(false);
                      signOut();
                    }}
                  >
                    Sign Out
                  </button>
                </div>
              )}
          </div>
        ):(
          <>
          {
              <button
                type='button'
                key={'google'}
                onClick={() => signIn('google')}
                className='black_btn'
                >
                  Sign In
              </button>
            }
        </>
        )}

      </div>
    </nav>
  )
}

export default Nav
