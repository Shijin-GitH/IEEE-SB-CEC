import React ,{useState, useEffect}from 'react'
import "./ExecomPic.css"
import {Blurhash} from 'react-blurhash';



function ExecomPic(props) {

    const [imageLoaded, setimageLoaded] = useState(false)

useEffect(()=>{
      const img = new Image()
      img.onload = () =>{
        setimageLoaded(true)
      }
      img.src = props.link;
},[props.link])


    return (
       
    
        <div className='execom-tile col'>
            <div className='execom-pic'>


              <>
              {!imageLoaded && (
            <Blurhash
            hash="PHH2Zcx[00xtH=Rjkqj=00ae_Nae.8a#Rjt7.AsqrWozNHs:aKWB"
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
            />
        )}
            {imageLoaded && (
                 <img src={props.link} alt='execom-pic' />
            )}

              </>

               
            </div>
            <div className="execom-name-box">
                <center>
                     <p >{props.position}</p>
                    <h3 >{props.name}</h3>
                </center>
            </div>
        </div>

    )
}

export default ExecomPic