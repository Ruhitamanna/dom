//single element
// console.log(window);
// window.alert(1);
//console.log(document.getElementById('my-form'));
// const form = document.getElementById('my-form');
// console.log(form);



// console.log(document.querySelector('h1'));

// //multiple
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('items'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((ietm) => console.log(ietm));
// const ul = document.querySelector('.items');
// //ul.remove();
// //ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1] = 'A';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';
// btn.addEventListener('click', (a) => {
//     a.preventDefault();
//     console.log(a.target.className);
//     // console.log(a.target.id);
//     //console.log('click')

//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';

// });

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
    e.preventDefault();
    //console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Please Enter All Fields');
        msg.classList.add('error');
        setTimeout(() => msg.remove(), 3000);

        msg.innerHTML = 'Please enter all fields';

    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode
            (`${nameInput.value}: ${emailInput.value}`));
        userList.appendChild(li);


        nameInput.value = '';
        emailInput.value = '';
    }
}











