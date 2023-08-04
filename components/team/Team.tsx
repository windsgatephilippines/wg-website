import React from 'react'
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TeamItem from './TeamItem';

const Team = ({teams}) => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow animate__animated animate__fadeInUp" data-wow-delay="0.3s" style={{maxWidth: '600px'}}>
                    <p className="fw-medium text-uppercase text-primary mb-2">Our Team</p>
                    <h1 className="display-5 mb-5">Dedicated Team Members</h1>
                </div>
            
                <TeamItem teams={teams}/>
            
            </div>
        </div>
    );
}

export default Team