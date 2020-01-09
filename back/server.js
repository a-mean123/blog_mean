const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const cors = require('cors');
var {mongoose} = require('./db/mongoose');
var { Categories } = require('./models/categories')
var { Book } = require('./models/book');
var { Author} = require('./models/author');
var { Admin } =  require('./models/admin');
const multer = require('multer');
var app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(bodyParser.json());

/*
var {File} = require('./models/file');

const DIR = './uploads';

let filename1 = "file1";

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname));
    }
});



let upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.get('/api', function (req, res) {
  res.end('file catcher example');
});


/*
app.route('/api/name')
  .get(function(req, res){
    var file = DIR + '/file.jpg';
    res.download(file);

  });





/*
  app.post('/api/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });

      } else {
        filename1= req.file.filename;
        console.log(filename1);

        return res.send({
          success: true
        })
      }
});



/*
app.post('/api/upload/hi', (req, res)=>{

console.log(filename1)

  var file= new File({
    name: filename1,
    caption:req.body.caption,
    categories: req.body.categories
   });
   file.save().then((doc) => {
     res.send(doc);

   }).catch(err=>{
     console.log(err)
 })


})


*/







app.post('/categories', (req, res) => {
   
  let categorie = req.body
  let cat = new Categories(categorie)

  cat.save((error,registeredCat)=>{

    if(error){
      console.log(error)
    } else {
      res.status(200).send(registeredCat)
    }

  })
  });



//
// get all categories

app.get('/categories', (req, res) => {
    Categories.find({}).then((categories) => {
        res.send(categories);
      }, (e) => {
        res.status(400).send(e);
      });
    });


//
// update categories

app.put('/categories/:id', (req, res) => {
    const id = req.params.id ; 
   
    let categorie = req.body
    let cat = new Categories(categorie)
  
    console.log(id)

    console.log(cat.id)

  
    Categories.findOneAndUpdate({_id:id} , {$set:{name:cat.name}}).then(savedCat=>{
      console.log(savedCat)
  
      res.send({savedCat});
    }).catch((e) => {
      console.log(e)
    })
  });
  
//
//
//delete categories

app.delete('/categories/:id', (req, res) => {
    var id = req.params.id;
    Categories.findByIdAndRemove(id).then((categories) => {
      res.send({categories});
    }).catch((e) => {
    console.log(e);
    });
  });
  




//
//////////////

////////////////////////////////////

////// API FOR BOOK








//
//add new BOOK
/*

app.post('/book', (req, res) => {
    var book = new Book({
     
      name: req.body.name,
      description: req.body.description,
      categories: req.body.categories,
      author: req.body.author,
      pageNumber: req.body.pageNumber,
      photo: req.body.photo,
      pdf: req.body.pdf
    });
  
    book.save().then((doc) => {
      res.send(doc);
    }).catch(err=>{
      console.log(err)
  })
  });



//
// get all book
/*
app.get('/book', (req, res) => {
    Book.find({}).then((book) => {
        res.send(book);
      }, (e) => {
        res.status(400).send(e);
      });
    });


//
// update categories
/*
app.put('/book/:id', (req, res) => {
    const  id = req.params.id ; 
    const  name= req.body.name;
    const  description= req.body.description;
    const  categories= req.body.categories;
    const  author= req.body.author;
    const  pageNumber= req.body.pageNumber;
    const  photo= req.body.photo;
    const  pdf= req.body.pdf;
    
  
    Categories.findOneAndUpdate({_id:id} , {$set:{name:name,description:description,categories:categories
    ,author:author,pageNumber:pageNumber,photo:photo,pdf:pdf
    }}).then(savedBook=>{
     
  
      res.send({savedBook});
    }).catch((e) => {
      console.log(e)
    })
  });
  
//
//
//delete categories
/*
app.delete('/book/:id', (req, res) => {
    var id = req.params.id;
    Book.findByIdAndRemove(id).then((book) => {
      res.send({book});
    }).catch((e) => {
    console.log(e);
    });
  });


  // get book by id
  /*
app.get('/book/:id', (req, res) => {

    Book.findOne({_id:req.params.id}).then((book) => {
      res.send({book});
    }).catch((e) => {
      console.log(e)
    });
  });
  
  // get book by categories
  /*
  app.get('/book/:categories', (req, res) => {

    Book.findOne({categories:req.params.categories}).then((book) => {
      res.send({book});
    }).catch((e) => {
      console.log(e)
    });
  });
  

//
//
///////////////////
////////        AUthor API //////////////




//
//add new author

/*
app.post('/author', (req, res) => {
   
  let author = req.body
  let auth = new Author(author)

  auth.save((error,registeredCat)=>{

    if(error){
      console.log(error)
    } else {
      res.status(200).send(registeredCat)
    }

  })
  });


//
// get all book
/*
app.get('/author', (req, res) => {
    Author.find({}).then((author) => {
        res.send(author);
      }, (e) => {
        res.status(400).send(e);
      });
    });


//
// update categories
/*
app.put('/author/:id', (req, res) => {
    const  id = req.params.id ; 
    const  name= req.body.name;
    const  description= req.body.description;
    const  photo= req.body.photo;

    
  
    Author.findOneAndUpdate({_id:id} , {$set:{name:name,description:description,photo:photo
    }}).then(savedAuthor=>{
     
  
      res.send({savedAuthor});
    }).catch((e) => {
      console.log(e)
    })
  });
  
//
//
//delete categories
/*
app.delete('/author/:id', (req, res) => {
    var id = req.params.id;
    Author.findByIdAndRemove(id).then((author) => {
      res.send({author});
    }).catch((e) => {
    console.log(e);
    });
  });


  // get book by id

  /*
app.get('/author/:id', (req, res) => {

    Author.findOne({_id:req.params.id}).then((author) => {
      res.send({author});
    }).catch((e) => {
      console.log(e)
    });
  });







//authentification web service................
//....................
//..................



/*
app.post('/register',(req, res)=>{


    let userData = req.body
    let user = new Admin (userData)
    user.save((error, registerUser)=>{
  
      if(error){
        console.log(error)
      }else {
  
        let payload = { subject: registerUser._id }
        let token = jwt.sign(payload,'secretKey')
  
        res.status(200).send({token})
      }
  
  
    })
  
  })
  
  
  
  
  
  app.post('/login', (req, res)=>{
    let userData = req.body
  
    
    Admin.findOne({email:userData.email} , (error , user)=>{
      if(error){
        console.log(error)
      }else{
      if(!user){
        res.status(401).send('Invalid email')
      }else
      if(user.password !== userData.password){
        res.status(401).send('Invalid passworrd')
      }else{
        let payload = { subject: user._id }
        let token = jwt.sign(payload,'secretKey')
  
        res.status(200).send({token})
      }
    }
    })
  })
  
  */
  
  
  





  
 
  







app.listen(port, () => {
    console.log(`Started up at port ${port}`);
  });
  
  module.exports = {app};
  