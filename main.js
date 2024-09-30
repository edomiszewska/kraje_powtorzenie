const radioTab=document.querySelectorAll(`input[type="radio"]`);
const tytul=document.querySelector(`#tytul`)
const img1=document.querySelector(`#img1`)
const img2=document.querySelector(`#img2`)
radioTab.forEach(element => {
    element.addEventListener(`click`,(evt)=>{
        img1.src=`${element.value}1.jpg`
        img1.alt=`${element.value}-photo`
        img2.src=`${element.value}2.jpg`
        img2.alt=`${element.value}-photo`
        if(element.value=="Wlochy"){
            tytul.innerHTML=`Włochy` 
        }else{
        tytul.innerHTML=`${element.value}`
        }
    })
});