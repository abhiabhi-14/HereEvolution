import React from 'react'
import Card from "../card/Card";
import Mymap1 from '../map/Mymap1'
import Heading from '../heading/Heading'
function ServiceResturant() {
  return (
    <div>
      <Heading text={'LOCATE-HERE'}></Heading>
      
      <Mymap1 amenity={'restaurant'}></Mymap1>
    </div>
  )
}

export default ServiceResturant
