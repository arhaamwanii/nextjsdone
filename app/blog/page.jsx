import Link from 'next/link'

const page = () => {

  return <main>
    <h1>The Blog</h1>
    <p>
      <Link href={`/blog/post-1`}>
        Post 1
      </Link> 
    </p>   
    <p>
      <Link href="/blog/post-2">
        Post 2
      </Link> 
    </p>
  </main>
}

export default page


// WHAT WE WANT TO DO - 
// get the data from the background on the component map  
// take that data
// inside that we call a list item where for the path we pass in whatever we want



// we need it to exist but we don't need it immediately