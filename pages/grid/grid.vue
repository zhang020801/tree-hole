<template>
	<view class="warp">
		<view class="fixbg" :style="{ 'background-image' : 'url(' + imageURL + ')' }">
			<backhead :icon="true" color="white" :title="title"></backhead>
			<scroll-view scroll-y="true" class="scroll-view">
				<view class="content">

					<!-- 头部日期 + 个人头像 -->
					<view class="content-title">
						<view class="content-title-left">
							<text>{{nowTime}}</text>
							<text>Today</text>
						</view>

						<view class="content-title-right" @tap="handleToMine">
							<cloud-image v-if="userInfo.avatar_file&&userInfo.avatar_file.url"
								:src="userInfo.avatar_file.url"></cloud-image>
							<image v-else src="../../static/uni-center/grey.png" mode=""></image>
						</view>
					</view>


					<view v-if="isLoading">
						<skeleton
						:avatar="false"
						:imgTitle="true"
						:loading="isLoading"
						v-for="(item,key) in 4"
						:titleStyle="{}"
						:key="key"
						>
						</skeleton>
					</view>
					<!-- 轮播图 -->
					<unicloud-db v-else ref="bannerdb" v-slot:default="{data, loading, error, options}"
						collection="opendb-banner" field="_id,bannerfile,open_url,title" @load="onqueryload">
						<!-- 当无banner数据时显示占位图 -->
						<image v-if="!(loading||data.length)" class="banner-image" src="/static/grid/empty.png"
							mode="aspectFill" :draggable="false" />
						<uni-swiper-dot v-else class="uni-swiper-dot-box" @clickItem="clickItem" :info="data"
							:current="current" field="content">
							<swiper class="swiper-box" @change="changeSwiper" :current="swiperDotIndex" autoplay="true" circular="true">
								<swiper-item v-for="(item, index) in data" :key="item._id">
									<view class="swiper-item" @click="clickBannerItem(item)">
										<image class="banner-image" :src="item.bannerfile.url" mode="aspectFill"
											:draggable="false" />
									</view>
								</swiper-item>
							</swiper>
						</uni-swiper-dot>
					</unicloud-db>

					<!-- 主体内容 -->
					<view class="content-list" v-for="(item,index) in topicList" :key="index" v-bind:id="index" @tap="handleToGuestBook">
						<view class="content-list-item">
							<view class="item-image">
								<image :src="item.bannerfile.url" mode=""></image>
							</view>
							<view class="item-text">
								<view class="item-text-title">
									{{item.title}}
								</view>
								<view class="item-text-content">
									{{item.content}}
								</view>
							</view>
							<view class="item-comment">
								<view class="comment-title">
									<view class="comment-title-left">精彩评论：</view>
									<view class="">热度值{{item.heatvalue}}</view>
								</view>
								<view class="comment-content">
									<swiper :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000" vertical="true" circular="true">
										<swiper-item v-for="(comment,index) in item.comment" :key="index">
											<view class="swiper-item">{{comment.name}}：{{comment.content}}</view>
										</swiper-item>
									</swiper>
								</view>
							</view>							
						</view>
					</view>				
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters,
	} from 'vuex';
	import statusBar from "@/uni_modules/uni-nav-bar/components/uni-nav-bar/uni-status-bar";
	import backhead from "../../components/backhead/backhead.vue"
	import Skeleton from '../../components/J-skeleton/J-skeleton.vue'
	export default {
		components: {
			statusBar,
			backhead,
			Skeleton
		},
		data() {
			return {
				isLoading: true,
				imageURL: "../../static/background.gif",
				title: '空间站📡',
				current: 0,
				swiperDotIndex: 0,
				nowTime: '',
				userInfo: {},
				topicList:{}
			}
		},
		computed: {
			...mapGetters({
				hasLogin: 'user/hasLogin'
			})
		},
		onLoad() {
			this.getNewsList();
			setTimeout(()=> {
				this.isLoading = false;
			},1500)
		},
		onShow() {
			// 获得当前时间
			this.getNowTime();
			// 获取用户数据
			this.userInfo = getApp().globalData.userInfo;
		},
		methods: {
			// 获取当前日期
			getNowTime() {
				// 获得当前时间
				var nowtime = new Date();
				var LocaleDate = nowtime.toLocaleDateString();
				var LocaleDay = nowtime.getDay();
				LocaleDay = LocaleDay.toString();
				LocaleDate = LocaleDate.replace("/", "年");
				LocaleDate = LocaleDate.replace("/", "月");
				LocaleDay = LocaleDay.replace("0", "星期日");
				LocaleDay = LocaleDay.replace("1", "星期一");
				LocaleDay = LocaleDay.replace("2", "星期二");
				LocaleDay = LocaleDay.replace("3", "星期三");
				LocaleDay = LocaleDay.replace("4", "星期四");
				LocaleDay = LocaleDay.replace("5", "星期五");
				LocaleDay = LocaleDay.replace("6", "星期六");
				this.nowTime = LocaleDate + "日 " + LocaleDay
			},
			// 获取话题列表数据
			getNewsList(){
				const db = uniCloud.database()
				const collection = db.collection('topic-list')
				
				let res =  collection.where({}).get()
				.then(res => {
					this.topicList = res.result.data
				})		
			},

			// 跳转到我的界面
			handleToMine() {
				uni.switchTab({
					url: "../ucenter/ucenter"
				})
			},
			// 跳转到话题详情界面
			handleToGuestBook(e){
				uni.navigateTo({
					url:"../ucenter/guestbook/guestbook?id=" + this.topicList[e.currentTarget.id]._id
				})
			},
			// banner加载后触发的回调
			onqueryload(data) {},
			changeSwiper(e) {
				this.current = e.detail.current
			},
			clickItem(e) {
				this.swiperDotIndex = e
			},
			// 点击banner的处理
			clickBannerItem(item) {
				// 有外部链接-跳转url
				if (item.open_url) {
					uni.navigateTo({
						url: '/pages/common/webview/webview?url=' + item.open_url + '&title=' + item.title,
						success: res => {},
						fail: () => {},
						complete: () => {}
					});
				}
				// 其余业务处理
			}
		}
	}
