<template>
	<view class="pages" >
		<view class="fixbg" :style="{ 'background-image' : 'url(' + imageURL + ')' }">
			<xingqiu-tag></xingqiu-tag>
			<view class="content-bottom" @tap="handleToSubmit()">
				<view class="huojian-image">
					<image src="../../static/index/huojian2.png" mode=""></image>
				</view>
				<view class="content-bottom-button">
					<button type="default" size="mini">点击倾诉</button>
				</view>
				
			</view>
		</view>
		
		</unicloud-db>
	</view>
</template>

<script>
	import xingqiuTag from '../../components/xingqiu-tag/xingqiu-tag.vue';
	export default {
		components: {
			xingqiuTag
		},
		computed: {
			
		},
		onLoad() {
			
		},
		data() {
			return {
				imageURL: "../../static/background.gif"
			}
		},
		methods: {
			handleToSubmit(){
				uni.navigateTo({
					url:"../../pages/list/submit/submit"
				})
			},
		}
	}
</script>

<style scoped>
	.content-bottom {
		width: 100%;
		display: flex;
		flex-direction: column;
		
	}
	.huojian-image {
		width: 100rpx;
		height: 100rpx;
		margin-left: 335rpx;
	}
	.huojian-image image {
		width: 100%;
		height: 100%;
	}
	.content-bottom-button {
		margin-left: 300rpx;
	}
	.content-bottom-button button {
		color: #FFFFFF;
		background-color: transparent;
	}
</style>
