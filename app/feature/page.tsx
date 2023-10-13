'use client'
import PageHeader from '@/components/PageHeader'
import Feature from '@/components/feature/Feature'
import React from 'react'
import FeatureRight from '@/components/featureRight/FeatureRight'
import ReactWOW from 'react-wow'

const FeaturePage = () =>{
    const pageName = [
        'Home',
        'Pages',
        'Feature'
    ]
    return(
        <>
            <PageHeader pageName={pageName}></PageHeader>
            <div className="container-xxl py-5">
                <div className="container">
                    <ReactWOW animation="fadeInUp">
                    <div className="col-lg-6 animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                        <div className="position-relative me-lg-4">
                            <img className="img-fluid w-100" src="img/feature.jpg" alt="" />
                            <span
                                className="position-absolute top-50 start-100 translate-middle bg-white rounded-circle d-none d-lg-block"
                                style={{width: '120px', height: '120px'}}></span>
                            <button type="button" className="btn-play" data-bs-toggle="modal"
                                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                <span></span>
                            </button>
                        </div>
                    </div>
                    </ReactWOW>
                </div>
            </div>
        </>
    )
}

export default FeaturePage