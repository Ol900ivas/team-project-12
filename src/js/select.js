(() => {
console.log('!!!!!!!!!!!!!!!');
const selectColor = document.querySelector('.__color__select');
console.log('selectColor', selectColor);
const selectColorTitle = selectColor.querySelector('.__color__title');
const selectColorLabels = selectColor.querySelectorAll('.__color__label');

// Toggle menu
selectColorTitle.addEventListener('click', () => {
  if ('active' === selectColor.getAttribute('data-state')) {
    selectColor.setAttribute('data-state', '');
  } else {
    selectColor.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectColorLabels.length; i++) {
  selectColorLabels[i].addEventListener('click', (evt) => {
    selectColorTitle.textContent = evt.target.textContent;
    selectColor.setAttribute('data-state', '');
  });
}

// Reset title
const reset = document.querySelector('.reset');
reset.addEventListener('click', () => {
  selectColorTitle.textContent = selectSingle_title.getAttribute('data-default');
});

const selectQuantity = document.querySelector('.__quantity__select');
const selectQuantityTitle = selectQuantity.querySelector('.__quantity__title');
const selectQuantityLabels = selectQuantity.querySelectorAll('.__quantity__label');
console.log('selectQuantityLabels', selectQuantityLabels);
// Toggle menu
selectQuantityTitle.addEventListener('click', () => {
  if ('active' === selectQuantity.getAttribute('data-state')) {
    selectQuantity.setAttribute('data-state', '');
  } else {
    selectQuantity.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectQuantityLabels.length; i++) {
    selectQuantityLabels[i].addEventListener('click', (evt) => {
    selectQuantityTitle.textContent = evt.target.textContent;
    selectQuantity.setAttribute('data-state', '');
  });
}

const selectPayment = document.querySelector('.__payment__select');
const selectPaymentTitle = selectPayment.querySelector('.__payment__title');
const selectPaymentLabels = selectPayment.querySelectorAll('.__payment__label');
console.log('selectPaymentLabels', selectPaymentLabels);
// Toggle menu
selectPaymentTitle.addEventListener('click', () => {
  if ('active' === selectPayment.getAttribute('data-state')) {
    selectPayment.setAttribute('data-state', '');
  } else {
    selectPayment.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectPaymentLabels.length; i++) {
    selectPaymentLabels[i].addEventListener('click', (evt) => {
    selectPaymentTitle.textContent = evt.target.textContent;
    selectPayment.setAttribute('data-state', '');
  });
}

})();