import App from './App'
import store from './store'
import i18n from './lang/i18n'


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'


Vue.filter('formatCount', function(value) {
	if (!value) {   //在这里进行一次传递数据判断.如果传递进来的为空值,返回其空字符串.解决其问题
		return '';
	}
	return value.toFixed(2)
})

const app = new Vue({
	i18n,
	store,
	...App
})
app.$mount()
// #endif


// #ifdef VUE3
import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.use(i18n)
	app.use(store)
	return {
		app
	}
}
// #endif
