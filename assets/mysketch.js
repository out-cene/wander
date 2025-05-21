class Walker {
    constructor() {
      this.x = width / 2;
      this.y = height / 2;
    }
  
    step() {
      const stepX = 60;
      const stepY = 90;
  
      // Случайное направление — с большей вероятностью по Y
      let direction = random() < 0.6 ? (random() < 0.5 ? 'up' : 'down') : (random() < 0.5 ? 'left' : 'right');
  
      switch (direction) {
        case 'right':
          this.x += stepX;
          break;
        case 'left':
          this.x -= stepX;
          break;
        case 'down':
          this.y += stepY;
          break;
        case 'up':
          this.y -= stepY;
          break;
      }
  
      this.x = constrain(this.x, 50, width - 50);
      this.y = constrain(this.y, 50, height - 50);
    }
  
    getPosition() {
      return createVector(this.x, this.y);
    }
  }
  
  class WordParticle {
    constructor(word, position) {
      this.word = word;
      this.pos = position.copy();
      this.opacity = 0;
  
      // Дополнительное вертикальное смещение
      this.pos.y += random(-30, 30);
    }
  
    update() {
      this.opacity = min(this.opacity + 5, 255);
    }
  
    display() {
      fill(0, this.opacity);
      noStroke();
      textSize(16);
      text(this.word, this.pos.x, this.pos.y);
    }
  }
  
  let walker;
  let words = [];
  let wordIndex = 0;
  let particles = [];
  let textInput = `
увидь мир зрением моллюска
        от млекопитающего - до одноклеточного, амебки
  `;
  
  let frameDelay = 10;
  let lastWordFrame = 0;
  
  function setup() {
    createCanvas(windowWidth, windowHeight);
    walker = new Walker();
    background(255);
    textFont('Georgia');
    words = textInput.trim().split(/\s+/);
  }
  
  function draw() {
    background(255, 10); // light fade trail
  
    if (wordIndex < words.length && frameCount - lastWordFrame > frameDelay) {
      const pos = walker.getPosition();
      particles.push(new WordParticle(words[wordIndex], pos));
      wordIndex++;
      lastWordFrame = frameCount;
      walker.step();
    }
  
    for (let p of particles) {
      p.update();
      p.display();
    }
  }
  
  function mousePressed() {
    background(255);
    walker = new Walker();
    particles = [];
    wordIndex = 0;
    lastWordFrame = 0;
    loop();
  }
  