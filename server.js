const express = require('express');
const app = express();	// パス指定用モジュール
const path = require('path');
var ryouri = ['1','2','3','4','5','6','7','8','9','10',"11","12","13","14","15",'16','17','18','19','20','21','22','23','24','25',"26","27","28","29","30",'31','32','33','34','35','36','37','38','39','40',"41","42","43","44","45",'46','47','48','49','50',"51","52","53","54","55","56","57","58"];	//候補料理データの格納
var ryouriImg= ['1','2','3','4','5','6','7','8','9','10',"11","12","13","14","15",'16','17','18','19','20','21','22','23','24','25',"26","27","28","29","30",'31','32','33','34','35','36','37','38','39','40',"41","42","43","44","45",'46','47','48','49','50',"51","52","53","54","55","56","57","58"];//画像ソート用配列
const ryouriCope = ['1','2','3','4','5','6','7','8','9','10',"11","12","13","14","15",'16','17','18','19','20','21','22','23','24','25',"26","27","28","29","30",'31','32','33','34','35','36','37','38','39','40',"41","42","43","44","45",'46','47','48','49','50',"51","52","53","54","55","56","57","58"];//初期化用配列
var ryouriSearch = ['ピーマン豆腐','トロトロ肉豆腐','トマトベーコン','オクラのせ冷奴','きのこの甘辛炒め','玉ねぎのステーキ','サーモンマリネ','ほうれん草とハムソテー','わかめのツナサラダ','きゅうりとちくわあえ',"フワトロ鰤照り","キャベツの胡麻和え","パスタ","鮭のホイル焼き","鮭のバタポン蒸し",'アジのマヨパン','チーズオムレツ風','一分、卵料理','鰹とみょうがの南蛮漬け','カップオムレツ','卵味噌汁','キャシュ風、卵料理','牛肉と野菜のオイスターソース炒め','牛とジャガイモの肉じゃが','とろチーズ、即席卵料理','新玉ねぎの牛肉巻き','白滝牛丼','牛肉トマト','照り焼きチキン','冷しゃぶサラダ','生姜焼き','野菜スープ、ソーセージ','具沢山野菜スープ','ネギ焼うどん','やみつき焼うどん','唐揚げ','カリカリ唐揚げ','塩昆布冷奴','天かす冷奴','キムチ冷奴','鯖缶納豆冷奴','たぬき冷奴','めんつゆ卵焼き','簡単卵焼き','もやしのおひたし','春野菜のお浸し','白菜とえのきのお浸し','きのことソーメン昆布','かぼちゃコロッケ','ライスコロッケ','本格麻婆豆腐','胃にやさしい麻婆豆腐','麻婆豆腐リゾット風','ハンバーグ　ピーマンの肉詰め','ピーマンの肉詰め','お肉不使用、ピーマンの肉詰め','トマトと水菜の塩昆布サラダ','いちじくと柿、春菊と生ハムのサラダ'];//検索用配列
const ryouriSearchCope = ['ピーマン豆腐','トロトロ肉豆腐','トマトベーコン','オクラのせ冷奴','きのこの甘辛炒め','玉ねぎのステーキ','サーモンマリネ','ほうれん草とハムソテー','わかめのツナサラダ','きゅうりとちくわあえ',"フワトロ鰤照り","キャベツの胡麻和え","パスタ","鮭のホイル焼き","鮭のバタポン蒸し",'アジのマヨパン','チーズオムレツ風','一分、卵料理','鰹とみょうがの南蛮漬け','カップオムレツ','卵味噌汁','キャシュ風、卵料理','牛肉と野菜のオイスターソース炒め','牛とジャガイモの肉じゃが','とろチーズ、即席卵料理','新玉ねぎの牛肉巻き','白滝牛丼','牛肉トマト','照り焼きチキン','冷しゃぶサラダ','生姜焼き','野菜スープ、ソーセージ','具沢山野菜スープ','ネギ焼うどん','やみつき焼うどん','唐揚げ','カリカリ唐揚げ','塩昆布冷奴','天かす冷奴','キムチ冷奴','鯖缶納豆冷奴','たぬき冷奴','めんつゆ卵焼き','簡単卵焼き','もやしのおひたし','春野菜のお浸し','白菜とえのきのお浸し','きのことソーメン昆布','かぼちゃコロッケ','ライスコロッケ','本格麻婆豆腐','胃にやさしい麻婆豆腐','麻婆豆腐リゾット風','ハンバーグ　ピーマンの肉詰め','ピーマンの肉詰め','お肉不使用、ピーマンの肉詰め','トマトと水菜の塩昆布サラダ','いちじくと柿、春菊と生ハムのサラダ'];//検索用配列
var bodyParser = require('body-parser');
var open = require('open');
var i=0;

// 3000番ポートで待ちうける
app.listen(3000, () => {
  console.log('Running at Port 3000...');
});

// 静的ファイルのルーティング
app.use(express.static(path.join(__dirname, 'public')));
//jsondate取得準備
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//画像の表示
for(const index in ryouri){
  app.get("/image"+index+".jpeg",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/image/"+ryouriImg[index]+".jpg"));
  });
  console.log(ryouri[index]);
}

//HOMEボタンの処理＆候補料理の初期化
app.post("/home",function(req,res){
  for(const index in ryouri){
    ryouri[index]=ryouriCope[index];
	ryouriImg[index]=ryouriCope[index];
	ryouriSearch[index]=ryouriSearchCope[index];
  }
  res.sendFile(path.join(__dirname,"./public/index.html"));
})

//検索エンジンにページ遷移
for(const index in ryouri){
app.get("/link"+index,function(req,res){
  open('https://cookpad.com/search/'+ryouriSearch[index]);
  ryouriImg[0]=ryouriImg[index];
  ryouriSearch[0]=ryouriSearch[index];
  res.sendFile(path.join(__dirname,"./public/answer.html"));
})
}

