'use strict'
// 1行目に記載している 'use strict' は削除しないでください
//https://blog.ver001.com/javascript-table-sort/

function outputData(arrayData){
  const table = document.getElementById("table");
  const dataBox = [];

  if(table.rows.length > 1){
    while(table.rows.length>1){
      table.deleteRow(-1);
    }
  }

  for(let i=0; i<arrayData.length; i++){
    dataBox[i] = {};
    
    dataBox[i] = document.createElement("tr");
    table.appendChild(dataBox[i]);
    
    dataBox[i].date = document.createElement("td");
    dataBox[i].date.textContent = arrayData[i][0];
    dataBox[i].appendChild(dataBox[i].date);

    dataBox[i].eventName = document.createElement("td");
    dataBox[i].eventName.textContent = arrayData[i][1];
    dataBox[i].appendChild(dataBox[i].eventName);

    dataBox[i].record = document.createElement("td");
    dataBox[i].record.textContent = arrayData[i][2];
    dataBox[i].appendChild(dataBox[i].record);
  }
}

const dataUpBtn = document.getElementById("dateSortUp");
dataUpBtn.addEventListener("click", dateSortUp);
function dateSortUp(){
  importString.sort(function(a,b){
    if((a[0]>b[0]) === true){
      return -1;
    }else{
      return 1;
    }
  });
  outputData(importString);
  dataUpBtn.style.backgroundColor= "yellow";
  dataDownBtn.style.backgroundColor= "";
  eventBtn.style.backgroundColor= "";
  timeUpBtn.style.backgroundColor= "";
  timeDownBtn.style.backgroundColor= "";
}

const dataDownBtn = document.getElementById("dateSortDown");
dataDownBtn.addEventListener("click", dateSortDown);
function dateSortDown(){
  importString.sort(function(a,b){
    if((a[0]<b[0]) === true){
      return -1;
    }else{
      return 1;
    }
  });
  outputData(importString);
  dataUpBtn.style.backgroundColor= "";
  dataDownBtn.style.backgroundColor= "yellow";
  eventBtn.style.backgroundColor= "";
  timeUpBtn.style.backgroundColor= "";
  timeDownBtn.style.backgroundColor= "";

}

const eventBtn = document.getElementById("eventSort");
eventBtn.addEventListener("click", eventSort);
function eventSort(){
  importString.sort(function(a,b){
    if((a[0]>b[0]) === true){
      return -1;
    }else{
      return 1;
    }
  });
  outputData(importString);
  dataUpBtn.style.backgroundColor= "";
  dataDownBtn.style.backgroundColor= "";
  eventBtn.style.backgroundColor= "yellow";
  timeUpBtn.style.backgroundColor= "";
  timeDownBtn.style.backgroundColor= "";
}

const timeUpBtn = document.getElementById("timeSortUp");
timeUpBtn.addEventListener("click", timeSortUp);
function timeSortUp(){
  importString.sort(function(a,b){
    if((a[0]>b[0]) === true){
      return -1;
    }else{
      return 1;
    }
  });
  outputData(importString);
  dataUpBtn.style.backgroundColor= "";
  dataDownBtn.style.backgroundColor= "";
  eventBtn.style.backgroundColor= "";
  timeUpBtn.style.backgroundColor= "yellow";
  timeDownBtn.style.backgroundColor= "";
}

const timeDownBtn = document.getElementById("timeSortDown");
timeDownBtn.addEventListener("click", timeSortDown);
function timeSortDown(){
  importString.sort(function(a,b){
    if((a[0]<b[0]) === true){
      return -1;
    }else{
      return 1;
    }
  });
  outputData(importString);
  dataUpBtn.style.backgroundColor= "";
  dataDownBtn.style.backgroundColor= "";
  eventBtn.style.backgroundColor= "";
  timeUpBtn.style.backgroundColor= "";
  timeDownBtn.style.backgroundColor= "yellow";
}


let importString = [];
function makeArray(path){
  const request = new XMLHttpRequest(); // HTTPでファイルを読み込む
	request.addEventListener('load', (event) => { // ロードさせ実行
		const response = event.target.responseText; // 受け取ったテキストを返す
    // 改行コードで区切って行の配列を作成
    const tmp = response.split("\n");

    //行ごとにカンマで区切り、２次元配列を作成
    const lines = tmp.map(line => line.split(','));
    lines.pop();
    importString = lines;
    outputData(lines);

    
	});
	request.open('GET', path, true); // csvのパスを指定
	request.send();
}


const dataPath = document.getElementById("textBox");
document.getElementById("button").addEventListener("click", clickfunc);
function clickfunc(){
  makeArray(dataPath.value);
  dataUpBtn.style.backgroundColor= "";
  dataDownBtn.style.backgroundColor= "";
  eventBtn.style.backgroundColor= "";
  timeUpBtn.style.backgroundColor= "";
  timeDownBtn.style.backgroundColor= "";
}


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
