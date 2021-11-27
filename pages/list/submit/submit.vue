<template>
	<view class="fixbg" :style="{ 'background-image' : 'url(' + imageURL + ')' }">
		<backhead :icon="true" color="white" :title="title"></backhead>
		<view class="content-box">
			<view class="content">
				<view class="content-title">
					<view class="content-title-left">
						<view class="">寄给倾诉星球</view>
						<view class="">讨论信件</view>
					</view>
					<view class="content-title-right">
						<image src="../../../static/index/submit_sign.png" mode=""></image>
					</view>
				</view>
				<view class="content-middle">
					<editor id="editor" :placeholder="placeholder" @ready="onEditorReady"></editor>
				</view>
				<view class="content-bottom">
					<view class="icon-qingkong" @tap="handleToClear">
						<image src="../../../static/iconfont/qingkong.png" mode=""></image>
					</view>
					<view class="icon-chexiao" @tap="handleToUndo">
						<image src="../../../static/iconfont/chexiao.png" mode=""></image>
					</view>
					<view class="icon-huifu" @tap="handleToRedo">
						<image src="../../../static/iconfont/huifu.png" mode=""></image>
					</view>
					
					<button type="default" @click="handleToSubmit">倾诉</button>
				</view>
				<view class="content-radio">
					<radio-group class="radio" @change="radioChange">
						<radio value="true" color="#cba6b6"/><text>公开</text>
						<radio value="false" color="#cba6b6"/><text>私密</text>
					</radio-group>
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
				title: "寄给星球",
				imageURL: "../../../static/background.gif",
				placeholder: "在这里你可以分享发生在身边—切有趣的事情也可以给生活、朋友或者自己写封信，尽情的倾诉吧!",
				content: "",
				userInfo:{},
				privacy: ""
			}
		},
		components: {
			backhead,
		},
		onLoad() {
			// 获取用户数据
			this.userInfo = getApp().globalData.userInfo
		},
		
		methods: {
			// editor初始化
			onEditorReady() {
				// #ifdef MP-BAIDU
				this.editorCtx = requireDynamicLib('editorLib').createEditorContext('editorId');
				// #endif

				// #ifdef APP-PLUS || H5 ||MP-WEIXIN
				uni.createSelectorQuery().select('#editor').context((res) => {
					this.editorCtx = res.context
				}).exec()
				
				// #endif
			},
			// 撤销功能
			handleToUndo() {
				this.editorCtx.undo()
			},
			// 恢复功能
			handleToRedo(){
				this.editorCtx.redo()
			},
			// 清空功能
			handleToClear(){
				this.editorCtx.clear()
			},
			// 提交倾诉 这里涉及到异步请求，在提交倾诉信息，倾诉信息存储到数据表后，
			// 再请求数据表（异步请求），这样本次添加的倾诉信息才会请求到。
			async handleToSubmit(){
				if(this.userInfo.username != null){
					if (!this.privacy){
						uni.showModal({
							title:'提示',
							content:'请选择隐私设置（公开or私密）',
							success: (res) => {
								if(res.confirm){
									
								}else if (res.cancel){
									
								}
							}
						})
					}
					else{
						
						await this.submitNews();
						// 跳转到倾诉列表
						uni.navigateTo({
							url:"../pour_out_list/pour_out_list"
						})
					}
				}
				else{
					uni.showModal({
						title:'登录提示',
						content:'请查看您是否已经登录',
						success: (res) => {
							if(res.confirm){
								uni.switchTab({
									url:'../../ucenter/ucenter'
								})
							}else if (res.cancel){
								
							}
						}
					})
				}
			
			},
			// 获取editor富文本编辑器中倾诉的内容
			getEditorContent(){
				return new Promise((resolve,reject) => {
					this.editorCtx.getContents({
						success: (res) => {
							this.content = res.text;	
							resolve(res)
						},							
					})
				})
			},
			// 链接倾诉数据库news_list
			async submitNews(){
				await this.getEditorContent()
				return new Promise((resolve,reject) => {
					// 获取当前时间
					var nowTime = new Date();
					
					let data = {
						// _id: this.userInfo._id,
						username: this.userInfo.username,
						nickname: this.userInfo.nickname,
						time: nowTime.toLocaleString(),
						text: this.content,
						privacy: this.privacy
					}
					const db = uniCloud.database()
					db.collection("news_list").add(data)
					.then(res => {
						console.log(res, "添加数据成功")
						resolve(res)
					})
					.catch(err => {
						console.log(err)
						reject(err)
					})
				})
			},
			// 获得公开还是私密选项值
			radioChange(res){
				this.privacy = res.detail.value
				
				
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
		/* justify-content: space-around; */

	}

	.content-title-left {
		width: 400rpx;
		margin: 35rpx 35rpx 35rpx 35rpx;

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
		width: 580rpx;
		margin-left: 35rpx;
		height: 300rpx;
		margin-bottom: 75rpx;
	}

	.content-bottom {
		width: 580rpx;
		height: 100rpx;
		margin: 30rpx;
		display: flex;
		flex-direction: row;
		border-top: 5rpx solid #808080;
	}
	.icon-qingkong {
		width: 50rpx;
		height: 50rpx;
		margin: 10rpx 10rpx 10rpx 10rpx;
	}
	.icon-qingkong image {
		width: 100%;
		height: 100%;
	}
	.icon-chexiao {
		width: 50rpx;
		height: 50rpx;
		margin: 10rpx 10rpx 10rpx 10rpx;
	}
	.icon-chexiao image {
		width: 100%;
		height: 100%;
	}
	.icon-huifu {
		width: 50rpx;
		height: 50rpx;
		margin: 10rpx 10rpx 10rpx 10rpx;
	}
	.icon-huifu image {
		width: 100%;
		height: 100%;
	}
	.content-bottom button {
		margin: 10rpx 10rpx 10rpx 230rpx;
		background-color: transparent;
	}
	.content-radio {
		margin: 0 10rpx 20rpx 30rpx;
		font-size: 25rpx;
		color: #cba6b6;
	}
	.content-radio radio {
		
		transform: scale(0.7);
	}
</style>
