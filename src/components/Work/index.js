import React from 'react'

const shortenUrl = href => {
  switch (href.substring(0, 5)) {
    case 'https':
      href = href.substring(8)
      break
    case 'http:':
      href = href.substring(7)
      break
    default:
      break
  }
  href = href.substring(0, 4) === 'www.' ? href.substring(4) : href
  const com = href.indexOf('.com')
  const org = href.indexOf('.org')
  const net = href.indexOf('.net')
  if (com !== -1) {
    href = href.substring(0, com + 4)
  } else if (org !== -1) {
    href = href.substring(0, org + 4)
  } else if (net !== -1) {
    href = href.substring(0, net + 4)
  }
  return href
}

export default props => (
  <section id="work">
    {props.posts.map((post, index) => (
      <a key={index} href={post.href}>
        <div className="post-card">
          <div className="post-image" style={{ backgroundImage: `url(${post.image.url})` }} />
          <div className="post-info">
            <h3>{post.title}</h3>
            <p>{shortenUrl(post.href)}</p>
          </div>
        </div>
      </a>
    ))}
    <style jsx>{`
      h3 {
        color: #000000;
        margin-top: 0;
        font-size: 16px;
      }
      #work {
        background-color: #ffffff;
        min-height: auto;
        flex-wrap: wrap;
        justify-content: space-between;
      }
      .post-card {
        background-color: #ffffff;
        padding: 15px;
        margin: 0;
        display: flex;
        flex-direction: row;
        border-bottom: 1px solid #cfcfcf;
        transition: background-color 0.2s;
      }
      .post-card:hover {
        background-color: #f0ecec;
      }
      a:last-child .post-card {
        border-bottom: none;
      }
      .post-image {
        background-color: #cfcfcf;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        height: 75px;
        width: 75px;
        min-width: 75px;
        margin-bottom: 15px;
        margin-right: 15px;
      }
      a {
        width: calc(50% - 15px);
        text-decoration: none;
      }
      p {
        color: var(--maroon);
        margin-bottom: 0;
        opacity: 0.7;
      }

      @media screen and (min-width: 640px) {
        #work {
          display: flex;
        }
        .post-card {
          flex-direction: row;
        }
        .post-image {
          width: 60px;
          height: 60px;
          margin-bottom: 0;
          margin-right: 15px;
        }
      }
    `}</style>
  </section>
)
