let title;
let button1, button2, button3;
let buttonContainer;
let letters = [];
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#F5F5DC'); // 米白色

  // 標題
  title = createElement('h1', '學習基礎英文');
  title.class('title');

  // 按鈕容器
  buttonContainer = createDiv('');
  buttonContainer.class('button-container');

  // 按鈕1: 認識字母
  button1 = createButton('認識字母');
  button1.class('custom-button');
  button1.parent(buttonContainer);
  button1.mousePressed(() => {
    window.location.href = 'https://413730739.github.io/114-1-1/';
  });

  // 按鈕2: 字母配對遊戲
  button2 = createButton('字母配對遊戲');
  button2.class('custom-button');
  button2.parent(buttonContainer);
  button2.mousePressed(() => {
    window.location.href = 'https://413730739.github.io/114-1-2/';
  });

  // 按鈕3: 英文單字測驗
  button3 = createButton('英文單字測驗');
  button3.class('custom-button');
  button3.parent(buttonContainer);
  button3.mousePressed(() => {
    window.location.href = 'https://413730739.github.io/114-1-3/';
  });

  // 創建字母物件
  for (let i = 0; i < alphabet.length; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(60, 90);// 字母大小
    letters.push(new Letter(alphabet[i], x, y, size));
  }

  positionElements();
}

function draw() {
  background('#F5F5DC'); // 在每一幀重新繪製背景

  // 更新與顯示字母
  for (let i = 0; i < letters.length; i++) {
    letters[i].update();
    letters[i].checkEdges();
    for (let j = i + 1; j < letters.length; j++) {
      letters[i].checkCollision(letters[j]);
    }
    letters[i].display();
  }
}

function positionElements() {
  // 定位標題
  title.position(0, windowHeight * 0.15);

  // 定位按鈕容器
  buttonContainer.position(0, windowHeight / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  positionElements();
}

// Letter 類別
class Letter {
  constructor(char, x, y, size) {
    this.char = char;
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(0.5, 2));
    this.size = size;
    // 淡色系顏色
    this.color = color(random(200, 255), random(200, 255), random(200, 255), 180);
  }

  update() {
    this.pos.add(this.vel);
  }

  checkEdges() {
    if (this.pos.x < 0 || this.pos.x > windowWidth) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > windowHeight) {
      this.vel.y *= -1;
    }
  }

  checkCollision(other) {
    let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
    if (d < this.size / 2 + other.size / 2) {
      // 簡單的反彈效果
      let angle = atan2(other.pos.y - this.pos.y, other.pos.x - this.pos.x);
      let thisSpeed = this.vel.mag();
      let otherSpeed = other.vel.mag();

      this.vel.x = -cos(angle) * thisSpeed;
      this.vel.y = -sin(angle) * thisSpeed;
      other.vel.x = cos(angle) * otherSpeed;
      other.vel.y = sin(angle) * otherSpeed;
    }
  }

  display() {
    fill(this.color);
    noStroke();
    textSize(this.size);
    textAlign(CENTER, CENTER);
    text(this.char, this.pos.x, this.pos.y);
  }
}
