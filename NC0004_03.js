// C04
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var set0301 = Paper.image('img/set0301.png', 0, 0, 320, 190).toDefs();
var set0302 = Paper.image('img/set0302.png', 0, 0, 40, 40).toDefs();
var set0303 = Paper.image('img/set0303.png', 0, 0, 40, 40).toDefs();
var play = Paper.image('img/play.png', 0, 0, 25, 27).toDefs();
var pause = Paper.image('img/pause.png', 0, 0, 25, 25).toDefs();
var stop = Paper.image('img/stop.png', 0, 0, 22, 22).toDefs();

//오디오
var aud01 = new Audio('aud/aud03.wav');

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

migi.use().transform('t325, 9').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

// 상단
var topArea = Paper.g();

topArea.text(25, 95, '[C03] 과목에 대해 묻고 답하기').attr({
  'font-size': 22,
});

// 하단
var bottomArea = Paper.g();

set0301.use().transform('t20, 120').appendTo(bottomArea);

set0302.use().transform('t15, 340').appendTo(bottomArea);

var t1 = topArea.text(65, 370, ['いちじかんめは かがく', 'だった？', '1교시는 과학이었어?']).attr({
  'font-size': 25
});
t1.selectAll('tspan')[1].attr({
  x: 65,
  y: 410
});
t1.selectAll('tspan')[2].attr({
  x: 65,
  y: 445,
  'font-size': 17,
  'fill': 'gray'
});

set0303.use().transform('t15, 470').appendTo(bottomArea);

var t2 = topArea.text(65, 500, ['うん、かがくだった。', '응, 과학이었어.']).attr({
  'font-size': 25
});
t2.selectAll('tspan')[1].attr({
  x: 65,
  y: 535,
  'font-size': 17,
  'fill': 'gray'
});

// 음원
bottomArea.rect(30, 560, 300, 50, 6).attr({
    'stroke': 'gray',
    'fill': 'white'
});

play.use().transform('t90, 571').appendTo(bottomArea).click(playAudio01).attr({
    'cursor': 'pointer',
});

function playAudio01() {
    aud01.play();
}

pause.use().transform('t170, 573').appendTo(bottomArea).click(pauseAudio01).attr({
    'cursor': 'pointer',
});

function pauseAudio01() {
    aud01.pause();
}

stop.use().transform('t250, 576').appendTo(bottomArea).click(stopAudio01).attr({
    'cursor': 'pointer',
});

function stopAudio01() {
    aud01.pause();
    aud01.currentTime = 0;
}
