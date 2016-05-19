<template>
    <div>
        <p>You appreciate</p>
        <card id="favourite-app">
            <app-view :app="app"></app-view>
        </card>
        <p>the most!</p>
    </div>
</template>

<script lang="ts">
import { favouriteApp } from "../vuex/getters.ts"
import * as Card from "./Card.vue";
import * as AppView from "./AppView.vue";

export default {
    vuex: {
        getters: {
            app: favouriteApp
        }
    },
    components: {
        Card,
        AppView
    }
}
</script>

<style lang="stylus" scoped>
@require("../styles/theme");

* {
    color: accentColor;
}

p {
    color: yellow; //primaryColor;
    font-weight: 300;
    text-transform: uppercase;
}

</style>

<style lang="stylus">
#favourite-app {
    .app-icon {
        max-width: 120px !important;
    }
}
</style>
