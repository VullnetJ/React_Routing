import React from 'react';

export const Greeting = ({name, numberOfMessages}) => {
    // const {name, numberOfMessages} = props;
  
    if (!name) return null;

    let isMorning = (new Date()).getHours < 12;
    let greetingHeader = isMorning
    ? <h3>Good Morning {greetingHeader}!</h3>
    : <h3>Good Morning {greetingHeader}!</h3>;
    return (//isMorning
        <>
            {greetingHeader}
            {numberOfMessages=== 0
            ? null
            : <p> You have {numberOfMessages} messsages</p>}
        </>
    )

    //   ? (
    //     <>
    //         <h3> Good Morning</h3> 
    //         <p> You have 5 new messages</p>
    //     </>
    //     )    
    //   : (
    //     <>
    //         <h3>Good evening</h3>
    //         <p> You have 15 new messages</p>
    //     </>
    //     );

      // or if is evening will return this 
      // either can use with React.Fragment or with <>
      // if is Morning will return this, we can wrap in a div or better use React Fragment
}