//Cookieの設定
app.post('/setC',function(req,res){
	i++;
	res.cookie('test'+i,ryouriImg[0],{maxAge:60000,httpOnly:false});
	res.sendFile(path.join(__dirname,"./public/answer.html"));
	if(i==10){
		i=0;
	}
});


//選択肢による候補料理の選別
app.post("/ryori",function(req,res) {
  var text = req.body['ryo'];
  var question_N;
  for(const index in ryouri){
	switch(text){
		case '1':
			question_N=1;
				if(index==114){
					break;
				}else{
					break;
				}
		case '2':
			question_N=1;
				if(index==114){
					break;
				}else{
				  break;
				}
		case '3':
			question_N=2;
				if(index==3||index==5||index==7|index==8||index==9||index==11||index==20||index==21||index==29||index==31||index==32||index==37||index==38||index==41||index==42||index==43||index==44||index==45||index==46||index==47||index==56||index==57){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '4':
			question_N=2;
				if(index==3||index==7|index==8||index==9||index==11||index==20||index==31||index==32||index==37||index==44||index==45||index==46||index==47||index==56||index==57){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '5':
			question_N=5;
				if(index==0||index==8||index==11||index==12||index==14){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '6':
			question_N=5;
				if(index==3||index==4||index==5||index==6||index==7||index==11||index==12){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '7':
			question_N=5;
				if(index==0||index==1||index==2||index==8||index==11||index==13||index==14){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '8':
			question_N=5;
				if(index==1||index==7||index==8){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '9':
			question_N=3;
				if(index==1||index==2||index==4||index==6||index==11||index==12||index==13||index==15||index==16||index==18||index==21||index==22||index==23||index==24||index==25||index==26||index==27||index==28||index==30||index==33||index==34||index==35||index==36||index==48||index==49||index==50||index==51||index==52||index==53||index==54||index==55){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '10':
			question_N=3;
				if(index==1||index==2||index==4||index==6||index==11||index==12||index==13||index==15||index==16||index==18||index==21||index==22||index==23||index==24||index==25||index==26||index==27||index==28||index==30||index==33||index==34||index==35||index==36||index==48||index==49||index==50||index==51||index==52||index==53||index==54||index==55){
					ryouri[index]='X';
					break;
				}else{
				  break;
				}
		case '11':
			question_N=4;
				if(index==1||index==18||index==22||index==23||index==25||index==26||index==27||index==28||index==29||index==30||index==35||index==36||index==48||index==49||index==52||index==53||index==54||index==55){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '12':
			question_N=4;
				if(index==6||index==10||index==13||index==15){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '13':
			question_N=4;
				if(index==0||index==2||index==5||index==6||index==7||index==8||index==9||index==11||index==14||index==17||index==20||index==21||index==24||index==29||index==44||index==45||index==46||index==47||index==56||index==57){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '14':
			question_N=4;
				if(index==16||index==17||index==19||index==20||index==21||index==24||index==42||index==43){
					break;
				}else{
				  ryouri[index]='X';
				}
		case '15':
			question_N=4;
				if(index==1||index==3||index==37||index==38||index==39||index==40||index==41||index==50||index==51){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '16':
			question_N=4;
				if(index==12||index==33){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '17':
			question_N=5;
				if(index==4||index==22||index==23||index==25||index==26||index==28||index==30||index==35||index==36||index==48||index==49||index==53||index==54){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '18':
			question_N=5;
				if(index==3||index==6||index==8||index==9||index==8||index==9||index==20||index==29||index==31||index==32||index==45||index==46||index==47||index==56||index==57){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '19':
			question_N=5;
				if(index==3||index==5||index==7||index==11||index==16||index==17||index==20||index==31||index==32||index==37||index==41||index==44||index==45||index==46||index==47||index==56||index==57){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '20':
			question_N=5;
				if(index==13||index==15||index==10||index==13||index==14){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '21':
			question_N=5;
				if(index==0||index==3||index==6||index==7||index==8||index==9||index==11||index==14||index==20||index==29||index==31||index==32||index==37||index==38||index==40||index==41||index==44||index==45||index==46||index==47||index==56||index==57){
					break;
				}else{
				  ryouri[index]='X';
				  break;
				}
		case '22':
			question_N=5;
			break;

	  }
    }
  //画面遷移処理
  if(text!=null&&question_N==1){
  res.sendFile(path.join(__dirname,"./public/question_3.html"));
    }else if(text!=null&&question_N==2){
  res.sendFile(path.join(__dirname,"./public/question_2.html"));
    }else if(text!=null&&question_N==3){
  res.sendFile(path.join(__dirname,"./public/question_4.html"));
    }else if(text!=null&&question_N==4){
  res.sendFile(path.join(__dirname,"./public/question_5.html"));
    }else if(text!=null&&question_N==5){
  res.sendFile(path.join(__dirname,"./public/answer.html"));
    }
  for(const index in ryouri){
	ryouriImg[index]=ryouri[index];
	ryouriSearch[index]=ryouriSearchCope[index];
  }  
  //画像のソート
  for(const index1 in ryouriImg){
    var buff,buff1;
    for(var index2=index1+1 in ryouriImg){
      if(ryouriImg[index2]=='X'&&ryouriImg[index1]!='X'){
		buff=ryouriImg[index1];
		buff1=ryouriSearch[index1];

		ryouriImg[index1]=ryouriImg[index2];
		ryouriSearch[index1]=ryouriSearch[index2];

		ryouriImg[index2]=buff;
		ryouriSearch[index2]=buff1;
      }
    }
  }
  console.log(ryouriImg);
  console.log(ryouriSearch); 
})
// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});
