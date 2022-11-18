import { createContext } from "react";
import useNotes from "../hooks/useNotes";


export const NotesContext = createContext();

function NotesProvider({children}){
    const { notes, add, remove } = useNotes();
    return (
        <NotesContext.Provider value={ { notes: notes, add, remove } }>
            { children }
        </NotesContext.Provider>
    )
};

export default NotesProvider;