
(function(){

    const btn = document.querySelector('button');
    const msgBox = document.querySelector('.message_box');

    const handleClick = () => {
        msgBox.classList.add('on');

        setTimeout(() => {
            msgBox.classList.remove('on')
        },1000)
    }

    btn.addEventListener('click', handleClick);

})();
