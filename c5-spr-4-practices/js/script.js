let noteList = [];

let view = "grid"; //default view is grid-view

function addNote(event) {
    event.preventDefault();
    let notetitle=document.getElementById("notetitle").value;
    let notecontent=document.getElementById("notecontent").value;
    createNoteCard(notetitle,notecontent);
        const note={
        "notetitle":notetitle,
        "notecontent":notecontent     
    }
    
    noteList.push(note);
    alert("Note successfully added ")
    }
    





function deleteNote(event) {
    event.target.parentElement.remove();
    alert("Note is successfully deleted ");
    
}

function clearFields() {
    
}
function check(event)
         {
              if(document.getElementById('notetitle').value===""||document.getElementById('notecontent').value==="")
              {
                   const title=document.getElementById("title");
                    title.innerHTML="note title and content shouldn't be empty";
                 title.style.color="red";
              }
              
              
              else{
                saveNote(event);
              }
         }

function fetchNotes() {
    
}

function loadNoteData() {
    
}

function updateNoteData(note) {
    
}

function createNoteCard(notetitle,notecontent) {
    let content= `<div class="card" style="width: 18rem;">
  <div class="card-body">
  <h5 class="card-title">${notetitle}</h5>
    <div id="content">${notecontent}</div>
    <button type="button" onclick="deleteNote(event)" class="btn btn-danger" id="btnDelete">Delete Note</button>
  </div>
</div>`;

   
    let mainContent=document.getElementById("note-container");
    
    mainContent.innerHTML += content;
 }
 function toggleView(){
    let t=document.getElementById("note-container");
    if (t.style.display === "inline") {
        t.style.display = "block";
      } else {
        t.style.display = "inline";
      }
 }


