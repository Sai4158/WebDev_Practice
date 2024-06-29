"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthLayout({ children }) {
  const navLinks = [
    { name: "Register", href: "/Register" },
    { name: "Login", href: "/Login" },
    { name: "Forgot Password", href: "/ForgotPassword" },
    { name: "Thar", href: "/thar" },
  ];

  const pathname = usePathname();

  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            className={`text-purple-800 text-6xl ${
              isActive ? "font-bold mr-4" : "text-blue-500 mr-4"
            }`}
            href={link.href}
            key={link.name}
          >
            {link.name}
            <br />
            <br />
          </Link>
        );
      })}
      {children}
    </div>
  );
}
