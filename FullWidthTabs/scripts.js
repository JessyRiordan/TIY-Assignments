// alert("Hello, I am working!");

document.head.parentElement.className = "js";

var elements = document.querySelectorAll('a');

_.forEach(elements, function(element, index, elements){
  element.addEventListener('click', function(index){
    element.parentElement.classList.toggle('tab-current');
  });
});
