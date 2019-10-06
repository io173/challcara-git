const express = require('express');
const app = express();
// パス指定用モジュール
const path = require('path');
const ryouri = ['dasiegg','goma','hiya','houso','kara','meetdan','piniku','renten','supu','tonkaku'];
const ryouriCope = ['dasiegg','goma','hiya','houso','kara','meetdan','piniku','renten','supu','tonkaku'];
var bodyParser = require('body-parser');

// 3000番ポートで待ちうける
app.listen(3000, () => {
  console.log('Running at Port 3000...');
});

// 静的ファイルのルーティング
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


for(const index in ryouri){
  app.get("/image"+index+".jpeg",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/image/"+ryouri[index]+".jpeg"));
  });
  console.log(ryouri[index]);
}

app.post("/home",function(req,res){
  for(const index in ryouri){
    if(ryouri[index]=='X'){
      ryouri[index]=ryouriCope[index];
    }
  }
  res.sendFile(path.join(__dirname,"./public/index.html"));
})

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
        if(index==100){
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
        if(index==0||index==8){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='6'){
        question_N=2;
        if(index==3||index==4||index==5||index==6||index==7){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='7'){
        question_N=2;
        if(index==0||index==1||index==2||index==8){
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
        if(index==1||index==8){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='11'){
        question_N=3;
        if(index==8){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='12'){
        question_N=3;
        if(index==100){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='13'){
        question_N=3;
      }else if(text=='14'){
        question_N=4;
        if(index==4||index==5||index==6){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='15'){
        question_N=4;
        if(index==0||index==3||index==9){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='16'){
        question_N=5;
        if(index==0||index==1||index==3||index==8){
        }else{
          ryouri[index]='X';
        }
      }else if(text=='17'){
        question_N=5;
        if(index==1||index==2||index==8){
        }else{
          ryouri[index]='X';
        }
      }
    }
  console.log(text);
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
})
// その他のリクエストに対する404エラー
app.use((req, res) => {
  res.sendStatus(404);
});
