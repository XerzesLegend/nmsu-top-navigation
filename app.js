addDropDownFunctionality();








function addDropDownFunctionality(){
    const menu = document.querySelector('#menu');
    let uls = menu.querySelectorAll('ul');
    uls = Array.from(uls);

    uls.forEach(ul => {
        const ulID = ul.id;
        const btnID = '#' + ul.id + "Btn";
        const btn = document.querySelector(btnID);
        
        btn.addEventListener('click', function(e){
            uls.forEach(ul => {
                if(ul.id == ulID){
                    return
                }
                else{
                    ul.classList.add('items-hide')}
                });
            ul.classList.toggle('items-hide');
        });
    });

}

