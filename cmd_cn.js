


let mainfunc = (testFolder) => {
    const fs = require('fs');
    
    fs.readdirSync(testFolder).forEach(file => {
      
      let nn = decodeURI(file);
      console.log('rename %s to %s',file,nn);
      fs.renameSync(`${testFolder}/${file}`,`${testFolder}/${nn}`,(err)=>{
        console.error(`error happen : ${err.message}`);
      });
    })
};

mainfunc('./source/_posts');