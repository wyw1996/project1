$(function () {
    var H = 0;
    var W = 0;
    init();
   function init(){
        //获取浏览器可视区域宽高
     H = $(window).innerHeight() - $('.nav').innerHeight()-1;
     W = $(window).innerWidth();
    //设置总屏幕高度
    $('.screen').height(H)
    //设置每一屏的高度
    $('.screen>ul>section').height(H)
    //设置第二屏幕内每一个
    $('.block-two .slide , .block-four .slide').width(W);
   }
   window.onresize = init;
    //给每一屏上色
    var colors = ['black', 'white', 'black', 'wihte', 'null'];
    $.each($('.screen section'), function (k, v) {
        $(v).css('background', colors[k]);
    })
    
    //页面跳转到指定屏幕
    var hash = window.location.hash.slice(1);
    if(hash) slideGo(hash);
    //声明计数器，记录当前屏幕的索引
    var screenIndex =hash || 0;
    //记录触发次数
    var wheelNumber = 0;
  
    $('.jingling').on('click',function(){
        $('.nav>li').eq(0).click();
    })
    
    //监听鼠标滚动
    mouseWheel(window, function (down, e) {
        //事件多次触发才执行
        if (wheelNumber > 5) {
            wheelNumber = 0;
            // down 滚轮方向
            if (down) {
                //滚轮向下，页面向上
                //最后一屏为止，
                if (screenIndex < 4) {
                    screenIndex++;
                    slideGo(screenIndex)
                }

            } else {
                if (screenIndex > 0) {
                    screenIndex--;
                    slideGo(screenIndex)
                }
            }
        } else {
            wheelNumber++;
        }
    })

    //获取地址栏的索引（哈希值）
    var hash = window.location.hash.slice(1); 
    if(hash) slideGo(hash)
    //点击导航  滑动到指定位置
    $('.nav>li').on('click',function(){
        var i =$(this).index();
        //处理最后一个索引
        if(i<4) i++;
        //索引重置
        screenIndex = i;
        slideGo(i);
        
    })
    
    

    //封装滑动
    function slideGo(index) {
        //处理页面滑动
        $('.screen>ul').stop().animate({ 'top': -index * H });
        //索引不为0可更换高亮显示
        if(index !=0 && index<5){
        $('.nav>li').removeClass('now').eq(index - 1).addClass('now');
        if (index == 4) {
            $('.nav>li').eq(index).addClass('now');
        }
        }
    }

    //第二屏轮播
    var twoIndex = 0;
    $('.block-two .right').on('click',function(){
        if(twoIndex<2){
            twoIndex++;
            $('.block-two>ul').animate({'left':-twoIndex*W});
        }
    })
    $('.block-two .left').on('click',function(){
        if(twoIndex>0){
            twoIndex--;
            $('.block-two>ul').animate({'left':-twoIndex*W});
        }
    })

    //第四屏轮播
    var flag = true;
    $('.block-four .right').on('click',function(){
        if(flag){
            flag = false;
            changeSlide(-1*W,this,{'sleft':78,'tleft':0},function(){
                flag = true;
            });
        }
    })
    $('.block-four .left').on('click',function(){
        if(flag){
            flag = false;
            changeSlide(0,this,{'sleft':-78,'tleft':0},function(){
                flag = true;
            });
        }
    })
    function changeSlide(target,obj,json,fn){
        
        //切换内容
        $('.block-four>ul').animate({'left':target});
        //切换滑块
        $(obj).siblings().find('span').animate({'left':json['sleft']},function(){
            $(obj).find('span').animate({'left':json['tleft']},function(){
                fn && fn();
            });
        });
    }

    //开场动画
    setTimeout(function() {
        /* $('.welcome .box').animate({'top':0}) */
        $('.welcome').delay(2000).slideUp()
    }, 4000);
    $('.welcome').on('dblclick',function(){
        $('.welcome').slideUp();
    })
    //闪动
    setInterval(function(){
		$(".shandong").fadeIn(1000,function(){
			$(".shandong").fadeOut(400);
		})
	},1900)
})