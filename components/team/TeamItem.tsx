import React from "react";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,faTwitter,faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import ReactWOW from 'react-wow';

const TeamItem = ({teams}) => {
    return (
        <div className="row g-4">
            <ReactWOW>
            {teams.map((item: Array<object>,key: number) => (
                <div key={key} className="col-lg-4 col-md-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                    <Image className="img-fluid" src={item.image_path} alt="service_image" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                        <div className="d-flex">
                            <div className="flex-shrink-0 btn-square bg-primary" style={{width: '90px', height: '90px'}}>
                                <FontAwesomeIcon icon={faShare} className='text-white'/>
                            </div>
                            <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                                style={{height: '90px'}}>
                                <h5>{item.name}</h5>
                                <span className="text-primary">{item.position}</span>
                                <div className="team-social">
                                    <a className="btn btn-square btn-dark rounded-circle mx-1" href={item.facebook}>
                                        <FontAwesomeIcon icon={faFacebookF} className='text-white'/>
                                    </a>
                                    <a className="btn btn-square btn-dark rounded-circle mx-1" href={item.twitter}>
                                        <FontAwesomeIcon icon={faTwitter} className='text-white'/>
                                    </a>
                                    <a className="btn btn-square btn-dark rounded-circle mx-1" href={item.instagram}>
                                        <FontAwesomeIcon icon={faInstagram} className='text-white'/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </ReactWOW>
        </div>
    );
}

export default TeamItem