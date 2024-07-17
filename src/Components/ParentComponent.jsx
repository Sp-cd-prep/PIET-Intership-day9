import React from 'react'
import ChildComponent from './ChildComponent';

const ParentComponent = () => {

    const data = {
        name: 'John Doe',
        age: 25,
        city: 'New York',
      };


  return (
    <>
    <div>ParentComponent</div>
    <ChildComponent  data = {data}/>

    </>
  )
}

export default ParentComponent