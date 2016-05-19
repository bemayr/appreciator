<template>
    <div class="list">
        <card v-for="app in apps" @click="appreciateApp(app)">
            <app-view :app="app" view-type="compact"></app-view>
        </card>
        <card>
            <new-app-view></new-app-view>
        </card>
    </div>
</template>

<script lang="ts">
import * as Card from "./Card.vue";
import * as AppView from "./AppView.vue";
import * as NewAppView from "./NewAppView.vue";
import { appreciateApp } from "../vuex/actions";

export default {
    vuex: {
        getters: {
            apps: state => state.apps
        },
        actions: {
            appreciateApp
        }
    },
    components: {
        Card,
        AppView,
        NewAppView
    }
}
</script>

<style lang="stylus" scoped>
.list {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
}

.app {
    cursor: pointer;
}
</style>
