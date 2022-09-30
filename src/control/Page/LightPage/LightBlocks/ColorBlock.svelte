<script lang="ts">
    import Bar from "$components/Bar.svelte"
    import Pixel from "$components/Pixel.svelte"
    import { Color } from '$utils/Math'
    import { Level2Code, Code2Level, createColorGrid } from "$utils/Math"

    import type { Writable } from "svelte/store"
    import type Light from "$class/Light/Light"

    export let store: Writable<Light>
        
    let StyleColor = ["red", "green", "blue"]
    let colorList = createColorGrid(8)
    let colorCode = Level2Code($store.color)
    $: $store.color = Code2Level(colorCode)

</script>

<div class="main">
    {#each Object.values(Color) as color, i}
        <Bar
            title={color}
            --color={StyleColor[i]}
            on:ColorReset={() => {$store.color[i] = 1}}
            bind:value={$store.color[i]}
            range={[0, 15, 0.5]}
            eventName="ColorReset"
        />
    {/each}
    <div class="selector">
        <input type="color" bind:value={colorCode}>
        <div class="grid">
            {#each colorList as color}
                <Pixel
                    colorCode={color}
                    --color={color}
                    on:colorChange={(e) => {colorCode = e.detail}}
                />
            {/each}
        </div>
    </div>
</div>

<style lang="scss">
    .main{
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 3fr;
        height: 100%;
        row-gap: 3rem;

        .selector {

            display: flex;
            justify-content: space-between;
            align-items: center;

            input{
                height: 6rem;
                width: 6rem;
            }

            .grid{
                display: grid;
                grid-template-columns: repeat(8, 1fr);
                column-gap: 0.25rem;
                row-gap: 0.25rem;
                margin-left: 1rem;
            }
        }
    }
</style>