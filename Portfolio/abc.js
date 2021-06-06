prev = document.getElementById('prev');
next = document.getElementById('next');
circle0 = document.getElementById('item1');
circle1 = document.getElementById('item2');
circle2 = document.getElementById('item3');
circle3 = document.getElementById('item4');
circle4 = document.getElementById('item5');

active = [true, false, false, false, false];

next.addEventListener('click', () => {
    active.forEach(item, index => {
        if(index){
            if(index==active.length-1){
                active[index]='false';
                active[0]='true';
                `circle${index}`.classList.remove('active');
                circle0.classList.add('active');
                return;
            }
            else{
                active[index]='false';
                active[index+1]='true';
                `circle${index}`.classList.remove('active');
                `circle${index+1}`.classList.add('active');
                return;
            }
        }                
    });
    
});