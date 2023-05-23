"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className="w-full pt-3 mb-16 flex-between">
      <Link href="/user" className="flex gap-2 flex-center">
        <Image
          src="/images/logo.svg"
          alt="promptopia logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Dekstop Navigation */}

      {/* Mobile Navigation */}
      <div className="hidden sm:flex">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button
              type="button"
              onClick={() => alert("Sing Out Succes")}
              className="outline_btn"
            >
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                src="/me.jpg"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                onClick={() => alert("Profile")}
              />
            </Link>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
