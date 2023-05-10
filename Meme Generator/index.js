let btn=document.getElementById("bt");
let tittle=document.getElementById("titl");
let imagee=document.getElementById("imm");
let auto=document.getElementById("aut");
let ik=document.getElementById("im");

btn.addEventListener("click", ()=>{
let url= fetch("https://meme-api.com/gimme");
  url.then((e)=>{
  return e.json();
  }).then((value)=>{
  tittle.innerHTML=`<p class="fs-4">Title : <b>${value.title}</b></p>`
  imagee.setAttribute("src", value.url)
  auto.innerHTML=`<p  style="margin-left:1vw; padding:1rem;"  class="fs-4">Meme by : <b>${value.author}</b></p>` 
  })
  
})

