$(function () {
    //引入头部底部
    $('#header').load('./header.html');
    $('#footer').load('./footer.html');
    $('#rock').load('./gotop.html');

    //轮播部分
    var n = 0;
    var flag = true;
    //点部分
    $('.screen .border-m>li').on('click', function () {
        var index = $(this).index();
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.screen>ul>li').fadeOut().eq(index).fadeIn();
        //点击序号赋值计数器
        n = index;
    })
    //点击部分
    $('.screen .right').on('click', function () {
        if (flag) {
            flag = false;
            if (n >= 2) {
                n = 0;
            } else {
                n++;
            }
            $('.screen .border-m>li').siblings().removeClass('active').eq(n).addClass('active');
            $('.screen>ul>li').fadeOut().eq(n).fadeIn(function () {
                flag = true;
            });
        }
    })
    $('.screen .left').on('click', function () {
        if (flag) {
            flag = false;
            if (n <= 0) {
                n = 2;
            } else {
                n--;
            }
            $('.screen .border-m>li').siblings().removeClass('active').eq(n).addClass('active');
            $('.screen>ul>li').fadeOut().eq(n).fadeIn(function () {
                flag = true;
            });
        }
    })
    //公司简介轮播图
    var m = 0;
    $('.company-line>li').on('click', function () {
        var index = $(this).index();
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.area .company').fadeOut().eq(index).fadeIn();
        m = index;
    })
    //点击部分
    $('.arrow .right').on('click', function () {
        if (flag) {
            flag = false;
            if (m >= 5) {
                m = 0;
            } else {
                m++;
            }
            $('.company-line>li').siblings().removeClass('active').eq(m).addClass('active');
            $('.area .company').fadeOut().eq(m).fadeIn(function () {
                flag = true;
            });
        }
    })
    $('.arrow .left').on('click', function () {
        if (flag) {
            flag = false;
            if (m <= 0) {
                m = 5;
            } else {
                m--;
            }
            $('.company-line>li').siblings().removeClass('active').eq(m).addClass('active');
            $('.area .company').fadeOut().eq(m).fadeIn(function () {
                flag = true;
            });
        }
    })
   /* 业务范围 */
   //li添加事件委托
   $('.businesss>li').on('click',function(e){
       //如果触发的直接事件源是图片
      if(e.toElement == $(this).find('img')[0] || e.toElement == $(this).find('.closed')[0]){
        //切换类名到切换效果
        $(this).siblings().removeClass('active').end().toggleClass('active');
      } 
   })
   /* 底部 */
 
   
   $('.teamcontent>.teammove>.team_move').append($('.teamcontent>.teammove>.team_move .twoteam').eq(0).clone());
   var x = 0;
   var y = 0;
   $('.teamcontent>ol>.right').on('click', function () {
       // 调整li区间
       if (x >2) {
           x = 0;
           $('.teamcontent>.teammove').css({'left':0});
       }
       x++;
       y++;
       // 调整序号跟随的区间
       if(y > 2){
           y = 0;
       }
       var nowPos = $('.teamcontent>.teammove').offset().left;
       $('.teamcontent>.teammove').animate({'left':nowPos+200}).animate({ 'left': -x * $('.teamcontent .team_move>.twoteam').innerWidth() });
       console.log( $('.teamcontent .team_move>.twoteam').innerWidth())
       $('.teamcontent .border-m>li').removeClass('active').eq(y).addClass('active');
    })
    $('.teamcontent>ol>.left').on('click', function () {
        // 调整li区间
        if (x <=0) {
            x = 3;
            $('.teamcontent>.teammove').css({'left':-x*$('.teamcontent .team_move>.twoteam').innerWidth()});
        }
        x--;
        y--;
        // 调整序号跟随的区间
        if(y <0){
            y = 2;
        }
        var nowPos = $('.teamcontent>.teammove').offset().left;
        $('.teamcontent>.teammove').animate({'left':nowPos+200}).animate({ 'left': -x * $('.teamcontent .team_move>.twoteam').innerWidth() });
        console.log( $('.teamcontent .team_move>.twoteam').innerWidth())
        $('.teamcontent .border-m>li').removeClass('active').eq(y).addClass('active');
     })
   
})