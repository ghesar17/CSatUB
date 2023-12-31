import Navbar from "../../components/navbar.tsx";
import Sidebar from "../../components/sidebar.tsx";
import CoursesSidebar from "../../components/undergraduates/courses-sidebar.tsx";

const Undergraduates = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <CoursesSidebar />
    </>
  );
};
export default Undergraduates;
