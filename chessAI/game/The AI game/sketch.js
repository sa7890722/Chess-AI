print("chess AI")
var piece = [
  ['R(B)', 'KN(B)', 'B(B)', 'Q(B)', 'K(B)', 'B(B)', 'KN(B)', 'R(B)'],
  ['P(B)', 'P(B)', 'P(B)', 'P(B)', 'P(B)', 'P(B)', 'P(B)', 'P(B)'],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['', '', '', '', '', '', '', ''],
  ['P(W)', 'P(W)', 'P(W)', 'P(W)', 'P(W)', 'P(W)', 'P(W)', 'P(W)'],
  ['R(W)', 'KN(W)', 'B(W)', 'Q(W)', 'K(W)', 'B(W)', 'KN(W)', 'R(W)']
];
var arr = new Array(8);
for (var i = 0; i < 8; ++i) {
  arr[i] = new Array(8);
}

images = []
function preload(){
	images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_01.png"));
	images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_02.png"));
	images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_03.png"));
	images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_04.png"));
	images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_05.png"));
	images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_06.png"));
	images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_07.png"));
	images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_08.png"));
	images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_09.png"));
	images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_10.png"));
	images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_11.png"));
	images.push(loadImage("assets/2000px-Chess_Pieces_Sprite_12.png"));
}

function imageLoader(){
	for(var i=0; i<8; ++i){
		for(var j=0; j<8; ++j){
			if(piece[i][j] == '') continue;
			var dim = new Array(4);
      dim[0] = arr[i][j].getx()+25;
      dim[1] = arr[i][j].gety()+30;
      dim[2] = 60;
      dim[3] = 60;
			if(piece[i][j][0] == 'R' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'W')
				image(images[4], dim[0], dim[1], dim[2], dim[3]);
			if(piece[i][j][0] == 'R' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'B')
				image(images[10], dim[0], dim[1], dim[2], dim[3]);
			if(piece[i][j][0] == 'P' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'W')
				image(images[5], dim[0], dim[1], dim[2], dim[3]);
			if(piece[i][j][0] == 'P' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'B')
				image(images[11], dim[0], dim[1], dim[2], dim[3]);
			if(piece[i][j][0] == 'K' && piece[i][j][1] == 'N' && piece[i][j][(piece[i][j].length-2)] == 'W')
				image(images[3], dim[0], dim[1], dim[2], dim[3]);
			if(piece[i][j][0] == 'K' && piece[i][j][1] == 'N' && piece[i][j][(piece[i][j].length-2)] == 'B')
				image(images[9], dim[0], dim[1], dim[2], dim[3]);
			if(piece[i][j][0] == 'B' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'W')
				image(images[2], dim[0], dim[1], dim[2], dim[3]);
			if(piece[i][j][0] == 'B' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'B')
				image(images[8], dim[0], dim[1], dim[2], dim[3]);
			if(piece[i][j][0] == 'Q' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'W')
				image(images[1], dim[0], dim[1], dim[2], dim[3]);
			if(piece[i][j][0] == 'Q' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'B')
				image(images[7], dim[0], dim[1], dim[2], dim[3]);
			if(piece[i][j][0] == 'K' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'W')
				image(images[0], dim[0], dim[1], dim[2], dim[3]);
			if(piece[i][j][0] == 'K' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'B')
				image(images[6], dim[0], dim[1], dim[2], dim[3]);
		}
	}
}

var moved = 0;
var got1 = -1;
var got2 = -1;

