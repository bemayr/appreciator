<template>
    <div class="card">
        <slot></slot>
    </div>
</template>

<style lang="stylus">
// https://codepen.io/sdthornton/pen/wBZdXq
.card {
    background: #fff;
    border-radius: 2px;
    display: inline-block;
    margin: 1rem;
    padding: 1rem;
    position: relative;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}
</style>
