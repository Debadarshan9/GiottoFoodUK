import React from 'react'
import ReactStars from 'react-stars'
const ReactStar = () => {
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
  return (
    <>
    <ReactStars count={5} onChange={ratingChanged} size={24}/>
    </>
  )
}

export default ReactStar