// /* */

// var val1 = "var変数"
// console.log(val1);

// // var変数は上書きが可能
// val1 = "var変数は上書きできる"
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言"
// console.log(val1);

// let val2 = "let変数"
// console.log(val2);

// // letは上書き可能
// val2 = "let変数は上書き可能"
// console.log(val2);

// letは再宣言不可能
// let val2 = "let変数は再宣言不可"
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// // constは上書き不可
// val3 = "const変数を上書き";

// // 再宣言も不可
// const val3 = "const再宣言";
// console.log(val3);

// constで定義したオブジェクトはプロパテぃの変更が可能
// const val4 ={
//   name: "zizi",
//   age: 28,
// };

// val4.name = 'aaa';
// val4.adress = "rrrrrr"
// console.log(val4);

// constで定義した配列はプロパテぃの変更が可能
// const val5 = ['dog','cat'];
// val5[0] = "bird";
// val5.push("monkey")
// console.log(val5);

// テンプレート文字列
// const name = "name"
// const age = 28;
// [私の名前はnameです。年齢は２８歳です]

// 従来は　結合で表示していた

// テンプレート文字列を用いた方法
// const message1 = `私の名前は${name}です。年齢は${age}です。`
// console.log(message1);

// アロー関数について

// 従来の関数
// function func1(str){
//   return str;
// }
// console.log(func1("func1です"))

// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"));

// アロー関数
// 返す値が１行の場合は波かっこは省略可。return も
// const func2 = (str) => str;

// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(func3(10, 20));

// 分割代入
// const myProfile ={
//   name: "zizi",
//   age: 28,
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// ここで分割代入することで、myprofile.を省略
// const{name,age} = myProfile;

// const message2= `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['zizi',28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const myProfile1 = ['aaa',30];
// const[name,age] = myProfile1
// const message4 = `名前は${name}です。年齢は${age}最です。`;
// console.log(message4);

// デフォルト値

// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello ();

// スプレっと構文

// 配列の天気あ
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sum = (num1, num2) => console.log(num1 + num2);
// sum(arr1[0], arr1[1]);
// sum(...arr1)
// ...どっと３つで順番に処理するとなる。

// まとめる
//  arr4という値に残りの3,4,5をまとめて代入
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr4] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr4);

// 配列コピーーや結合
//  const arr5 = [10,20]
// const arr6 = [30,40]
// const arr7 = [...arr5,...arr6];
// arr7[0] = 100;
// console.log(arr7);
// console.log(arr5);
// console.log(arr7);

// const arr8 = arr5;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr5);

// mapやfilterを使った配列の処理

const nameArr = ["田中", "中田", "aaa"];
// for (let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// };

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name,index) => console.log(`${index + 1 }番目はnameです`));

// Filter
// const numArr = [1,2,3,4,5]
// const newnumArr = numArr.filter((num) => {
//   return num % 2 == 0;
// });
// console.log(newnumArr);

// const newnameArr = nameArr.map((name) => {
//   if (name == 'aaa'){
//     return name
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newnameArr)

// 三項演算子

// ある条件？ 条件がtrueの時　条件がfalseの時
// const num = "1300";

// typeof 変数の型を判定してくれる
// const formattedNum = typeof num == 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1,num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容';
// }

// console.log(checkSum(70,40))

// 論理演算子のほんとうのいみを知ろう

// const flag1 = true;
// const flag2 = false;

// if(flag1 || flag2){
//   console.log("1か2はtrueになります")
// }

//  ||は左がfalseになるときに右側を返す！！！！！！！！！！！！！！！！！！
// const num = ;
// const fee = num || "金額未設定です"
// console.log(fee);

// 　&&は左側がtrueなら右側を返す！！！！！！！！！！！！！！！！！！！！！！
// const num2 = null;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
