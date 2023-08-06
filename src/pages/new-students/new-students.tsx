import Layout from "../../components/layout.tsx";
import RightSideBar from "../../components/new-students/right-side-bar.tsx";
import LeftSideBar from "../../components/new-students/left-side-bar.tsx";
import Main from "../../components/new-students/main.tsx";

const NewStudents = () => {
  return (
    <>
      <Layout
        main={<Main />}
        rightsidebar={<RightSideBar />}
        lowersidebar={<LeftSideBar />}
      />
    </>
  );
};
export default NewStudents;
