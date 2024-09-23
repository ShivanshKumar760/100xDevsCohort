import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        "type":String,
        "message":"Type URL",
        "name":"URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_image = qr.image(url, { type: 'png' });
    qr_image.pipe(fs.createWriteStream('qr.png'));
    fs.writeFile("URL.txt",url,function(err)
    {
        if(err)
        {
            throw err;
        }
        else
        {
            console.log("File saved");
        }
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });