<script lang="ts">
</script>

<div>
    <slot/>
</div>

<style>
    div{
        width: 100%;
        display: flex;
        justify-content: var(--align, 'space-between');
        gap: var(--gap, 0);
    }
</style>