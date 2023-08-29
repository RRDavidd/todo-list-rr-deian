'use client'

import { useState } from "react";

export default function List() {
  const [change, setChange] = useState<string>("");
  //This state is like this to check if it should have a checkbox
  const [items, setItems] = useState<{ text: string; hasCheckbox: boolean }[]>([
    { text: "", hasCheckbox: false },
  ]);

  //Adding a new item when enter is pressed and setting hasCheckbox to true
  const addNewItem = () => {
    setItems([...items, { text: change, hasCheckbox: true }]);
    setChange("");
  };

  //Handling the change in the input field
  const handleChange = (e: any) => {
    setChange(e.target.value);
  };

  //Check if enter key is pressed
  const handleOnKeyDown = (e: any) => {
    if (e.key === "Enter") {
      addNewItem();
    }
  };

  //Check if the button was pressed
  const handleMouseClick = (e: any) => {
    e.preventDefault();
    addNewItem();
  };

  return (
    <div>
      <p className="text-slate-400">{change}</p>
      <ul>
        {items.map((item, index) => (
          <div key={index}>
            {item.hasCheckbox && (
              <input type="checkbox" id={`item-${index}`} />
            )}
            <label htmlFor={`item-${index}`} className="text-black ml-2">
              {item.text}
            </label>
          </div>
        ))}
      </ul>
      <input
        onKeyDown={handleOnKeyDown}
        onChange={handleChange}
        value={change}
        className="text-black w-full mt-2 px-2 py-1 rounded-sm"
      />
      <a
        className="mt-2 hover:cursor-pointer transition-all inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        onClick={handleMouseClick}
      >
        Add something TODO
      </a>
    </div>
  );
}