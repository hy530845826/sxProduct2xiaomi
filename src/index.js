import './scss/main.scss';
console.log('scss加载完成');

import $ from 'jquery';
console.log('jquery加载完成');

$(function () {
    //调用
    require('./js/h2-nav');
    require('./js/h3-carousel');
    require('./js/s5-19');
    require('./js/w7');

})