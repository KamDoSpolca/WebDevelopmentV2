const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/", (req, res ) => {
  res.send("ahojte to je nasa super appka")
});


app.get("/hiking/list", (req, res )  => {
  res.send([
    { title: "Slavkovský štít ", info: "Velmi zaujimava tura", image: "./assets/img.jpg", location: "Vysoké Tatry", point: "Starý Smokovec", info2: "Celodenna tura s moznostou spojit prijemne s uzitocnym" },
    { title: "Krivan ", info: "Narocny stit", image: "http://www.severovychod.sk/content/images/8/8874_full.jpg", location: "Slovenský Raj", point: "Štrbské pleso" },
    { title: "Gerlachovsky stit ", info: "Najvyssi stit", image: "https://ipravda.sk/res/2014/08/12/thumbs/gerlachovsky-stit-clanokW.jpg", location: "Nízke Tatry", point: "Veľká Lesná" }

  ])

});

app.listen(3000, () => {
  console.log("server is listening on port 3000")
});

