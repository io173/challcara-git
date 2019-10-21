const express = require('express');
const app = express();	// パス指定用モジュール
const path = require('path');
const ryouri = ['dasiegg','goma','hiya','houso','kara','meetdan','piniku','renten','supu','tonkaku',"fish","haityu","isi","wakaten","yudeegg"];	//候補料理データの格納
var ryouriImg= ['dasiegg','goma','hiya','houso','kara','meetdan','piniku','renten','supu','tonkaku',"fish","haityu","isi","wakaten","yudeegg"];//画像ソート用配列
const ryouriCope = ['dasiegg','goma','hiya','houso','kara','meetdan','piniku','renten','supu','tonkaku',"fish","haityu","isi","wakaten","yudeegg"];//初期化用配列
var ryouriSearch = ['だし巻き卵','胡麻和え','冷奴','ほうれん草のソテー','唐揚げ','ミートボール','ピーマンの肉詰め','レンコンの天ぷら','野菜スープ','豚角',"魚のポワレ","ハイチュウ","聖晶石","ワカサギの天ぷら","ゆで卵"];//検索用配列
const ryouriSearchCope = ['だし巻き卵','胡麻和え','冷奴','ほうれん草のソテー','唐揚げ','ミートボール','ピーマンの肉詰め','レンコンの天ぷら','野菜スープ','豚角',"魚のポワレ","ハイチュウ","聖晶石","ワカサギの天ぷら","ゆで卵"];//検索用配列
var bodyParser = require('body-parser');
var open = require('open');

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
    res.sendFile(path.join(__dirname,"./public/image/"+ryouriImg[index]+".jpeg"));
  });
  console.log(ryouri[index]);
}

//HOMEボタンの処理＆候補料理の初期化
app.post("/home",function(req,res){
  for(const index in ryouri){
    if(ryouri[index]=='X'){
      ryouri[index]=ryouriCope[index];
    }
	ryouriImg[index]=ryouriCope[index];
	ryouriSearch[index]=ryouriSearchCope[index];
  }
  res.sendFile(path.join(__dirname,"./public/index.html"));
})

//検索エンジンにページ遷移
for(const index in ryouri){
app.get("/link"+index,function(req,res){
  open('http://www.google.com/search?q='+ryouriSearch[index]);
  res.sendFile(path.join(__dirname,"./public/answer.html"));
})
}

//選択肢による候補料理の選別
app.post("/ryori",function(req,res) {
  var text = req.body['ryo'];
  var question_N;
  for(const index in ryouri){
    if(text=='1'){
      question_N=1;
      if(index==4||index==5||index==6||index==9){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='2'){
        question_N=1;
        if(index==13){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='3'){
        question_N=1;
        if(index==2){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='4'){
        question_N=1;
        if(index==1||index==3||index==6||index==7){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='5'){
        question_N=1;
        if(index==0||index==8||index==11||index==12||index==14){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='6'){
        question_N=2;
        if(index==3||index==4||index==5||index==6||index==7||index==11||index==12){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='7'){
        question_N=2;
        if(index==0||index==1||index==2||index==8||index==11||index==13||index==14){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='8'){
        question_N=3;
        if(index==1||index==7||index==8){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='9'){
        question_N=3;
        if(index==4||index==6){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='10'){
        question_N=3;
        if(index==1||index==8||index==11){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='11'){
        question_N=3;
        if(index==8||index==10||index==13||index==15){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='12'){
        question_N=3;
        if(index==11||index==12){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='13'){
        question_N=3;
      }else if(text=='14'){
        question_N=4;
        if(index==4||index==5||index==6||index==11||index==12){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='15'){
        question_N=4;
        if(index==0||index==3||index==9||index==11||index==12||index==13||index==14){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='16'){
        question_N=5;
        if(index==0||index==1||index==3||index==8||index==11||index==13){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='17'){
        question_N=5;
        if(index==1||index==2||index==8||index==11){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='18'){
        question_N=4;
        if(index==11||index==2){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='19'){
        question_N=4;
        if(index==8||index==11){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='20'){
        question_N=4;
        if(index==1||index==8||index==11){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='21'){
        question_N=4;
        if(index==11){
        }else{
          ryouri[index]='X';
        }
      }
    }
  console.log(text);

  //画面遷移処理
  if(text!=null&&question_N==1){
  res.sendFile(path.join(__dirname,"./public/question_2.html"));
    }else if(text!=null&&question_N==2){
  res.sendFile(path.join(__dirname,"./public/question_3.html"));
    }else if(text!=null&&question_N==3){
  res.sendFile(path.join(__dirname,"./public/question_4.html"));
    }else if(text!=null&&question_N==4){
  res.sendFile(path.join(__dirname,"./public/answer.html"));
    }else if(text!=null&&question_N==5){
  res.sendFile(path.join(__dirname,"./public/question_5.html"));
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
})
// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});
