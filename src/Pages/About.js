import React from 'react'
import styles from "./Styles/About.module.css"
import Heading from '../Components/Heading/Heading'
import Sidetitle from '../Components/Sidetitle/Sidetitle'
function About() {
  return (
    <div data-aos="fade-up" className={styles.body}>
       <Heading data-aos="fade-up" title="ABOUT"/>
       <div data-aos="fade-up" className={styles.box}></div>
      <div data-aos="fade-up" className={styles.content}><p>IEEE Student Branch College of Engineering Chengannur was formed in mid-1997, with the goal of keeping the students in touch with advancing technology. It is equipped with an IEEE library that was inaugurated in December 1999 and currently functions as the headquarters of IEEE SB CEC. The Student Branch comes under the Kochi Hub of IEEE Kerala Section and is one of the most active Student Branches in the country. IEEE SB CEC has made numerous contributions to its student community that has received widespread recognition across the globe and is the first Student Branch in the Asia-Pacific Region to establish a Women in Engineering Affinity Group.</p>

</div>
<Sidetitle title="ABOUT"/>
      
    </div>
  )
}

export default About
