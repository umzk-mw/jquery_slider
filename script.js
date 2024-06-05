// JavaScript
// console.log('Hello world!');

$(function(){
    $('.bxslider').bxSlider({
      // オプションを書く場所
      mode:'fade',
      captions: true,
    //  slideWidth: 600 無いと全画面
      auto:true,
      speed:500,
      pause:2000,
      autoHover:false,
    });
  });