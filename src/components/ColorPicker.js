import React, { useState } from "react";

function ColorPicker(props) {
  const [Color, setColor] = useState();
  function handleColor(e) {
    setColor(e.target.value);
  }
  return (
    <>
      <div className="mt-56 flex items-center justify-center">
        <div>
          <h1 className="mb-5 font-serif text-5xl font-bold">ColorPicker</h1>
          <div className="h-80 w-96 rounded-3xl bg-gray-600 p-10" style={{ backgroundColor: Color }}>
            <div className="mt-52">
              <label className="font-serif text-xl font-bold">Select a Color:{Color}</label>
              <input
                type="color"  value={Color} onChange={handleColor} className="ml-4 text-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorPicker;
