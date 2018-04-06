import React from 'react'

export default props => (
  <section id="intro">
    <div id="img-container">
      <img src={props.content.avatarImage.url} alt="Me on a trip to Italy" />
    </div>
    <div id="about-container">
      <h1>Austin Ruby</h1>
      {props.content.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
    <style jsx>{`
      #intro {
        display: flex;
        padding: 30px 30px 0;
        min-height: auto;
      }
      #img-container {
        width: calc(50vw - 45px);
        margin-right: 30px;
      }
      #about-container {
        width: calc(50vw - 45px);
      }
      h1 {
        margin-top: 0;
      }
    `}</style>
  </section>
)
