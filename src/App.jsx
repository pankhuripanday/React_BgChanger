
import { useState } from "react"


function App() {
  const [color, setColor] = useState("#263849")

  return (
    <div className="w-full h-screen duration-1000"
    style={{backgroundColor: color}}
    >
      <div className="flex justify-center w-full h-screen pt-28">
      <h1><b>React Project : Background Color Changer</b></h1>
      
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white shadow-lg rounded-3xl">
          <button
          onClick={() => setColor("#a2a8d3")}
          className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
          style={{backgroundColor: "#a2a8d3"}}
          >Lavender</button>
          <button
          onClick={() => setColor("#b32c50")}
          className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
          style={{backgroundColor: "#b32c50"}}
          >Red</button>
          <button
          onClick={() => setColor("#7fa99b")}
          className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
          style={{backgroundColor: "#7fa99b"}}
          >Green</button>
          <button
          onClick={() => setColor("#a96851")}
          className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
          style={{backgroundColor: "#a96851"}}
          >Brown</button>
          <button
          onClick={() => setColor("#BC8F8F")}
          className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
          style={{backgroundColor: "#BC8F8F"}}
          >RosyBrown</button>
          <button
          onClick={() => setColor("#21243d")}
          className="px-4 py-1 text-white rounded-full shadow-lg outline-none"
          style={{backgroundColor: "#21243d"}}
          >Indigo</button>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default App