const input=document.getElementById("words")
const contain= document.querySelector(".contain");

const generateword=(n)=>{
        let text="";
        const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 for(i=0;i<n;++i){
        const random=(Math.random()*25).toFixed(0);
        text+=letters[random];
 }
return text;
}
let num;
const getdata=()=>{
        num=Number(input.value);
        const para=document.createElement("p");
        let data="";
        for(let i=0;i<num;i++){
                const randomnum=(Math.random()*15).toFixed(0);
          data+=generateword(randomnum);
          data+=" ";
        }
        para.innerText=data;
        para.setAttribute("id","p1");
        contain.append(para);
}