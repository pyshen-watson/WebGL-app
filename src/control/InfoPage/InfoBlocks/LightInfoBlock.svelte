<script lang="ts">
    import Katex from 'svelte-katex'
    const eq_location = `Location_{light}=anchor_{light}+shift_{light}`
</script>

<div class="main">
    <h1>Light</h1>
    <p>Our light has two attribute: <b>Location</b> and <b>Intensity.</b></p>
    <br>

    <h2>Location</h2>
    <p>Location is a 3D vector. Just like the location of item, location of light is the sum of anchor and shift.</p>
    <Katex displayMode>{eq_location}</Katex>
    <br>

    <h2>Intensity</h2>
    <p>Intesity is a 3D vector in the order of <Katex>(r,g,b)</Katex>. <b>BUT</b>, they are not expressed as a 8-bits number (0~255)</p>
    <p>According to my experiment, it is more like (0~15), so we will multiply or divide by 16 when we want to set or use the intensity attribute.</p>

</div>

<style lang="scss">
    .main{

        *{
            margin-bottom: 0.5rem;
        }
    }
</style>