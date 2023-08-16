let ships=document.querySelectorAll("td");
let span =document.querySelector("span");
let x=Math.floor((Math.random()*4)+1);
let que={"1":"2,3,5,7,..","2":"1,3,5,7,..","3":"2,4,6,8,..","4":"5,10,15,20,.."};
span.innerHTML=que[x];
let ans={
         1:[2,3,5,7,11,13,17,19,23,29,31],
         2:[1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35],
         3:[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36],
         4:[5,10,15,20,25,30,35]
        };
let countans={1:11,2:18,3:18,4:7};
let count=0;
let main= document.querySelector(".main");
function contains(id){
    for(let i=0;i<ans[x].length;i++){
        if(id==ans[x][i]) return true;
    }
    return false;
}
for(let ship of ships){
    ship.addEventListener("click",()=>{
        if(contains(ship.id)){
            event.target.style.backgroundColor="white";
           event.target.textContent = "🚢";
           count++; 
        }
        else{
            main.innerHTML="You lose";
            main.style.fontSize= "50px";
            main.style.textAlign ="center";
            main.style.marginTop="10%";
            main.style.color='red';
        }
        if(countans[x]===count){
            main.innerHTML="You Win";
            main.style.fontSize= "50px";
            main.style.textAlign ="center";
            main.style.marginTop="10%";
            main.style.color='darkgreen';
        }
    })
}

let re=document.getElementById("button");
re.addEventListener("click",()=>{
    location.reload();
})