import React from 'react'
import Mymap1 from '../map/Mymap1'
import Heading from '../heading/Heading'
// import RatingSys from '../ratingsystem/RatingSys'
function Service() {
  return (
    <div>
            <Heading text={'LOCATE-HERE'}></Heading>
            <Mymap1 amenity={'hospital'}></Mymap1>
            {/* <RatingSys></RatingSys> */}
    </div>
  )
}

export default Service
