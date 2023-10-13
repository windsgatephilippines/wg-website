"use client";
import React from "react";
import Image from "next/image";
import ServiceItem from "./ServiceItem";
import ReactWOW from "react-wow";

const ServicesHome = ({ services }: any) => {
  return (
    <>
      <div className="container-fluid bg-dark pt-5 my-5 px-0">
        <ReactWOW animation="fadeIn">
          <div
            className="text-center mx-auto mt-5 wow animate__animated animate__fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="fw-medium text-uppercase text-primary mb-2">
              Our Services
            </p>
            <h1 className="display-5 text-white mb-5">
              We Provide Best Software Development Services
            </h1>
          </div>
        </ReactWOW>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row gy-5 gx-4">
            <ServiceItem services={services} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHome;
