addDropDownFunctionality();




function addDropDownFunctionality(){
    const menu = document.querySelector('#menu');
    let btns = menu.querySelectorAll('a');
    let menus = menu.querySelectorAll('div');
    btns = Array.from(btns);
    menus = Array.from(menus);

    btns.forEach(btn => {
        let index = btns.indexOf(btn);
        btn.addEventListener('click', function(e){
            btns.forEach(btn =>{
                let temp = btns.indexOf(btn);
                if(index == temp){
                    return}
                else{
                    menus[temp].classList.add('items-hide');
                }
            });
            menus[index].classList.toggle('items-hide');
        });
    });

}

