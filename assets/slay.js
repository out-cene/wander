class Cursor {
    constructor() {
      this.target = { x: 0.5, y: 0.5 }; //координаты указателя мыши
      this.cursor = { x: 0.5, y: 0.5 }; //координаты нового курсора
      this.speed = 0.3; //скорость курсора
      this.init();
    }
  }


// Прокрутить до целевого элемента с выравниванием в центре
//function scrollToElement(elementId) {
//  document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', 	block: 'center',
//    inline: 'center', });
//}


function scrollToElement(elementId) {
    var element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: 'smooth', 	block: 'center',
    inline: 'center', });
}
