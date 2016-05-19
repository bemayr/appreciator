<template>
    <div id="main-page">
        <info id="header"></info>
    	<app-list-view id="list-pane"></app-list-view>
        <favourite-app-view id="fav-pane"></favourite-app-view>
    </div>
</template>

<script lang="ts">
import * as Info from "./components/Info.vue";
import * as AppListView from "./components/AppListView.vue";
import * as FavouriteAppView from "./components/FavouriteAppView.vue";

export default {
    components: {
        Info,
        AppListView,
        FavouriteAppView
    }
}
</script>

<!-- requiring the clearfixes -->
<style lang="stylus" src="./styles/clearfixes.styl"></style>
<!-- requiring the common styles -->
<style lang="stylus" src="./styles/common.styl"></style>

<style lang="stylus">
// common styles for the app
</style>

<style lang="stylus" scoped>
@require("./styles/theme");



#main-page {
    background: #f4f4f4;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    &[max-height~="600px"]{
        flex-direction: row;
    }
    > * {
        width: inherit;
    }
}

#header {
    align-self: center;
}


#list-pane {
    flex-grow: 1;
}

#fav-pane {
    background-color: accentColor;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
