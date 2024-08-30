import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';



function TextArea(props){

    const [isExpanded, setisExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event){
        const {name, value} = event.target;
        setNote((prevNote) =>{
            return {...prevNote, [name]:value}
        })
    }

    


    return(
        <div>
            <form className="create-note">
               {isExpanded && (
                 <input 
                 name="title" 
                 placeholder="Title" 
                 onChange={handleChange} 
                 value={note.title}
             />
               )}
                <textarea 
                    name="content" 
                    placeholder="Take a Note..."
                    onClick={()=>{
                        setisExpand(true);
                    }} 
                    rows= {isExpanded ? "3" : "1"}
                    onChange={handleChange}
                    value={note.content}
                />
                <Zoom in={isExpanded}>
                <Fab onClick={ (event) => {
                                props.onAdd(note);
                                event.preventDefault();
                                setNote(
                                    {
                                        title: "",
                                        content: ""
                                    }
                                )
                    }}><AddIcon />
                </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default TextArea;