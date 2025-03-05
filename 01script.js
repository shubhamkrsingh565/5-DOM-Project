var statusOk = document.querySelector("h5");

var addFriend = document.querySelector("#add");
var removeFriend = document.querySelector("#remove");

// to add friend
// addFriend.addEventListener("click", function () {
//   statusOk.innerHTML = "Friends";
//   statusOk.style.color = "green";
// });

// to remove friend
// removeFriend.addEventListener("click", function () {
//   statusOk.innerHTML = "Stranger";
//   statusOk.style.color = "red";
// });

// Add friend feature with same button
var flag = 0;
var addFriendSame = document.querySelector("#add");
addFriendSame.addEventListener("click", function () {
  if (flag == 0) {
    statusOk.innerHTML = "Friends";
    statusOk.style.color = "green";
    addFriendSame.innerHTML="Remove Friend"
    addFriendSame.style.backgroundColor ="red"
    flag=1
} else {
    statusOk.innerHTML = "Stranger";
    statusOk.style.color = "red";
    addFriendSame.innerHTML="Add Friend"
    addFriendSame.style.backgroundColor ="cadetblue"
    flag=0
  }
});