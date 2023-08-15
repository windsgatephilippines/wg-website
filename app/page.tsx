import Carousel from '@/components/carousel/Carousel';
import About from '@/components/about/About';
import Feature from '@/components/feature/Feature';
import FeatureRightHome from '@/components/featureRightHome/FeatureRightHome';
import FeatureTeam from '@/components/featureTeam/FeatureTeam';
import ServicesHome from '@/components/services/ServicesHome';
import Team from '@/components/team/Team';
import 'animate.css';
import Testimonial from '@/components/testimonial/Testimonial';
import Project from '@/components/project/Project';


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
  const testimonials = [
    {
      name: 'Rob Miller',
      position: 'CEO & Founder',
      image_path: '/../public/img/testimonial-1.jpg',
      testimonial: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.'

    },
    {
      name: 'Adam Crew',
      position: 'Project Manager',
      image_path: '/../public/img/testimonial-2.jpg',
      testimonial: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.'

    },
    {
      name: 'Peter Farel',
      position: 'Software Engineer',
      image_path: '/../public/img/testimonial-3.jpg',
      testimonial: 'Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea clita.'

    },
  ]
  const projects = [
    {
      title: 'Rob Miller',
      image_path: '/../public/img/project-1.jpg',
    },
    {
      title: 'Adam Crew',
      image_path: '/../public/img/project-2.jpg',
    },
    {
      title: 'Peter Farel',
      image_path: '/../public/img/project-3.jpg',
    },
    {
      title: 'Adam Crew',
      image_path: '/../public/img/project-4.jpg',
    },
    {
      title: 'Peter Farel',
      image_path: '/../public/img/project-5.jpg',
    },
    {
      title: 'Peter Farel',
      image_path: '/../public/img/project-6.jpg',
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
      <Project projects={projects} />
      <Team teams={teams}/>
      <Testimonial testimonials={testimonials}/>
   </>
  )
}
function componentDidMount() {
  throw new Error('Function not implemented.');
}

