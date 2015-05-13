

document.head.parentElement.className = "js";

var elements = document.querySelectorAll('h3');

// elements[0].addEventListener('click', function(){
// elements[0].parentElement.classList.toggle('cbp-ntopen');
// });

// for ( var index = 0; index < elements.length; index++ ){
//   var element = elements[index];
//   element[index].addEventListener('click', function(){
//     console.log(elements, index, elements[index]);
//     element[index].parentElement.classList.toggle('cbp-ntopen');
//   });
// }


_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(){
    console.log(elements, index, element);
    element.parentElement.classList.toggle('cbp-ntopen');
  });
});

var elements = document.querySelectorAll('h4');
_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(){
    console.log(elements, index, element);
    element.parentElement.classList.toggle('cbp-ntopen');
  });
});
