'use strict'
// 1行目に記載している 'use strict' は削除しないでください


function viewData(record, arrayData){
  const test = document.getElementById("data");
  const add = [];
  const btn = [];

  for(let i=0; i<record; i++){
    add[i] = [];
    
    add[i] = document.createElement("p");
    test.appendChild(add[i]);
    
    add[i][0] = document.createElement("span");
    add[i][0].setAttribute("class", `date`);
    add[i][0].textContent = `${arrayData[i][0]}年${arrayData[i][1]}月${arrayData[i][2]}日`;
    add[i].appendChild(add[i][0]);
    
    add[i][1] = document.createElement("span")
    add[i][1].textContent = ` ${arrayData[i][3]} `;
    add[i].appendChild(add[i][1]);


    // if(arrayData[i][3] === "黒部マラソン"){
    //   console.log("a");
    //   btn[i] = document.createElement("button");
    //   btn[i].setAttribute("id", `btn${i}`);
    //   console.log(btn[i]);
    //   btn[i].style.width = "50px";
    //   btn[i].style.height = "20px";

    //   add[i].appendChild(btn[i]);
    //   console.log(document.getElementById(btn[i]));

    
  }

}

const csvData = document.getElementById("data");

function outputData(path){
  const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
	request.addEventListener('load', (event) => { // ロードさせ実行
		const response = event.target.responseText; // 受け取ったテキストを返す
    console.log(response);
    //改行コードで区切って行の配列を作成
    const tmp = response.split("\n");
    console.log("改行コードで区切って行の配列を作成");
    console.log(tmp);

    //行ごとにカンマで区切り、２次元配列を作成
    const lines = tmp.map(line => line.split(','));
    console.log("行ごとにカンマで区切り、２次元配列を作成");
    lines.pop();
    console.log(lines);

    const lenRecord = tmp.length-1;

    viewData(lenRecord, lines);

	});
	request.open('GET', path, true); // csvのパスを指定
	request.send();
}

const dataPath = document.getElementById("textBox")

function clickfunc(){

  outputData(dataPath.value);
}

document.getElementById("button").addEventListener("click", clickfunc);




function registFunc(){
  console.log(registDate.value);
  console.log(eventName.value);
  console.log(timeH.value);
  console.log(timeM.value);
  console.log(timeS.value);
}

const registDate = document.getElementById("registDate");
const eventName = document.getElementById("eventName");
const timeH = document.getElementById("hour");
const timeM = document.getElementById("minute");
const timeS = document.getElementById("second");
const registBtn = document.getElementById("registBtn");


registBtn.addEventListener("click", registFunc);

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