function mousePressed() {
  if (got1 != -1 && got2 != -1) {
    for (var ty = 0; ty < moveto.length; ++ty) {
      let i = moveto[ty][0];
      let j = moveto[ty][1];
      //print(i+" "+j);
      var dim = new Array(5);
      dim[0] = arr[i][j].getx();
      dim[1] = arr[i][j].gety();
      dim[2] = arr[i][j].getl() + arr[i][j].getx();
      dim[3] = arr[i][j].getb() + arr[i][j].gety();
      dim[4] = arr[i][j].gets();
      //print(dim[0] + " " + dim[1] + " " + dim[2] + " " + dim[3]);
      if (mouseX >= dim[0] && mouseX < dim[2]) {
        if (mouseY >= dim[1] && mouseY < dim[3]) {
          // print("reached");
          if (dim[4][(dim[4].length - 2)] != piece[got1][got2][(piece[got1][got2].length) - 2]) {
            arr[i][j].change(got1, got2, i, j);
            got1 = -1;
            got2 = -1;
            print("placed");
            imageLoader();
            var ok=0;
            for(var zz=0; zz<8; ++zz){
							for(var jj=0; jj<8; ++jj){
								if(piece[zz][jj][0] == 'K' && piece[zz][jj][1] == '(' && piece[zz][jj][(piece[zz][jj].length-2)] == 'W') ok=1;
							}
            }
            if(ok==0){
							print("GAME OVER");
							print("Black Wins");
							fail;
            }
            if(moved%2==0) best_move();
            return;
          }
          if (dim[4] != "") {
            got1 = -1;
            got2 = -1;
            moved = (moved + 1) % 2;
            print("dropped");
            return;
          } else {
            arr[i][j].change(got1, got2, i, j);
            got1 = -1;
            got2 = -1;
            print("placed");

            imageLoader();
						var ok=0;
            for(var zz=0; zz<8; ++zz){
							for(var jj=0; jj<8; ++jj){
								if(piece[zz][jj][0] == 'K' && piece[zz][jj][1] == '(' && piece[zz][jj][(piece[zz][jj].length-2)] == 'W') ok=1;
							}
            }
            if(ok==0){
							print("GAME OVER");
							print("Black Wins");
							fail;
            }	
            if(moved%2==0){
							best_move();
						}
            return;
          }
        }
      }
    }
    if (got1 != -1 && got2 != -1) {
      moved = (moved + 1) % 2;
      got1 = -1;
      got2 = -1;
      moveto = [];
      print("pick again");
    }
    return;
  }
  for (var i = 0; i < 8; ++i) {
    for (var j = 0; j < 8; ++j) {
      var dim = new Array(5);
      dim[0] = arr[i][j].getx();
      dim[1] = arr[i][j].gety();
      dim[2] = arr[i][j].getl() + arr[i][j].getx();
      dim[3] = arr[i][j].getb() + arr[i][j].gety();
      dim[4] = arr[i][j].gets();
      if (dim[4] == "") continue;
      //print(dim[0] + " " + dim[1] + " " + dim[2] + " " + dim[3]);
      if (mouseX >= dim[0] && mouseX < dim[2]) {
        if (mouseY >= dim[1] && mouseY < dim[3]) {
          // print("reached");
          if (dim[4][dim[4].length - 2] == 'W' && moved == 0) {
            print("move is OK");
            moved = (moved + 1) % 2;
          } else if (dim[4][dim[4].length - 2] == 'W' && moved == 1) {
            print("move is not OK");
            print("it is the opponents turn");
            return;
          } else if (dim[4][dim[4].length - 2] == 'B' && moved == 1) {
            print("move is OK");
            moved = (moved + 1) % 2;
          } else if (dim[4][dim[4].length - 2] == 'B' && moved == 0) {
            print("move is not OK");
            print("it is the opponents turn");
            return;
          }
          got1 = i;
          got2 = j;
          move(got1, got2, piece);
          if (moveto.length == 0) {
						print("the chosen piece cannot be moved");
						moved = (moved+1)%2;
            got1 = -1;
            got2 = -1;
            return;
          }
          print("picked");
          for (var x = 0; x < moveto.length; ++x) print(moveto[x][0] + " " + moveto[x][1]);
          // print("pahunch gaya !!!!");
          break;
          //var done = checkmove();
          //if(done == true) break;
        }
      }
    }
    //print(piece[got1][got2]);
  }
}

class buildSQUARE {
  constructor(x, y, l, b, s) {
    this.x = x;
    this.y = y;
    this.l = l;
    this.b = b;
    this.s = s;
  }
  build() {
    fill(255);
    rect(this.x, this.y, this.l, this.b);
  }
  build2() {
    fill(0);
    rect(this.x, this.y, this.l, this.b);
  }
  addtext() {
    //fill(200, 0, 200);
    //textSize(20);
    //text(this.s, this.x + 30, this.y + 55);
  }
  change(from1, from2, to1, to2) {
		if(from1 == to1 && from2 == to2){
			moved = (moved+1)%2;
			return;
		}
    piece[to1][to2] = piece[from1][from2];
    piece[from1][from2] = "";
    imageLoader();
  }
  getx() {
    return this.x;
  }
  gety() {
    return this.y;
  }
  getl() {
    return this.l;
  }
  gets() {
    return this.s;
  }
  getb() {
    return this.b;
  }
}

var moves = 0;
var movex = -1, movey = -1, tox = -1, toy = -1;
function buildgrid() {
  background(0);
  //print("yeh chal gaya");
  for (var i = 0; i < 800; i += 100) {
    for (var j = 0; j < 800; j += 100) {
      var ty = (i / 100) + (j / 100);
      if (ty % 2 == 0) {
        arr[((j / 100))][(i / 100)] = new buildSQUARE(i, j, 100, 100, piece[(j / 100)][(i / 100)]);
        arr[((j / 100))][(i / 100)].build();
      } else {
        arr[((j / 100))][(i / 100)] = new buildSQUARE(i, j, 100, 100, piece[(j / 100)][(i / 100)]);
        arr[((j / 100))][(i / 100)].build2();
      }
      arr[((j / 100))][(i / 100)].addtext();
    }
  }
}

