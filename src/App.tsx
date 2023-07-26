import Home from './pages'
import Main from './pages/main.tsx'
import './App.css'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';


const App = () => {



    return (
        <>
            <Router>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path={'/main'} element={<Main/>} />
            </Routes>
            </Router>
            </>
    )
}
export default App;
