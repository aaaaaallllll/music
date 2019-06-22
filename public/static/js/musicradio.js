$(function(){



    // 定义鼠标点击隐藏(左侧边栏)
    var $remen=$("#remen");
    console.log($remen)
    $remen.on("click","li",function(){
        var $li=$(this); 
        if($remen.hasClass("list-unstyled in fade")){
           $remen.removeClass("fade");
            
        }else{
            $remen.addClass("fade");
        }
    })
})