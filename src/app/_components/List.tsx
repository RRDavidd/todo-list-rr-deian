'use client'
import { useState } from "react"

export default function List() {
  const [change, setChange] = useState<string>("");
  const [items, setItems] = useState<string[]>([""]);

  const addNewItem = () => {
    setItems([...items, change]);
    setChange("");
  }

  const handleChange = (e: any) => {
    setChange(e.target.value)
  }

  const handleOnKeyDown = (e:any) => {
    if(e.key === 'Enter') {
      addNewItem();
    }
  }

  const handleMouseClick = (e:any) => {
    e.preventDefault()
    addNewItem();
  }


  return(
    <div>
        <p className="text-slate-400">{change}</p>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-black">
            {item}
          </li>
        ))}
      </ul>
      <input onKeyDown={handleOnKeyDown} onChange={handleChange} value={change} className="text-black w-full mt-2 px-2 py-1 rounded-sm"/>
      <a
        className="mt-2 hover:cursor-pointer transition-all inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        onClick={handleMouseClick}
      >
        Add something TODO
      </a>
    </div>
  )
}