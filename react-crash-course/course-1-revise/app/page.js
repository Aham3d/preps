"use client"
import Header from "@/components/Header"
import {useState} from 'react'

const page = () => {
  const [user, setuser] = useState("Ahmed")

  const [message, setmessage] = useState("click me")
  return (
    <div>
      <Header user={user} />

      <button className="bg-gray-500 px-5 py-2 rounded"
        onClick={ () => {
          setmessage("clicked")
        }}
      >
        {message}
      </button>

    </div>
  )
}

export default page; 