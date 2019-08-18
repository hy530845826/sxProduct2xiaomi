// 按规律改变商品盒子边框
function s5ChangeColor() {
    for (var i = 1; i < $('.recommend a.mould-box').length + 1; i++) {
        var mouldbox = (i) % 5;

        switch (mouldbox) {
            case 0:
                $('.recommend ul').find('a').eq(i).css('border-top', '1px solid yellow')
                break;
            case 1:
                $('.recommend ul').find('a').eq(i).css('border-top', '1px solid #ff6700')
                break;
            case 2:
                $('.recommend ul').find('a').eq(i).css('border-top', '1px solid blue')
                break;
            case 3:
                $('.recommend ul').find('a').eq(i).css('border-top', '1px solid green')
                break;
            case 4:
                $('.recommend ul').find('a').eq(i).css('border-top', '1px solid #ef3a3b')
                break;
        }

    }
}

//二维码的显示隐藏
$('a.app li').mouseover(function () {
    $('div.s19code').show();
})
$('a.app li').mouseout(function () {
    $('div.s19code').hide();
})

//放回顶部按钮
$(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
        $('.s19-content ul.top').show();
    } else {
        $('.s19-content ul.top').hide();
    }
})

//当窗口变小时缩小右侧图标
function s19Check() {
    $(window).resize(function () {
        if ($(window).width() < 1400) {
            $('.nav a p').hide();
            $('.s19-content a img').css({
                'width': '20px',
                'height': '20px',
                'margin-top': '4px'
            });
            $('.s19-content li').css({
                'width': '25px',
                'height': '35px'
            });
            $('.s19-content .nav ul').css({
                'bottom': "120px"
            });
            $('.s19-content ul.top').css({
                'bottom': "50px"
            });
            $('.s19-content .s19code').css({
                'bottom': "155px",
                'right': " 46px"
            });
        } else {
            $('.nav a p').show();
            $('.s19-content a img').css({
                'width': '30px',
                'height': '30px',
                'margin-top': '20px'
            });
            $('.s19-content li').css({
                'width': '82px',
                'height': '85px'
            });
            $('.s19-content .nav ul').css({
                'bottom': "185px"
            });
            $('.s19-content ul.top').css({
                'bottom': "70px"
            });
            $('.s19-content .s19code').css({
                'bottom': "440px",
                'right': " 94px"
            });
        }
    })
}

//轮播图
var s5index = 0;
var moveright = true;
var timer = setInterval(function () {
    if (moveright) {
        $s05right.click();
    } else {
        $s05left.click();
    }
}, 3000);

var $s05right = $('.s05-content .button .right');
var $s05left = $('.s05-content .button .left');

$s05right.on('click', function Rt() {
    if ($('.s05-content .recommend ul').is(":animated")) return;
    s5index++;
    switch (s5index) {
        case 1:
            $s05left.addClass('check');
            MotionRight()
            break;
        case 2:
            $s05right.removeClass('check');
            MotionRight();
            moveright = false;
            break;
        case 3:
            s5index = 2;
            break;
    }
})

$s05left.on('click', function Lt() {
    if ($('.s05-content .recommend ul').is(":animated")) return;
    s5index--;
    switch (s5index) {
        case -1:
            s5index = 0;
            break;
        case 0:
            $s05left.removeClass('check');
            MotionLeft();
            moveright = true;
            break;
        case 1:
            $s05right.addClass('check');
            MotionLeft();
            break;
    }
})

function MotionRight() {
    $('.s05-content .recommend ul').animate({
        left: "-=980px"
    }, 1000);
}

function MotionLeft() {
    $('.s05-content .recommend ul').animate({
        left: "+=980px"
    }, 1000);
}

//活动倒计时 Date.UTC(2019,8,12,14,18)
function s5Time() {
    var InterValObj = setInterval(SetRemainTime, 1000);
    //一场进行多长时间timelong = 4
    function SetRemainTime() {
        var Nowtime = new Date(); //动态获取现在时间
        var NowtimeHour = Nowtime.getHours();
        if (0 < NowtimeHour && NowtimeHour < 8) {
            $("#s5-round").text("08:00场");
            $("#s5-rest-time").text("距离开始还有");
            endTime(NowtimeHour, 8)
        } else if (8 <= NowtimeHour && NowtimeHour < 12) {
            $("#s5-round").text("08:00场");
            $("#s5-rest-time").text("距离结束还有");
            endTime(NowtimeHour, 12)
        } else if (12 <= NowtimeHour && NowtimeHour < 14) {
            $("#s5-round").text("14:00场");
            $("#s5-rest-time").text("距离开始还有");
            endTime(NowtimeHour, 14)
        } else if (14 <= NowtimeHour && NowtimeHour < 18) {
            $("#s5-round").text("14:00场");
            $("#s5-rest-time").text("距离结束还有");
            endTime(NowtimeHour, 18)
        } else if (18 <= NowtimeHour) {
            $("#s5-round").text("08:00场");
            $("#s5-rest-time").text("距离开始还有");
            endTime(NowtimeHour - 8, 24)
        }
    }
}

function endTime(NowtimeHour, AimtimeHour) {
    var Nowtime = new Date();
    var countdown = AimtimeHour - NowtimeHour - 1;
    $('.hours').html(countdown);
    $('.minutes').html(60 - Nowtime.getMinutes());
    $('.seconds').html(60 - Nowtime.getSeconds());
}

$(function () {
    s5ChangeColor();
    s19Check();
    s5Time();
})