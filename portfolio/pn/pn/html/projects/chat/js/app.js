//global variable for staggerin messages left and right
var stagger;
//global variable for tracking incoming messages if user scrolls away
//from bottom of the thread
var unread;

//creating event listener for send button
var send = document.getElementById('send');
send.addEventListener("click", grabAndMake);

//creating event listener for the scrollbar for clearing unread message popup
const threadwrapper = document.getElementById('thread-wrapper');
threadwrapper.addEventListener("mouseup", clearUnreadNote);

//when send is pressed grab and process the message for appending to the thread
function grabAndMake(){
  //get the message from the text area
  var message = document.getElementById('message').value;
  //make a row for the message  
  var r = document.createElement('div');
  r.className = "row";
  //make the message content to put in the row
  //alternate classes of the row to get staggering effect and to
  //apply different styling
  var m = document.createElement('div');
  m.innerHTML = message + "<span class='remove'>X</span>";
  if(stagger){
    m.className = "large-5 projectleft";
    stagger = 0;
  }else{
    m.className = "large-5 projectright";
    stagger = 1;
  };
  //stick the message content into the row element
  r.appendChild(m);
  //call the function append the thread with the row
  appendThread(r);
  //clear input
  document.getElementById('message').value = "";
  //refocus on the input box after hitting the send button
  document.getElementById('message').focus();
};

//add the message to the thread but don't annoy the user by scrolling down
//if they're reading in the middle of the thread
//additionally, if they are reading in the middle, track how many messages come in
//while they're not paying attention and give them notice
function appendThread(r){
  //determine if user is currently scrolled all the way down
  atBottom = ((threadwrapper.scrollTop + threadwrapper.clientHeight) === threadwrapper.scrollHeight);
  if(atBottom){
      //stick the row in the thread and auto scroll down
      thread.appendChild(r);
      scrollToBottom();
      unread = 0;
  }else{
      //just stick in the thread
      thread.appendChild(r);
      unread = unread + 1;
  }
  //call function to add event listeners to the removal span in each message so they can be deleted
  addListener();
  //if there are unread messages notify the user
  if(unread != 0){
    notifyUnread();
  };
}

//fucntion is called when a new message is added and the user isn't reading in the middle of the thread
function scrollToBottom() {
  threadwrapper.scrollTop = threadwrapper.scrollHeight;
}

//called when a new message is added and the user isn't at the bottom of the thread
function notifyUnread(){
  var note = document.getElementById('noteholder')
  //addjust for pluralization
  if(unread == 1){
    note.innerHTML = "You have "+unread+" unread message";
  }else{
    note.innerHTML = "You have "+unread+" unread messages";
  };
};

//cycle through the messages at each addition and make the removal spans respond to clicks by calling
//the remove function
function addListener(){
  var deletables = document.getElementsByClassName("remove");
  for(var i = 0; i < deletables.length; i++){
    deletables[i].addEventListener('click', remove, false);
  };
};

//when the removal spans are clicked, find the thread of messages and the specific row, 
//then delete the row as a child of the thread
function remove(){
  var thread = this.parentNode.parentNode.parentNode;
  var row = this.parentNode.parentNode;
  thread.removeChild(row);
}

//when the scroll bar is used, this function is called. if the user scrolls all the way to the 
//bottom, the unread message notification will be cleared out
function clearUnreadNote(){
  //determine if user is currently scrolled all the way down
  var atBottom = ((threadwrapper.scrollTop + threadwrapper.clientHeight) === threadwrapper.scrollHeight);
  if(atBottom){
    var note = document.getElementById('noteholder');
    note.innerHTML = '';
  };
};
