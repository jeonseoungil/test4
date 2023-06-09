import { arr } from "./module/data.js";

let dle = document.querySelector(".wrap .button_box .dle");
let view = document.querySelector(".wrap .button_box .view");
let list = document.querySelector(".view_box .list");
let addt = document.querySelector(".addt");
let buttonBox = document.querySelector(".wrap .button_box");
let imgs_url = document.querySelector(".wrap .imgs_url");
let input_btn=document.querySelector(".wrap .addt_box .input_btn")
let strong = document.querySelector(".wrap .imgs_url strong");
let arr2=[{}]


 localStorage.clear()

 arr2 = JSON.parse(localStorage.getItem("arr2")) || [];

 const local_creat = () => {
   const names = document.querySelector('.addt_box .names');
   const jobs = document.querySelector('.addt_box .jobs');
   const calls = document.querySelector('.addt_box .calls');
   const imgs = document.querySelector('.addt_box .imgs');
 
   const namesValue = names.value;
   const jobsValue = jobs.value;
   const callsValue = calls.value;
   const imgsValue = imgs.value;

   arr2 = [...arr2, { name: namesValue, job: jobsValue, call: callsValue, src: imgsValue }];
   localStorage.setItem("arr2", JSON.stringify(arr2));
   
   reset(names, jobs, calls, imgs);
   local_add(namesValue, jobsValue, callsValue, imgsValue,"on");
   img()
 };
 

 const local_add = (name, job, call, src, isplay) => {
   let li = document.createElement("li");
   li.innerHTML = `<img src="${src}" alt="" />
     <div class="textbox">
       <strong>${name}</strong>
       <span>${job}</span>
       <p>${call}</p>
     </div>
     <div class="icon_box">
       <i class="xi-star ${isplay}"></i>
       <em>퇴사</em>
     </div>`;
 
   let icon = li.querySelector(".icon_box i");
   icon.addEventListener("click", (e) => {
     icon.classList.toggle("on");
     icon.classList.toggle("off");
   });
 
   let em = li.querySelector(".icon_box em");
   em.addEventListener("click", (e) => {
    let em2 = em.parentElement.parentElement;
    em2.remove();
    arr2 = arr2.filter((item) => item.name !== name);
    localStorage.setItem("arr2", JSON.stringify(arr2));
   });
   list.appendChild(li);
   return li;
 };

 const img = () => {
  strong.innerHTML=""
  arr2.forEach((item) => {
    strong.innerHTML += `${item.src}<br>`;
  });
};

 
 const reset = (names, jobs, calls, imgs) => {
   names.value = "";
   jobs.value = "";
   calls.value = "";
   imgs.value = "";
   names.focus();
 };
 
 const create = () => {
   list.innerHTML = "";
   arr.forEach((item) => {
     local_add(item.name, item.job, item.call, item.src, item.isplay);
   });
 };
 
 const toggle_list = () => {
   addt.classList.toggle("on");
 
   if (addt.classList.contains("on")) {
     buttonBox.style.justifyContent = "center";
     imgs_url.style.display = "none";
   } else {
     buttonBox.style.justifyContent = "left";
     imgs_url.style.display = "block";
   }
 };
 
 const del_btn = () => {
   list.innerHTML = "";
 };
 
 view.addEventListener("click", (e) => {
   create();
 });
 
 dle.addEventListener("click", (e) => {
   del_btn();
 });
 
 addt.addEventListener("click", (e) => {
   toggle_list();
 });
 
 input_btn.addEventListener("click", (e) => {
   local_creat();
 });
 
 create();
 img();

