class Cursor {
    constructor() {
      this.target = { x: 0.5, y: 0.5 }; //координаты указателя мыши
      this.cursor = { x: 0.5, y: 0.5 }; //координаты нового курсора
      this.speed = 0.3; //скорость курсора
      this.init();
    }
  }


// Прокрутить до целевого элемента с выравниванием в центре
function scrollToElement() {
  document.getElementById('targetElement').scrollIntoView({ behavior: 'smooth', 	block: 'center',
    inline: 'center', }).setDuration(2000);
}


  