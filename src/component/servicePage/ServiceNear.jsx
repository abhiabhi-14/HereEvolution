import React from 'react'
import Mymap1 from '../map/Mymap1'
import ThreeD from '../threeD/ThreeD'
import Heading from '../heading/Heading'
function ServiceNear() {
  return (
    <div>
            <Heading text={'LOCATE-HERE'}></Heading>
      <Mymap1 amenity={'cafe'}></Mymap1>
      <Heading text={'3d'}></Heading>
      <ThreeD></ThreeD>
    </div>
  )
}

export default ServiceNear
