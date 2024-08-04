import {Navbar, Footer} from '../components';
import {Hero, About, Perks, Tle31} from '../sections';
const Page =()=>(
  <div className="mx-6">
    <Navbar/>
    <Hero/>
    <About/>
    <Perks/>
    <Tle31/>
    <Footer/>
  </div>
);
export default Page;
