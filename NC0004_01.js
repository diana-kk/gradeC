// C04
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var set0101 = Paper.image('img/set0101.png', 0, 0, 320, 190).toDefs();
var set0102 = Paper.image('img/set0102.png', 0, 0, 40, 40).toDefs();
var set0103 = Paper.image('img/set0103.png', 0, 0, 40, 40).toDefs();
var play = Paper.image('img/play.png', 0, 0, 25, 27).toDefs();
var pause = Paper.image('img/pause.png', 0, 0, 25, 25).toDefs();
var stop = Paper.image('img/stop.png', 0, 0, 22, 22).toDefs();

//오디오
var aud01 = new Audio('aud/aud01.wav');

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
  location.replace('NC0004_02.html');
}

// 상단
var topArea = Paper.g();

topArea.text(25, 95, '[C01] 날씨에 대해 묻고 답하기').attr({
  'font-size': 22,
});

// 하단
var bottomArea = Paper.g();

set0101.use().transform('t20, 120').appendTo(bottomArea);

set0102.use().transform('t15, 340').appendTo(bottomArea);

var t1 = topArea.text(65, 370, ['てんきは どうでしたか。', '날씨는 어땠나요?']).attr({
  'font-size': 25
});
t1.selectAll('tspan')[1].attr({
  x: 65,
  y: 405,
  'font-size': 17,
  'fill': 'gray'
});

set0103.use().transform('t15, 430').appendTo(bottomArea);

var t2 = topArea.text(65, 460, ['ずっと ゆきでした。', '계속 눈이 왔어요.']).attr({
  'font-size': 25
});
t2.selectAll('tspan')[1].attr({
  x: 65,
  y: 495,
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
