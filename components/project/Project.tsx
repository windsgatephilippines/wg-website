"use client";
import ProjectItem from "./ProjectItem";
import ReactWOW from "react-wow";

const Project = ({ projects }: any) => {
  return (
    <>
      <div className="container-fluid bg-dark pt-5 my-5 px-0">
        <ReactWOW animation="fadeIn">
          <div
            className="text-center mx-auto mt-5 animate__animated animate__fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="fw-medium text-uppercase text-primary mb-2">
              Our Projects
            </p>
            <h1 className="display-5 text-white mb-5">
              See What We Have Completed Recently
            </h1>
          </div>
        </ReactWOW>
        <ProjectItem projects={projects} />
      </div>
    </>
  );
};

export default Project;
