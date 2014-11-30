var     lazy    = require("lazy"),
        fs  = require('fs');

		
// Tuncate Comments from compile.json file
	var json = require('./compiled.json');
	for (var i=0; i< json.length; i++)
	{
	delete json[i].properties.comments;
	}
	var newJson = json;
//	console.log(newJson);


var outputFilename = 'compileTruncated.json';

fs.writeFile(outputFilename, JSON.stringify(newJson), function(err) {
    if(err) {
      console.log(err);
    } else {
      //console.log("JSON saved to " + outputFilename);
    }
}); 

