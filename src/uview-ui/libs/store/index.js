// 暂时不用vuex模块方式实现，将该方法直接放入到/store/index.js中
const module = {
	actions: {
		$uStore({rootState}, params) {
			let nameArr = params.name.split('.');
			if(nameArr.length >= 2) {
				let obj = rootState[nameArr[0]];
				for(let i = 1; i < nameArr.length - 1; i ++) {
					obj = obj[nameArr[i]];
				}
				obj[nameArr[nameArr.length - 1]] = params.value;
			} else {
				rootState[params.name] = params.value;
			}
		}
	}
}

export default module