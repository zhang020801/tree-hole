<template>
	<view class="fixbg" :style="{ 'background-image' : 'url(' + imageURL + ')' }">
		<!-- 顶部文字 -->
		<view class="content">
			<view class="content-title">
				<text>{{$t('pwdLogin.pwdLogin')}}</text>
			</view>
			<view class="content-middle">
				<input class="input-box" :inputBorder="false" v-model="username" :placeholder="$t('pwdLogin.placeholder')"/>
				<input type="password" class="input-box" :inputBorder="false" v-model="password" :placeholder="$t('pwdLogin.passwordPlaceholder')"/>
				<view class="captcha-box" v-if="captchaBase64">
					<image class="captcha-img" @click="createCaptcha" :src="captchaBase64" mode="widthFix"></image>
					<input type="text" class="input-box captcha" :inputBorder="false" v-model="captcha" :placeholder="$t('pwdLogin.verifyCodePlaceholder')"/>
				</view>
			</view>
			<view class="content-bottom">
				<uni-agreements @setAgree="agree = $event"></uni-agreements>
					<button class="send-btn" :disabled="!canLogin" :type="canLogin?'primary':'default'"
					@click="pwdLogin">{{$t('pwdLogin.login')}}</button>
					<!-- 忘记密码 -->
					<view class="auth-box">
						<text class="link" @click="toRetrievePwd">{{$t('pwdLogin.forgetPassword')}}</text>
						<text class="link" @click="toRegister">{{$t('pwdLogin.register')}}</text>
					</view>
				</view>
			</view>
		</view>
		
		
		
		
</template>

<script>
	import mixin from '../common/login-page.mixin.js';
	export default {
		mixins: [mixin],
		data() {
			return {
				imageURL: "../../../../static/background.gif",
				"password": "",
				"username": "",
				"agree": false,
				"captchaBase64":"",
				"captcha":""
			}
		},
		computed: {
			canLogin() {
				return this.username.length && this.isPwd;
			},
			isPwd() {
				return /^.{6,20}$/.test(this.password);
			},
			isPhone() {
				return /^1\d{10}$/.test(this.phone);
			},
		},
		methods: {
			// 页面跳转，找回密码
			toRetrievePwd() {
				uni.navigateTo({
					url: '../pwd-retrieve/pwd-retrieve?phoneNumber=' + (this.isPhone ? this.username : '') +
						'&phoneArea=' + this.currenPhoneArea
				})
			},
			/**
			 * 密码登录
			 */
			pwdLogin() {
				if (!this.agree) {
					return uni.showToast({
						title: this.$t('common').noAgree,
						icon: 'none'
					});
				}
				// 下边是可以登录
				uniCloud.callFunction({
					name:'uni-id-cf',
					data:{
						action:'login',
						params:{
							"username": this.username,
							"password": this.password,
							"captcha":this.captcha
						},
					},
					success: ({result}) => {
						console.log(result);
						if (result.code === 0) {
							this.loginSuccess(result)
						} else {
							if (result.needCaptcha) {
								uni.showToast({
									title: result.msg,
									icon: 'none'
								});
								this.createCaptcha()
							}else{
								uni.showModal({
									title: this.$t('common').error,
									content: result.msg,
									showCancel: false,
									confirmText: this.$t('common').gotIt
								});
							}
						}
					}
				})
			},
			createCaptcha(){
				uniCloud.callFunction({
					name:'uni-id-cf',
					data:{
						action:'createCaptcha',
						params:{
							scene: "login"
						},
					},
					success: ({result}) => {
						if (result.code === 0) {
							this.captchaBase64 = result.captchaBase64
						}else{
							uni.showModal({
								content: result.msg,
								showCancel: false
							});
						}
					}
				})
			},
			/* 前往注册 */
			toRegister(e) {
				console.log(e);
				uni.navigateTo({
					url: '/pages/ucenter/login-page/register/register'
				})
			}
		}
	}
</script>

<style>
	@import url("../common/login-page.css");
	.content {
		display: flex;
		flex-direction: column;
	}
	.content-title {
		color: #FFFFFF;
		font-size: 30rpx;
		font-weight: bold;
		align-items: center;
		height: 40rpx;
	}
	.content-middle {
		margin-top: 50rpx;
	}
	.content-middle input:nth-child(1) {
		background-color: #424242;
		color: #FFFCE2 ;
	}
	.content-middle input:nth-child(2) {
		background-color: #424242;
		color: #FFFCE2 ;
	}
	.content-bottom button {
		background-color: #424242;
		color: #FFFFFF;
	}
	
	.auth-box {
		flex-direction: row;
		justify-content: space-between;
		margin-top: 20px;
	}

	.auth-box .link {
		font-size: 26rpx;
		color: #FFFFFF;
	}

	.login-text-sub {
		color: #8a8f8b;
	}

	.toRegister {
		margin-top: 80px;
		width: 600rpx;
	}
	.captcha-box{
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
	}
	.captcha-img{
		margin:15px 15px 0 0;
		width: 250rpx;
	}
	.captcha{
		width: 350rpx;
	}
</style>
