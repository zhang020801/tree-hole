<template>
	<view class="fixbg" :style="{ 'background-image' : 'url(' + imageURL + ')' }">
		<backhead :icon="true" color="white" :title="title"></backhead>

		<view class="content">
			<view class="content-list">
				<scroll-view scroll-y="true" class="scroll-view">
					<view class="content-list-item" v-for="(item,index) in newsList" :key="index" v-bind:id = "index" @tap='handleToDetail'>
						<view class="item-title">
							{{item.time}}
						</view>
						<view class="item-content">
							{{item.text}}
						</view>
						<view class="item-bottom" v-if="item.privacy === 'true'">
							公开信件
						</view>
						<view class="item-bottom" v-else>
							私密信件
						</view>
					</view>


			
				</scroll-view>
			</view>

		</view>


	</view>
</template>

<script>
	import backhead from "../../../components/backhead/backhead.vue"
	export default {
		data() {
			return {
				title: "我的倾诉记录",
				imageURL: '../../../static/background03.jpg',
				userInfo: {},
				newsList: []
			}
		},
		components: {
			backhead,
		},
		onLoad() {
			// 获取用户数据
			this.userInfo = getApp().globalData.userInfo
			this.getNewsList()
		},
		methods: {
			// 链接news_list数据表
			getNewsList(){
				const db = uniCloud.database()
				const collection = db.collection('news_list')
				
				let res =  collection.where({
					username: this.userInfo.username
				}).get()
				.then(res => {
					this.newsList = res.result.data
				})		
			},
			// 跳转到倾诉详情
			handleToDetail(e){
				// console.log(e)
				uni.navigateTo({
					url:'../../ucenter/mynewsdetail/mynewsdetail?id=' + this.newsList[e.currentTarget.id]._id
				})
			}
		}
	}
</script>

<style>
	.scroll-view {
		width: 100%;
		height: 1100rpx;
	}
	scroll-view ::-webkit-scrollbar {
		display: none;
	}
	.content {
		/* background-color: #FFFFFF; */
		width: 700rpx;
		margin: 25rpx 25rpx 25rpx 25rpx;
	}

	.content-list {
		display: flex;
		flex-direction: column;

	}

	.content-list-item {
		color: #FFFFFF;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		background: url(../../../static/index/index_star.png);
		width: 600rpx;
		height: 500rpx;
		margin: 20rpx 50rpx 20rpx 50rpx;
		border-radius: 30rpx;
	}

	.item-title {}

	.item-content {
		margin-left: 30rpx;
		margin-right: 30rpx;
		line-height: 50rpx;
		overflow: hidden;
		word-break: break-all;  /* break-all(允许在单词内换行。) */
		text-overflow: ellipsis;  /* 超出部分省略号 */
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 3; /** 显示的行数 **/

	}
</style>