function setup() {
  createCanvas(800, 800);
  var moveto = new Array();
  buildgrid();
  best_move();
}

function draw() {
  buildgrid();
  imageLoader();
}

function best_move(){
var points = [
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0]
];

for(var i=0; i<8; ++i){
	for(var j=0; j<8; ++j){
		if(piece[i][j] == '') points[i][j]=0;
		if(piece[i][j][0] == 'R' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'W')
			points[i][j] = 500;
		if(piece[i][j][0] == 'R' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'B')
			points[i][j] = -500;
		if(piece[i][j][0] == 'P' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'W')
			points[i][j] = +100;
		if(piece[i][j][0] == 'P' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'B')
			points[i][j] = -100;
		if(piece[i][j][0] == 'K' && piece[i][j][1] == 'N' && piece[i][j][(piece[i][j].length-2)] == 'W')
			points[i][j] = +350;
		if(piece[i][j][0] == 'K' && piece[i][j][1] == 'N' && piece[i][j][(piece[i][j].length-2)] == 'B')
			points[i][j] = -350;
		if(piece[i][j][0] == 'B' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'W')
			points[i][j] = +300;
		if(piece[i][j][0] == 'B' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'B')
			points[i][j] = -300;
		if(piece[i][j][0] == 'Q' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'W')
			points[i][j] = +900;
		if(piece[i][j][0] == 'Q' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'B')
			points[i][j] = -900;
		if(piece[i][j][0] == 'K' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'W')
			points[i][j] = +100000;
		if(piece[i][j][0] == 'K' && piece[i][j][1] == '(' && piece[i][j][(piece[i][j].length-2)] == 'B')
			points[i][j] =-100000;
	}
}
imageLoader();
what_to_do = find_the_best(0, points, piece, -100000000, +100000000);
//imageLoader();
print(what_to_do);
print(movex+" "+movey+"  ---->  "+tox+" "+toy);
var ret = piece[movex][movey];
if(ret == '') return;
piece[tox][toy] = ret;
piece[movex][movey] = '';
for(var i=0; i<8; ++i){
	if(piece[0][i][0] == 'P') piece[0][i]='Q(W)';
	if(piece[7][i][0] == 'P') piece[7][i]='Q(B)';
}
for(var rr=0; rr<8; ++rr){
	print(piece[rr][0]+" "+piece[rr][1]+" "+piece[rr][2]+" "+piece[rr][3]+" "+piece[rr][4]+" "+piece[rr][5]+" "+piece[rr][6]+" "+piece[rr][7]+" ");
}
print("\n");
var ok=0;
for(var zz=0; zz<8; ++zz){
	for(var jj=0; jj<8; ++jj){
		if(piece[zz][jj][0] == 'K' && piece[zz][jj][1] == '(' && piece[zz][jj][(piece[zz][jj].length-2)] == 'B') ok=1;
	}
}
if(ok==0){
	print("GAME OVER");
	print("WHITE Wins");
	fail;
}
imageLoader();
movex = -1;
movey = -1;
tox = -1;
toy = -1;
moved = (moved+1)%2;
moves = 0;
}

