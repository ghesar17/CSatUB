import Navbar from "../../components/navbar.tsx";
import Sidebar from "../../components/sidebar.tsx";
import UndergraduatesCoursesSidebar from "../../components/undergraduates/undergraduates-courses-sidebar.tsx";

const Undergraduates = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <UndergraduatesCoursesSidebar />
    </>
  );
};
export default Undergraduates;
