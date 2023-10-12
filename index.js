function makelunetti(price,name,image,category){
  return{
    price:price,
    name:name,
    image:image,
    category:category,
    id:id(),
  }
}

var add=function(price,category){
  var item=makelunetti(price,category)
  this.list.push(item)}

shop.add(118,"women")
shop.add(130,"women")
shop.add(194,"women")
shop.add(165,"women")
shop.add(98,"men")
shop.add(109,"men")
shop.add(115,"men")
shop.add(148,"men")
