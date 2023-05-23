import React from 'react'
import "./Styles/Home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Aos from 'aos';
function Home() {

  window.addEventListener('load', function() {
    setTimeout(function() {
      document.querySelector('.loader-wrapper').style.display = 'none';  
      document.querySelector('body').style.backgroundColor = '';
    }, 3000);
  });
  
Aos.init();

  return (
    <div className='home loaded'>
      <div className="homebody">
      </div>
      <div  className='container-fluid'>
        <div className="row">
        <div data-aos="fade-up" className='col-lg-12'>
            <div className="m-v-box">
              <div>
              <h1>What is IEEE</h1>
              </div>
              <p>IEEE is a global association and organization of professionals working toward the development, implementation and maintenance of technology-centered products and services.</p>
            </div>
          </div>
          <div data-aos="fade-up" className='col-lg-12'>
            <div className="m-v-box">
              <div>
              <h1>MISSION</h1>
              </div>
              <p>IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contributions of technology and of technical professionals in improving global conditions.</p>
            </div>
          </div>
         <div data-aos="fade-up" className="col-lg-12">
         <div className="m-v-box">
            <div>
            <h1>VISION</h1>
            </div>
            <p>
            IEEE’s core purpose is to foster technological innovation and excellence for the benefit of humanity.            </p>
          </div>
        </div>
          <div data-aos="fade-up" className="col-lg-12">
            <div className='m-v-box'>
              <div>
                <h1>IEEE SB CEC</h1>
              </div>
              <p>IEEE Student Branch College of Engineering Chengannur was formed in mid-1997, with the goal of keeping the students in touch with advancing technology. It is equipped with an IEEE library that was inaugurated in December 1999 and currently functions as the headquarters of IEEE SB CEC. The Student Branch comes under the Kochi Hub of IEEE Kerala Section and is one of the most active Student Branches in the country. IEEE SB CEC has made numerous contributions to its student community that has received widespread recognition across the globe and is the first Student Branch in the Asia-Pacific Region to establish a Women in Engineering Affinity Group.</p>
          </div>
         </div>
         <div className='heading-new'>
           <h2>Our IEEE Family</h2>
         </div>
         <div className='m-5 chapter-logo'>
          <div className='col-lg-15 chapter-row' data-aos="fade-up">
            <img src='https://cecieee.org/images/society/cs-logo.png' className='nav-link' alt=''></img>
            <img src='https://cecieee.org/images/society/ras-logo.png' className='nav-link' alt=''></img>
            <img src='https://cecieee.org/images/society/ias-logo.png' className='nav-link' alt=''></img>
            <img src='https://cecieee.org/images/society/wie-logo.png' className='nav-link' alt=''></img>
          </div>
          <div className='col-lg-12 chapter-row' data-aos="fade-up">
            <img src='https://cecieee.org/images/society/pes-logo.png' className='nav-link' alt=''></img>
            <img src='https://cecieee.org/images/society/ims-logo.png' className='nav-link' alt=''></img>
            <img src='https://cecieee.org/images/society/sight-logo.png' className='nav-link' alt=''></img>
            <img src='https://cecieee.org/images/society/sscs-logo.png' className='nav-link' alt=''></img>
          </div>
         </div>
        <div className='bot-decor'>
          <div>IEEE SB CEC</div>
          <div>IEEE SB CEC</div>
          <div className='em-3'>IEEE SB CEC</div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Home