</script>

<style>
	/* #ifndef APP-NVUE */
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff;
		min-height: 100%;
		height: auto;
	}

	view {
		font-size: 14px;
		line-height: inherit;
	}

	.content {
		width: 100%;
		display: flex;
		flex-direction: column;
	}

	.content-title {
		width: 650rpx;
		height: 180rpx;
		margin: 0 50rpx 20rpx 50rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.content-title-left {
		display: flex;
		flex-direction: column;

		line-height: 70rpx;
	}

	.content-title-left text:nth-child(1) {
		color: #d4cbca;
		font-size: 30rpx;

	}

	.content-title-left text:nth-child(2) {
		color: #FFFFFF;
		font-size: 50rpx;
		font-weight: bold;
	}

	.content-title-right {
		width: 100rpx;
		height: 100rpx;
		margin-top: 50rpx;

	}

	.content-title-right image {
		width: 100%;
		height: 100%;
		border-radius: 50rpx;
	}


	/* #endif */

	/* #ifdef APP-NVUE */
	.warp {
		background-color: #fff;
	}

	/* #endif */

	.banner-image {
		width: 650rpx;
		height: 400rpx;
		margin: 0 50rpx 0 50rpx;
		border-radius: 40rpx;
	}

	.swiper-box {
		height: 400rpx;
	}

	scroll-view ::-webkit-scrollbar {
		display: none;
	}

	.scroll-view {
		height: 1100rpx;
	}
	
	.content-list {
		width: 650rpx;
		border-radius: 30rpx;
		margin: 40rpx 50rpx 0 50rpx;
		background:linear-gradient(#a7a7a7,#fffce2)
	}
	.content-list-item {
		margin: 30rpx 30rpx 30rpx 30rpx;
	}
	.item-image {
		width: 590rpx;
		height: 520rpx;
		
	}
	.item-image image {
		width: 100%;
		height: 100%;
		border-radius: 40rpx;
	}
	.item-text {
		margin-top: 30rpx;
	}
	.item-text-title {
		font-size: 30rpx;
		font-weight: bold;
		margin: 0 30rpx 30rpx 20rpx;
		
	}
	.item-text-content {
		color: #7f7f7f;
		font-size: 20rpx;
		margin: 0 30rpx 40rpx 30rpx;
		line-height: 40rpx;
		overflow: hidden;
		word-break: break-all;  /* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;  /* 超出部分省略号 */
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 3; /** 显示的行数 **/
	}
	.item-comment {
		margin: 0 30rpx 10rpx 30rpx;
		
	}
	.comment-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.comment-content {
		margin-top: 20rpx;
		background-color: #e5e5e5;
		border-radius: 20rpx;
		height: 60rpx;
	}
	.comment-content swiper {
		height: 50rpx;
	}
	.comment-content swiper-item {
		margin:10rpx 0rpx 0 20rpx;
	}
</style>
