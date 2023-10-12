import React from 'react'
import Image from 'next/image';
import ReactWOW from 'react-wow';

const ServiceItem =  ({services}) => {
    // TODO: add delay for spinner if necessary
    // const random = Math.floor(Math.random() * 5 + 5) * 1000
    // await new Promise((resolve) => setTimeout(resolve,2));
    return (
        <>
        {services.map((item: Array<string>,index: number) => (
            <ReactWOW>
            <div tabIndex={index} className="col-md-6 col-lg-4 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                <div className="service-item">
                    <Image className="img-fluid" src={item.image_path} alt="service_image" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }} />
                    <div className="service-img">
                        <Image className="img-fluid" src={item.image_path}  width={408} height={408} alt="service_image" />
                    </div>
                    <div className="service-detail">
                        <div className="service-title">
                            <hr className="w-25" />
                            <h3 className="mb-0">{item.name}</h3>
                            <hr className="w-25" />
                        </div>
                        <div className="service-text">
                            <p className="text-white mb-0">{item.description}</p>
                        </div>
                    </div>
                    {/* <a className="btn btn-light" href="">Read More</a> */}
                </div>
            </div>
            </ReactWOW>
        ))}
        </>
    );
    
}

export default ServiceItem