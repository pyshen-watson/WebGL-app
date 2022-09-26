<div>
    <slot/>
</div>

<style>
    div{
        box-sizing: border-box;
        width: 100%;
        display: flex;
        justify-content: var(--align, 'space-between');
        gap: var(--gap, 0);
        margin: 1rem 0
    }
</style>