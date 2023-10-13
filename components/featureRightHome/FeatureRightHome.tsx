import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FeatureRightHome = () => {
  return (
    <>
      <h1 className="display-5 text-white mb-4">Why Choosing Us?</h1>
      <p className="mb-4">Job Responsibilities</p>
      <div className="row gy-4">
        <div className="col-12">
          <div className="d-flex">
            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
              <FontAwesomeIcon
                className="text-white"
                size="lg"
                icon={faCheck}
              />
            </div>
            <div className="ms-4">
              <h4 className="text-white">Develop new software programs.</h4>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex">
            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
              <FontAwesomeIcon
                className="text-white"
                size="lg"
                icon={faCheck}
              />
            </div>
            <div className="ms-4">
              <h4 className="text-white">
                Maintain and improve existing application.
              </h4>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex">
            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
              <FontAwesomeIcon
                className="text-white"
                size="lg"
                icon={faCheck}
              />
            </div>
            <div className="ms-4">
              <h4 className="text-white">
                Design and update software database.
              </h4>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex">
            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
              <FontAwesomeIcon
                className="text-white"
                size="lg"
                icon={faCheck}
              />
            </div>
            <div className="ms-4">
              <h4 className="text-white">
                Test and maintain software products to ensure strong
                functionality and optimization.
              </h4>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex">
            <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
              <FontAwesomeIcon
                className="text-white"
                size="lg"
                icon={faCheck}
              />
            </div>
            <div className="ms-4">
              <h4 className="text-white">
                Must learn Japanese language provided by the company to be able
                to develop Japanese localized software.
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal modal-video fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h3 className="modal-title" id="exampleModalLabel">
                Youtube Video
              </h3>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="ratio ratio-16x9">
                <iframe
                  className="embed-responsive-item"
                  src=""
                  id="video"
                  allowFullScreen={true}
                  allow="autoplay"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureRightHome;
