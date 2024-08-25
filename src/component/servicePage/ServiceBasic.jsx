import React from 'react'
import Mymap1 from '../map/Mymap1'
import Heading from '../heading/Heading'
function ServiceBasic() {
  return (
    <div>
            <Heading text={'LOCATE-HERE'}></Heading>
            <Mymap1 amenity={'atm'}></Mymap1>
    </div>
  )
}

export default ServiceBasic
