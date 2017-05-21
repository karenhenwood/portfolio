
document.getElementById('add').onclick = function(){
//get item and add it to the list with a delete button included
  var item = document.getElementById('input').value;
  var li = document.createElement('li');
  li.innerHTML = item + "  <button class='delete'>remove</button>";
  var ol = document.getElementById('list');
  ol.appendChild(li);
  //clear input
  document.getElementById('input').value = "";
  //call function add event listeners to list item buttons
  addListener();
};

//cycle through the list at each addition and make the delete buttons respond to clicks by calling
//the remove function
function addListener(){
  var deletables = document.getElementsByClassName("delete");
  for (var i = 0; i < deletables.length; i++) {
    deletables[i].addEventListener('click', remove, false);
  }
}

//when the delete buttons are clicked, find the list and the item, then delete the item as a child of the list
function remove(){
  var list = this.parentNode.parentNode
  var item = this.parentNode;
  list.removeChild(item);
}





