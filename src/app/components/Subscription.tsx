"use client";

import { useState } from "react";
import "../styles/subscription.css";

export default function Navbar() {
    const [submit, setSubmit] = useState(false);
    const onSubmit = async (event: any) => {
  
      const ACCESS_KEY: any = process.env.NEXT_PUBLIC_ACCESS_KEY;
      event.preventDefault();
      const formData = new FormData(event.target);
      formData.append("access_key", ACCESS_KEY);
     
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
      if (res.success) {
        setSubmit(true);
      } else {
        return(alert("Something went wrong!"));
      }
  
    };
    
  return (

    <>
<div className="newsletter">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7">
                        <div className="section-title text-center">
                            <h2 className="text-blue-950">Follow My Way</h2>
                            <p>Get notified about updates and be the first to get early access to the new, safer, and smarter way to archive your files.</p>
                        </div>
                    </div>
                </div>
        
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-7">
                        <form onSubmit={onSubmit} className="newsletter-form">
                            <input type="email" name="email" placeholder="Enter your email..." required />
                            <button className="submit-button" type="submit">Subscribe Now</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}
