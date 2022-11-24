(() => {
var linkArray = document.querySelectorAll('.js-open-modal');
var overlay = document.querySelector('.js-modal-overlay');
var crossArray = document.querySelectorAll('.js-modal-close');

linkArray.forEach(function(item) {

  item.addEventListener('click', function(event) {
    event.preventDefault();

    var modalName = this.getAttribute('data-modal');
    var modal = document.querySelector('.js-modal[data-modal="' + modalName + '"]');

    overlay.classList.add('is-show');
    modal.classList.add('is-show');
    
  });
})

crossArray.forEach(function(cross) {

  cross.addEventListener('click', function() {

    var parent = this.parentNode;

    parent.classList.remove('is-show');
    overlay.classList.remove('is-show');
  });
})

})();