const fs = require("fs");
const base = 5;
var data = '' ;

for (let i = 1; i <= 10; i++) {
    data += `${base} * ${i} = ${i * base}\n`; 
}

fs.writeFile(`tabla-${base}.txt`, data, (err) => {
    if(err){
        console.log(err);
    }
} );
