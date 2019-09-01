const XLSX =require('xlsx');
const express =require("express");
const fs = require('fs');

const path = require('path');

const patchExell = path.resolve(__dirname, 'kowalski.xls');
const patch2Exell= path.resolve(__dirname, 'Nowak_Piotr.xls');


const workbook =XLSX.readFile(patchExell, {
    type: 'binary',
    cellDates: true,
    dateNF: 'dd/mm/yyyy'
    });
const workbook2 =XLSX.readFile(patch2Exell,{cellDates:true,dateNF:"YYYY-MM-DD"});

//console.log(workbook.SheetNames);

//const wp =workbook.Sheets["Projekt2"];

//console.log("Projekt2 prezentacja" + wp);

const sheet_name_list = workbook.SheetNames;
let projekt1 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

let projekt2 = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);

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

/*const kowalski1= {
    name: 'Jan Kowalski',
    projekt1: {name: 'Projekt 1',
    data: projekt1
},
    projekt2: {name: 'Projekt2',
    data: projekt2
}
}*/

const kowalski1 = {
    name: 'Jan Kowalski',
    data: {
        projekt1: {name: 'Projekt 1',
    data: projekt1
    },
        projekt2: {
        name: 'Projekt 2',
        data: projekt2
    }
    }
}



/*for (var prop in projekt1) {
    console.log("Pokaz mi:"+  projekt1[prop].task+ prop)
}*/
const sheet_name_list2 = workbook2.SheetNames;
let piotrNowak = XLSX.utils.sheet_to_json(workbook2.Sheets[sheet_name_list2[0]],{dateNF:"YYYY-MM-DD;@",cellDates:true,raw:true});

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

for (const i in piotrNowak) {
    console.log("Klucz: ", i);
    console.log("Wartość: ", piotrNowak[i].time);
}

console.log('Ser');
console.log(kowalski1);


const obj = [kowalski1,piotrNowakNew];
    


console.log('Nowy objext')
console.log(obj[1]);

for (const i in obj) {
    
    console.log("wart", obj[0].data);
}


module.exports={projekt1,projekt2,piotrNowakNew,obj};












