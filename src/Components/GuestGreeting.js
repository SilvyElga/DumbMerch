import React, {useEffect} from "react";

export default function GuestGreeting () {

    useEffect(() => {
        console.log('Guest Greeting Component Did Mount');
        return () => {
            console.log ('Guest Greeting Component Will Mount');
        }
    }, []);

    return (
        <div className="warning pg-dark"></div>
    )
    }

    