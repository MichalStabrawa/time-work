const XLSX =require('xlsx');
const express =require("express");
const fs = require('fs');

const path = require('path');

const patchExell = path.resolve(__dirname, 'kowalski.xls');


const workbook =XLSX.readFile(patchExell);

console.log(workbook.SheetNames);

const wp =workbook.Sheets["Projekt2"];

console.log("Projekt2 prezentacja" + wp);

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

for (var prop in projekt1) {
    console.log("Pokaz mi:"+  projekt1[prop].task+ prop)
}






module.exports={projekt1,projekt2};












