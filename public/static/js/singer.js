$(function(){
    // 留言区
    $("#add-block").click(function(){
        $(`<div class="block"><span class="close">×</span></div>`).css("background-color",`rgb(${parseInt(Math.random()*255)},${parseInt(Math.random()*255)},${parseInt(Math.random()*255)})`)
        .prependTo("div.message");
    })
    $("div.message").on("click","span.close",function(){
        $(this).parent().remove();
    })


// 这个没啥用的
    // 留言区上面的ul，绑定点击事件，切换每页内容
   var $ul= $("#five");
   var $div=$("#div1");
   $ul.on("click","li",function(){
       var $li=$(this);
       console.log($li);
        $div.html(`<div class="four">
        <ul>
            <li>张学友</li>
            <li>周杰伦</li>
            <li>王菲</li>
            <li>林俊杰</li>
            <li>刘德华</li>
            <li>谭咏麟</li>
        </ul>
    </div>
    
    <!-- 2 -->
    <div class="four">
        <ul>
            <li>张国荣</li>
            <li>薛之谦</li>
            <li>孙燕姿</li>
            <li>毛不易</li>
            <li>那英</li>
            <li>张靓颖</li>
        </ul>
    </div>


    <!-- 3 -->
    <div class="four">
        <ul>
            <li>邓紫棋</li>
            <li>张杰</li>
            <li>张信哲</li>
            <li>李宇春</li>
            <li>梁博</li>
            <li>胡66</li>
        </ul>
    </div>

    <!-- 4 -->
    <div class="four">
        <ul>
            <li>王力宏</li>
            <li>黄子韬</li>
            <li>曲肖冰</li>
            <li>张杰</li>
            <li>杨宗纬</li>
            <li>BEYOND</li>
        </ul>
    </div>


    <!-- 5 -->
    <div class="four">
        <ul>
            <li>半阳</li>
            <li>许嵩</li>
            <li>张信哲</li>
            <li>陈雪凝</li>
            <li>张敬轩</li>
            <li>华夏</li>
        </ul>
    </div>`);
   })
})