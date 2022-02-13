

const addButton = document.querySelector('#add');


//function for storing data to local storage

const updateLocalStorageData = () => {

    const textAreaData = document.querySelectorAll('textarea');

    const notes = [];

    textAreaData.forEach( (note) =>{

        return notes.push(note.value);


    })


    localStorage.setItem('notes' , JSON.stringify(notes));


}


// definining a addNewNote function 


const addNewNote = (text = '') =>{



    const note = document.createElement('div');
    note.classList.add('note');
    
    const htmlData = `

    <div class="container my-3 ">
    <div class="row justify-content-center">

            <div class="card  shadow-lg " style="width: 50rem;">
                <div class="card-body">
                    <button class="btn btn-primary edit mx-2 mb-2">EDIT <i class="fas fa-edit mx-2 fw-bold"></i></button>
                    <button class="btn btn-primary delete mx-2">DELETE  <i class="fas fa-trash mx-2 fw-bold"></i></button>
          
                  <div class="main ${text ? "" : "hidden"} my-3" style="font-size:20px;"></div>
                  <textarea class="form-control  ${text ? "hidden" : ""} my-3" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
              </div>
    </div>
</div>`



note.insertAdjacentHTML('afterbegin' , htmlData);
console.log(note);



const editBtn = note.querySelector('.edit');
const deleteBtn = note.querySelector('.delete');
const mainDiv = note.querySelector('.main');

const textarea = note.querySelector('textarea');


//delete the note

deleteBtn.addEventListener('click', () =>{
    note.remove();
    updateLocalStorageData();
})

textarea.value = text;
mainDiv.innerHTML = text;

//edit the note
editBtn.addEventListener('click', () =>{
    mainDiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');


    // if(editBtn.innerHTML==='EDIT')
    // {
    //     editBtn.innerHTML='SAVE';
    // }
    // else{
    //     editBtn.innerHTML='EDIT';
    // }

})

textarea.addEventListener('change' , (event) => {

    const value = event.target.value;
    mainDiv.innerHTML = value;


    updateLocalStorageData();


})






document.body.appendChild(note);

}


// getting or printing data from localstorage

const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){
  notes.forEach((note)=> addNewNote(note))
}


// whenever clicked on button adding event to create a new note
addButton.addEventListener('click', ()=>{
    addNewNote();
})


