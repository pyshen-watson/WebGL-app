<script lang="ts">
    import { LogoImage } from "$image/ImageExport"
</script>

<div class="main">
    <h1>Powered by Svelte x TypeScript x Vite</h1>
    <a  href="https://www.pyshen.net">
        <figure>
            <img src={LogoImage} alt="https://www.pyshen.net">
            <figcaption>Come to my website to see more works!</figcaption>
        </figure>
    </a>
</div>

<style lang="scss">
    .main{
        height: 70vh;
        margin: 2rem;
        border-radius: 20px;
        background-color: rgba(gray, 0.7);
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h1{
        margin: 3rem;
    }
    figure{
        cursor: pointer;
        img{
            height: 10rem;
        }
    }
</style>