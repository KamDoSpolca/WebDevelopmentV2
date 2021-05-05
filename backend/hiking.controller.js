const mongoose = require("mongoose");
const hikingModel = require("./hiking.model");


exports.getHikingList = (req, res) => {
  //res.send([
  //  { title: "Slavkovský štít ", info: "Velmi zaujimava tura", image: "./assets/img.jpg", location: "Vysoké Tatry", point: "Starý Smokovec", info2: "Celodenna tura s moznostou spojit prijemne s uzitocnym", id: 1111 },
  //  { title: "Krivan ", info: "Narocny stit", image: "http://www.severovychod.sk/content/images/8/8874_full.jpg", location: "Slovenský Raj", point: "Štrbské pleso", id: 2222 },
  //  { title: "Gerlachovsky stit ", info: "Najvyssi stit", image: "https://ipravda.sk/res/2014/08/12/thumbs/gerlachovsky-stit-clanokW.jpg", location: "Nízke Tatry", point: "Veľká Lesná", id: 3333 }

  //])
  mongoose.model("hiking", hikingModel.hikingShema).find().then(data => {
    res.status(200).json({ data })
  })
}

exports.test = (req, res) => {
  res.send("ahojte to je nasa super appka")
}


exports.getHikingLocation = (req, res) => {
  res.send([
    "Všetko", "Vysoké Tatry", "Slovenský Raj", "Nízke Tatry"

  ])

}

exports.createHiking = (req, res) => {
  // res.send("ahojte to je nasa super appka")
  const newHiking = new hikingModel({
    title: "Kriváň",
    info: "Vysoký kopec",
    image: "-----",
    location: "Tatry",
    point: "nieco"
  })

  newHiking.save().then(response => {
    res.status(200).json({ message: "zaznam ulozeny" })

  })
}


exports.deleteHiking = (req, res) => {
  hikingModel.deleteOne({ _id: req.params.id }).then(odpoved => {
    res.status(200).json({ message: "zaznam zmazany" })
  })
}

exports.editHiking = (req, res) => {
  // res.send("ahojte to je nasa super appka")
  const newHiking = new hikingModel({
    title: "XXXXXXX",
    info: "Vysoký kopec",
    image: "-----",
    location: "Tatry",
    point: "nieco",
    _id: req.params.id
  })

  //Mongoose update
  hikingModel.updateOne({ _id: req.params.id }, newHiking).then(odpoved => {
    res.status(200).json({ message: "zaznam upraveny" })
  })
}
