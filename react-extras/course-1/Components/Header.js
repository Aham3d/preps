import React from 'react'
import Link from 'next/link';

function Header(props) {
  return (
    <div className="bg-green-200 px-5 h-16 flex items-center justify-between">

      <h1>Ahamed</h1>
      <div className="flex gap-10">
        <Link href="/About">About</Link>
        <Link href="/Career">Career</Link>
        <Link href="/Blog">Blog</Link>
        <h4>{props.contact}</h4>
      </div>

    </div>
  )
}

export default Header;