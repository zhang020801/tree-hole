<template>
	<view class="fixbg" :style="{ 'background-image' : 'url(' + imageURL + ')' }">
		<backhead :icon="true" color="black" :title="title"></backhead>
		<view class="content-box">
			<view class="content">
				
				<view class="content-title">
					<view class="content-title-left">
						<view class="">倾诉人：
							<text>{{userInfo.nickname}}</text>
						</view>
						<view class="" v-if="newsDetail[0].privacy === 'true'">
							公开信件
						</view>
						<view class="" v-else>
							私密信件
						</view>
					</view>
					<view class="content-title-right">
						<image src="../../../static/index/submit_sign.png" mode=""></image>
					</view>
				</view>
				
				<view class="content-middle">
					<scroll-view scroll-y="true"  class="scroll-view">
						<view class="content-middle-text">
							{{newsDetail[0].text}}
						</view>
					</scroll-view>					
				</view>
				
				<view class="content-bottom">
					<view class="content-bottom-1">
						<view class="content-bottom-huojian">
							<image src="../../../static/news_detail/huojian.png" mode=""></image>
						</view>					
						<view class="content-bottom-time">
							<view class="">信件倾诉时间：</view>
							<view class="">{{newsDetail[0].time}}</view>
						</view>
					</view>
				</view>
				
				
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import backhead from "../../../components/backhead/backhead.vue"
	export default {
		data() {
			return {
				title: "倾诉详情",
				imageURL: '../../../static/background03.jpg',
				id:'',
				newsDetail:[],
				userInfo:{}
			}
		},
		onLoad(e) {
			// console.log(e)
			this.id = e.id;
			this.userInfo = getApp().globalData.userInfo;
			this.getNewsList();
		},
		methods: {
			// 链接news_list数据表
			getNewsList(){
				const db = uniCloud.database()
				const collection = db.collection('news_list')
				
				let res =  collection.where({
					_id: this.id
				}).get()
				.then(res => {
					this.newsDetail = res.result.data
				})		
			}
		}
	}
</script>

<style>
 .content-box {
		margin-left: 25rpx;
		margin-right: 25rpx;
		background-color: #eee7d7;
		display: flex;
		border-radius: 20rpx;
	}

	.content {
		display: flex;
		flex-direction: column;
		margin: 25rpx 25rpx 25rpx 25rpx;
		background-color: #f7f6f5;
	}

	.content-title {
		display: flex;
		width: 650rpx;
		height: 180rpx;
		border-bottom: 5rpx solid #808080;
		/* justify-content: space-around; */

	}

	.content-title-left {
		width: 400rpx;
		margin: 35rpx 35rpx 35rpx 35rpx;

	}
	.content-title-left text {
		font-size: 30rpx;
		font-weight: 400;
		
	}

	.content-title-left view:nth-child(1) {
		font-size: 40rpx;
		font-weight: bold;
		margin-bottom: 25rpx;
	}

	.content-title-left view:nth-child(2) {
		font-size: 20rpx;
		color: #be9a73;
	}

	.content-title-right {
		width: 110rpx;
		height: 110rpx;
		margin: 35rpx 35rpx 35rpx 35rpx;
	}

	.content-title-right image {
		width: 100%;
		height: 100%;
	}
	
	.content-middle {
		height: 400rpx;
		width: 650rpx;
		margin: 35rpx 0 0 0;
	}
	.content-middle-text {
		margin: 0 20rpx 0 20rpx;
	}
	scroll-view ::-webkit-scrollbar {
		display: none;
	}
	.scroll-view {
		height: 400rpx;
	}
	.content-bottom {
		width: 650rpx;
		height: 400rpx;
	}
	.content-bottom-1 {
		display: flex;
		flex-direction: row;
		margin: 20rpx 25rpx 20rpx 25rpx;
	}
	.content-bottom-huojian {
		width: 100rpx;
		height: 100rpx;
		margin-right: 30rpx;
	}
	.content-bottom-huojian image {
		width: 100%;
		height: 100%;
	}
	.content-bottom-time {
		line-height: 50rpx;
	}
	.content-bottom-time view:nth-child(1) {
		font-size: 30rpx;
		font-weight: bold;
	}
	.content-bottom-time view:nth-child(2) {
		color: #666666;
	}
	.content-bottom-2 {
		display: flex;
		flex-direction: column;
		margin: 20rpx 25rpx 20rpx 70rpx;
	}
	.content-bottom-x {
		display: flex;
		flex-direction: row;
		margin-bottom: 20rpx;
	}
	.x-image {
		width: 60rpx;
		height: 60rpx;
		margin-right: 30rpx;
	}
	.x-image image {
		width: 100%;
		height: 100%;
	}
	.content-bottom-x view:nth-child(2) {
		margin-right: 30rpx;
		font-size: 30rpx;
		color: #666666;
	}
	.content-bottom-x view:nth-child(3) {
		margin-right: 30rpx;
		font-size: 30rpx;
		color: #666666;
	}
</style>
