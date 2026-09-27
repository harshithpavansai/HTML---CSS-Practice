let Product_Info = [{
    Image:"./1.jpg",
    Price:99900,
    Name:"Black Car",
    Description:"kjg kjasd kj sjk kjhsad kjsad"
},
{
    Image:"./2.jpg",
    Price:89900,
    Name:"Iphone16",
    Description:"kjg kjasd kj sjk kjhsad kjsad"
},
{
    Image:"./3.jpg",
    Price:79900,
    Name:"Iphone15",
    Description:"kjg kjasd kj sjk kjhsad kjsad"
},
{
    Image:"./4.jpg",
    Price:79900,
    Name:"Iphone15",
    Description:"kjg kjasd kj sjk kjhsad kjsad"
}]
//step-2 (Applying Card Code to ProductInfo)
let Data = Product_Info.map(ele =>{
    return (`<div class="card">
        <div class="image">
          <img src=${ele.Image} />
        </div>
        <div class="heading">Description</div>
        <div class="details">${ele.Description}</div>
        <div class="info">
          <div>${ele.Name}</div>
          <div>${ele.Price}</div>
        </div>
      </div>`)
})
let Parent = document.getElementsByClassName("parent")[0]
let MergedInfo = Data.join(",")
Parent.innerHTML = MergedInfo

// this is the code for the search bar
