"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import PhoneIcon from "../../../public/whatsapp.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser"

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };


    emailjs.send(
      "service_7eik3tc",
      "template_8ehur1h",
      {
        to_name: "Ezechiel Huego",
        from_email: data.email,
        subject: data.subject,
        message: data.message

      },
      "liEyiqOY7Xj8SJOwu"

    )
      .then((reponse) => {
        e.target.email.value = "",
          e.target.subject.value = "",
          e.target.message.value = "",

          console.log(reponse);

      })
    // const JSONdata = JSON.stringify(data);
    // const endpoint = "/api/send";
    // // console.log(JSONdata);

    // // Form the request for sending data to the server.
    // const options = {
    //   // The method is POST because we are sending data.
    //   method: "POST",
    //   // Tell the server we're sending JSON.
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   // Body of the request is the JSON data we created above.
    //   body: JSONdata,
    // };

    // const response = await fetch(endpoint, options);
    // const resData = await response.json();

    // if (response.status === 200) {
    //   console.log("Message sent.");
    //   setEmailSubmitted(true);
    // }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className=" ">
        <h5 className="text-xl font-bold text-white my-2">
          {/* Let&apos;s Connect */}
          Connectons-nous
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          {/* I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you! */}
          Je suis actuellement à la recherche de nouvelles opportunités,
          ma boîte de réception est toujours ouverte.
          Que vous ayez une question ou que vous souhaitiez simplement dire bonjour,
          je suis disponible!  
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.github.com/Godani05">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ezéchiel-huego3b646a238">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link> 
          <div className="flex  justify-center items-center">
            <Link href="https://wa.me/+22557379276">
            <Image
              src={PhoneIcon}
              alt="phone"
              width={35}
              height={35}
            />  
            </Link>
          
            {/* <p className="text-[#ADB7BE]  max-w-md">+225-075-737-9276</p> */}
          
          </div>
        </div>  
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                {/* Your email */}
                Votre email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                {/* Subject */}
                Objet
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Juste pour dire bonjour!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Parlons-en..."
              />
            </div>
            <button
              type="submit"
              className="bg-blue-400 hover:bg-slate-800 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
