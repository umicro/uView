// 判断arr是否为一个数组，返回一个bool值
function isArray (arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';  
}

// 深度克隆
function deepClone (obj) {  
    if(typeof obj !== "object" && typeof obj !== 'function') {
		//原始类型直接返回
        return obj;        
    }
    var o = isArray(obj) ? [] : {}; 
    for(let i in obj) {  
        if(obj.hasOwnProperty(i)){ 
            o[i] = typeof obj[i] === "object" ? deepClone(obj[i]) : obj[i]; 
        } 
    } 
    return o;
}

export default deepClone;
