"use client";
import Image from "next/image";
import "../styles/contact.css";
import Subscription from "../components/Subscription";
import { useState } from "react";

export default function Home() {
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
      <div className="px-4 py-6 mx-auto my-5 sm:px-0 text-center">
        <div className="inline-block rounded-full overflow-hidden">
          <Image
            src="/images/image-1.jpg"
            width={500}
            height={500}
            alt="Profile Picture"
            className="h-32 w-32 object-cover"
          />
        </div>
        <h2 className="text-2xl text-cyan-500 font-semibold mt-4">
          Margaret Smith
        </h2>
        <p className="text-gray-700 italic">
          Writing and spending all of my free time writing stories
        </p>
      </div>
      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button close"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
            <div className="app-contact">CONTACT INFO : +91 81 314 92 595</div>
          </div>
          <form onSubmit={onSubmit} className="screen-body-item">
            <div className="app-form">
              <div className="app-form-group">
                <input className="app-form-control" name="name" placeholder="NAME" required />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" name="email" placeholder="EMAIL" required />
              </div>
              <div className="app-form-group">
                <input className="app-form-control" name="contact" placeholder="CONTACT NO" required />
              </div>
              <div className="app-form-group message">
                <input className="app-form-control" name="message" placeholder="MESSAGE" required />
              </div>
              <div className="app-form-group buttons">
                <button type="submit" className="app-form-button">SEND</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Subscription />
    </>
  );
}
