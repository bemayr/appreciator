<template>
    <div class="app">
        <span class="app-name" v-if="!isCompact">{{ app.name }}</span>
        <img class="app-icon" v-bind:src="app.iconURL"></img>
        <span class="overlay">
            <svg class="icon" viewBox="0 0 24 24">
                <path fill="white" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
            </svg>
            {{ app.appreciations }}
        </span>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        app: {
            required: true
        },
        viewType: {
            type: String,
            default: 'normal',
            validator: value => ['normal', 'compact'].indexOf(value) >= 0
        },
    },
    computed: {
        // isCompact: () => this.viewType == "compact"
        isCompact: function (){
            return this.viewType == "compact";
        }
    }
}
</script>

<style lang="stylus" scoped>
@require("../styles/theme");

.app-name {
    margin-bottom: 1rem;
}

.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    .app-icon {
        max-width: 80px;
    }
    .overlay {
        position: absolute;
        right: .5rem;
        bottom: .5rem;
        background-color: accentColor;
        color: primaryColor;
        padding: .2rem .7rem;
        border-radius: 1rem;
        .icon {
            height: .8rem;
        }
    }
}
</style>
