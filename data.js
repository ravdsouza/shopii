var l = {
  title: 'Grocery List',
  list: ["Bananas", "Apples", "Milk"],
};


var section= document.getElementById("data");

var count=0;
var title = document.createElement('p');
title.textContent = l.title;
section.appendChild(title);
var ul = document.createElement('ul');
section.appendChild(ul);

while (count<l.list.length){
  var list = document.createElement("li");
  list.textContent=l.list[count];
  ul.appendChild(list);
  count++;
}