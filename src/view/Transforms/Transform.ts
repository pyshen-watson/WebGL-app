import type { mat4 } from 'gl-matrix'
import type Item from '$class/Item/Item'

import translate from './Translate'
import rotate from './Rotate'
import scale from './Scale'
import shear from './Shear'
import motion from './Motion'

function transfrom(mvMatrix:mat4, item:Item){

    mvMatrix = translate(mvMatrix, item)
    mvMatrix = rotate(mvMatrix, item)
    mvMatrix = scale(mvMatrix, item)
    mvMatrix = shear(mvMatrix, item)
    mvMatrix = motion(mvMatrix, item)
    return mvMatrix
}

export default transfrom