<template>
	<view class="page">
		
		<view class="fixbg" :style="{ 'background-image' : 'url(' + imageURL + ')' }">
			<backhead :icon="true" color="white" :title="title"></backhead>
			<scroll-view scroll-y="true" class="scroll-view">
				
				<view class="content">
					<view class="content-topic">
						{{topicContent.content_1}}
					</view>
					<view class="content-topic">
						以下是回信
					</view>
					<view class="content-topic">
						----------------------------------------------------------------------------------------------
					</view>
					<view class="content-topic">
						{{topicContent.content_2}}
					</view>
					<view class="content-topic">
						精彩评论：
					</view>
					<view class="content-comment">
						<unicloud-db ref="udb" class="content" v-slot:default="{data,pagination,hasMore, loading, error}"
							collection="guestbook,uni-id-users" :where="udbWhere" field="user_id.nickname,user_id._id,user_id.avatar_file,text,_id,state,topic_id,create_time,like"
							loadtime="onready">
							<view v-if="error">{{error.message}}</view>
							<view v-else>
								<view v-for="(item,index) in data" :key="index" class="user-comment">
									<view class="user-comment-head">
										<view class="head-image">
											<cloud-image :src="item.user_id[0].avatar_file.url"></cloud-image>
										</view>
										<view class="head-name">
											<view class="nickname">{{item.user_id[0].nickname}}</view>
											<view class="nowdate">{{item.create_time}}</view>
										</view>
										<view class="head-like">🚀{{item.like}}</view>
									</view>
									<view class="user-comment-bottom">
										<view class="comment-content">{{item.text}}</view>
										<uni-icons @click="deleteItem(item._id)" type="trash" size="18" color="#c9c3cd" />
									</view>
								</view>
								<uni-load-state :state="{data,pagination,hasMore,loading}"></uni-load-state>
							</view>
						</unicloud-db>
					</view>
				</view>
				

				
				
				<view class="submit-box">
					<view class="submit-box-image">
						<cloud-image width="60rpx" height="60rpx" v-if="userInfo.avatar_file&&userInfo.avatar_file.url" :src="userInfo.avatar_file.url"></cloud-image>
						<image v-else src="/static/uni-center/grey.png" mode="widthFix"/>
					</view>
					
					<view class="submit-box-input">
						<input class="input-box" v-model="text" :disabled="!hasLogin" :placeholder="hasLogin?$t('guestbook.msgContent'):$t('guestbook.notAvailable')" />
					</view>
					<view class="submit-box-button">
						<button @click="text?send():''" class="btn" :class="{active:text}" plain="true">发送</button>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	const db = uniCloud.database();
	const guestbookTable = db.collection('guestbook')
	const topicContent = db.collection('topic-list')
	import {
		mapMutations,mapGetters
	} from 'vuex';
	import backhead from "../../../components/backhead/backhead.vue"
	export default {
		computed: {
			...mapGetters({
				userInfo: 'user/info',
				hasLogin: 'user/hasLogin'
			}),
			udbWhere(){				
				if(this.hasLogin){
					if( this.uniIDHasRole('AUDITOR') ){
						return ''
					}else{
						while(this.topic_id){
							return 'topic_id=="' + this.topic_id +'"' + ' && (state==true || user_id._id==$cloudEnv_uid)'
						}
					}
				}
			}
		},
		data() {
			return {
				imageURL: "../../../static/background.gif",
				title:"话题详情页",
				text: "",
				topic_id: "",
				nowTime:"",
				topicContent: {}
			}
		},
		components:{
			backhead
		},
		onLoad(e) {
			// 接受话题列表页出过来的_id值
			this.topic_id = e.id
			this.getTopicContent()
			
			uni.setNavigationBarTitle({
				title: this.$t('guestbook.navigationBarTitle')
			})
		},
		onReady() {
			
		},
		methods: {
			// 获取话题内容
			getTopicContent(){
				let res = topicContent.where({
					_id: this.topic_id
				}).get()
				.then(res => {
					this.topicContent = res.result.data[0]
					this.title = this.topicContent.title
				})
			},

			deleteItem(id) {
				this.$refs.udb.remove(id, {
					complete: e => {
						console.log(e);
					}
				})
			},
			async send() {
				
				await this.getNowTime()
				return new Promise((resolve,reject) => {
					let data = {
						text:this.text,
						user_id: this.userInfo._id,
						create_time: this.nowTime,
						state: false,
						topic_id: this.topic_id,
						ip: this.userInfo.register_ip
						
					}
					guestbookTable.add(data)
					.then(res => {
						console.log(res,"添加评论成功")
						this.$refs.udb.loadData({clear: true})
						this.text=""
						resolve(res)
					})
					.catch(err => {
						console.log(err)
						reject(err)
					})
				})
			},
			...mapMutations({
				logout: 'user/logout'
			}),
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
			}
		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			if(e.index){
				this.logout()
			}else{
				uni.navigateTo({
					url:"/pages/ucenter/login-page/index/index"
				})
			}
		},
		
	}
</script>

<style>
/* 	view {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
	} */
	.scroll-view {
		height: 1000rpx;
	}
	.content {
		display: flex;
		flex-direction: column;
	}
	.content-topic {
		color: #FFFCE2;
		width: 610rpx;
		margin: 30rpx 70rpx 0 70rpx;
		font-size: 30rpx;
		line-height: 50rpx;
	}
	.content-comment {
		margin: 0 70rpx 0 70rpx;
		display: flex;
		flex-direction: row;
	}

	.comment-head {}

	.user-comment {
		color: #FFFFFF;
		display: flex;
		flex-direction: column;
		margin-top: 20rpx;
		border-bottom: 3rpx solid #888888;
	}
	.user-comment-head {
		width: 610rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
	.head-image {
		width: 100rpx;
		height: 100rpx;
		
	}
	.head-image image {
		width: 100%;
		height: 100%;
		border-radius: 50rpx;
	} 
	.user-comment-bottom {
		display: flex;
		flex-direction: row;
		width: 610rpx;
		margin-bottom: 10rpx;
	}
	.comment-content {
		width: 400rpx;
		margin-left: 140rpx;
	}
	
	.item .handle switch {
		transform: scale(0.6);
	}

	.submit-box {
		display: flex;
		position: fixed;
		flex-direction: row;
		/* justify-content: space-between; */
		align-items: center;
		bottom: 0;
		padding: 20rpx 15rpx;
		width: 750rpx;
		border-top: solid 1px #efecf2;
/* 		background-color: #ffffff; */
		height: 56px;
	}
	.submit-box-image {
		width: 60rpx;
		height: 60rpx;
		margin-left: 10rpx;
		margin-right: 50rpx;
		
	}
	.submit-box-image cloud-image,
	.submit-box-image image {
		width: 100%;
		height: 100%;
		border-radius: 30rpx;
		
	}

.submit-box-input {
	width: 400rpx;
}
.submit-box-input input {
	color: #000000;
	background-color: #FFFFFF;
	border-radius: 30rpx;
}
.submit-box-button {
	margin-left: 50rpx;
	margin-right: 10rpx;
	
}
.submit-box-button button {
	color: #FFFFFF;
	background-color: transparent;
	
}
	
	
</style>