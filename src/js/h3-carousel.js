//----------1.轮播图----------
var $moveImg = $('#h3-carousel .move-box ul:first li');
var $circleBox = $('#circle li');
var index = 0;

$("#right-btn").click(function () {
    changeImg(-1);
});
$("#left-btn").click(function () {
    changeImg(-2);
});
$circleBox.click(function () {
    changeImg($(this).index());
})

function changeImg(change) {
    //检测是否还在运动
    if ($moveImg.eq(index).is(":animated")) return;
    //隐藏当前图片
    $moveImg.eq(index).animate({
        "opacity": 0,
    }, 600, "swing");
    switch (change) {
        case -1:
            index++;
            index > 4 ? index = 0 : index = index;
            break;
        case -2:
            index--;
            index < 0 ? index = 4 : index = index;
            break;
        default:
            index = change;
            break;
    }
    //显示next图片
    $moveImg.eq(index).animate({
        "opacity": 1,
    }, 600, "swing");
    //圆点变化
    $($circleBox[index]).siblings().removeClass();
    $($circleBox[index]).addClass("current");
}
//----------2.轮播自动----------
var timer = setInterval(
    function () {
        changeImg(-1);
    }, 3000
);
$moveImg.mouseover(function () {
    clearInterval(timer);
});
$moveImg.mouseout(function () {
    timer = setInterval(
        function () {
            changeImg(-1);
        }, 3000
    );
});


//----------3.左侧----------
var $siteCategory = $('#h3-categoryList ul#categoryList li.site-category');
var $categoryContent = $('.h3-categoryContent');
var isCheck = false;

$siteCategory.mouseover(function () {
    $(this).addClass("checked");

    isCheck = true;
    $categoryContent.show();
    //加载数据
    var nowIndex = $(this).index();
    switch (nowIndex) {
        case 2:
        case 4:
        case 5:
        case 6:
        case 8:
            $categoryContent.addClass("small");
            var isSmall = 1;
            break;
        default:
            $categoryContent.removeClass("small");
            var isSmall = 2;
            break;
    }
    load(nowIndex, isSmall);
});
$siteCategory.mouseout(function () {
    $(this).removeClass("checked");

    isCheck = false;
    setTimeout(function () {
        if (!isCheck) {
            $categoryContent.hide();
        }
    }, 200);
});
$categoryContent.mouseenter(function () {
    isCheck = true;
    $categoryContent.show();
});
$categoryContent.mouseleave(function () {
    isCheck = false;
    setTimeout(function () {
        if (!isCheck) {
            $categoryContent.hide();
        }
    }, 200);
});
//----------4.切换内容----------

import {
    h3Data1,
    h3Data2,
    h3Data3,
    h3Data4,
    h3Data5,
    h3Data6,
    h3Data7,
    h3Data8,
    h3Data9,
    h3Data10
} from './sql';
var productsBox = [h3Data1, h3Data2, h3Data3, h3Data4, h3Data5, h3Data6, h3Data7, h3Data8, h3Data9, h3Data10];
var $categoryBoxUL = $('#h3-categoryContent .h3-categoryBox .children');

//加载函数
function load(nowIndex, isSmall) {
    //是否为小屏幕？
    var sP = 12 * isSmall;

    //加载前先清空
    $categoryBoxUL.empty();
    //添加信息
    var products = productsBox[nowIndex];

    for (var key in products) {
        if (key < sP && key >= 0) {
            appendProduct(products[key].figure, products[key].title, parseInt(key));
        }
    }
}

//添加函数
function appendProduct(productfigure, producttitle, key) {
    //每6个外面分一组挂一个ul
    var group = parseInt(key / 6);
    var productItem =
        '<li>' +
        '<a href="">' +
        '<img src="images/' + productfigure + '" alt="">' +
        '<span>' + producttitle + '</span>' +
        '</a>' +
        '</li>';
    $categoryBoxUL.eq(group).append($(productItem));
}