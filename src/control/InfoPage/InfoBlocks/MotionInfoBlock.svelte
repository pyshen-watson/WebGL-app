<script lang="ts">
    import Katex from 'svelte-katex'

    const eq_vibing = `a_{3,0}=K_{vibing} \\cdot cos(timenow)\\ (K_{vibing}=1.0)`
    const eq_shaking = `a_{1,0}=K_{shaking} \\cdot cos(timenow)\\ (K_{shaking}=0.1)`
    const eq_dancing = `a_{1,2}=K_{dancing} \\cdot sin(timenow)\\ (K_{dancing}=0.5)`
    const eq_jumping = `a_{3,1}=K_{jumping} \\cdot sin(timenow)\\ (K_{jumping}=3)`
    const eq_running = `a_{2,0}=-tan({K_{running}} \\cdot timenow)\\ (K_{running}=0.1)`
    const eq_backing = `a_{2,0}=tan({K_{backing}} \\cdot timenow)\\ (K_{backing}=0.1)`
    const eq_swinging = `a_{2,0}=-sin({K_{swinging}} \\cdot timenow)\\ (K_{swinging}=0.16)`
</script>

<div class="main">
    <h1>Motion</h1>
    <p>We have 8 kinds of motion of item, which 7of them are come from multiplying the model-view matrix by an elementary matrix.</p>
    <br>

    <h2>Crazy Rotate</h2>
    <p>It is the only one motion which has different way to change model-view matrix.</p>
    <p>When we calculate <em>item.rotation</em>, we won't update <Katex>\Delta t</Katex> in each rendering. Instead, we use <Katex>t_{'{now}'}-t_{'{start}'}</Katex>, so this value will grow linearly</p>
    <br>

    <h2>Vibing</h2>
    <p>This case occurs when model-view matrix multiply to an elementary matrix which<Katex>{eq_vibing}</Katex></p>
    <br>

    <h2>Shaking</h2>
    <p>This case occurs when model-view matrix multiply to an elementary matrix which<Katex>{eq_shaking}</Katex></p>
    <br>

    <h2>Dancing</h2>
    <p>This case occurs when model-view matrix multiply to an elementary matrix which<Katex>{eq_dancing}</Katex></p>
    <br>

    <h2>Jumping</h2>
    <p>This case occurs when model-view matrix multiply to an elementary matrix which<Katex>{eq_jumping}</Katex></p>
    <br>

    <h2>Running</h2>
    <p>This case occurs when model-view matrix multiply to an elementary matrix which<Katex>{eq_running}</Katex></p>
    <br>

    <h2>Backing</h2>
    <p>This case occurs when model-view matrix multiply to an elementary matrix which<Katex>{eq_backing}</Katex></p>
    <br>

    <h2>Swinging</h2>
    <p>This case occurs when model-view matrix multiply to an elementary matrix which<Katex>{eq_swinging}</Katex></p>
</div>

<style lang="scss">
    .main{

        *{
            margin-bottom: 0.5rem;
        }
    }
</style>