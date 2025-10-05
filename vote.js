
/*data*/
let playerinfo1 = {
    name: 'Kobe Bryant',
    photo: 'images/kobe.jpeg',
    teams: 'L.A. Lakers',
    numbers: '8, 24'
};

let playerinfo2 = {
    name: 'Michael Jordan',
    photo: 'images/mj.jpeg',
    teams: [
        'Chicago Bulls', 
        'Washington Wizards'
    ],
    numbers: '23'
};

/* output */ 

/* Player 1 */ 
document.querySelector('#name').textContent = playerinfo1.name;
document.querySelector('#photo').setAttribute('src', playerinfo1.photo);
document.querySelector('#teams').textContent = playerinfo1.teams;
document.querySelector('#numbers').textContent = playerinfo1.numbers;

/* Player 2 */ 
document.querySelector('#name1').textContent = playerinfo2.name;
document.querySelector('#photo1').setAttribute('src', playerinfo2.photo);
document.querySelector('#teams1').textContent = playerinfo2.teams;
document.querySelector('#numbers1').textContent = playerinfo2.numbers;


