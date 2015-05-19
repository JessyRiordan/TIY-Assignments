// TO OPEN THE ACCORDION:
// 1. What event am I listening for: "click"
//    1.
// 2. What element should I listen for: ""cbp-nttrigger"
// _.forEach(document.querySelectorAll(".cbp-nttrigger"), function(element){
//   element.addEventListener('click', function() {
//     element.parentElement.classList.toggle('cbp-ntopen');
//   });
// });

$('.cbp-nttrigger').on('click', function(event){
  $(event.target).parent().toggleClass('cbp-ntopen');
});
// 3. What should I do when the event fires?
//    1. Toggle ".cbp-ntopen" from parent <li> element

//
//
// document.head.parentElement.className = "js";
//
// var elements = document.querySelectorAll('.cbp-nttrigger');
// //var secondElements = document.querySelectorAll('h4');
//
// // elements[0].addEventListener('click', function(){
// // elements[0].parentElement.classList.toggle('cbp-ntopen');
// // });
//
// // for ( var index = 0; index < elements.length; index++ ){
// //   var element = elements[index];
// //   element[index].addEventListener('click', function(){
// //     console.log(elements, index, elements[index]);
// //     element[index].parentElement.classList.toggle('cbp-ntopen');
// //   });
// // }
//
//
// _.forEach(elements, function(element, index, elements){
//   element.addEventListener('click', function(){
//     /// console.log(elements, index, element);
//     element.parentElement.classList.toggle('cbp-ntopen');
//   });
// });
//
//
// // _.forEach(secondElements, function(element, index, secondElements){
//   // element.addEventListener('click', function(){
//     // console.log(elements, index, element);
//     // element.parentElement.classList.toggle('cbp-ntopen');
// //   });
// // });
