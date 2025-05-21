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


    function confirmNotHuman() {
      alert("Спасибо за подтверждение, ~:-*, ~. Доступ разрешён.");

      // Плавное исчезновение капчи
      const captcha = document.getElementById('captcha-screen');
      const site = document.getElementById('main-site');

      captcha.classList.add('fade-out');

      // Показ сайта после анимации
      setTimeout(() => {
        captcha.style.display = 'none';
        site.style.display = 'block';
      }, 1000);
    }




window.addEventListener('DOMContentLoaded', () => {
  const templates = document.querySelectorAll('.are');
  const clonesPerTemplate = 15; // сколько раз клонировать каждую

  const maxX = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth);
  const maxY = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);

  templates.forEach(are => {
    for (let i = 0; i < clonesPerTemplate; i++) {
      const clone = are.cloneNode(true);
      clone.style.display = "block";
      clone.classList.add("clone");

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      clone.style.position = 'absolute';
      clone.style.left = `${x}px`;
      clone.style.top = `${y}px`;
      clone.style.opacity = (Math.random() * 0.5 + 0.4).toFixed(2);
      clone.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

      document.body.appendChild(clone);
    }
  });
});


    


//const img = document.getElementById("dragImage");

//let isDragging = false;
//let offsetX = 0;
//let offsetY = 0;

//img.addEventListener("mousedown", (e) => {
//  isDragging = true;
//  offsetX = e.clientX - img.offsetLeft;
  //offsetY = e.clientY - img.offsetTop;
  //img.style.cursor = "grabbing";
//});

//document.addEventListener("mousemove", (e) => {
  //if (isDragging) {
    //img.style.left = `${e.clientX - offsetX}px`;
    //img.style.top = `${e.clientY - offsetY}px`;
  //}
//});

//document.addEventListener("mouseup", () => {
  //isDragging = false;
  //img.style.cursor = "grab";
//});




