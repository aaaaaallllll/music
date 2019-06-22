//一。同意协议后方可点击注册按钮



$(function(){
    // 手机号验证
    var $phone=$("#phone");
    $phone.blur(function(){
        var $phone=$(this);
        var reg=/1[3-8]\d{9}/;
        var $p1=$("#aa1");
        var a=reg.test($phone.val());
        if(a==true){
            $p1.html("手机号验证正确")
        }else{
            $p1.html("手机号码错误")
        }
    })
    // 密码验证
    var $upwd=$("#upwd");
    $upwd.blur(function(){
        var $upwd=$(this).val();
        var reg=/\w{6,18}/;
        var $p2=$("#aa2");
        var b=reg.test($upwd);
        if(b==true){
            $p2.html("密码正确");
        }else{
            $p2.html("密码错误");
        }
    })







    var $btn=$("#button");
 
    //1.查询触发事件的元素
        //可直接使用btn
    //2.绑定事件处理函数
    $btn.click(function(){
        $.ajax({
            url:"http://localhost:8080/router/register",
            type:"post",
            data:{phone:phone.value,
                    upwd:upwd.value
                },
            success:function(result){
                console.log(result)
                if(result=="注册成功!"){
                    open("first.html","_self");
                }
    
            }
        })
    
    })
    
    
    
    
    
    
    
    })
    
    
    