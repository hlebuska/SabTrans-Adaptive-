const dialog = document.querySelector(".modal_request");
const closeButton = document.querySelector(".close_button");
const tryFree = document.querySelector(".try_for_free");
const leaveRequest = document.querySelector(".leave_requst_button");
const sendRequest = document.querySelector(".send_request");
const getCall = document.querySelector(".get_call");

tryFree.addEventListener("click", openDialog);
leaveRequest.addEventListener("click", openDialog);
sendRequest.addEventListener("click", openDialog);
getCall.addEventListener("click", openDialog);

closeButton.addEventListener("click", closeDialog);

function openDialog() {  
  dialog.showModal();
}
function closeDialog() {  
  dialog.close();
}