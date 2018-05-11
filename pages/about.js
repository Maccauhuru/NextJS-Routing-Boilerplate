import React from 'react'
import Link from 'next/link';


class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Link href="/index">
        <a>Go Back To Home Page</a>
        </Link>
        <div>
        It's no secret that creating single-page JavaScript applications can be pretty challenging these days.
        Fortunately, there are some projects available which simplify things and help you build apps faster
        </div>
        <h2>Learn Next.js</h2>
        Here’ s a list of some Next.js features:
        <ul>
        <li>Ease of use</li>
        <li>Automatic code splitting</li>
        <li>for faster page loads</li>
        <li>Simple client - side routing</li>
        <li>Server - side rendering and prefetch</li>
        <li>Easy to implement with Express and other Node.js HTTP Server</li>
        </ul>
        <h2>The Next Official Website Link</h2>
        < a href = "https://nextjs.org/learn" target="_blank"> Next.js official website < /a>
      </React.Fragment>
    )
  }
}

export default About;
