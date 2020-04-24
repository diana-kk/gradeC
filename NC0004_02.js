// C04
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var set0201 = Paper.image('img/set0201.png', 0, 0, 320, 180).toDefs();
var set0202 = Paper.image('img/set0202.png', 0, 0, 40, 40).toDefs();
var set0203 = Paper.image('img/set0203.png', 0, 0, 40, 40).toDefs();
var play = Paper.image('img/play.png', 0, 0, 25, 27).toDefs();
var pause = Paper.image('img/pause.png', 0, 0, 25, 25).toDefs();
var stop = Paper.image('img/stop.png', 0, 0, 22, 22).toDefs();

//오디오
var aud01 = new Audio('aud/aud02.wav');

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#FAF1C9'
});

home.use().transform('t14, 8').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

function handlerHome() {
  location.replace('NC0004.html');
}

topBox.text(180, 30, 'C04').attr({
  'font-size': 22,
  'text-anchor': 'middle'
});

migi.use().transform('t325, 9').appendTo(topBox).click(handlerNext).attr({
  'cursor': 'pointer'
});

function handlerNext() {
  location.replace('NC0004_03.html');
}

// 상단
var topArea = Paper.g();

topArea.text(25, 95, '[C02] 사실에 대해 묻고 답하기').attr({
  'font-size': 22,
});

// 하단
var bottomArea = Paper.g();

set0201.use().transform('t20, 120').appendTo(bottomArea);

set0202.use().transform('t15, 330').appendTo(bottomArea);

var t1 = topArea.text(65, 360, ['ははのひは おとといでは', 'ありませんでしたか。', '어머니날은 그저께가 아니었나요?']).attr({
  'font-size': 25
});
t1.selectAll('tspan')[1].attr({
  x: 65,
  y: 400
});
t1.selectAll('tspan')[2].attr({
  x: 65,
  y: 435,
  'font-size': 17,
  'fill': 'gray'
});

set0203.use().transform('t15, 460').appendTo(bottomArea);

var t2 = topArea.text(65, 490, ['いいえ、きのうでした。', '아니요, 어제였어요.']).attr({
  'font-size': 25
});
t2.selectAll('tspan')[1].attr({
  x: 65,
  y: 525,
  'font-size': 17,
  'fill': 'gray'
});

// 음원
bottomArea.rect(30, 550, 300, 50, 6).attr({
    'stroke': 'gray',
    'fill': 'white'
});

play.use().transform('t90, 561').appendTo(bottomArea).click(playAudio01).attr({
    'cursor': 'pointer',
});

function playAudio01() {
    aud01.play();
}

pause.use().transform('t170, 563').appendTo(bottomArea).click(pauseAudio01).attr({
    'cursor': 'pointer',
});

function pauseAudio01() {
    aud01.pause();
}

stop.use().transform('t250, 566').appendTo(bottomArea).click(stopAudio01).attr({
    'cursor': 'pointer',
});

function stopAudio01() {
    aud01.pause();
    aud01.currentTime = 0;
}
