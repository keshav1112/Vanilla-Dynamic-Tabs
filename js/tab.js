let data = [
    {
        id: 1,
        heading: 'First',
        paragraph:'Lorem Ipsum is simply dummy text of the printing.',
        imagePath: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-128.png'
    },
    {
        id: 2,
        heading: 'Second',
        paragraph:'It is a long established fact that a reader will be distracted.',
        imagePath: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png'
    },
    {
        id: 3,
        heading: 'Third',
        paragraph:'There are many variations of passages of Lorem Ipsum available.',
        imagePath: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/11_avatar-128.png'
    },
    {
        id: 4,
        heading: 'Forth',
        paragraph:'Contrary to popular belief, Lorem Ipsum is not simply random text.',
        imagePath: 'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-128.png'
    }
]

let activeClassData = ['tabOne', 'tabTwo', 'tabThree', 'tabFour'];

let addElInsert = document.getElementById('tabInsert');

tabBtn = (param) => {
    switch (param) {
        case 'secOne':
            removeActiveTabClass('tabOne');
            addTabElement(data[0]);
            break;
        case 'secTwo':
            removeActiveTabClass('tabTwo');
            addTabElement(data[1]);   
            break;
        case 'secThree':
            removeActiveTabClass('tabThree');
            addTabElement(data[2]);   
            break;
        case 'secFour':
            removeActiveTabClass('tabFour');
            addTabElement(data[3]);
            break;
    }
    
}

function removeActiveTabClass(activeElId){
    activeClassData.forEach(el => {
        let em = document.getElementById(el);
        if(activeElId === el){
            em.classList.add('active-tab');
        }
        else{
            em.classList.remove('active-tab');
        }
    });
}

function addTabElement(el){
    let tabEl = `
    <div class="tab-pane fade show active" id="${el.id}">
        <h2>${el.heading}</h2>
        <p>${el.paragraph}</p>
    </div>
    `;
    
   addElInsert.innerHTML = tabEl;
}

addTabElement(data[0]);