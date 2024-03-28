import React from 'react'

const page = ({params}) => {
  return (
    <main>
        <h1>BLog Post</h1>
        <h2>{params.slug}</h2>
    </main>
  )
}

export default page

// fetch the blog post in this one of cstom not found
// well then 

