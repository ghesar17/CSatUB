import React from 'react'
import Navbar from "./components/Navbar.tsx";

const App = () => {
    return (
        <>
            <body className="vh-100 background:linear-gradient(176deg,rgb(18,24,27) 50%,rgb(32,39,55) 100%">

            <div>
            <Navbar/>
            <h1 className="text-3xl font-bold underline">Hello World!</h1>
            </div>
            </body>
            </>
    )
}
export default App;
