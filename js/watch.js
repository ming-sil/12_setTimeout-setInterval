(function(){

    // const time = new Date();
    // // =>날짜 및 시간을 가져옴

    // const hours = time.getHours();
    // // =>시간을 가져옴

    // const min = time.getMinutes();
    // // =>분을 가져옴

    // const sec = time.getSeconds();
    // // =>초를 가져옴

    // console.log(hours,min,sec)


    const hoursEl = document.querySelector('.hours')
    const minEl = document.querySelector('.min')
    const secEl = document.querySelector('.sec')


    // //1.새로고침 필요
    // hoursEl.innerHTML = hours
    // minEl.innerHTML = min
    // secEl.innerHTML = sec


    // //2.새로고침 필요
    // setInterval(() => {
    //     hoursEl.innerHTML = hours
    //     minEl.innerHTML = min
    //     secEl.innerHTML = sec    
    // },1000);


    // //3.실시간 업데이트
    // setInterval(() => {
    //     const time = new Date();
    //     const hours = time.getHours();
    //     const min = time.getMinutes();
    //     const sec = time.getSeconds();
    
    //     hoursEl.innerHTML = hours
    //     minEl.innerHTML = min
    //     secEl.innerHTML = sec    
    // },1000);



    //4.padStart
    setInterval(() => {
        const time = new Date();
        const hours = String(time.getHours()).padStart(2, "0");
        const min = String(time.getMinutes()).padStart(2, "0");
        const sec = String(time.getSeconds()).padStart(2, "0");
    
        hoursEl.innerHTML = hours
        minEl.innerHTML = min
        secEl.innerHTML = sec    
    },1000);


})();//end