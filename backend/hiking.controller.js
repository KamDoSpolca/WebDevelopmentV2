exports.getHikingList = (req, res) => {
  res.send([
    { title: "Slavkovský štít ", info: "Velmi zaujimava tura", image: "./assets/img.jpg", location: "Vysoké Tatry", point: "Starý Smokovec", info2: "Celodenna tura s moznostou spojit prijemne s uzitocnym", id: 1111 },
    { title: "Krivan ", info: "Narocny stit", image: "http://www.severovychod.sk/content/images/8/8874_full.jpg", location: "Slovenský Raj", point: "Štrbské pleso", id: 2222 },
    { title: "Gerlachovsky stit ", info: "Najvyssi stit", image: "https://ipravda.sk/res/2014/08/12/thumbs/gerlachovsky-stit-clanokW.jpg", location: "Nízke Tatry", point: "Veľká Lesná", id: 3333 }

  ])

}

exports.test = (req, res) => {
  res.send("ahojte to je nasa super appka")
}


exports.getHikingLocation = (req, res) => {
  res.send([
    "Všetko", "Vysoké Tatry", "Slovenský Raj", "Nízke Tatry"

  ])

}
