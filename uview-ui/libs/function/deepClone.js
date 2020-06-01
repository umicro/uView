function deepClone(obj){
    var o,i,j,k;
    if(typeof(obj)!=="object" || obj===null)return obj;
    if(obj instanceof Array){
        o=[];
        i=0;j=obj.length;
        for(;i<j;i++){
            if(typeof(obj[i])==="object" && obj[i]!=null){
                o[i]=deepClone(obj[i]);
            }else{
                o[i]=obj[i];
            }
        }
    }else{
        o={};
        for(i in obj){
            if(typeof(obj[i])==="object" && obj[i]!==null){
                o[i]=deepClone(obj[i]);
            }else{
                o[i]=obj[i];
            }
        }
    }
    return o;
}

export default deepClone;
