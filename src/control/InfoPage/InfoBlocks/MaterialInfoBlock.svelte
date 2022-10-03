<script lang="ts">
    import Katex from 'svelte-katex'

    const eq_Ka = `I_{ambient}=K_aI_a`
    const eq_Kd = `I_{diffuse}=K_dI_pcos(\\theta)=K_dI_p(N \\cdot L)`
    const eq_Ks = `I_{specular}=K_sI_pcos^n(\\alpha)`
    const eq_full = `I=K_aI_a+K_dI_pcos(\\theta)+K_sI_pcos^n(\\alpha)`
</script>

<div class="main">
    <h1>Material</h1>
    <p>In our shader, we consider three kinds of light:</p>
    <br>

    <h2>Ambient Illumination</h2>
    <p>Ambient illumination is when the light reflecting by something like mirror or glass, and fall on another object.</p>
    <Katex>{eq_Ka}</Katex>
    <ul>
        <li> <Katex>K_a</Katex> is the surface ambient reflectivity (0~1) </li>
        <li> <Katex>I_a</Katex> is the ambient light intensity </li>
    </ul>
    <br>

    <h2>Diffuse Reflection</h2>
    <p>Diffuse reflection occurs on the surfaces which are rough.</p>
    <Katex>{eq_Kd}</Katex>
    <ul>
        <li><Katex>K_d</Katex> is the surface diffuse reflectivity (0~1)</li>
        <li><Katex>I_p</Katex> is the point light intensity</li>
        <li><Katex>\theta</Katex> is the degree between light and surface normal</li>
        <li><Katex>N</Katex> is the unit normal vector of the surface</li>
        <li><Katex>L</Katex> is the unit direction vector of the point light</li>
    </ul>
    <br>

    <h2>Specular Reflection</h2>
    <p>Specular reflection occurs on the surfaces which are shiny.</p>
    <Katex>{eq_Ks}</Katex>
    <ul>
        <li><Katex>K_s</Katex> is the surface specular reflectivity (0~1)</li>
        <li><Katex>I_p</Katex> is the point light intensity</li>
        <li><Katex>\alpha</Katex> is the degree between reflect light and view point</li>
        <li><Katex>n</Katex> is the shininess</li>
    </ul>
    <br>
    
    So, we get:
    <div class="full"><Katex displayMode>{eq_full}</Katex></div>


</div>

<style lang="scss">
    .main{

        *{
            margin-bottom: 0.5rem;
        }
        .gallery{
            display: flex;
            justify-content: space-around;

            figure{
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
        ul{
            li{
                margin-left: 2rem;
            }
        }
    }
</style>