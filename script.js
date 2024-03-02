var addBtn = document.querySelector('.add')
var serchBtn = document.querySelector('.search')
var parent = document.querySelector('.cardParent')
var inp = document.querySelector('#inp')


var data = []


function addNewUser(){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
        const {name, email, gender, picture} = result.results[0];

        data.push({name, email, gender, picture});

        parent.innerHTML += `<div class="card w-60 h-80 bg-zinc-600 mt-5 rounded-xl p-2">
        <div class="cardimage w-20 h-20 mb-5 rounded-xl bg-zinc-700 overflow-hidden">
            <img src="${picture.large}" alt="" class="w-full h-full fit-cover">
        </div>
        <h1 class="text-2xl font-bold">${name.first}</h1>
        <h3 class="">${gender}</h3>
        <h5 class="text-sm text-zinc-300">${email}</h5>
        <p class="text-sm mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium possimus minus in dolores dolorem! Sequi!</p>
    </div>`;
    });
}

addBtn.addEventListener('click', function(){
    addNewUser();
});


function inputCall(){
    inp.addEventListener('input', function(){
        var matching = data.filter(function(e){
            return e.name.first.startsWith(inp.value);
        });
    
        var newuser = "";
        matching.forEach(function(elem){
            newuser += `<div class="card w-60 h-80 bg-zinc-600 mt-5 rounded-xl p-2">
            <div class="cardimage w-20 h-20 mb-5 rounded-xl bg-zinc-700 overflow-hidden">
                <img src="${elem.picture.large}" alt="" class="w-full h-full fit-cover">
            </div>
            <h1 class="text-2xl font-bold">${elem.name.first}</h1>
            <h3 class="">${elem.gender}</h3>
            <h5 class="text-sm text-zinc-300">${elem.email}</h5>
            <p class="text-sm mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium possimus minus in dolores dolorem! Sequi!</p>
        </div>`;
        });
        parent.innerHTML = newuser;
    });
}

inputCall()

// serchBtn.addEventListener('click', function(){
//     inp.addEventListener('input', function(){
//         var matching = data.filter(function(e){
//             return e.name.first.startsWith(inp.value);
//         });
    
//         var newuser = "";
//         matching.forEach(function(elem){
//             newuser += `<div class="card w-60 h-80 bg-zinc-600 mt-5 rounded-xl p-2">
//             <div class="cardimage w-20 h-20 mb-5 rounded-xl bg-zinc-700 overflow-hidden">
//                 <img src="${elem.picture.large}" alt="" class="w-full h-full fit-cover">
//             </div>
//             <h1 class="text-2xl font-bold">${elem.name.first}</h1>
//             <h3 class="">${elem.gender}</h3>
//             <h5 class="text-sm text-zinc-300">${elem.email}</h5>
//             <p class="text-sm mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium possimus minus in dolores dolorem! Sequi!</p>
//         </div>`;
//         });
//         parent.innerHTML = newuser;
//     });
// })