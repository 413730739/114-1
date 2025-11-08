let title;
let button1, button2, button3;
let buttonContainer;

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

  positionElements();
  noLoop();
}

function draw() {
  // 靜態頁面，不需要在 draw() 中做任何事
}

function positionElements() {
  // 定位標題
  title.position(0, windowHeight * 0.15);

  // 定位按鈕容器
  buttonContainer.position(0, windowHeight / 2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background('#F5F5DC');
  positionElements();
}