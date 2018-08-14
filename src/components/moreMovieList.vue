<template>
    <div class="more">
        <!-- sss {{items.title}} -->
        <van-pull-rfresh v-model="isLoading" @refresh="onRefresh">
            <van-list v-model="loadMore" :finished="finished" @load="onLoadMore">
                <van-cell v-for="(item, index) in items" :key="index">
                    <div class="info_wrap">
                        <span class="title">{{item.title}}({{item.original_title}})</span>
                        <span class="info-wrap-type">{{item.genres | getMovieType}}</span>
                        <span class="info-wrap-year">上映时间:{{item.year}}</span>
                        <span class="info-warp-author">作者简介</span>
                    </div>
                </van-cell>
            </van-list>
        </van-pull-rfresh>
    </div>
</template>

<script>
export default {
    props: ["items"],
    data() {
        return {
            isLoading: false,
            loadMore: false,
            finished: false
        };
    },
    created() {
        console.log("items测试" + this.items);
    },
    methods: {
        onRefresh() {
            console.log("下拉刷新");
            setTimeout(() => {
                this.isLoading = false;
            }, 500);
        },
        onLoadMore() {
            console.log("加载更多");
            setTimeout(() => {
                // 网络请求数据加载
                this.loadMore = false;
                if (this.items.length >= 200) {
                    this.finished = true;
                }
            }, 500);
        }
    }
};
</script>

<style scoped>
.more {
    width: 100%;
    height: 100%;
}
.info_wrap {
    display: flex;
    flex-direction: column;
    line-height: 30px;
}
.title {
    color: rgb(21, 131, 36);
    font-size: 15px;
}
.info-wrap-type {
    color: blueviolet;
    font-size: 15px;
}
.info-warp-author {
    color: rgba(137, 150, 167, 0.774);
}
</style>
