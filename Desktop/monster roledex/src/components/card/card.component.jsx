import React from 'react'

import "./card.style.css"

export const Card = (props) => (
         <div className="card-container col-xs-12 col-md-4 col-lg-3 col-xl-3">
           <div className="classwithPad">
             <img
               alt="monster"
               src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
             />
             <h1>{props.monster.name}</h1>
             <p>{props.monster.email}</p>
           </div>
         </div>
       );
