var Ajax={
	load:function(method,url,param,successCallBackFn,failCallBackFn){ //method请求方式,URl请求地址 ,param请求参数
       //successCallBackFn 数据请求成功回调函数 ,failCallBackFn数据请求失败回调函数		
        var xhr;
        if(window.XMLHttpRequest){
        	xhr=new XMLHttpRequest;
        }else if(window.ActiveXObject()){
        	xhr=new ActiveXObject("Msxml2.XMLHTTP");
        }else{
        	throw new Error("不支持Ajax");
        }
       
       if(method=='get'||method=='GET'){
        	xhr.open(method,url+"?"+param,true);
         	 xhr.send(null);
      		  }else if(method=='post'||method=='POST'){
        	xhr.open(method,url,true);
        	xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        	//如果是post请求,这个参数应该是json字符串格式
        	xhr.send(param);
      		  }else{
        	throw new Error("请求方式不正确!");
        }
        
//    /  xhr.open('GET','');
			xhr.onreadystatechange=function(){
					if(xhr.readyState==4&&xhr.status==200){
					var jsonStr=xhr.responseText;
				//请求成功后回调函数
					successCallBackFn(JSON.parse(jsonStr)) ;
					}else{
					 failCallBackFn("请求失败");
							}
						}
							}
						}