/**
 * Created by Ivy on 4/25/2017.
 */
//get txt file
// document.getElementById('file').onchange = function(){
function MakeJSON() {
    console.log("something");
    //parse into JSON object
    // let file = this.files[0];
    // let reader = new FileReader();
    var fs = require('fs');
    var fileContents;
    // let array = [];
    // let JSONarray = [];
    // reader.onload = function(){
    fs.readFile('simulatedRun.txt', function (err, data) {
        if (err) throw err;
        fileContents = data;
        console.log(fileContents);
        // By lines
        // let lines = this.result.split("\n");
        // for(let line = 0; line < lines.length; line++){
        //     array = lines[line].substring(0,3);
        //     let obj = {};
        //     obj[array] = lines[line].trim().substring(4);
        //     JSONarray.push(obj);
        //     console.log(JSON.stringify(JSONarray));
        })
    // };
    // reader.readAsText(file);
    // return JSONarray;
};

// var fs = require('fs');
// var fileContents;
// fs.readFile('./favs.json', function (err, data) {
//     if (err) throw err;
//     fileContents = data;
//     // ...
// });