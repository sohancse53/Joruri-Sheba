document.getElementById('card-container')
.addEventListener('click',function(event){
    if(event.target.className.includes('heart')){
       const heart =  event.target;
      let heartCount = parseInt(document.getElementById('heart-count').innerText);
            let increaseCount = heartCount + 1;
            document.getElementById('heart-count').innerText = increaseCount;
        
    }
    
})