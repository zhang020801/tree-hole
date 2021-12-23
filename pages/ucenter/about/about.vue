<template>
	<view class="fixbg" v-if="imageURL && imageURL!=''" :style="{ 'background-image' : 'url(' + imageURL + ')' }">
		<view class="about">
			<view class="box">
				<image class="logoImg" src="../../../static/logo.jpg"></image>
				<text class="tip appName">Tell倾诉</text>
				<text class="tip">Version {{version}}</text>
				<!--Sansnn-uQRCode组件来源，插件市场：https://ext.dcloud.net.cn/plugin?id=1287 微调后-->
				<Sansnn-uQRCode text="https://static-cf480923-80f4-426f-9ec9-610ab148567a.bspapp.com/" :makeOnLoad="true" class="qrcode"></Sansnn-uQRCode>
				<text class="tip">{{$t('about.sacnQR')}} 软件名 {{$t('about.client')}}</text>
			</view>
			<view class="copyright">
				<view class="agreement-box" v-for="(agreement,index) in about.agreements" :key="index">
					<text class="agreement" @click="navigateTo(agreement)">《{{agreement.title}}》</text>
					<text class="hint" v-if="about.agreements.length-1>index">{{$t('about.and')}}</text>
				</view>
				<text class="hint">Tell倾诉 © {{year}}</text>
				<text class="hint">第五小组开发项目组</text>
			</view>
		</view>
	</view>
	
</template>
<script>
	import UniShare from '@/uni_modules/uni-share/js_sdk/uni-share.js';
	const uniShare = new UniShare()
	export default {
		onBackPress({from}) {
			if(from=='backbutton'){
				this.$nextTick(function(){
					uniShare.hide()
				})
				return uniShare.isShow;
			}
		},
		onLoad() {
			// #ifdef APP-PLUS
			this.version = plus.runtime.version
			// #endif
		},
		computed: {
			uniStarterConfig() {
				console.log(getApp());
				return getApp().globalData.config
			}
		},
		data() {
			return {
				imageURL: "../../../../static/background.gif",
				version: "V1.0.0",
				year: "2020",
				about: {}
			};
		},
		created() {
			this.about = this.uniStarterConfig.about
			this.year = (new Date).getFullYear()
		},
		onNavigationBarButtonTap() {
			let {
				download,
				appName,
				slogan,
				logo
			} = this.about
			uniShare.show({
				content: { //公共的分享类型（type）、链接（herf）、标题（title）、summary（描述）、imageUrl（缩略图）
					type: 0,
					href: download,
					title: appName,
					summary: slogan,
					imageUrl: logo + '?x-oss-process=image/resize,m_fill,h_100,w_100' //压缩图片解决，在ios端分享图过大导致的图片失效问题
				},
				menus: [{
						"img": "/static/app-plus/sharemenu/wechatfriend.png",
						"text": this.$t('common').wechatFriends,
						"share": {
							"provider": "weixin",
							"scene": "WXSceneSession"
						}
					},
					{
						"img": "/static/app-plus/sharemenu/wechatmoments.png",
						"text":  this.$t('common').wechatBbs,
						"share": {
							"provider": "weixin",
							"scene": "WXSenceTimeline"
						}
					},
					{
						"img": "/static/app-plus/sharemenu/weibo.png",
						"text":  this.$t('common').weibo,
						"share": {
							"provider": "sinaweibo"
						}
					},
					{
						"img": "/static/app-plus/sharemenu/qq.png",
						"text": "QQ",
						"share": {
							"provider": "qq"
						}
					},
					{
						"img": "/static/app-plus/sharemenu/copyurl.png",
						"text": this.$t('common').copy,
						"share": "copyurl"
					},
					{
						"img": "/static/app-plus/sharemenu/more.png",
						"text": this.$t('common').more,
						"share": "shareSystem"
					}
				],
				cancelText: this.$t('common').cancelShare,
			}, e => { //callback
				console.log(e);
			})
		},
		methods: {
			navigateTo({
				url,
				title
			}) {
				uni.navigateTo({
					url: '/pages/common/webview/webview?url=' + url + '&title=' + title,
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	/* #ifndef APP-NVUE */
	view {
		display: flex;
		box-sizing: border-box;
		flex-direction: column;
	}
	/* #endif */
	.about {
		width: 750rpx;
		flex-direction: column;
	}

	.box {
		color: #FFFCE2;
		margin-top: 60px;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.logoImg {
		margin-bottom: 10rpx;
		width: 160rpx;
		height: 160rpx;
		border-radius: 15px;
	}

	.tip {
		text-align: center;
		font-size: 24rpx;
		margin-top: 10px;
		padding: 10rpx;
	}

	.appName {
		margin-top: 20px;
		font-size: 42rpx;
		font-weight: 500;
	}

	.qrcode {
		margin-top: 60rpx;
	}

	.copyright {
		width: 750rpx;
		font-size: 32rpx;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		bottom: 20px;
		left: 0;
		position: fixed;
	}

	.agreement-box {
		justify-content: center;
	}

	.agreement {
		color: #2285ff;
		font-size: 26rpx;
	}

	.hint {
		text-align: center;
		color: #999999;
		font-size: 26rpx;
	}
</style>
