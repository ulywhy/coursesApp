var Client = require('ftp');

// connect to localhost:21 as anonymous
module.exports = function ftp(req, res) {
  var c = new Client();
  var courseName = req.params.course || "intro-grupo-cidi";
  var content = "";

  c.connect({
    host: 'grupocidi.com',
    user: 'ulisesDEV.grupocidi.com',
    password: 'ulisesCIDI_4200'
  });

  c.on('ready', function() {

    c.get('markdown/'+ courseName +'.md', function(err, fileStream) {
      if (err) throw err;

      fileStream.setEncoding('utf8');
      fileStream.on('readable', () => {
        let chunk;

        while (null !== (chunk = fileStream.read())) {
          content += chunk;
        }
        console.log(content);
        c.end();
      });
    });
  });

  c.on('end', function(){
    res.send(content);
  });

}