function find_the_best(counter, board, pcs, alpha, beta){
	if(counter>=4){
		var sum = 0;
		for(var i=0; i<8; ++i){
			for(var j=0; j<8; ++j){
			sum += board[i][j];
		}
	}
		return sum;
	}
	if(counter%2==0){
		var ans = -1000001;
		for(var i=0; i<8; ++i){
			for(var j=0; j<8; ++j){

				if(board[i][j] == 0 || pcs[i][j] =='') continue;
				if(pcs[i][j][(pcs[i][j].length-2)] == 'B') continue;
				move(i, j, pcs);
				if(moveto.length == 0) continue;

				let piece_move = new Array(moveto.length);
				for(var t=0; t<moveto.length; ++t){
					piece_move[t] = moveto[t];
				}
				moveto = [];
				for(var mv=0; mv<piece_move.length; ++mv){
					var x = piece_move[mv][0];
					var y = piece_move[mv][1];
					let temp = new Array(8);
					for(var r=0; r<8; ++r) temp[r] = new Array(8);
					let pc = new Array(8);
					for(var r=0; r<8; ++r) pc[r] = new Array(8);
					for(var q=0; q<8; ++q){
						for(var w=0; w<8; ++w){
							temp[q][w] = board[q][w];
							pc[q][w] = pcs[q][w];
						}
					}
					if(pcs[i][j] == '' || board[i][j] == 0) continue;
					var ret = temp[i][j];
					temp[x][y] = ret;
					temp[i][j] = 0;

					var ret = pc[i][j];
					pc[x][y] = ret;
					pc[i][j] = '';
					
					var result = find_the_best(counter+1, temp, pc);
					ans = Math.max(ans, result);
					alpha = Math.max(alpha, ans);
					if(beta<=alpha) break;
					if(counter==0 && ans == result){
						movex = i;
						movey = j;
						tox = x;
						toy = y;
					}
				}
			}
		}
		//print("reached here\n");
		return ans;
	}

	else if(counter%2!=0){
		var ans = +10000001;
		for(var i=0; i<8; ++i){
			for(var j=0; j<8; ++j){
				if(board[i][j] == 0 || pcs[i][j] =='') continue;
				if(pcs[i][j][(pcs[i][j].length-2)] == 'W') continue;
				move(i, j, pcs);
				if(moveto.length == 0) continue;

				let piece_move = new Array(moveto.length);
				for(var t=0; t<moveto.length; ++t){
					piece_move[t] = moveto[t];
				}
				moveto = [];
				for(var mv=0; mv<piece_move.length; ++mv){
					var x = piece_move[mv][0];
					var y = piece_move[mv][1];
					let temp = new Array(8);
					for(var r=0; r<8; ++r) temp[r] = new Array(8);
					let pc = new Array(8);
					for(var r=0; r<8; ++r) pc[r] = new Array(8);
					for(var q=0; q<8; ++q){
						for(var w=0; w<8; ++w){
							temp[q][w] = board[q][w];
							pc[q][w] = pcs[q][w];
						}
					}

					temp[x][y] = temp[i][j];
					temp[i][j] = 0;

					pc[x][y] = pc[i][j];
					pc[i][j] = '';

					var result = find_the_best(counter+1, temp, pc);
					ans = Math.min(ans, result);
					beta = Math.min( beta, ans);
         				 if(beta <= alpha)
						break
				}
			}
		}
		//print("reached here\n");
		return ans;
	}
}

