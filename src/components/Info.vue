<template>
    <div class="header">
        <svg class="app-icon" viewBox="0 0 24 24">
            <path d="M16.23,18L12,15.45L7.77,18L8.89,13.19L5.16,9.96L10.08,9.54L12,5L13.92,9.53L18.84,9.95L15.11,13.18L16.23,18M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </svg>
    	<h1 class="name">APPreciator</h1>
        <h4 class="subheader">It makes even less sense than a TODO-example but it scales better... ;)</h4>
    </div>
</template>


<style lang="stylus" scoped>
@require("../styles/theme");

.header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
    .name, .subheader {
        font-weight: 300;
    }
    .app-icon {
        width: 4rem;
        margin: 1rem;
        path {
            fill: accentColor;
        }
    }
    &[max-width~="350px"] .subheader{
        display: none;
    }
}
</style>
