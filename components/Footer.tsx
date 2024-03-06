import Link from 'next/link';
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-ctp-surface0 w-full px-8 py-4 rounded-full flex items-center justify-between font-medium text-lg">
      <Link href="/">
        <span className="">hongducdev.</span>
      </Link>
      <span className="text-ctp-overlay1">
        all rights reserved. © 2024
      </span>
    </footer>
  );
}

export default Footer