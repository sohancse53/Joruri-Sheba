    // heart counter feature
document.getElementById('card-container')
.addEventListener('click',function(event){
    if(event.target.className.includes('heart')){
       const heart =  event.target;
      let heartCount = parseInt(document.getElementById('heart-count').innerText);
            let increaseCount = heartCount + 1;
            document.getElementById('heart-count').innerText = increaseCount;
    }

    
})


// call alert feature 

const callBtns = document.getElementsByClassName('call');
for(const call of callBtns){
    call.addEventListener('click',function(){
        const serviceName = call.parentNode.parentNode.children[1].innerText;
        const serviceNumber = call.parentNode.parentNode.children[3].innerText;
        const coin = Number(document.getElementById("coin").innerText);
        let newCoin = coin - 20;
        if(coin<20){
            alert("Not enough coin for call");
            return;
        }

        alert(`📞 Calling  ${serviceName} service ${serviceNumber}`);
        
        document.getElementById("coin").innerText = newCoin;
        
        const dashboard = document.getElementById('dashboard-container');
        const time = new Date();
        const div = document.createElement('div')
        div.innerHTML = ` <div
            class="bg-gray-100 mt-2 rounded-xl p-2 flex flex-col lg:flex-row lg:justify-between items-center"
          >
            <div>
              <h1 class="font-bold">${serviceName}</h1>
              <p class="text-gray-800 ">( ${serviceNumber} )</p>
            </div>
            <h1 class="font-semibold">${time.toLocaleTimeString()} </h1>
          </div>`
          dashboard.append(div)

    })
}

// clear history feature 
document.getElementById("clear-btn").addEventListener("click",function(){
            const dashboard = document.getElementById('dashboard-container');
            dashboard.innerHTML = "";
})


// copy features 
const copyBtns = document.getElementsByClassName('copy')
for(const copy of copyBtns){
    copy.addEventListener('click',function(){
        const serviceNumber = copy.parentNode.parentNode.children[3].innerText;
        const copyCount = Number(document.getElementById("copy").innerText);

        // console.log(serviceNumber);
        alert(`${serviceNumber} is Copied to Clipboard`);
        navigator.clipboard.writeText(serviceNumber);
        let increaseCopyCount = copyCount+1;
        document.getElementById("copy").innerText = increaseCopyCount;
        
        
    })
    
}