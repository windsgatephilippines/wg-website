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
import data from '@/constants/data'


export default function Home() {  
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
      <ServicesHome services={data.services} />
      <Project projects={data.projects} />
      <Team teams={data.teams}/>
      <Testimonial testimonials={data.testimonials}/>
   </>
  )
}

function componentDidMount() {
  throw new Error('Function not implemented.');
}

