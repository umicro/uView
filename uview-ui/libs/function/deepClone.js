// 对象深度克隆
function deepClone(object = {}) {
	var o, i, j, k;
	if (typeof(object) !== "object" || object === null) return object;
	if (object instanceof Array) {
		o = [];
		i = 0;
		j = object.length;
		for (; i < j; i++) {
			if (typeof(object[i]) === "object" && object[i] != null) {
				o[i] = deepClone(object[i]);
			} else {
				o[i] = object[i];
			}
		}
	} else {
		o = {};
		for (i in object) {
			if (typeof(object[i]) === "object" && object[i] !== null) {
				o[i] = deepClone(object[i]);
			} else {
				o[i] = object[i];
			}
		}
	}
	return o;
}

export default deepClone;
