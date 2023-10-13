import React from 'react'
import TeamItem from '@/components/team/TeamItem';


const Team = () => {
    const teams = [
        {
          name: 'John Celestial',
          position: 'Team Lead',
          image_path: '/../public/img/john1.jpeg',
          facebook: '#',
          twitter: '#',
          instagram: '#',
    
        },
        {
          name: 'Holroyd Apiag',
          position: 'Team Lead',
          image_path: '/../public/img/roy1.jpeg',
          facebook: '#',
          twitter: '#',
          instagram: '#',
    
        },
        {
          name: 'Jude Nicolasora',
          position: 'Team Lead',
          image_path: '/../public/img/jude.jpeg',
          facebook: '#',
          twitter: '#',
          instagram: '#',
    
        },
        {
          name: 'Primo Dionson',
          position: 'Software Engineer',
          image_path: '/../public/img/jude.jpg',
          facebook: '#',
          twitter: '#',
          instagram: '#',
    
        },
        {
            name: 'Jeff Acain',
            position: 'Software Engineer',
            image_path: '/../public/img/jude-1.jpg',
            facebook: '#',
            twitter: '#',
            instagram: '#',
      
          },
    ]

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: '600px'}}>
                    <p className="fw-medium text-uppercase text-primary mb-2">Our Team</p>
                    <h1 className="display-5 mb-5">Dedicated Team Members</h1>
                </div>
                <TeamItem teams={teams} />
            </div>
        </div>
    );
}

export default Team