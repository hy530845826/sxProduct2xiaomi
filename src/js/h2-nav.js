//----------1.指向显示隐藏内容----------
var navList = $('.h2-header .h2-container ul.nav-list li.om');
var slideUp = $('.h2-header-nav-menu-box');
var isSlideUp = true;

navList.mouseover(function (evnet) {
    //阻止父元素冒泡
    evnet.preventDefault();
    evnet.stopPropagation();

    isSlideUp = false;
    slideUpAnimate(isSlideUp);

    //加载内容
    var nowIndex = $(this).index();
    load(nowIndex);
});

navList.parents('.box1226').mouseover(function () {
    //父元素移动隐藏slideUp
    isSlideUp = true;
    setTimeout(function () {
        slideUpAnimate(isSlideUp);
    }, 500);
});

slideUp.mouseenter(function () {
    isSlideUp = false;

    slideUpAnimate(isSlideUp);

})
slideUp.mouseleave(function () {
    //离开slideUp隐藏slideUp
    isSlideUp = true;
    setTimeout(function () {
        slideUpAnimate(isSlideUp);
    }, 500);
});

//动画判定函数
function slideUpAnimate(x) {
    if (x) {
        slideUp.addClass('slide-up');
        slideUp.animate({
            height: "0"
        }, 200);
    } else {
        slideUp.removeClass('slide-up');
        slideUp.animate({
            height: "230px"
        }, 200);
    };
}

//----------2.利用聚焦搜索框显示list+变色----------
var keywordList = $(".h2-header .header-search .keyword-list");
var searchText = $('.h2-header .header-search .search-text');

searchText.focus(function () {
    keywordList.show();
    searchText.parent().parent().addClass('on');
    $('.search-hot-words').hide();
});
searchText.blur(function () {
    keywordList.hide();
    searchText.parent().parent().removeClass('on');
    $('.search-hot-words').show();
});

//----------3.切换隐藏slideUp内容----------
//立即提取所有slideUp信息
// (function save() {
//     var productData = [];

//     slideUp.find('.hide-nav-item').each(function () {
//         productData.push({
//             figure: $(this).find('p').text(),
//             title: $(this).find('b').text(),
//             price: $(this).find('i').text()
//         });
//     });
//     sessionStorage.setItem('products', JSON.stringify(productData));
// }());

//新的外部读取代替上面
import {
    h2Data
} from './sql';
var products = [];
products = h2Data;
//加载函数
function load(nowIndex) {
    //var productsJson = sessionStorage.getItem('products');
    //products = [];
    //products = JSON.parse(productsJson);

    //加载前先清空
    $('.h2-header-nav-menu .children-list').empty();
    //添加信息
    for (var key in products) {
        if (key < (nowIndex + 1) * 6 && key >= nowIndex * 6) {
            appendProduct(products[key].figure, products[key].title, products[key].price);
        }
    }
}

//添加函数
function appendProduct(productfigure, producttitle, productprice) {
    var productItem =
        '<li>' +
        '<a href="">' +
        '<div class="figure">' + '<img src="images/' + productfigure + '.png" alt="">' + '</div>' +
        '<div class="title">' + producttitle + '</div>' +
        '<p class="price">' + productprice + '</p>' +
        '</a>' +
        '</li>';
    // 添加
    $('.h2-header-nav-menu .children-list').append($(productItem));
}