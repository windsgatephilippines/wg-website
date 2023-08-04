import Carousel from '@/components/carousel/Carousel';
import About from '@/components/about/About';
import Feature from '@/components/feature/Feature';
import FeatureRightHome from '@/components/featureRightHome/FeatureRightHome';
import FeatureTeam from '@/components/featureTeam/FeatureTeam';
import ServicesHome from '@/components/services/ServicesHome';
import Team from '@/components/team/Team';
import 'animate.css';


export default function Home() {

  const services = [
    {
      name: 'IT SERVICES',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
      image_path: '/../public/img/service-1.jpg'
    },
    {
      name: 'BIOMETRICS SYSTEM',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
      image_path: '/../public/img/service-2.jpg'
    },
    {
      name: 'SOFTWARE CUSTOMIZATION',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
      image_path: '/../public/img/service-3.jpg'
    },
  ];

  const teams = [
    {
      name: 'Rob Miller',
      position: 'CEO & Founder',
      image_path: '/../public/img/team-1.jpg',
      facebook: '#',
      twitter: '#',
      instagram: '#',

    },
    {
      name: 'Adam Crew',
      position: 'Project Manager',
      image_path: '/../public/img/team-2.jpg',
      facebook: '#',
      twitter: '#',
      instagram: '#',

    },
    {
      name: 'Peter Farel',
      position: 'Software Engineer',
      image_path: '/../public/img/team-3.jpg',
      facebook: '#',
      twitter: '#',
      instagram: '#',

    },
  ]
  return (
   <>
      <Carousel></Carousel>
      <About></About>
      <div className='container-fluid facts my-5 p-5'>
        <div className="container">
          <Feature featureRight={<FeatureRightHome />} />
        </div>
      </div>
      <FeatureTeam />
      <ServicesHome services={services} />
      <Team teams={teams}/>
   </>
  )
}
function componentDidMount() {
  throw new Error('Function not implemented.');
}

