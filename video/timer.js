let count=document.querySelector(".countdown")
let time=10;
count.innerHTML=time--;
setTimeout(() => {
    count.innerHTML=time--; 
    setTimeout(() => {
        count.innerHTML=time--; 
        setTimeout(() => {
            count.innerHTML=time--; 
            setTimeout(() => {
                count.innerHTML=time--;
                setTimeout(() => {
                    count.innerHTML=time--; 
                    setTimeout(() => {
                        count.innerHTML=time--; 
                        setTimeout(() => {
                            count.innerHTML=time--; 
                            setTimeout(() => {
                                count.innerHTML=time--; 
                                setTimeout(() => {
                                    count.innerHTML=time--;
                                    setTimeout(() => {
                                        count.innerHTML= "Happy indepencence day"
                                    }, 2000); 
                                }, 2000);
                            }, 2000); 
                        }, 2000); 
                    }, 2000); 
                }, 2000); 
            }, 2000);
        }, 2000);
    }, 2000);
   
    
}, 2000);