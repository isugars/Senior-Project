/**
 * Created by Ivy on 4/25/2017.
 */
//get txt file
// document.getElementById('file').onchange = function(){
//     //parse into JSON object
//     let file = this.files[0];
//     let reader = new FileReader();
//     let array = [];
//     let JSONarray = [];
//     reader.onload = function(){
//         // By lines
//         let lines = this.result.split("\n");
//         for(let line = 0; line < lines.length; line++){
//             array = lines[line].substring(0,3);
//             let obj = {};
//             obj[array] = lines[line].trim().substring(4);
//             JSONarray.push(obj);
//             console.log(JSON.stringify(JSONarray));
//         }
//     };
//     reader.readAsText(file);
//     return JSONarray;
// };

function ReadFile(file)
{
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
};

ReadFile("simulatedRun.txt");