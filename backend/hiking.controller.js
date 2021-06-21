const mongoose = require("mongoose");
const hikingModel = require("./hiking.model");
const locationModel = require("./location.model");


exports.getHikingList = (req, res) => {
  //res.send([
  //  { title: "Slavkovský štít ", info: "Velmi zaujimava tura", image: "./assets/img.jpg", location: "Vysoké Tatry", point: "Starý Smokovec", info2: "Celodenna tura s moznostou spojit prijemne s uzitocnym", id: 1111 },
  //  { title: "Krivan ", info: "Narocny stit", image: "http://www.severovychod.sk/content/images/8/8874_full.jpg", location: "Slovenský Raj", point: "Štrbské pleso", id: 2222 },
  //  { title: "Gerlachovsky stit ", info: "Najvyssi stit", image: "https://ipravda.sk/res/2014/08/12/thumbs/gerlachovsky-stit-clanokW.jpg", location: "Nízke Tatry", point: "Veľká Lesná", id: 3333 }

  //])
  mongoose.model("hiking", hikingModel.hikingSchema).find().then(data => {
    res.status(200).json({ data })
  })
}

exports.test = (req, res) => {
  res.send("ahojte to je nasa super appka")
}


exports.getHikingLocation = (req, res) => {
  //res.send([
  //  //"Všetko", "Vysoké Tatry", "Slovenský Raj", "Nízke Tatry"

  //])

  mongoose.model("location", locationModel.abc).find().then(data => {
    res.status(200).json({ data })
  })


}


exports.getHikingInfo = (req, res) => {

  mongoose.model("info", hikingModel.hikingSchema).find().then(data => {
    res.status(200).json({ data })
  })

}


exports.getHikingImage = (req, res) => {

  mongoose.model("image", hikingModel.hikingSchema).find().then(data => {
    res.status(200).json({ data })
  })

}

exports.login = (req, res) => {

  console.log(req.body.email);
  console.log(req.body.password);

  hikingModel.findOne({ title: req.body.email }).then(user => {
    if (user.title === req.body.password) {

      res.status(200).json({ res: true })
    }
    else {
      res.status(200).json({ res: false })
    }
  })


}

exports.createHiking = (req, res) => {
  // res.send("ahojte to je nasa super appka")
  const newHiking = new hikingModel({
    title: req.body.title,
    info: req.body.info,
    image: req.body.image,
    location: "-----",
    point: req.body.location,
  })


  newHiking.save().then(dataFromDatabase => {
    res.status(200).json({ message: "zaznam ulozeny", hikingItem: dataFromDatabase })

  })
}


exports.deleteHiking = (req, res) => {
  hikingModel.deleteOne({ _id: req.params.id }).then(odpoved => {
    res.status(200).json({ message: "zaznam zmazany", id: req.params.id })
  })
}

exports.editHiking = (req, res) => {
  // res.send("ahojte to je nasa super appka")
  const newHiking = new hikingModel({
    title: "Template",
    info: "Krasny den straveny...",
    image: "-----",
    location: "-----",
    point: "Stary Smokovec",
    _id: req.params.id
  })

  //Mongoose update
  hikingModel.updateOne({ _id: req.params.id }, newHiking).then(odpoved => {
    res.status(200).json({ message: "zaznam upraveny" })
  })
}
