const startButton = document.querySelector('.start-button'),
      form = document.querySelector('.main-form'),
      firstScreen = document.querySelector('.first-screen'),
      formCalculate = document.querySelector('.form-calculate'),
      endButton = document.querySelector('.end-button'),
      total = document.querySelector('.total'),
      fastRange = document.querySelector('.fast-range');
//console.dir(startButton);
//console.log(startButton);


const showElem = (elem) => {
  elem.style.display = 'block';
};
const hideElem = (elem) => {
  elem.style.display = 'none';
};

const handlerCallBackForm = (event) => {
  const target = event.target;

  if (target.classList.contains('want-faster')) {
    /*if (target.checked) {
      showElem(fastRange);
    } else {
      hideElem(fastRange);
    }*/

    // что будет происходить если елемент чекед тру, а что если false
    target.checked ? showElem(fastRange) : hideElem(fastRange);
  }

};

startButton.addEventListener('click', () => {
  showElem(form);
  hideElem(firstScreen);
});

endButton.addEventListener('click', () => {
  // Елементы, которые относятся к форме
  // console.log(formCalculate.elements);
  // я хочу перебрать массив и получить каждый элемент
  for (const elem of formCalculate.elements) {
    // если элемент имеет тег
    if (elem.tagName === 'FIELDSET') {
      hideElem(elem);
    }
  }

  showElem(total);

});

formCalculate.addEventListener('change', handlerCallBackForm);
