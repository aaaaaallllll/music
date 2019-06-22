//  找到视频元素  
var video=document.getElementById("video");
function get(e){
    var video=this;
    var div=this;
    e.stopPropagation();
    video.style.opacity="0.8";
}