const weatherActivities = function(weather, temp) {
  if (weather == "晴れ" && temp >= 25) {
    console.log("ビーチで泳ぎましょう！");
  } else if (weather == "晴れ" && temp >=15 && temp < 25) {
    console.log("公園でピクニックをしましょう！");
  } else if (weather == "雨"){
    console.log("家で映画を見ましょう！");
  } else if(weather == "雪" && temp <= 0){
    console.log("雪だるまを作りましょう！");
  } else {
    console.log("今日の天気に合った活動を見つけてください！");
  }
}

weatherActivities("晴れ", 27); // "ビーチで泳ぎましょう！"を出力
weatherActivities("晴れ", 20); // "公園でピクニックをしましょう！"を出力
weatherActivities("雨", 15); // "家で映画を見ましょう！"を出力
weatherActivities("雪", -3); // "雪だるまを作りましょう！"を出力
weatherActivities("曇り", 10); // "今日の天気に合った活動を見つけてください！"を出力