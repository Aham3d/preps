"use client"
import React, {useState} from 'react'

const page = () => {
  const [marks, setMarks] = useState(80)

  const [user, setuser] = useState("Ahmed.")

  const [contact, setcontact] = useState("Contact Me")

  return (

    <div>

      <>

        <h1  className='font-bold text-xl'>my total marks are = {marks}</h1>
        <button onClick={() => {
          setMarks(22)
        }}
          className='bg-gray-500 px-5 py-2 rounded'>Update
        </button>

      </>

    </div>
  )
}

export default page; 
