
function each(array, func) { 
  for (var i = 0; i < array.length; i++) { 
        func(array[i], i); 
  } 
}


function generateID() {
  var count = 0;
  return function () {
    return count++;
  };
}
var id = generateID();


function makelunetti(price,name,image,category){
  return{
    price:price,
    name:name,
    image:image,
    category:category,
    id:id(),
  }
}

function MakeShop(name){
return { 
  name:name, 
  list:[],
  add:add,
  sortByPriceCheapest:sortByPriceCheapest,
  sortByPriceExpensive:sortByPriceExpensive,
  }
}

var add=function(price,name,image,category){
  
  var item=makelunetti(price,name,image,category)
  
  this.list.push(item)
}

var sortByPriceCheapest=function(){
  this.list.sort(function(a,b){
     
  return a.price-b.price
  })
}

var sortByPriceExpensive=function(){
  this.list.sort(function(a,b){
  return b.price-a.price
  })
}


var shop=MakeShop("lunetti")





shop.add(118,"Lunetti1","images/s1.jpg","women")
shop.add(130,"Lunetti2","images/s2.jpg","women")
shop.add(194,"Lunetti3","images/s3.jpg","women")
shop.add(165,"Lunetti4","images/s4.jpg","women")
shop.add(98, "Lunetti5","images/s5.jpg","women")
shop.add(109,"Lunetti6","images/s6.jpg","women")
shop.add(115,"Lunetti7","images/s7.jpg","women")
shop.add(148,"Lunetti8","images/s8.jpg","women")

shop.add(118,"Lunetti1","images/ss1.jpg","men")
shop.add(130,"Lunetti2","images/ss2.jpg","men")
shop.add(194,"Lunetti3","images/ss3.jpg","men")
shop.add(165,"Lunetti4","images/ss4.jpg","men")
shop.add(98, "Lunetti5","images/ss5.jpg","men")
shop.add(109,"Lunetti6","images/ss6.jpg","men")


function display(item){
  
  if (item.category === "women") {
    $('#women').append(
      `<div class="lunetti">
      <img src=${item.image} class="image">
      <h3>${item.name}</h3>
      <p>Price : ${item.price}$</p>
      <a class="buybutton" href="product.html">View</button>
      </div>`
    )
  }
  else{
    $('#men').append(
      `<div class="lunetti">
      <img src=${item.image} class="image">
      <h3>${item.name}</h3>
      <p>Price : ${item.price}$</p>
      <a class="buybutton" href="product.html">View</button>
      </div>`
    )
  }
}


each(shop.list,function(e,i){
  display(e)
})

$("#sortcheap").click(function(){
  shop.sortByPriceCheapest();
 
  $(".lunettis").html("");
  
  each(shop.list,function(e,i){
      display(e)
  })
})


$("#sortexp").click(function(){
  shop.sortByPriceExpensive();
 
  $(".lunettis").html("");
  
  each(shop.list,function(e,i){
      display(e)
  })
})

$("#swomen").click(function(){
  $('#menlunettis').hide();
  $('#womenlunettis').show();
})
$("#smen").click(function(){
  $('#womenlunettis').hide();
  $('#menlunettis').show();
})



var images = ['images/slider4.jpg','images/slider2.jpg','images/slider3.jpg','images/slider1.jpg']
var index = 0;

$("#slider").html('<img id="e" src="'+images[index]+'">');


$("#prev").click(function(){
  if (index > 0) {
      index--
      
      $("#slider").html(`<img id="e" src="${images[index]}">`);
  }
});


$("#next").click(function(){
  if (index < images.length - 1) {
      index++
      $("#slider").html('<img id="e" src="'+images[index]+'">');
  }
});

