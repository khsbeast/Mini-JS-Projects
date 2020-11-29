const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionaireBtn = document.getElementById('show-millionaire');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];
const getRandomUser = async()=>{
    const res = await fetch('https://randomuser.me/api');
    // console.log(res);
    const data = await res.json();
    // console.log(data);
    const user = data.results[0];
    const newUser = {
        name : `${user.name.first} ${user.name.last}`,
        money : Math.floor(Math.random()*1000000)
    }
    // console.log(newUser);
    addData(newUser);
}

const DoubleMoney = ()=>{
    data = data.map(item=>{
        return {...item,money:item.money*2};
    });
    UpdateDOM();
}

const sortByRichest=()=>{
    data.sort((a,b)=>b.money-a.money);
    UpdateDOM();
}

const showMillionaire =()=>{
    data = data.filter((item)=>{
        return item.money>=1000000;
    })
    UpdateDOM();
}

const calculate = ()=>{
    const wealth = data.reduce((acc,item)=>(acc+=item.money),0);
    const wealthElement = document.createElement('div');
    wealthElement.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`;
    main.appendChild(wealthElement);
}

//fetch random user and add money
getRandomUser();
getRandomUser();
getRandomUser();


const addData = (newUser)=>{
    data.push(newUser);
    UpdateDOM();
}

const UpdateDOM = (providedData = data)=>{
    main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

    providedData.forEach((item)=>{
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    })
}


// Format money
const formatMoney = (num)=>{
    return '$'+(num).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


addUserBtn.addEventListener('click',getRandomUser);
doubleBtn.addEventListener('click',DoubleMoney);
sortBtn.addEventListener('click',sortByRichest);
showMillionaireBtn.addEventListener('click',showMillionaire);
calculateWealthBtn.addEventListener('click',calculate);

