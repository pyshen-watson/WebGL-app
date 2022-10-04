<script lang="ts">
    import Katex from 'svelte-katex'
    const eq_moving = `shift_{light}=[r \\cdot cos(time), r \\cdot sin(time), r \\cdot sin(time)]`
</script>

<div class="main">
    <h1>Effect</h1>
    <p>We have 4 kinds of effects of light: <b>flashing, changing, moving, dimming.</b></p>
    <br>

    <h2>Flashing</h2>
    <p>Inside the flashing object, there is a toggle turn on and off periodically. When the toggle is on, the intensity will become twice larger.</p>
    <br>

    <h2>Changing</h2>
    <p>Changing means "Changing color", the light will changing its color over time. It is implemented by HSL, we change the hue periodically, and turn HSL into RGB intensity.</p>
    <br>

    <h2>Moving</h2>
    <p>Moving the location of the light by some periodic function.</p>
    <Katex displayMode>{eq_moving}</Katex>
    <br>

    <h2>Dimming</h2>
    <p>Decreasing the intensity linearly until it is equal to 0.</p>

</div>

<style lang="scss">
    .main{

        *{
            margin-bottom: 0.5rem;
        }
    }
</style>