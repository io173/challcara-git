for(let i=1;i<=10;i++){
	const ryouriSearchCope = ['ピーマン豆腐','トロトロ肉豆腐','トマトベーコン','オクラのせ冷奴','きのこの甘辛炒め','玉ねぎのステーキ','サーモンマリネ','ほうれん草とハムソテー','わかめのツナサラダ','きゅうりとちくわあえ',"フワトロ鰤照り","キャベツの胡麻和え","パスタ","鮭のホイル焼き","鮭のバタポン蒸し",'アジのマヨパン','チーズオムレツ風','一分、卵料理','鰹とみょうがの南蛮漬け','カップオムレツ','卵味噌汁','キャシュ風、卵料理','牛肉と野菜のオイスターソース炒め','牛とジャガイモの肉じゃが','とろチーズ、即席卵料理','新玉ねぎの牛肉巻き','白滝牛丼','牛肉トマト','照り焼きチキン','冷しゃぶサラダ','生姜焼き','野菜スープ、ソーセージ','具沢山野菜スープ','ネギ焼うどん','やみつき焼うどん','唐揚げ','カリカリ唐揚げ','塩昆布冷奴','天かす冷奴','キムチ冷奴','鯖缶納豆冷奴','たぬき冷奴','めんつゆ卵焼き','簡単卵焼き','もやしのおひたし','春野菜のお浸し','白菜とえのきのお浸し','きのことソーメン昆布','かぼちゃコロッケ','ライスコロッケ','本格麻婆豆腐','胃にやさしい麻婆豆腐','麻婆豆腐リゾット風','ハンバーグ　ピーマンの肉詰め','ピーマンの肉詰め','お肉不使用、ピーマンの肉詰め','トマトと水菜の塩昆布サラダ','いちじくと柿、春菊と生ハムのサラダ'];//検索用配列
	var name
	var demo = document.getElementById("okini"+i);
	var cookies = document.cookie;
	var cookiesArray = cookies.split(';');
	console.log(cookiesArray);
	for(var c of cookiesArray){
		var cArray = c.split('=');
		console.log(cArray);
			if(cArray[0]==' test'+i||cArray[0]=='test'+i){
				name=ryouriSearchCope[cArray[1]-1];
				demo.href="https://cookpad.com/search/"+ryouriSearchCope[cArray[1]-1];
				demo.innerHTML=name;
			}
	}
}