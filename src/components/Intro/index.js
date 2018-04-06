import React from 'react'

const about = [
  'Spicy jalapeno bacon ipsum dolor amet drumstick filet mignon ribeye strip steak picanha pork loin. Pork belly sausage buffalo meatball ground round strip steak fatback t-bone brisket ham hock landjaeger. Porchetta turducken sirloin bresaola cupim tongue fatback. Pork belly turducken pork loin kevin tail pig pork chop meatball tenderloin spare ribs. Doner turducken venison drumstick spare ribs.',
  'Picanha beef ribs jowl, porchetta pancetta tenderloin landjaeger. Shoulder buffalo bresaola, pancetta chicken pig t-bone shankle doner alcatra. Doner chuck jowl shankle venison. Kielbasa tri-tip venison, ribeye jowl pig pork chop hamburger pancetta pastrami ground round corned beef short loin short ribs doner. Pork chop chuck spare ribs alcatra pastrami turducken cupim sirloin pork belly. Sausage strip steak ball tip pancetta bresaola jerky.',
]

export default () => (
  <section id="intro">
    <h1>Austin Ruby</h1>
    {about.map((paragraph, index) => (
      <p key={index}>{paragraph}</p>
    ))}
    <style jsx>{`
      #intro {
        padding: 5px 30px 0;
        min-height: auto;
      }
    `}</style>
  </section>
)
