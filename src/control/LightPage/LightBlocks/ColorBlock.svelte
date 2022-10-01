<script lang="ts">
    import Bar from "$components/Bar.svelte"
    import ColorSquare from "$components/ColorSquare.svelte"
    import Color from '$utils/Color'
    import type { LightStore } from "$utils/Type"

    export let store: LightStore

    let colorList = Color.createColorGrid(8)
</script>

<div class="main">
    {#each Color.ColorName as color, i}
        <Bar
            title={color}
            --color={Color.ColorFullName[i]}
            on:ColorReset={() => {$store.color.level[i] = 1}}
            bind:value={$store.color.level[i]}
            range={[0, 15, 0.5]}
            eventName="ColorReset"
        />
    {/each}
    <div class="selector">
        <input type="color" bind:value={$store.color.setByCode}>
        <div class="grid">
            {#each colorList as color}
                <ColorSquare
                    colorCode={color}
                    --color={color}
                    on:colorChange={(e) => {$store.color.setByCode = e.detail}}
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
        row-gap: 2rem;

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