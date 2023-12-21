import React, { useRef, useEffect, useState } from 'react'
import './slider.scss'
import { motion } from 'framer-motion'
import images from '../../Assets/data/dataSlider'

const Slider = () => {

  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, [])

  return (
    <div className='carousel'>
      <motion.div
        ref={slider}
        className="slider"
      >
        <h1>
          Glory Hall
        </h1>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className='inner-slider'>
          {images.map(image => {
            return (
              <motion.div className='item' key={image} 
              whileTap={{ cursor: "grabbing" }}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
        <p>
          <span>AC Milan,</span> one of the most storied football clubs
           in the world, has seen its fair share of legendary players 
           grace the San Siro over the years. Among these luminaries,
          a few names stand out as true icons of the Rossoneri. 
          <span>Paolo Maldini,</span> the epitome of class and consistency, 
          stands at the pinnacle of this list. The Italian defender's
           incredible 25-year career with AC Milan showcased 
           unparalleled skill, leadership, and loyalty, making him 
           the embodiment of the club's spirit.
           <br/>Alongside Maldini, the likes of 
          <span> Kaka, Andrea Pirlo, Clarence Seedorf, Gennaro Gattuso, 
            Andriy Shevchenko, Gullit, RijkAard, Ronaldinho, and Alessandro Nesta </span> 
            have left an indelible mark on AC Milan's history. Kaka, 
            the Brazilian playmaker, was the creative force behind 
            Milan's success, winning the <span>Ballon d'Or in 
            2007.</span> Pirlo,
             with his metronomic passing and vision, orchestrated the 
             midfield, while Seedorf added flair and experience. 
             Gattuso's tenacity in the heart of the midfield became 
             symbolic of the club's fighting spirit.

             <br/>Upfront, Shevchenko's goal-scoring prowess and Ronaldinho's 
          dazzling skills illuminated the San Siro. In defense, 
          Alessandro Nesta's immaculate positioning and ability to 
          read the game made him one of the greatest defenders of his 
          generation. Together, these legends ensured AC Milan's 
          dominance in Italian and European football and established an 
          enduring legacy that continues to inspire new generations of 
          Rossoneri faithful.

          In the annals of AC Milan's history, these legends have etched 
          their names with golden letters. Their passion, skill, and
           unwavering commitment to the club have not only made them 
           icons but also an integral part of the rich tapestry of 
           AC Milan's storied past, a history that continues to 
           shape the club's future aspirations.
        </p>
      </motion.div>

    </div>
  )
}

export default Slider