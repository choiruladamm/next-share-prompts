'use client'

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  return (
    <nav className="w-full pt-3 mb-16 flex-between">
      <Link href='/' className="flex gap-2 flex-center">
        <Image 
          src='/images/logo.svg'
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Dekstop Navigation */}
    </nav>
  )
}

export default Nav