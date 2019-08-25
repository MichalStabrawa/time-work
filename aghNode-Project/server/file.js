const XLSX =require('xlsx');
const express =require("express");
const fs = require('fs');

const path = require('path');

const patchExell = path.resolve(__dirname, 'kowalski.xls');
const patch2Exell= path.resolve(__dirname, 'Nowak_Piotr.xls');


const workbook =XLSX.readFile(patchExell);
const workbook2 =XLSX.readFile(patch2Exell);

//console.log(workbook.SheetNames);

//const wp =workbook.Sheets["Projekt2"];

//console.log("Projekt2 prezentacja" + wp);

const sheet_name_list = workbook.SheetNames;
let projekt1 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
let projekt2 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]])

projekt1 = projekt1.map(item => ({
    
    task: item['Zadanie'],
    time: item['Czas [h]'],
    date: item['Data']
}));

projekt2 = projekt2.map(item=>({
    task: item['Zadanie'],
    time: item['Czas [h]'],
    date: item['Data']
}));



/*for (var prop in projekt1) {
    console.log("Pokaz mi:"+  projekt1[prop].task+ prop)
}*/
const sheet_name_list2 = workbook2.SheetNames;
let piotrNowak = XLSX.utils.sheet_to_json(workbook2.Sheets[sheet_name_list2[0]]);

piotrNowak = piotrNowak.map(item=>({
    task: item['Zadanie'],
    time: item['Czas [h]'],
    date: item['Data']

}))


const piotrNowakNew = {
    name: 'Piotr Nowak',
    data: piotrNowak
}

console.log("Pokaz Piotr Nowak --------------------------------------------------")
console.log(piotrNowakNew);




module.exports={projekt1,projekt2,piotrNowakNew};












