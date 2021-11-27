<template>
	<view class="back-head" :style="{color:color}">
		<view class="back-head-icon">
			<view class="back-head-icon-back" @tap="handleToBack">
				<image src="../../static/iconfont/zuojiantou.png" ></image>
			</view>
			<text>|</text>
			<view class="back-head-icon-index" @tap="handleToIndex">
				<image src="../../static/iconfont/shouye.png" mode="" ></image>
			</view>
			
		</view>
		<view class="back-title">
			{{title}}
		</view>
		
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:['title','icon','color','iconblack'],
		methods:{
			handleToBack(){
				uni.navigateBack({})
			},
			handleToIndex(){
				uni.switchTab({
					url:'../../../pages/list/list'
				})
			}
		}
	}
</script>
	
<style scoped>
	.back-head {
		height: 75px;
		width: 100%;
		font-size: 16px;
		line-height: 80px;
		text-align: center;
		color: black;
		position: relative;
		display: flex;
		flex-direction: row;

	}
	.back-head-icon {
		position: absolute;
		left: 8px;
		top: 26px;
		height: 30px;
		width: 90px;
		background-color: rgb(0,0,0,0.4);
		color: white;
		line-height: 31px;
		border-radius: 15px;
		display: flex;
		justify-content: space-evenly;
	}
	.back-head-icon-back {
		width: 20px;
		height: 20px;
		margin-top: 5px;
	}
	.back-head-icon-back image {
		width: 100%;
		height: 100%;
	}
	.back-head-icon-index {
		margin-top: 5px;
		width: 20px;
		height: 20px;
	}
	.back-head-icon-index image {
		width: 100%;
		height: 100%;
	}
	.back-title {
		width: 300rpx;
		margin-left: 220rpx;
		overflow: hidden;
		text-overflow: ellipsis;  /* 超出部分省略号 */
		display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
		-webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
		-webkit-line-clamp: 1; /** 显示的行数 **/
	}
	
</style>
