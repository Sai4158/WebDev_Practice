import React from "react";
import Link from "next/link";

export default function AuthLayout({ children }) {
  // put all the links here
  const navLinks = [
    { name: "Register", href: "/Register" },
    { name: "Login", href: "/Login" },
    { name: "Forgot Password", href: "/ForgotPassword" },
    { name: "Thar", href: "/thar" },
  ];

  return (
    // theen use a map function to print out the links
    <div>
      {navLinks.map((link) => (
        <Link
          className="text-purple-700 text-6xl underline"
          href={link.href}
          key={link.name}
        >
          {link.name}
          <br /> <br />
        </Link>
      ))}

      {children}
    </div>
  );
}
