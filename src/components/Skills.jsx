/* Skills 🎭 src/components/Skills.jsx */

import React, { useState } from 'react'
import traits from '../mocks/traits.json'
import ArrowUp from '../assets/icons/arrowUp.svg'
import ArrowDown from '../assets/icons/arrowDown.svg'

console.log(traits)
// Façon mentor.

// const Skills = ({ titleTrait, skillTrait }) => {
//    const [trigger, isTrigger] = useState(false)
//    return (
//       <section className="K-Skills">
//          <button className="K-Skills__article__statement buttonSkills" onClick={() => isTrigger(!trigger)}>
//             <h3 className="titleButton">{titleTrait}</h3>
//             <img className={trigger ? 'arrowUp' : 'arrowDown'}
//                src={ArrowDown}
//                alt="Flèche en bas"
//                />
//          </button>
//          {trigger && (
//             <div className="K-Skills__article__info">
//                <p>{skillTrait}</p>
//             </div>
//          )}
//       </section>
//    )
// }


// Ma façon.

const Skills = () => {
   /* DropDown 🏹 Disparador */
   const [trigger, isTrigger] = useState(false)
   const triggerStatus = () => {
      isTrigger(!trigger)
   }

   const traitsAbout = traits.map((trait) => (
      <article className="K-Skills__article" >
         <div className="K-Skills__article__statement" onClick={triggerStatus}>
            <h3>{trait.titleTrait}</h3>
            {trigger ? (
               <img src={ArrowUp} alt="Flèche en haut" />
            ) : (
               <img src={ArrowDown} alt="Flèche en bas" />
            )}
         </div>
         <div className="K-Skills__article__info">
            {trigger && <p>{trait.skillTrait}</p>}
         </div>
      </article>
   ))
   return <section className="K-Skills">{traitsAbout}</section>
}

export default Skills
