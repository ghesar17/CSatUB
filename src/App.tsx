import Home from "./pages";
import NewStudents from "./pages/new-students/new-students.tsx";
import Undergraduates from "./pages/undergraduates/undergraduates.tsx";
import Undergraduates115 from "./pages/undergraduates/undergraduates-115.tsx";
import Graduates from "./pages/graduates.tsx";
import Faq from "./pages/faq.tsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Undergraduates116 from "./pages/undergraduates/undergraduates-116.tsx";
import Undergraduates220 from "./pages/undergraduates/undergraduates-220.tsx";
import Undergraduates250 from "./pages/undergraduates/undergraduates-250.tsx";
import NewStudentsAcademicInformation from "./pages/new-students/new-students-academic-information.tsx";
import NewStudentsCampusLife from "./pages/new-students/new-students-campus-life.tsx";
import NewStudentsStudentClubs from "./pages/new-students/new-students-student-clubs.tsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={"/new-students"} element={<NewStudents />} />
          <Route
            path={"/new-students/academic-information"}
            element={<NewStudentsAcademicInformation />}
          />
          <Route
            path={"/new-students/campus-life"}
            element={<NewStudentsCampusLife />}
          />
          <Route
            path={"/new-students/student-clubs"}
            element={<NewStudentsStudentClubs />}
          />
          <Route path={"/undergraduates"} element={<Undergraduates />} />
          <Route path={"/undergraduates/115"} element={<Undergraduates115 />} />
          <Route path={"/undergraduates/116"} element={<Undergraduates116 />} />
          <Route path={"/undergraduates/220"} element={<Undergraduates220 />} />
          <Route path={"/undergraduates/250"} element={<Undergraduates250 />} />
          <Route path={"/graduates"} element={<Graduates />} />
          <Route path={"/faq"} element={<Faq />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
