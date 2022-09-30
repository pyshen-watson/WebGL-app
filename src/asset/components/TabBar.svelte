<script lang="ts">
    import Tab from "./Tab.svelte"

    export let nameList:string[]
    export let nameActive:string
</script>

<div>
    {#each nameList as name}
        <Tab
            title={name}
            active={nameActive === name}
            on:tabClick={(e) => {nameActive = e.detail}}
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