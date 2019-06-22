$(function(){
//这里设置了title周期跳动；
var a=document.title;
function b(){
document.title=document.title==a?"music.life":a;
}
b();
timer=setInterval(b,3000);









//点击歌单推荐，显示文本（这是导航栏上面的文本样式）
var ul=document.getElementById("ul1");
var h6=ul.children[0];
h6.onmouseenter=function(e){
var li=e.target.parentNode.children;
    for(var i=1;i<li.length;i++){
	if(li[i].className=="breadcrumb-item"){
		if(li[i].style.opacity==1){
            console.log(li[i])
			li[i].style.opacity=0;
		}else{
			li[i].style.opacity=1;
		}
    }
}
}






// 打分事件
$(".score").on("mouseenter","li",function(){
    var $li=$(this);
    var i=$li.index();
    $(`ul.score>li:lt(${i})`).css("opacity",1);
    $(`ul.score>li:gt(${i-1})`).css("opacity",0)
})

// // 绑定事件；（这里是导航栏下面的四张图片）
// var ul=document.getElementById("ul2");
// var li=ul.getElementsByTagName("img");
// for(var key of li){
//     key.onmouseenter=function(e){
//         var li=e.target;
//         console.log(li)
//         if(li.className==("w-100 animated infinite")){
//             li.className=`w-100 animated infinite`+" swing";
//             console.log(li)
//         }
//     }
//     key.onmouseleave=function(e){
//         var li=e.target;
//         if(li.className==("w-100 animated infinite swing")){
//             li.className=`w-100 animated infinite`;
//             console.log(li)
//         }
//     }
// }




// // 同上
// var ul=document.getElementById("ul3");
// var li=ul.getElementsByTagName("img");
// for(var key of li){
//     key.onmouseenter=function(e){
//         var li=e.target;
//         console.log(li)
//         if(li.className==("w-100 animated infinite")){
//             li.className=`w-100 animated infinite`+" shake";
//             console.log(li)
//         }
//     }
//     key.onmouseleave=function(e){
//         var li=e.target;
//         if(li.className==("w-100 animated infinite shake")){
//             li.className=`w-100 animated infinite`;
//             console.log(li)
//         }
//     }
// }





// 绑定照片点击切换事件(要不就叫腿毛之歌就好了)
$("#img1").click(function(){
    var $img=$(this);
    var n=parseInt($img.attr("alt"));
    console.log(n);
    n<13?n++:n=10;
    $img.attr({src:`../../picture/${n}.jpg`,alt:n});
})





// 使用dom找到触发事件的元素
var zj=document.getElementById("zj");
    var div=document.getElementById("d1");
zj.onmouseover=function(){
    var zj=this;
    // 找到要修改的元素
    if(div.style.opacity==0){
        div.style.opacity=1;
    }else{
        div.style.opacity=0;
    }
}




// 定义ajax请求
$.ajax({
    url:"http://localhost:8080/router",
    type:"get",
    dataType:"json",
    // result 就是数据库相应回来的数据；
    success:function(result){
        // 打印result查看返回的值；
        // 0: {pid: 1, iid: 1, sm: "../../picture/10.jpg"}
        // 1: {pid: 2, iid: 1, sm: "../../picture/a9.jpg"}
        // 2: {pid: 3, iid: 1, sm: "../../picture/a5.jpg"}
        // 3: {pid: 4, iid: 1, sm: "../../picture/a4.jpg"}
        // length: 4
        // __proto__: Array(0)
        console.log(result);
        // 查找第一个img并替换src的路径；
        $("#img1").attr("src",result[0].sm);
        $("#img2").attr("src",result[1].sm);
        $("#img3").attr("src",result[2].sm);
        $("#img4").attr("src",result[3].sm);
    }
})





})



