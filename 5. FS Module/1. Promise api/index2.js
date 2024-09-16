import fs from 'fs/promises';

try{
var file= await fs.readFile("c://Users//Deon//Desktop//nodejs workspace//ReadMe.md","utf-8");
console.log(file);

}
catch(error){
console.log(error)
}