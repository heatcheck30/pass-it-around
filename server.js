const express = require("express")
const app = express()
const port = 3000

//great job linking / to /:number_of_bottles
// i would highly recommend trying little bugs in the code challenge, you will have additional conditions, more logic and a Math.random() to get it done.

app.get("/", (req,res) => {
    res.send(`<h1>99 Bottles of beer on the wall</h1>
   <a href="/98">take one down, pass it around</a>
    `)
})

app.get("/:number_of_bottles", (req,res) => {
    let numberOfBottles = req.params.number_of_bottles 
    if(numberOfBottles > 0 ) {
      res.send(`<h1>${numberOfBottles} Bottles on wall</h1>
      <a href= "/${numberOfBottles - 1}">take one down, pass it around</a>`);
  
    }else {
     res.send(`<h1>Hand over your keys! <br> <a href = "/"> Start over</a> </h1>`);
    }
  
    
  
  }
  ) 
  
app.listen(port, () => {
    console.log('listening!');
});
