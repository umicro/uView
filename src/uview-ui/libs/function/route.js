import queryParams from '../../libs/function/queryParams.js';
/**
 * 路由跳转
 * 注意:本方法没有对跳转的回调函数进行封装
 */
function route(options = {}, params = false) {
	let config = {
		type: 'navigateTo',
		url: '',
		delta: 1, // navigateBack页面后退时,回退的层数
		params: {}, // 传递的参数
		animationType: 'pop-in', // 窗口动画,只在APP有效
		animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
	};
	config = Object.assign(config, options);
	// 如果url没有"/"开头，添加上，因为uni的路由跳转需要"/"开头
	if (config.url[0] != '/') config.url = '/' + config.url;
	// 判断是否有传递显式的参数,Object.keys转为数组并判断长度,switchTab类型时不能携带参数
	if (Object.keys(config.params).length && config.type != 'switchTab') {
		// 判断用户传递的url中，是否带有参数
		// 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
		// 如果有url中有get参数，转换后无需带上"?"
		let query = '';
		if (/.*\/.*\?.*=.*/.test(config.url)) {
			// object对象转为get类型的参数
			query = queryParams(config.params, false);
			// 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
			config.url += "&" + query;
		} else {
			query = queryParams(config.params);
			config.url += query;
		}
	}
	// 简写形式，把url和参数拼接起来
	if (typeof options === 'string' && typeof params == 'object') {
		let query = '';
		if (/.*\/.*\?.*=.*/.test(options)) {
			// object对象转为get类型的参数
			query = queryParams(params, false);
			// 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
			options += "&" + query;
		} else {
			query = queryParams(params);
			options += query;
		}
	}
	// 判断是否一个字符串，如果是，直接跳转(简写法)
	// 如果是中情形，默认第二个参数为对象形式的参数
	if (typeof options === 'string') {
		if (options[0] != '/') options = '/' + options;
		return uni.navigateTo({
			url: options
		});
	}
	// navigateTo类型的跳转
	if (config.type == 'navigateTo' || config.type == 'to') {
		return uni.navigateTo({
			url: config.url,
			animationType: config.animationType,
			animationDuration: config.animationDuration,
		});
	}
	if (config.type == 'redirectTo' || config.type == 'redirect') {
		return uni.redirectTo({
			url: config.url,
		});
	}
	if (config.type == 'switchTab' || config.type == 'tab') {
		return uni.switchTab({
			url: config.url,
		});
	}
	if (config.type == 'reLaunch') {
		return uni.reLaunch({
			url: config.url
		});
	}
	if (config.type == 'navigateBack' || config.type == 'back') {
		return uni.navigateBack({
			delta: parseInt(config.delta ? config.delta : this.delta)
		});
	}
}

export default route;
