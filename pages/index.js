import React from 'react';
import Link from 'next/link';

const Index =()=> {
    return (
      <div>
      <h1>Welcome to my Next.js project</h1>
      <Link prefetch href="./about"><a style={{fontSize : 20}}>Read about Next</a></Link>
      <p></p>
      <Link href="/about"><button>Try Me!</button></Link>
      </div>
    )
}
 export default Index;