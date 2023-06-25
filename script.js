/** @format */

const selectBtn = document.getElementById("select-btn");
const text = document.getElementById("text");
const option = document.getElementsByClassName("option");

for (let i = 0; i < option.length; i++) {
  option[i].onclick = function () {
    text.innerHTML = this.textContent;
  };
}

selectBtn.addEventListener("click", function () {
  selectBtn.classList.toggle("active");
});
selectBtn.onclick = function () {
  // Tambahkan kode untuk menampilkan opsi di sini
};

// const selectBtn = document.getElementById("select-btn");
// const text = document.getElementById("text");
// const option = document.getElementsByClassName("option");

// for(options for option){
//     options.onclick = function(){
//         text.innerHTML = this.textContent;
//     }
// }
