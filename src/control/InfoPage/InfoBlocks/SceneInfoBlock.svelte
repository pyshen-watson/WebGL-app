<script lang="ts">
    import { InfoImages } from '$image/images'
</script>

<div class="main">
    <h1>Scene</h1>
    <p>There are 5 scenes in our project, they are a combination of all attributes including <b>models, shaders, transforms, lights and backgroud.</b></p>
    <br>

    <h2>Boxing</h2>
    <div class="gallery">
        <img src={InfoImages.Boxing} alt="Boxing.png">
        <div class="description">I got inspiration by the gloves of the kangaroo and the sheared plant. The lights also make it look like JOJO's bizarre adventure!</div>
    </div>
    <br>

    <h2>Disco</h2>
    <div class="gallery">
        <img src={InfoImages.Disco} alt="Disco.png">
        <div class="description">Teapot in flat shading looks like a shiny disco ball. With the changing light, let's go disco! Use the motions to make Kangaroo and Moai dancing!</div>
    </div>
    <br>

    <h2>Watering</h2>
    <div class="gallery">
        <img src={InfoImages.Watering} alt="Watering.png">
        <div class="description">Moai rotating in a high speed with a negative shininess is similar to water column.Fortunately, we also have teapot and plant.</div>
    </div>
    <br>

    <h2>Driving</h2>
    <div class="gallery">
        <img src={InfoImages.Driving} alt="Driving.png">
        <div class="description">Do you believe that kangaroo can drive? This idea is came from asdf movie. A llama can drive, too!</div>
    </div>
    <br>

    <h2>Wall</h2>
    <div class="gallery">
        <img src={InfoImages.Wall} alt="Wall.png">
        <div class="description">Do you think kangaroo is cute due to above instance? Kangaroo may look scary in cel shading. This scene is inspired from Attack of Titan.</div>
    </div>
    <br>
</div>

<style lang="scss">
    .main{

        *{
            margin-bottom: 0.5rem;
        }
        .gallery{

            display: flex;
            justify-content: center;

            img{
                width:25rem;
                margin-right: 5%;
                border-radius: 20px;
            }
            .description{
                width: 25rem;
                box-sizing: border-box;
                background-color: rgba(gray, 0.9);
                padding: 1.5rem;
                border-radius: 20px;
                font-style: italic;
                font-size: 140%;
            }
        }
    }
</style>