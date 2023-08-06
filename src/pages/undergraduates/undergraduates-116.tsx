import CoursesSidebar from "../../components/undergraduates/courses-sidebar.tsx";
import Layout from "../../components/layout.tsx";
import Course116 from "../../components/undergraduates/course-116.tsx";
import Course116RightSidebar from "../../components/undergraduates/course-116-right-sidebar.tsx";

const Undergraduates116 = () => {
  return (
    <>
      <Layout
        main={<Course116 />}
        lowersidebar={<CoursesSidebar />}
        rightsidebar={<Course116RightSidebar />}
      />
    </>
  );
};
export default Undergraduates116;
