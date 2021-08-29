import React, { useState } from 'react';
import {  useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { CounterButton } from '../CounterButton';
import { CongratulationsMessage} from '../CongratulationsMessage';
import { Greeting } from '../Greeting';

export const CounterButtonPage = () => {
    
    const location = useLocation();
    const startingValue = parse(location).startingValue;
    const[numberOfClicks, setNumberOfClicks] = useState(startingValue);

    const[hideMessage, setHideMessage] = useState(false);

    const increment = () => setNumberOfClicks(numberOfClicks + 1);
  
    return (
        <>
      
        <h1> The counter button Page</h1>
            {hideMessage
              ? null
              : <CongratulationsMessage 
              numberOfClicks={numberOfClicks} 
              threshold = {10}
              onHide={() => setHideMessage(true)}
              />
            }
          
          <CounterButton onIncrement = {increment} numberOfClicks={numberOfClicks}/>
       </>
    );
 }