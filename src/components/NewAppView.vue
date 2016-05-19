<template>
    <div id="new-app-form">
        <label>new app</label>
        <input type="text" v-model="app.name" placeholder="name"></input>
        <input type="text" v-model="app.iconURL" placeholder="icon url"></input>
        <button @click="add()">Add</button>
    </div>
</template>

<script lang="ts">
import { addApp } from "../vuex/actions";

export default {
    data: () => {
        return {
            app: {
                name: "",
                iconURL: "",
                appreciations: 0
            }
        }
    },
    methods: {
        add: function() {
            addApp(this.$store, this.app);
            this.app = {
                name: "",
                iconURL: "",
                appreciations: 0
            }
        }
    },
    vuex: {
        actions: {
            addApp
        }
    }
}
</script>

<style lang="stylus" scoped>
#new-app-form {
    display: flex;
    width: 270px;
    flex-direction: column;
    > label {
        text-transform: uppercase;
        font-weight: 300;
    }
    > * {
        margin: 4px 0;
    }
}
</style>
