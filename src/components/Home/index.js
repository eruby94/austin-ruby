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
      @media screen and (max-width: 1151px) {
        #intro {
          flex-direction: column;
          background-position: top;
        }
        #about-container {
          padding-top: calc(42rem + 5px);
          min-height: auto;
          background: linear-gradient(to top, rgba(255,255,255,1) 32%, rgba(255,255,255,1) 39%, rgba(255,255,255,1) 40%, rgba(255,255,255,1) 45%, rgba(255,255,255,1) 46%, rgba(255,255,255,0.15) 94%, rgba(255,255,255,0.15) 94%, rgba(255,255,255,0) 100%);
        }
        #about-container p {
          width: calc(100% - 60px);
          padding: 0 30px;
        }
        #social-icons {
          width: 100%;
          margin-bottom: 0;
        }
      }
      @media screen and (max-width: 1023px) {
        #about-container {
          padding-top: calc(21rem + 5px);
          min-height: calc(100vh - 19rem - 5px);
          background: linear-gradient(to top, rgba(255,255,255,1) 32%, rgba(255,255,255,1) 39%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 59%, rgba(255,255,255,1) 63%, rgba(255,255,255,0.15) 94%, rgba(255,255,255,0.15) 94%, rgba(255,255,255,0) 100%);
        }
        #about-container p {
          width: calc(100% - 60px);
          padding: 0 30px;
        }
        #social-icons {
          width: 100%;
          margin-bottom: 0;
        }
      }
      @media screen and (max-width: 640px) {
        #about-container {
          padding-top: calc(15rem + 5px);
          width: 100%;
          background: linear-gradient(to top, rgba(255,255,255,1) 32%, rgba(255,255,255,1) 39%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 59%, rgba(255,255,255,1) 82%, rgba(255,255,255,0.15) 94%, rgba(255,255,255,0.15) 94%, rgba(255,255,255,0) 100%);
        }
        #about-container p {
          width: calc(100% - 30px);
          padding: 0 15px;
        }
        #social-icons {
          justify-content: space-between;
          margin-bottom: 40px;
        }
        #social-icons i {
          margin: 0 15px;
        }
      }
    `}</style>
  </section>
)
