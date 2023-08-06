import CoursesSidebar from "../../components/undergraduates/courses-sidebar.tsx";
import Course115 from "../../components/undergraduates/course-115.tsx";
import Layout from "../../components/layout.tsx";
import Course115RightSidebar from "../../components/undergraduates/course-115-right-sidebar.tsx";

const Undergraduates115 = () => {
  return (
    <>
      <Layout
        lowersidebar={<CoursesSidebar />}
        rightsidebar={<Course115RightSidebar />}
        main={<Course115 />}
      />
    </>
  );
};
export default Undergraduates115;
