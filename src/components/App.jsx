import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import TextArea from "./textArea";
import './App.css';

function App(){
    const [noteItems, setnoteItems] = useState([]);

    function AddNote(note){
        setnoteItems(prevNote =>{
            return [...prevNote, note];
        })
    }

    function deleteNote(id) {
        setnoteItems(prevNotes => {
            return prevNotes.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }

    return(
        <div>
            <Header />
            <TextArea
                onAdd={AddNote}
            />
            {noteItems.map((noteItem, index)=>{
                return<Note 
                            key={index}
                            id={index}
                            title={noteItem.title}
                            content={noteItem.content}
                            onDelete={deleteNote}
                        />
            })}
            
            <Footer />
        </div>
    );
}

export default App;