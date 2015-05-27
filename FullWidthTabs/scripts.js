(function(window) {
  $('#tabs li').click(function() {
    $(this).siblings().removeClass('tab-current');

    $(this).addClass("tab-current");

    var panelId = $(this).children('a').attr('href');
    var $panel = $(panelId);

    $panel.addClass('content-current')
      .siblings().removeClass('content-current');
  });
})(window);


// (function(window) {
//
//   $('a.icon-shop').click(function() {
//     $('section').removeClass('content-current');
//     $('#section-1').addClass('content-current');
//     $('a').removeClass('tab-current');
//     $('a.icon-shop').addClass('tab-current');
//   });
//   $('a.icon-cup').click(function() {
//     $('section').removeClass('content-current');
//     $('#section-2').addClass('content-current');
//     $('a').removeClass('tab-current');
//     $('a.icon-cup').addClass('tab-current');
//   });
//   $('a.icon-food').click(function() {
//     $('section').removeClass('content-current');
//     $('#section-3').addClass('content-current');
//     $('a').removeClass('tab-current');
//     $('a.icon-food').addClass('tab-current');
//   });
//   $('a.icon-lab').click(function() {
//     $('section').removeClass('content-current');
//     $('#section-4').addClass('content-current');
//     $('a').removeClass('tab-current');
//     $('a.icon-lab').addClass('tab-current');
//   });
//   $('a.icon-truck').click(function() {
//     $('section').removeClass('content-current');
//     $('#section-5').addClass('content-current');
//     $('a').removeClass('tab-current');
//     $('a.icon-truck').addClass('tab-current');
//   });
//
// })(window);


// document.head.parentElement.className = "js";
//
// var tabElements = document.querySelectorAll('a');
//
// var panelElements = document.querySelectorAll('h3');
//
// _.forEach(tabElements, function(element, index, tabElements){
//   element.addEventListener('click', function(index){
//     element.parentElement.classList.toggle('tab-current');
//
//   });
//
//   _.forEach(panelElements, function(element, index, panelElements){
//     element.addEventListener('click', function(index){
//       element.parentElement.classList.toggle('content-current');
//     });
// });
