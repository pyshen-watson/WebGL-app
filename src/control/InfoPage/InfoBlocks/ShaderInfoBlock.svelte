<script lang="ts">
    import { ShaderImages } from "$image/ImageExport"
</script>

<div class="main">
    <h1>Shader</h1>
    <p>We use shader to draw colors on models. We implement 4 kinds of shader in this project:</p>
    <div class="gallery">
        <figure>
            <img src={ShaderImages.Flat} alt="Flat.png">
            <figcaption>Flat</figcaption>
        </figure>
        <figure>
            <img src={ShaderImages.Gouraud} alt="Gouraud.png">
            <figcaption>Gouraud</figcaption>
        </figure>
        <figure>
            <img src={ShaderImages.Phong} alt="Phong.png">
            <figcaption>Phong</figcaption>
        </figure>
        <figure>
            <img src={ShaderImages.Cel} alt="Cel.png">
            <figcaption>Cel</figcaption>
        </figure>
    </div>
    <p>The main idea is the color of a point is determined by its normal vector.</p>
    <ul>
        <li><b>Flat:</b>The vertices don't have normal vectors (only fragment have normal). Thus, the whole fragment use the same color.</li>
        <li><b>Gouraud:</b>The vertices have normal vectors, so they have different colors. We can do bilinear interpolation to get the fragment with gradient color.</li>
        <li><b>Phong:</b>We do bilinear interpolation to get <b>normal vector</b> of all the points on a fragment, and use the normals to compute the color of each point.</li>
        <li><b>Cel:</b>It's similar to Phong but with thresholds. In our case, we have 4 levels could be shaded</li>
    </ul>

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