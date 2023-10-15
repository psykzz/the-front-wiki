
'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

export const RedirectCounter = ({waitTime}: {waitTime: number}) => {
  const nav = useRouter();
  const [timeleft, setTimeleft] = React.useState(waitTime)
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeleft(time => {
        if (time < 1) {
            clearInterval(timer);
        }
        return time - 1
    });
    }, 1000);
    return () => clearInterval(timer);
  } ,[]);

  if (timeleft <= 0) {
     nav.push('https://wiki.playthefront.com/wiki/wiki_en.html')
     return "now"
  }

  return `in ${timeleft} seconds...`

}
