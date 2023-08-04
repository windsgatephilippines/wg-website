import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const FeatureRight = () => {
    return (
        <>
            <p className="fw-medium text-uppercase text-primary mb-2">Why Choosing Us!</p>
            <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="row gy-4">
                <div className="col-12">
                    <div className="d-flex">
                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                            <FontAwesomeIcon className="text-white" size="lg" icon={faCheck} />
                        </div>
                        <div className="ms-4">
                            <h4>Experienced Workers</h4>
                            <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                dolore erat amet</span>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-flex">
                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                            <FontAwesomeIcon className="text-white" size="lg" icon={faCheck} />
                        </div>
                        <div className="ms-4">
                            <h4>Reliable Industrial Services</h4>
                            <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                dolore erat amet</span>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="d-flex">
                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                            <FontAwesomeIcon className="text-white" size="lg" icon={faCheck} />
                        </div>
                        <div className="ms-4">
                            <h4>24/7 Customer Support</h4>
                            <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                dolore erat amet</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FeatureRight