function move(cx, cy, pip) {

  item = pip[cx][cy];
  if (item[0] == 'K' && item[1] != 'N') {
    moveto = [];
    if (item[item.length - 2] == 'W') {
      if (cx >= 0 && cy - 1 >= 0) {
        var over = pip[cx][cy - 1].length - 2;
        if (pip[cx][cy - 1][over] == 'B') moveto.push([cx, cy - 1]);
        else if (pip[cx][cy - 1] == '') moveto.push([cx, cy - 1]);
      }
      if (cx >= 0 && cy + 1 < 8) {
        var over = pip[cx][cy + 1].length - 2;
        if (pip[cx][cy + 1][over] == 'B') moveto.push([cx, cy + 1]);
        else if (pip[cx][cy + 1] == '') moveto.push([cx, cy + 1]);
      }
      if (cx - 1 >= 0 && cy >= 0) {
        var over = pip[cx - 1][cy].length - 2;
        if (pip[cx - 1][cy][over] == 'B') moveto.push([cx - 1, cy]);
        else if (pip[cx - 1][cy] == '') moveto.push([cx - 1, cy]);
      }
      if (cx + 1 < 8 && cy >= 0) {
        var over = pip[cx + 1][cy].length - 2;
        if (pip[cx + 1][cy][over] == 'B') moveto.push([cx + 1, cy]);
        else if (pip[cx + 1][cy] == '') moveto.push([cx + 1, cy]);
      }


      if (cx - 1 >= 0 && cy - 1 >= 0) {
        var over = pip[cx - 1][cy - 1].length - 2;
        if (pip[cx - 1][cy - 1][over] == 'B') moveto.push([cx - 1, cy - 1]);
        if (pip[cx - 1][cy - 1] == '') moveto.push([cx - 1, cy - 1]);
      }
      if (cx + 1 < 8 && cy + 1 < 8) {
        var over = pip[cx + 1][cy + 1].length - 2;
        if (pip[cx + 1][cy + 1][over] == 'B') moveto.push([cx + 1, cy + 1]);
        if (pip[cx + 1][cy + 1] == '') moveto.push([cx + 1, cy + 1]);
      }
      if (cx - 1 >= 0 && cy + 1 < 8) {
        var over = pip[cx - 1][cy + 1].length - 2;
        if (pip[cx - 1][cy + 1][over] == 'B') moveto.push([cx - 1, cy + 1]);
        if (pip[cx - 1][cy + 1] == '') moveto.push([cx - 1, cy + 1]);
      }
      if (cx + 1 < 8 && cy - 1 >= 0) {
        var over = pip[cx + 1][cy - 1].length - 2;
        if (pip[cx + 1][cy - 1][over] == 'B') moveto.push([cx + 1, cy - 1]);
        if (pip[cx + 1][cy - 1] == '') moveto.push([cx + 1, cy - 1]);
      }
    }

    if (item[item.length - 2] == 'B') {
      if (cx >= 0 && cy - 1 >= 0) {
        var over = pip[cx][cy - 1].length - 2;
        if (pip[cx][cy - 1][over] == 'W') moveto.push([cx, cy - 1]);
        if (pip[cx][cy - 1] == '') moveto.push([cx, cy - 1]);
      }
      if (cx >= 0 && cy + 1 < 8) {
        var over = pip[cx][cy + 1].length - 2;
        if (pip[cx][cy + 1][over] == 'W') moveto.push([cx, cy + 1]);
        if (pip[cx][cy + 1] == '') moveto.push([cx, cy + 1]);
      }
      if (cx - 1 >= 0 && cy >= 0) {
        var over = pip[cx - 1][cy].length - 2;
        if (pip[cx - 1][cy][over] == 'W') moveto.push([cx - 1, cy]);
        if (pip[cx - 1][cy] == '') moveto.push([cx - 1, cy]);
      }
      if (cx + 1 < 8 && cy >= 0) {
        var over = pip[cx + 1][cy].length - 2;
        if (pip[cx + 1][cy][over] == 'W') moveto.push([cx + 1, cy]);
        if (pip[cx + 1][cy] == '') moveto.push([cx + 1, cy]);
      }


      if (cx - 1 >= 0 && cy - 1 >= 0) {
        var over = pip[cx - 1][cy - 1].length - 2;
        if (pip[cx - 1][cy - 1][over] == 'W') moveto.push([cx - 1, cy - 1]);
        if (pip[cx - 1][cy - 1] == '') moveto.push([cx - 1, cy - 1]);
      }
      if (cx + 1 < 8 && cy + 1 < 8) {
        var over = pip[cx + 1][cy + 1].length - 2;
        if (pip[cx + 1][cy + 1][over] == 'W') moveto.push([cx + 1, cy + 1]);
        if (pip[cx + 1][cy + 1] == '') moveto.push([cx + 1, cy + 1]);
      }
      if (cx - 1 >= 0 && cy + 1 < 8) {
        var over = pip[cx - 1][cy + 1].length - 2;
        if (pip[cx - 1][cy + 1][over] == 'W') moveto.push([cx - 1, cy + 1]);
        if (pip[cx - 1][cy + 1] == '') moveto.push([cx - 1, cy + 1]);
      }
      if (cx + 1 < 8 && cy - 1 >= 0) {
        var over = pip[cx + 1][cy - 1].length - 2;
        if (pip[cx + 1][cy - 1][over] == 'W') moveto.push([cx + 1, cy - 1]);
        if (pip[cx + 1][cy - 1] == '') moveto.push([cx + 1, cy - 1]);
      }
    }
  }
  if (item[0] == 'Q') {
    moveto = [];

    if (item[item.length - 2] == 'W') {
      for (var i = cx - 1; i >= 0; --i) {
        var over = (pip[i][cy].length - 2);
        if (pip[i][cy][over] == 'W') break;
        if (pip[i][cy] == '') moveto.push([i, cy]);
        if (pip[i][cy][over] == 'B') {
          moveto.push([i, cy]);
          break;
        }
      }
      for (var i = cx + 1; i < 8; ++i) {
        var over = (pip[i][cy].length - 2);
        if (pip[i][cy][over] == 'W') break;
        if (pip[i][cy] == '') moveto.push([i, cy]);
        if (pip[i][cy][over] == 'B') {
          moveto.push([i, cy]);
          break;
        }
      }
      for (var i = cy - 1; i >= 0; --i) {
        var over = (pip[cx][i].length - 2);
        if (pip[cx][i][over] == 'W') break;
        if (pip[cx][i] == '') moveto.push([cx, i]);
        if (pip[cx][i][over] == 'B') {
          moveto.push([cx, i]);
          break;
        }
      }
      for (var i = cy + 1; i < 8; ++i) {
        var over = (pip[cx][i].length - 2);
        if (pip[cx][i][over] == 'W') break;
        if (pip[cx][i] == '') moveto.push([cx, i]);
        if (pip[cx][i][over] == 'B') {
          moveto.push([cx, i]);
          break;
        }
      }
      var i = cx + 1,
        j = cy + 1;
      while (i < 8 && j < 8) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'W') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'B') {
          moveto.push([i, j]);
          break;
        }
        ++i;
        ++j;
      }
      i = cx - 1;
      j = cy - 1;
      while (i >= 0 && j >= 0) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'W') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'B') {
          moveto.push([i, j]);
          break;
        }
        --i;
        --j;
      }
      i = cx - 1;
      j = cy + 1;
      while (i >= 0 && j < 8) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'W') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'B') {
          moveto.push([i, j]);
          break;
        }
        --i;
        ++j;
      }
      i = cx + 1;
      j = cy - 1;
      while (i < 8 && j >= 0) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'W') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'B') {
          moveto.push([i, j]);
          break;
        }
        ++i;
        --j;
      }
    } else if (item[item.length - 2] == 'B') {
      for (var i = cx - 1; i >= 0; --i) {
        var over = (pip[i][cy].length - 2);
        if (pip[i][cy][over] == 'B') break;
        if (pip[i][cy] == '') moveto.push([i, cy]);
        if (pip[i][cy][over] == 'W') {
          moveto.push([i, cy]);
          break;
        }
      }
      for (var i = cx + 1; i < 8; ++i) {
        var over = (pip[i][cy].length - 2);
        if (pip[i][cy][over] == 'B') break;
        if (pip[i][cy] == '') moveto.push([i, cy]);
        if (pip[i][cy][over] == 'W') {
          moveto.push([i, cy]);
          break;
        }
      }
      for (var i = cy - 1; i >= 0; --i) {
        var over = (pip[cx][i].length - 2);
        if (pip[cx][i][over] == 'B') break;
        if (pip[cx][i] == '') moveto.push([cx, i]);
        if (pip[cx][i][over] == 'W') {
          moveto.push([cx, i]);
          break;
        }
      }
      for (var i = cy + 1; i < 8; ++i) {
        var over = (pip[cx][i].length - 2);
        if (pip[cx][i][over] == 'B') break;
        if (pip[cx][i] == '') moveto.push([cx, i]);
        if (pip[cx][i][over] == 'W') {
          moveto.push([cx, i]);
          break;
        }
      }
      var i = cx + 1,
        j = cy + 1;
      while (i < 8 && j < 8) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'B') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'W') {
          moveto.push([i, j]);
          break;
        }
        ++i;
        ++j;
      }
      i = cx - 1;
      j = cy - 1;
      while (i >= 0 && j >= 0) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'B') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'W') {
          moveto.push([i, j]);
          break;
        }
        --i;
        --j;
      }
      i = cx - 1;
      j = cy + 1;
      while (i >= 0 && j < 8) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'B') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'W') {
          moveto.push([i, j]);
          break;
        }
        --i;
        ++j;
      }
      i = cx + 1;
      j = cy - 1;
      while (i < 8 && j >= 0) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'B') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'W') {
          moveto.push([i, j]);
          break;
        }
        ++i;
        --j;
      }
    }
  }
  if (item[0] == 'P') {
    moveto = [];
    if (item[item.length - 2] == 'W') {
      if (cx == 0) return;
      if (cx == 6 && pip[cx - 2][cy] == '' && pip[cx-1][cy]=='') moveto.push([cx - 2, cy]);
      if (pip[cx - 1][cy] == '') moveto.push([cx - 1, cy]);
      if (cy - 1 >= 0 && pip[cx - 1][cy - 1][(pip[cx - 1][cy - 1]).length - 2] == 'B') moveto.push([cx - 1, cy - 1]);
      if (cy + 1 < 8 && pip[cx - 1][cy + 1][(pip[cx - 1][cy + 1]).length - 2] == 'B') moveto.push([cx - 1, cy + 1]);
    }
    if (item[item.length - 2] == 'B') {
      if (cx == 7) return;
      if (cx == 1 && pip[cx + 2][cy] == '' && pip[cx+1][cy] == '') moveto.push([cx + 2, cy]);
      if (pip[cx + 1][cy] == '') moveto.push([cx + 1, cy]);
      if (cy - 1 >= 0 && pip[cx + 1][cy - 1][(pip[cx + 1][cy - 1]).length - 2] == 'W') moveto.push([cx + 1, cy - 1]);
      if (cy + 1 < 8 && pip[cx + 1][cy + 1][(pip[cx + 1][cy + 1]).length - 2] == 'W') moveto.push([cx + 1, cy + 1]);
    }
  }
  if (item[0] == 'K' && item[1] == 'N') {
    moveto = [];
    if (item[item.length - 2] == 'W') {
      if (cx + 2 < 8 && cy - 1 >= 0) {
        var over = pip[cx + 2][cy - 1].length - 2;
        if (pip[cx + 2][cy - 1][over] == 'B') moveto.push([cx + 2, cy - 1]);
        if (pip[cx + 2][cy - 1] == '') moveto.push([cx + 2, cy - 1]);
      }
      if (cx + 2 < 8 && cy + 1 < 8) {
        var over = pip[cx + 2][cy + 1].length - 2;
        if (pip[cx + 2][cy + 1][over] == 'B') moveto.push([cx + 2, cy + 1]);
        if (pip[cx + 2][cy + 1] == '') moveto.push([cx + 2, cy + 1]);
      }
      if (cx - 2 >= 0 && cy + 1 < 8) {
        var over = pip[cx - 2][cy + 1].length - 2;
        if (pip[cx - 2][cy + 1][over] == 'B') moveto.push([cx - 2, cy + 1]);
        if (pip[cx - 2][cy + 1] == '') moveto.push([cx - 2, cy + 1]);
      }
      if (cx - 2 >= 0 && cy - 1 >= 0) {
        var over = pip[cx - 2][cy - 1].length - 2;
        if (pip[cx - 2][cy - 1][over] == 'B') moveto.push([cx - 2, cy - 1]);
        if (pip[cx - 2][cy - 1] == '') moveto.push([cx - 2, cy - 1]);
      }


      if (cx - 1 >= 0 && cy + 2 < 8) {
        var over = pip[cx - 1][cy + 2].length - 2;
        if (pip[cx - 1][cy + 2][over] == 'B') moveto.push([cx - 1, cy + 2]);
        if (pip[cx - 1][cy + 2] == '') moveto.push([cx - 1, cy + 2]);
      }
      if (cx + 1 < 8 && cy + 2 < 8) {
        var over = pip[cx + 1][cy + 2].length - 2;
        if (pip[cx + 1][cy + 2][over] == 'B') moveto.push([cx + 1, cy + 2]);
        if (pip[cx + 1][cy + 2] == '') moveto.push([cx + 1, cy + 2]);
      }
      if (cx - 1 >= 0 && cy - 2 >= 0) {
        var over = pip[cx - 1][cy - 2].length - 2;
        if (pip[cx - 1][cy - 2][over] == 'B') moveto.push([cx - 1, cy - 2]);
        if (pip[cx - 1][cy - 2] == '') moveto.push([cx - 1, cy - 2]);
      }
      if (cx + 1 < 8 && cy - 2 >= 0) {
        var over = pip[cx + 1][cy - 2].length - 2;
        if (pip[cx + 1][cy - 2][over] == 'B') moveto.push([cx + 1, cy - 2]);
        if (pip[cx + 1][cy - 2] == '') moveto.push([cx + 1, cy - 2]);
      }
    }

    if (item[item.length - 2] == 'B') {
      if (cx + 2 < 8 && cy - 1 >= 0) {
        var over = pip[cx + 2][cy - 1].length - 2;
        if (pip[cx + 2][cy - 1][over] == 'W') moveto.push([cx + 2, cy - 1]);
        if (pip[cx + 2][cy - 1] == '') moveto.push([cx + 2, cy - 1]);
      }
      if (cx + 2 < 8 && cy + 1 < 8) {
        var over = pip[cx + 2][cy + 1].length - 2;
        if (pip[cx + 2][cy + 1][over] == 'W') moveto.push([cx + 2, cy + 1]);
        if (pip[cx + 2][cy + 1] == '') moveto.push([cx + 2, cy + 1]);
      }
      if (cx - 2 >= 0 && cy + 1 < 8) {
        var over = pip[cx - 2][cy + 1].length - 2;
        if (pip[cx - 2][cy + 1][over] == 'W') moveto.push([cx - 2, cy + 1]);
        if (pip[cx - 2][cy + 1] == '') moveto.push([cx - 2, cy + 1]);
      }
      if (cx - 2 >= 0 && cy - 1 >= 0) {
        var over = pip[cx - 2][cy - 1].length - 2;
        if (pip[cx - 2][cy - 1][over] == 'W') moveto.push([cx - 2, cy - 1]);
        if (pip[cx - 2][cy - 1] == '') moveto.push([cx - 2, cy - 1]);
      }


      if (cx - 1 >= 0 && cy + 2 < 8) {
        var over = pip[cx - 1][cy + 2].length - 2;
        if (pip[cx - 1][cy + 2][over] == 'W') moveto.push([cx - 1, cy + 2]);
        if (pip[cx - 1][cy + 2] == '') moveto.push([cx - 1, cy + 2]);
      }
      if (cx + 1 < 8 && cy + 2 < 8) {
        var over = pip[cx + 1][cy + 2].length - 2;
        if (pip[cx + 1][cy + 2][over] == 'W') moveto.push([cx + 1, cy + 2]);
        if (pip[cx + 1][cy + 2] == '') moveto.push([cx + 1, cy + 2]);
      }
      if (cx - 1 >= 0 && cy - 2 >= 0) {
        var over = pip[cx - 1][cy - 2].length - 2;
        if (pip[cx - 1][cy - 2][over] == 'W') moveto.push([cx - 1, cy - 2]);
        if (pip[cx - 1][cy - 2] == '') moveto.push([cx - 1, cy - 2]);
      }
      if (cx + 1 < 8 && cy - 2 >= 0) {
        var over = pip[cx + 1][cy - 2].length - 2;
        if (pip[cx + 1][cy - 2][over] == 'W') moveto.push([cx + 1, cy - 2]);
        if (pip[cx + 1][cy - 2] == '') moveto.push([cx + 1, cy - 2]);
      }
    }
  }
  if (item[0] == 'B') {
    moveto = [];

    if (item[item.length - 2] == 'W') {
      var i = cx + 1,
        j = cy + 1;
      while (i < 8 && j < 8) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'W') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'B') {
          moveto.push([i, j]);
          break;
        }
        ++i;
        ++j;
      }
      i = cx - 1;
      j = cy - 1;
      while (i >= 0 && j >= 0) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'W') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'B') {
          moveto.push([i, j]);
          break;
        }
        --i;
        --j;
      }
      i = cx - 1;
      j = cy + 1;
      while (i >= 0 && j < 8) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'W') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'B') {
          moveto.push([i, j]);
          break;
        }
        --i;
        ++j;
      }
      i = cx + 1;
      j = cy - 1;
      while (i < 8 && j >= 0) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'W') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'B') {
          moveto.push([i, j]);
          break;
        }
        ++i;
        --j;
      }
    } else if (item[item.length - 2] == 'B') {
      var i = cx + 1,
        j = cy + 1;
      while (i < 8 && j < 8) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'B') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'W') {
          moveto.push([i, j]);
          break;
        }
        ++i;
        ++j;
      }
      i = cx - 1;
      j = cy - 1;
      while (i >= 0 && j >= 0) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'B') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'W') {
          moveto.push([i, j]);
          break;
        }
        --i;
        --j;
      }
      i = cx - 1;
      j = cy + 1;
      while (i >= 0 && j < 8) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'B') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'W') {
          moveto.push([i, j]);
          break;
        }
        --i;
        ++j;
      }
      i = cx + 1;
      j = cy - 1;
      while (i < 8 && j >= 0) {
        var over = (pip[i][j].length - 2);
        if (pip[i][j][over] == 'B') break;
        if (pip[i][j] == '') moveto.push([i, j]);
        if (pip[i][j][over] == 'W') {
          moveto.push([i, j]);
          break;
        }
        ++i;
        --j;
      }
    }
  }
  if (item[0] == 'R') {
    moveto = [];

    if (item[item.length - 2] == 'W') {
      for (var i = cx - 1; i >= 0; --i) {
        var over = (pip[i][cy].length - 2);
        if (pip[i][cy][over] == 'W') break;
        if (pip[i][cy] == '') moveto.push([i, cy]);
        if (pip[i][cy][over] == 'B') {
          moveto.push([i, cy]);
          break;
        }
      }
      for (var i = cx + 1; i < 8; ++i) {
        var over = (pip[i][cy].length - 2);
        if (pip[i][cy][over] == 'W') break;
        if (pip[i][cy] == '') moveto.push([i, cy]);
        if (pip[i][cy][over] == 'B') {
          moveto.push([i, cy]);
          break;
        }
      }
      for (var i = cy - 1; i >= 0; --i) {
        var over = (pip[cx][i].length - 2);
        if (pip[cx][i][over] == 'W') break;
        if (pip[cx][i] == '') moveto.push([cx, i]);
        if (pip[cx][i][over] == 'B') {
          moveto.push([cx, i]);
          break;
        }
      }
      for (var i = cy + 1; i < 8; ++i) {
        var over = (pip[cx][i].length - 2);
        if (pip[cx][i][over] == 'W') break;
        if (pip[cx][i] == '') moveto.push([cx, i]);
        if (pip[cx][i][over] == 'B') {
          moveto.push([cx, i]);
          break;
        }
      }
    }
    if (item[item.length - 2] == 'B') {
      for (var i = cx - 1; i >= 0; --i) {
        var over = (pip[i][cy].length - 2);
        if (pip[i][cy][over] == 'B') break;
        if (pip[i][cy] == '') moveto.push([i, cy]);
        if (pip[i][cy][over] == 'W') {
          moveto.push([i, cy]);
          break;
        }
      }
      for (var i = cx + 1; i < 8; ++i) {
        var over = (pip[i][cy].length - 2);
        if (pip[i][cy][over] == 'B') break;
        if (pip[i][cy] == '') moveto.push([i, cy]);
        if (pip[i][cy][over] == 'W') {
          moveto.push([i, cy]);
          break;
        }
      }
      for (var i = cy - 1; i >= 0; --i) {
        var over = (pip[cx][i].length - 2);
        if (pip[cx][i][over] == 'B') break;
        if (pip[cx][i] == '') moveto.push([cx, i]);
        if (pip[cx][i][over] == 'W') {
          moveto.push([cx, i]);
          break;
        }
      }
      for (var i = cy + 1; i < 8; ++i) {
        var over = (pip[cx][i].length - 2);
        if (pip[cx][i][over] == 'B') break;
        if (pip[cx][i] == '') moveto.push([cx, i]);
        if (pip[cx][i][over] == 'W') {
          moveto.push([cx, i]);
          break;
        }
      }
    }
  }
}

