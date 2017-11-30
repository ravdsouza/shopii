var l = {
  title: 'Grocery List',
  list: [],
};



function updateList(){
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
}


function clickAlertItem() {
    var item = prompt("Enter the item to be added")
    l.list.push(item)
    console.log(l.list)
    updateList()
}

function clickAlertList() {
    var list = prompt("Enter the list to be added")
    l.push(list)
    console.log(l.list)
}

