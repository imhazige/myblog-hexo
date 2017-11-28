


let mainfunc = (testFolder) => {
    const fs = require('fs');
    
    fs.readdirSync(testFolder).forEach(file => {
      console.log(decodeURI(file));
    })
};

mainfunc('./source/_posts');