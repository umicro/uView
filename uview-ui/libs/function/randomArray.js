// 打乱数组
function randomArray(array = []) {
	// 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
	return array.sort(() => Math.random() - 0.5);
}

export default randomArray
