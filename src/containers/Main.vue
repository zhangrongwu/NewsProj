<template>
    <div class="middle">
        <van-nav-bar class="van-nav-bar" :fixed="navFixed" right-text="菜单" @click-left="onClickLeft" @click-right="onClickRight" :title="getTitle(active)"></van-nav-bar>
        <div class="middle-content">
            <Home v-if="selected === 0"></Home>
            <News v-else-if="selected === 1"></News>
            <Mine v-else-if="selected === 2"></Mine>
        </div>

        <van-tabbar v-model="active">
            <van-tabbar-item v-for="item in tabBar" :key="item.id" info="">
                <span>{{item.title}}</span>
                <img slot="icon" slot-scope="props" dot=true info="item.badge" :src="props.active ? item.active : item.normal">
            </van-tabbar-item>
        </van-tabbar>
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
    filters: {},
    created() {
        var index = this.defines.tabBarItemIndex;
        this.selected = index;
    },
    data() {
        return {
            navFixed: true,
            active: this.defines.tabBarItemIndex,
            selected: "0",
            tabBar: [
                {
                    normal: require("../assets/icon-home-normal.png"),
                    active: require("../assets/icon-home-active.png"),
                    title: "首页",
                    badge: "",
                    id: 0
                },
                {
                    normal: require("../assets/icon-news-normal.png"),
                    active: require("../assets/icon-news-active.png"),
                    title: "电影",
                    badge: "1",
                    id: 1
                },
                {
                    normal: require("../assets/icon-mine-normal.png"),
                    active: require("../assets/icon-mine-active.png"),
                    title: "我的",
                    badge: "2",
                    id: 2
                }
            ]
        };
    },
    methods: {
        onClickLeft() {},
        onClickRight() {},
        getTitle: function(value) {
            return this.tabBar[value].title;
        }
    },
    watch: {
        active: function(newValue, oldValue) {
            this.selected = newValue;
            this.defines.tabBarItemIndex = newValue;
        }
    }
};
</script>

<style scoped>
/* .van-nav-bar {
    background-color: rgb(84, 170, 91);
    color: white;
    height: 44px;
    line-height: 44px;
}
.van-tabbar {
    height: 50px;
}

.van-nav-bar__title ~ .van-nav-bar__title::before {
    height: 44px;
} */

.middle {
    /* width: 100%;
    height: 100%; */
    /* align-items: center;
    justify-content: center;
    position: absolute; */
}
.middle-content {
    margin: 0px 0px 10px 0px;
}
</style>


