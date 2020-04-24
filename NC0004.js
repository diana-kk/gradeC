// C04
var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var bi = Paper.image('img/bi.jpg', 0, 0, 270, 38).toDefs();
var sushi = Paper.image('img/sushi.png', 0, 0, 320, 80).toDefs();

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topArea = Paper.g();

bi.use().transform('t45, 40').appendTo(topArea);

topArea.text(180, 145, '회화 모음').attr({
  'font-size': 35,
  'text-anchor': 'middle'
});

sushi.use().transform('t17, 235').appendTo(topArea);

topArea.text(145, 295, 'C01 ~ 03').attr({
  'font-size': 30
});

var r1 = topArea.rect(50, 480, 260, 50, 5).attr({
  'fill': '#FAF1C9'
});
var t1 = topArea.text(180, 515, '시 작').attr({
  'font-size': 25,
  'text-anchor': 'middle',
  'font-weight': 'bold'
});

var rt1 = topArea.g(r1, t1).click(handler01).attr({
  'cursor': 'pointer'
});

function handler01() {
  location.replace('NC0004_01.html');
}
