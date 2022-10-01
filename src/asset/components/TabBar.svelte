<script lang="ts">
    import Tab from "./Tab.svelte"

    export let titleList:string[]
    export let titleActive:string
</script>

<div>
    {#each titleList as name}
        <Tab
            title={name}
            active={titleActive === name}
            on:tabClick={(e) => {titleActive = e.detail}}
        />
    {/each}
</div>

<style lang="scss">
    div{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid gray;
    }
</style>