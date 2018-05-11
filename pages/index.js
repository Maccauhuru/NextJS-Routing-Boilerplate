import React from 'react';
import Link from 'next/link';

class Index extends React.Component {
  render() {
    return (
      <div>
      <h1>Welcome to my Next.js project</h1>
      <Link prefetch href="./about"><a>Read about Next</a></Link>
      </div>
    )
  }
}

 export default Index;