var bs=require("./ai/brainshop.js");var dai=require("./ai/deepai.js");while(true){console.clear();var p=prompt("Version");if(p.toLowerCase()==="brainshop"){console.clear();bs();break}if(p.toLowerCase()==="deepai"){console.clear();dai();break}}
