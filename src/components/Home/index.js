import React from 'react'

export default props => (
  <section id="intro">
    <div id="img-container">
      <img src={props.content.avatarImage.url} alt={props.content.avatarImage.alt} />
    </div>
    <div id="about-container">
      {props.content.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
    <style jsx>{`
      #intro {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 30px 30px 0;
        min-height: auto;
      }
      #img-container {
        width: 40%;
        margin: 2rem 0;
      }
      #about-container {
        width: 55%;
      }
      img {
        width: 100%;
        height: auto;
      }
      h1 {
        margin-top: 0;
      }
      @media screen and (max-width: 640px) {
        #img-container {
          width: 100%;
          margin: 0;
        }
        #about-container {
          width: 100%;
        }
      }
    `}</style>
  </section>
)
