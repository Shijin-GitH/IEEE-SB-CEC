import React from 'react'
import ExecomPic from '../Components/Execom/ExecomPic'
import Heading from '../Components/Heading/Heading'
import Line from '../Components/Line/Line'
import './Styles/Execom.css'
import Sidetitle from '../Components/Sidetitle/Sidetitle'
import AOS from 'aos'

AOS.init({
  duration: 1000
})

function Execom() {

  return (
    <div className='execom container-fluid'>
      <div className='m-5'>
        <div className='row'>
        <Heading title='EXECOM' />
        <Line />
        </div>
        <Heading title='IEEE SB CEC' />
         <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic name="Krishna Ajith" position='Chairperson' link="https://cecieee.org/images/ExCom/Krishna.png"/>
          <ExecomPic position="Vice-Chairperson" name='Sajad S' link="https://cecieee.org/images/ExCom/Sajad.png"/>
          <ExecomPic position="Secretary" name='Heba Anna Philip' link="https://cecieee.org/images/ExCom/Heba.png"/>
          </div>
        <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic position="Treasurer" name='Abel C Alexander' link="https://cecieee.org/images/ExCom/Abel.png"/>
          <ExecomPic position="Joint-Secretary" name='Kripa Maria Mathews' link="https://cecieee.org/images/ExCom/Kripa.png"/>
          <ExecomPic position="Link-Representative" name='Vishnu Pranav K S' link="https://cecieee.org/images/ExCom/Vishnu_LINK.png"/>
         </div>
         <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic position="EC Coordinator" name='Sreerag N' link="https://cecieee.org/images/ExCom/Sreerag.png"/>
          <ExecomPic position="Webmaster" name='Danish Roshan' link="https://cecieee.org/images/ExCom/Danish.png"/>
          <ExecomPic position="Membership Development Chair" name='Ashitha Jacob' link="https://cecieee.org/images/ExCom/Ashitha.png"/>
         </div>
      <Sidetitle title="EXECOM"/>
      </div>
      <div className='m-5'>
        <div className='row'>
        <Heading title='EXECOM' />
        <Line />
        </div>
        <Heading title='CS Chapter' />
         <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic name="George Mammen" position='Chairperson' link="https://cecieee.org/images/ExCom/George.png"/>
          <ExecomPic position="Vice-Chairperson" name='Suzanne James' link="https://cecieee.org/images/ExCom/Suzanne.png"/>
          <ExecomPic position="Secretary" name='Gowri Mungath' link="https://cecieee.org/images/ExCom/Gowri.png"/>
          </div>
      </div>
      <div className='m-5'>
        <div className='row'>
        <Heading title='EXECOM' />
        <Line />
        </div>
        <Heading title='IMS Chapter' />
         <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic name="Mohammed Shaheer V K" position='Chairperson' link="https://cecieee.org/images/ExCom/Shaheer.png"/>
          <ExecomPic position="Vice-Chairperson" name='Malavika P Nair' link="https://cecieee.org/images/ExCom/Malavika.png"/>
          <ExecomPic position="Secretary" name='Soorya Pankaj' link="https://cecieee.org/images/ExCom/Soorya.png"/>
          </div>
      </div>
      <div className='m-5'>
        <div className='row'>
        <Heading title='EXECOM' />
        <Line />
        </div>
        <Heading title='PES Chapter' />
         <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic name="Ashish Kurian" position='Chairperson' link="https://cecieee.org/images/ExCom/Ashish.png"/>
          <ExecomPic position="Vice-Chairperson" name='Nandana Suresh' link="https://cecieee.org/images/ExCom/Nandana.png"/>
          <ExecomPic position="Secretary" name='Vishnu R' link="https://cecieee.org/images/ExCom/Vishnu_PES.png"/>
          </div>
      </div>
      <div className='m-5'>
        <div className='row'>
        <Heading title='EXECOM' />
        <Line />
        </div>
        <Heading title='RAS Chapter' />
         <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic name="Ajith V Anil" position='Chairperson' link="https://cecieee.org/images/ExCom/Ajith.png"/>
          <ExecomPic position="Vice-Chairperson" name='Aryananda S' link="https://cecieee.org/images/ExCom/Aryananda.png"/>
          <ExecomPic position="Secretary" name='Vishu G Sabu' link="https://cecieee.org/images/ExCom/Vishu.png"/>
          </div>
      </div>
      <div className='m-5'>
        <div className='row'>
        <Heading title='EXECOM' />
        <Line />
        </div>
        <Heading title='WIE Chapter' />
         <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic name="Vyshnavi Nair" position='Chairperson' link="https://cecieee.org/images/ExCom/Vyshnavi.png"/>
          <ExecomPic position="Vice-Chairperson" name='Gouri M Menon' link="https://cecieee.org/images/ExCom/Gouri.png"/>
          <ExecomPic position="Secretary" name='Alby Johnson' link="https://cecieee.org/images/ExCom/Alby.png"/>
          </div>
      </div>
      <div className='m-5'>
        <div className='row'>
        <Heading title='EXECOM' />
        <Line />
        </div>
        <Heading title='IAS Chapter' />
         <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic name="Vishnu M" position='Chairperson' link="https://cecieee.org/images/ExCom/Vishnu_IAS.png"/>
          <ExecomPic position="Vice-Chairperson" name='Swathy Sekhar' link="https://cecieee.org/images/ExCom/Swathi.png"/>
          <ExecomPic position="Secretary" name='Yadhu R Nair' link="https://cecieee.org/images/ExCom/Yadhu.png"/>
          </div>
      </div>
      <div className='m-5'>
        <div className='row'>
        <Heading title='EXECOM' />
        <Line />
        </div>
        <Heading title='IAS Chapter' />
         <div className='row execom-row' data-aos="fade-up" data-aos-delay="100" >
          <ExecomPic name="Muhammed Iqbal" position='SIGHT Coordinator' link="https://cecieee.org/images/ExCom/Iqbal.png"/>
          </div>
      </div>
    </div>
  )
  
}

export default Execom
