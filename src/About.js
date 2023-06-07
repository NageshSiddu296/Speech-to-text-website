import React from "react";
import "./about.css";
const About = () => {
  return (
    <div>
      <div className="container">
        <div className="container_content">
          <div className="container_content_inner">
            <div className="title">
              <h1>About</h1>
            </div>
            <div className="par">
              <p>
                Welcome to our innovative Speech-to-Text Converter app! We are
                excited to bring you a powerful and intuitive tool that
                transforms spoken words into written text effortlessly. Whether
                you need to transcribe audio recordings, capture lecture notes,
                create accurate subtitles, or simply dictate your thoughts, our
                app is here to streamline the process and make your life easier.
              </p>
            </div>
          </div>
        </div>
        <div className="container_outer_img">
          <div className="img-inner">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq-S0ihflY_u2zkaUnvK7iiG_fxHuy1Sg8Fw&usqp=CAU"
              alt=""
              className="container_img"
            />
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};
export default About;
