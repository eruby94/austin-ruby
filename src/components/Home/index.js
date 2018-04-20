import React from 'react'

export default props => (
  <section id="intro">
    <div id="about-container">
      {props.content.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
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
        min-height: calc(100vh - 54px);
        padding: 0;
        background-image: url(${props.content.avatarImage.url});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right -250px top;
      }
      #img-container {
        width: 40%;
        margin: 1rem 0;
      }
      #about-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: calc(100vh - 54px);
        background: rgba(255,255,255,1);
        background: linear-gradient(to right, rgba(255,255,255,1) 32%, rgba(255,255,255,1) 39%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 59%, rgba(255,255,255,0.88) 64%, rgba(255,255,255,0.15) 94%, rgba(255,255,255,0.15) 94%, rgba(255,255,255,0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#ffffff', GradientType=1 );
        line-height: 26px;
      }
      #about-container p {
        width: 55%;
        padding: 0 30px;
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
        width: 55%;
        margin: 40px 0 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
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
