'use client'
import { useState } from "react"

export default function List() {
  const [change, setChange] = useState('')

  const handleChange = (e: any) => {
    console.log(e.target.value)
    setChange(e.target.value)
  }

  return(
    <div>
      <ul>
        <li className="text-slate-400">{change}</li>
      </ul>
      <input onChange={handleChange} className="text-black w-full mt-2 px-2 py-1 rounded-sm"/>
    </div>
  )
}