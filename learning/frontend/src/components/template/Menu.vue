<template>
    <aside class="menu" v-show="isMenuVisible"></aside>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Menu',
    computed: mapState(['isMenuVisible'])
}
</script>

<style>
    .menu {
        grid-area: menu;
        background: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
</style>
