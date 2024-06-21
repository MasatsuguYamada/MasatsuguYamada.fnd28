'use strict'
// 1行目に記載している 'use strict' は削除しないでください

document.getElementById("file").addEventListener("change", e => {
  console.log(e);
  const files = e.target.files
  console.log("a");
  
  //FileReaderの準備
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    //ファイルから読み取った文字列を変数resultに格納
    const { result } = reader;
    console.log("読み取った文字列を変数resultに格納");
    console.log(result);

    //改行コードで区切って行の配列を作成
    const tmp = result.split("\n");
    console.log("改行コードで区切って行の配列を作成");
    console.log(tmp);

    //行ごとにカンマで区切り、２次元配列を作成
    const lines = tmp.map(line => line.split(','));
    console.log("行ごとにカンマで区切り、２次元配列を作成");
    console.log(lines);

    const lenRecord = tmp.length-1;

    viewData(lenRecord, lines);

  });
  //選択されたCSVを読み込み
  reader.readAsText(files[0]);
})

function viewData(record, arrayData){
  const test = document.getElementById("data");
  const add = [];

  for(let i=0; i<record; i++){
    add[i] = document.createElement("p");
    add[i].textContent = `${arrayData[i][0]}年${arrayData[i][1]}月${arrayData[i][2]}日`;
    test.appendChild(add[i]);
  }

}

// const input = `
// 1,10,100
// 2,20,200
// 3,30,300
// `
// _(input)
//     .split("\n")
//     .compact()
//     .map(x => _.zipObject(
//       ['one', 'ten', 'hundred'],
//       x.split(',')
//     ))
//     .value()
// /* =>
//  [ { one: '1', ten: '10', hundred: '100' },
//    { one: '2', ten: '20', hundred: '200' },
//    { one: '3', ten: '30', hundred: '300' } ]
// */
