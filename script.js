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

const dateUpBtn = document.getElementById("dateSortUp");
dateUpBtn.addEventListener("click", dateSortUp);
function dateSortUp(){
  importString.sort(function(a,b){
    if((a[0]>b[0]) === true){
      return -1;
    }else{
      return 1;
    }
  });

  outputData(importString);
  dateUpBtn.style.backgroundColor= "yellow";
  dateDownBtn.style.backgroundColor= "";
  eventBtn.style.backgroundColor= "";
  timeUpBtn.style.backgroundColor= "";
  timeDownBtn.style.backgroundColor= "";
  console.log(importString);
}

const dateDownBtn = document.getElementById("dateSortDown");
dateDownBtn.addEventListener("click", dateSortDown);
function dateSortDown(){
  importString.sort(function(a,b){
    if((a[0]<b[0]) === true){
      return -1;
    }else{
      return 1;
    }
  });
  outputData(importString);
  dateUpBtn.style.backgroundColor= "";
  dateDownBtn.style.backgroundColor= "yellow";
  eventBtn.style.backgroundColor= "";
  timeUpBtn.style.backgroundColor= "";
  timeDownBtn.style.backgroundColor= "";

}

const eventBtn = document.getElementById("eventSort");
eventBtn.addEventListener("click", eventSort);
function eventSort(){
  importString.sort(function(a,b){
    if((a[1]>b[1]) === true){
      return -1;
    }else{
      return 1;
    }
  });
  outputData(importString);
  dateUpBtn.style.backgroundColor= "";
  dateDownBtn.style.backgroundColor= "";
  eventBtn.style.backgroundColor= "yellow";
  timeUpBtn.style.backgroundColor= "";
  timeDownBtn.style.backgroundColor= "";
}

const timeUpBtn = document.getElementById("timeSortUp");
timeUpBtn.addEventListener("click", timeSortUp);
function timeSortUp(){
  importString.sort(function(a,b){
    if((a[2]>b[2]) === true){
      return -1;
    }else{
      return 1;
    }
  });
  outputData(importString);
  dateUpBtn.style.backgroundColor= "";
  dateDownBtn.style.backgroundColor= "";
  eventBtn.style.backgroundColor= "";
  timeUpBtn.style.backgroundColor= "yellow";
  timeDownBtn.style.backgroundColor= "";
}

const timeDownBtn = document.getElementById("timeSortDown");
timeDownBtn.addEventListener("click", timeSortDown);
function timeSortDown(){
  importString.sort(function(a,b){
    if((a[2]<b[2]) === true){
      return -1;
    }else{
      return 1;
    }
  });
  outputData(importString);
  dateUpBtn.style.backgroundColor= "";
  dateDownBtn.style.backgroundColor= "";
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
  dateUpBtn.style.backgroundColor= "";
  dateDownBtn.style.backgroundColor= "";
  eventBtn.style.backgroundColor= "";
  timeUpBtn.style.backgroundColor= "";
  timeDownBtn.style.backgroundColor= "";
}

function makeRegistDate(inputDate){
  let makeDate = "";
  let length = inputDate.value.length;
  for(let i=0; i<length+1; i++){
    if(i === 4){
      makeDate += "年";  
    } else if (i === 7){
      makeDate += "月";
    } else if (i === 10){
      makeDate += "日";
    } else {
      makeDate += inputDate.value[i];
    }
  }
  return makeDate;
}

function registFunc(){
  const arrayInputData = [];
  let date = makeRegistDate(registDate);
  arrayInputData[0] = date;
  arrayInputData[1] = eventName.value;
  arrayInputData[2] = `${timeH.value}時間${timeH.value}分${timeH.value}秒`;
  importString.push(arrayInputData);
  outputData(importString);
}

const registDate = document.getElementById("registDate");
const eventName = document.getElementById("eventName");
const timeH = document.getElementById("hour");
const timeM = document.getElementById("minute");
const timeS = document.getElementById("second");

const registBtn = document.getElementById("registBtn");
registBtn.addEventListener("click", registFunc);

function resetFunc(){
  registDate.value = "";
  eventName.value = "";
  timeH.value = "";
  timeM.value = "";
  timeS.value = "";
}
const resetBtn = document.getElementById("resetBtn")
resetBtn.addEventListener("click", resetFunc);


function storageFunc(){
let bom  = new Uint8Array([0xEF, 0xBB, 0xBF]);
let blob = new Blob([bom, importString],{type:"text/csv"});
let link = document.createElement('a');
link.href = URL.createObjectURL(blob);
link.download = 'DownloadData.csv';
link.click();
}

const storageBtn = document.getElementById("storage");
storageBtn.addEventListener("click", storageFunc);
