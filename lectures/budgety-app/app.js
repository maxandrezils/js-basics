//Budget Controller
const budgetController = (() => {

})();

// UI Controller
const UIController = (() => {
  let DOMStrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: () => {
      return {
        // Will be either inc or exp
        type: document.querySelector(DOMStrings.inputType).value,
        description: document.querySelector(DOMStrings.inputDescription).value,
        value: document.querySelector(DOMStrings.inputValue).value
      };
    },
    getDOMStrings: () => {
      return DOMStrings;
    }
  };
})();

//Global App Controller
const controller = ((budgetCtrl, UICtrl) => {
  let DOM = UICtrl.getDOMStrings();
  let ctrlAddItem = () => {
    let input = UICtrl.getInput();
    console.log(input);
  };

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
  document.addEventListener('keypress', (event) => {
    if(event.keyCode === 13 || event.which === 13){
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
