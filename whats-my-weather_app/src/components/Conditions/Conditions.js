import React from 'react';
import classes from './Conditions.module.css'
const conditions = (props) => {
   return (
       <div className={classes.Wrapper}>
           {props.error && <small className={classes.Small}>Please enter a valid city.</small>}
           {props.error && <small className={classes.Small}>Please your mood.</small>}
           {props.loading && <div className={classes.Loader} />}
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description} You mood is {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
   )
}
export default conditions;