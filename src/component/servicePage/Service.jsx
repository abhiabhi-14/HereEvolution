import React from 'react'
import Mymap1 from '../map/Mymap1'
import Heading from '../heading/Heading'
// import HotelRating from '../ratingsystem/HotelRating'
function Service() {
  return (
    <div>
              <Heading text={'LOCATE-HERE'}></Heading>
              {/* <HotelRating/> */}
      <Mymap1 amenity={'cafe'}></Mymap1>
    </div>
  )
}

export default Service
