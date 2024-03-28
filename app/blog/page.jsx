import Link from 'next/link'

const page = () => {

  return <main>
    <h1>The Blog</h1>
    <p>
      <Link href={`/blog/post-1`}>
          this
      </Link> 
    </p>   
    <p>
      <Link href="/blog/post-2">
          this is the name of the entery
      </Link> 
    </p>
  </main>
}

export default page


// WHAT WE WANT TO DO - 
// get the data from the background on the component map  
// take that data
// inside that we call a list item where we pass in the route 
// in that case we have a route which exist and then we also have the



// we need it to exist but we don't need it immediately