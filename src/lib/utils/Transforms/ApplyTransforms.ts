import type { mat4 } from 'gl-matrix'
import type Item from '$item/Item'

import translate from './Translate'
import rotate from './Rotate'
import scale from './Scale'
import shear from './Shear'
import motion from './Motion'

function applyTransforms(mvMatrix:mat4, item:Item){

    translate(mvMatrix, item)
    rotate(mvMatrix, item)
    scale(mvMatrix, item)
    shear(mvMatrix, item)
    motion(mvMatrix, item)
    
}

export default applyTransforms