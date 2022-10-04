<script lang="ts">
    import Katex from 'svelte-katex'

    const eq_shift_model = `shift_{model} = shift_{base}+shift_{grow} \\times index_{item}`
    const eq_translate = `Translate=anchor+shift_{model}+shift_{control}`
    const eq_degree_model = `degree_{model} = degree_{base}+degree_{grow} \\times index_{item}`
    const eq_rotate = `Rotate = degree_{model}+degree_{control}+\\Delta t \\cdot speed`
    const eq_ratio_model = `ratio_{model} = [20,20,20]`
    const eq_scale = `Scale = ratio_{model} \\odot ratio_{control}`

</script>

<div class="main">
    <h1>Transform</h1>
    <p>We implement 4 kinds of transform in this project: translate, rotate, scale and shear.</p>
    <p>Instead of transforming the entire model, we doing changes on the <b>model-view matrix.</b></p>
    <br>

    <h2>Translation</h2>
    <p>There are three argument in <em>item.location</em>:</p>
    <ul>
        <li><b>anchor:</b> This attribute is shared by items with the same id, ex. all item0 have the same <b>anchor</b>=<Katex>[-55,0,-100]</Katex></li>
        <li><b>shift_model:</b> This attribute is a default value of a model at an id,<Katex>{eq_shift_model}</Katex></li>
        <li><b>shift_control:</b> This attribute can be modified on the panel</li>
    </ul>
    <p>The final translate would be: <Katex displayMode>{eq_translate}</Katex></p>

    <h2>Rotation</h2>
    <p>There are two part in <em>item.rotation</em>:</p>
    <h4>Static rotation</h4>
    <ul>
        <li><b>degree_model</b> This attribute is a default value of a model at an id,<Katex>{eq_degree_model}</Katex></li>
        <li><b>degree_control:</b> This attribute can be modified on the panel</li>
    </ul>
    <h4>Dynamic rotation</h4>
    <p>The model will auto rotate along the <b>y-axis</b> at a <Katex>speed</Katex></p>
    <Katex displayMode>{eq_rotate}</Katex>

    <h2>Scaling</h2>
    <p>There are two argument in <em>item.scaling</em>:</p>
    <ul>
        <li><b>ratio_model:</b> This attribute is shared by all items with the same model, ex. all Moai have the <Katex>{eq_ratio_model}</Katex></li>
        <li><b>ratio_control:</b> This attribute can be modified on the panel</li>
    </ul>
    <Katex displayMode>{eq_scale}</Katex>

    <h2>Shearing</h2>
    <p>This is easier, only need to create the shearing matrix and put into the degrees</p>

</div>

<style lang="scss">
    .main{

        *{
            margin-bottom: 0.5rem;
        }

        ul{
            li{
                margin-left: 2rem;
            }
        }
    }
</style>