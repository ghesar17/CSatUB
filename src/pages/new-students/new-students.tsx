import Navbar from "../../components/navbar.tsx";
import Sidebar from "../../components/sidebar.tsx";
import NewStudentsMain from "../../components/new-students/new-students-main.tsx";

const NewStudents = () => {
  return (
    <>
      {" "}
      <Navbar />
      <Sidebar />
      <NewStudentsMain />
    </>
  );
};
export default NewStudents;
