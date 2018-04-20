import React from 'react'

export default props => (
  <section id="intro">
    <div id="about-container">
      {props.content.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
    <div id="img-container">
      <img src={props.content.avatarImage.url} alt={props.content.avatarImage.alt} />
      <div id="social-icons">
        <a href="mailto:austinjruby@gmail.com"><i className="fa fa-3x fa-envelope-square" /></a>
        <i className="fab fa-3x fa-facebook-square" />
        <i className="fab fa-3x fa-twitter-square" />
        <i className="fab fa-3x fa-instagram" />
      </div>
    </div>
    <style jsx>{`
      #intro {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px 30px 0;
        min-height: calc(100vh - 96px);
      }
      #img-container {
        width: 40%;
        margin: 1rem 0;
      }
      #about-container {
        width: 55%;
        line-height: 26px;
      }
      img {
        width: 100%;
        height: auto;
        border-radius: 5px;
      }
      h1 {
        margin-top: 0;
      }
      #mail-button {
        padding: 10px 16px;
        font-family: 'Prociono';
        background-color: var(--maroon);
        color: #ffffff;
        border-radius: 5px;
      }
      #social-icons {
        margin: 40px 0 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
      }
      #social-icons i {
        margin: 0 25px;
        cursor: pointer;
        opacity: 0.5;
      }
      i:hover {
        opacity: 1 !important;
      }
      .fa-envelope-square {
        color: #0000ee;
      }
      .fa-facebook-square {
        color: #3b5998;
      }
      .fa-twitter-square {
        color: #1da1f2
      }
      .fa-instagram {
        color: #c32aa3
      }
      @media screen and (max-width: 1023px) {
        #img-container {
          width: 50%;
        }
        #about-container {
          width: calc(200% / 3);
        }
      }
      @media screen and (max-width: 640px) {
        #intro {
          flex-direction: column;
        }
        #img-container {
          width: 100%;
          margin: 0;
        }
        #about-container {
          width: 100%;
        }
        #social-icons {
          margin-bottom: 40px;
        }
      }
    `}</style>
  </section>
)
