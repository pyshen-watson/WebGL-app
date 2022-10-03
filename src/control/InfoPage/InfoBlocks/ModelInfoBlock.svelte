<script lang="ts">
    import Katex from 'svelte-katex'
    const eq_shift = `(shift_{base}+shift_{grow} \\times index_{item})`
    const eq_degree = `(degree_{base}+degree_{grow} \\times index_{item})`
    const eq_axis0 = `[0,2,1]`
    const eq_axis1 = `\\hat{i} = [1,0,0], \\hat{j}=[0,0,1], \\hat{k}=[0,1,0]`
</script>

<div class="main">
    <h1>Model</h1>
    <p>All the models use in this project are provided by the TA of the course:
        <em><a href="https://www.csie.ntu.edu.tw/~ming/courses/icg/" target="blank_">
            Interactive Computer Graphics
        </a></em>
        , CSIE, NTU.
    </p>
    <p>All models are provided as JSON file, andI did some changes on these models in this form:</p>
    <h3>Attribute:</h3>
    <ul>
        <li><b>vertexPositions:</b> A number array consists of triples. Each triple implies the coordinate of the vertex in the order of (x,y,z).</li>
        <li><b>vertexColors:</b> A number array consists of triples. Each triple implies the color of the vertex in the order of (r,g,b).</li>
        <li><b>vertexNormals:</b> A number array consists of triples. Each triple implies the normal vector of the vertex in the order of (x,y,z).</li>
    </ul>
    <br>

    <p>Every number array above have the same number of elements, and the number of vertices is <b>third of the length.</b></p>
    <p>By the way, we only use the <b>front color</b> of the model.</p>
    <p>Besides these attribute, we also add something for better viewing experience.</p>
    <p>We will do these pre-transforms before we apply the parameters in control panel.</p>
    <br>
    
    <h3>Transform Attribute:</h3>
    <ul>
        <li><b>shift_base:</b> A 3D vector be used with <b>shift_grow.</b></li>
        <li><b>shift_grow:</b> A 3D vector be used with <b>shift_base</b>, each model will shift <Katex>{eq_shift}</Katex> </li>
        <li><b>degree_base:</b> A 3D vector be used with <b>degree_grow.</b></li>
        <li><b>degree_grow:</b> A 3D vector be used with <b>degree_base</b>, each model will rotate <Katex>{eq_degree}</Katex> </li>
        <li><b>ratio:</b> A 3D vector, scales each model.</li>
        <li><b>axis:</b>A triple stands the order of axis because some models have different axis order. Ex. <Katex>{eq_axis0}</Katex> means its <Katex>{eq_axis1}</Katex></li>
    </ul>
    <figure>
        <img src="src/asset/image/model/Teapot.png" alt="Teapot.png">
        <figcaption>The <a href="https://en.wikipedia.org/wiki/Utah_teapot">Utah Teapot</a>, the most iconic model in CG</figcaption>
    </figure>
</div>

<style lang="scss">
    .main{

        *{
            margin-bottom: 0.5rem;
        }

        ul{
            margin-left: 2rem;
        }

        figure{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>