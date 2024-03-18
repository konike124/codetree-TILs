const fs = require("fs");
let water = Number(fs.readFileSync(0).toString().trim());

if (water < 0) console.log('ice')

else if (water >= 100) console.log('vapor')

else console.log('water')