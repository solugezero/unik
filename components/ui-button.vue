<template>
    <button class="button">
        <slot />
    </button>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px 18px;
    border-radius: 12px;
    border: 1px solid #F0F0F0;
    background: #F0F0F0;
    color: #000;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: #cfcfcf;
    }
}
</style>