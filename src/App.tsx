import Home from "./pages";
import NewStudents from "./pages/new-students/new-students.tsx";
import Undergraduates from "./pages/undergraduates/undergraduates.tsx";
import Undergraduates115 from "./pages/undergraduates/undergraduates-115.tsx";
import Graduates from "./pages/graduates.tsx";
import Faq from "./pages/faq.tsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/new-students"} element={<NewStudents />} />
          <Route path={"/undergraduates"} element={<Undergraduates />} />
          <Route path={"/undergraduates/115"} element={<Undergraduates115 />} />
          <Route path={"/graduates"} element={<Graduates />} />
          <Route path={"/faq"} element={<Faq />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
