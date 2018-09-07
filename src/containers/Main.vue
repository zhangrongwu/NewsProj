<template>
    <div class="middle">
        <div class="middle-content">
            <Home v-if="selected === 0"></Home>
            <News v-else-if="selected === 1"></News>
            <Mine v-else-if="selected === 2"></Mine>
        </div>
    </div>
</template>

<script>
import Home from "./Home.vue";
import News from "./News.vue";
import Mine from "./Mine.vue";
export default {
    name: "Main",
    components: {
        Home: Home,
        Mine: Mine,
        News: News
    },
    data() {
        return {
            selected: this.defines.tabBarItemIndex
        };
    },
    filters: {},
    created() {},

    methods: {},
    watch: {
        active: function(newValue, oldValue) {}
    }
};
</script>

<style scoped>
.middle {
    width: 100%;
    align-items: center;
    justify-content: center;
    position: absolute;
}
.middle-content {
    margin: 0px 0px 10px 0px;
}
</style>


