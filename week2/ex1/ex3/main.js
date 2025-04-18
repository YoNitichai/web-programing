function setAlert(){
    let setIntervalid = 0;
   setIntervalid= setInterval(function(){
    const isbreak   = confirm("พักสายตาสักหน่อยมั้ย");
    if(isbreak){
        clearInterval(intervaid);
        alert("ชอบตุณที่พักสายตา");
    }
    },2*60*1000);   

}

