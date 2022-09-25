<script lang="ts">
    import type { Vec3, LightStore } from "$utils/Type"
    import Pixel from "$components/Pixel.svelte"

    export let store: LightStore

    // Part.1 Generate Color Array, from #ffffff to #000000
    const colorLevel:string[] = ["ff", "80", "00"]
    let colorList = []

    for(let r=0; r<3; r++)
        for(let g=0; g<3; g++)
            for(let b=0; b<3; b++)
                colorList.push(`#${colorLevel[r]}${colorLevel[g]}${colorLevel[b]}`)

    // Part.2 Bind the value to the store

    let colorCode:string = toCode($store.color)
    $: $store.color = toColor(colorCode)

    // From level 0~15 Vec3 to #??????
    function toCode(color:Vec3){
        const toHex = (value:number) => Math.floor(value*16).toString(16).padStart(2, "0")
        return `#${toHex(color[0])}${toHex(color[1])}${toHex(color[2])}`
    }

    // From #?????? to level 0~15 Vec3
    function toColor(code:string): Vec3{
        const hexTo = (hex:string) => Math.floor(parseInt(hex, 16) / 16)
        return [hexTo(code.slice(1,3)), hexTo(code.slice(3,5)), hexTo(code.slice(5,7))]
    }

    const colorChangeHandler = (e:CustomEvent) => {
        colorCode = e.detail
    }

</script>

<main>
    <input type="color" bind:value={colorCode}>
    <div class="grid">
        {#each colorList as color}
            <Pixel colorCode={color} --color={color} on:colorChange={colorChangeHandler}/>
        {/each}
    </div>
</main>

<style lang="scss">

    main {
        display: flex;
        justify-content: space-between;
        align-items: center;

        input{
            height: 6rem;
            width: 6rem;
        }

        .grid{
            display: grid;
            grid-template-columns: repeat(9, 1fr);
            column-gap: 0.25rem;
            row-gap: 0.25rem;
            margin-left: 1rem;
        }
    }
</style>