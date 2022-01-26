addDropDownFunctionality();
navBarButton();


function addDropDownFunctionality(){
    const menu = document.querySelector('#menu');
    let btns = menu.querySelectorAll('a');
    let menus = document.querySelectorAll('div.menu');
    btns = Array.from(btns);
    menus = Array.from(menus);

    btns.forEach(btn => {
        let index = btns.indexOf(btn);
        btn.addEventListener('click', function(e){
            e.preventDefault();
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
        window.addEventListener('click', function(e){   
            if (document.getElementById('maincontainer').contains(e.target)){
              // Clicked in box
            } else{
              menus.forEach(men => {
                men.classList.add('items-hide');
              });
            }
          });
    });

}

function navBarButton(){
    const container = document.querySelector('.mainContainer');
    const parentContainer = document.querySelector('#maincontainer');
    const button = document.querySelector('button.navbar-toggle');
    button.addEventListener('click', function(){
        container.classList.toggle('containerHide');
        parentContainer.classList.toggle('containerHide');
    });
};
