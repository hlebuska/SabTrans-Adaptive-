const modalForm = document.querySelector(".modal_request");
const formInside = document.querySelector(".modal_inside");
const errorInside = document.querySelector(".modal_error");
const successInside = document.querySelector(".modal_success");


const closeButton = document.querySelector(".close_button");
const tryFree = document.querySelector(".try_for_free");
const leaveRequest = document.querySelector(".leave_requst_button");
const sendRequest = document.querySelector(".send_request");
const getCall = document.querySelector(".get_call");

const submitForm = document.querySelector(".submit_form");
/*Submiting the form*/
submitForm.addEventListener('submit', function(event) {
  event.preventDefault();
  updateToSuccess();
});

/*Every button that opens the modal*/
tryFree.addEventListener("click", openDialog);
leaveRequest.addEventListener("click", openDialog);
sendRequest.addEventListener("click", openDialog);
getCall.addEventListener("click", openDialog);

/*Every button that closes the modal*/
closeButton.addEventListener("click", closeDialog);

function openDialog() {  
  modalForm.showModal();

  modalForm.classList.remove("changeHeight");
  formInside.classList.remove("hidden");
  errorInside.classList.add("hidden");
  successInside.classList.add("hidden");
}
function closeDialog() {  
  modalForm.close();
}

function updateToError(){
  modalForm.classList.add("changeHeight");
  formInside.classList.add("hidden");
  errorInside.classList.remove("hidden");
}

function updateToSuccess(){
  modalForm.classList.add("changeHeight");
  formInside.classList.add("hidden");
  successInside.classList.remove("hidden");
}