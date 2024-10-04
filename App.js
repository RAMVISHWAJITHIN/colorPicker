import React from "react"
import { createRoot } from 'react-dom/client'
import ColorPicker from "./src/components/ColorPicker";

function App() {
    return (
       <>
       <ColorPicker/> 
       
      
       </>
    );
}

const container = document.getElementById('root');
 const root = createRoot(container); 
root.render(<App tab="home" />)
