const express =require("express");
const fs = require('fs');

const path = require('path');

const project = require('./file');



console.log(project.projekt1);

function copy(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function listProject() {
    return copy(project);
}



module.exports = {
    list: listProject()
}