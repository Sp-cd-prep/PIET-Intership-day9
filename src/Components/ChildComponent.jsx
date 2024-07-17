import React from 'react'


const ChildComponent = (props) => {

    const {data} = props;

  return (
    <>
    <h1>Child component </h1>
    <div>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>City: {data.city}</p>
    </div>
    </>
  )
}

export default ChildComponent