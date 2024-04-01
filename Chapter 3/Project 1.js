let theList = ["Bokang", "Ngwenya", true, 12, null, undefined,{test: "one", score: 98}, ["one", "two"]];

theList.pop(); 
theList.shift(); 
theList.unshift("FIRST"); 
theList[3] = "hello World"; 
theList[2] = "MIDDLE"; 
theList.push("LAST"); 
console.log(theList);
