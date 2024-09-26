//createContext-Esta función se utiliza para crear un nuevo contexto. Un contexto es una forma de compartir datos entre componentes sin tener que pasar props a través de múltiples niveles.
//ReactNode: Este tipo representa cualquier elemento válido de React, como componentes, texto o fragmentos.
import {createContext, Dispatch, ReactNode, useReducer } from "react";
import { ActivityActions, activityReducer,ActivityState,initialState } from "../reducers/activity-reducer";

type ActivityProviderProps ={
    children:ReactNode
}

type ActivityContextProps ={
    state:ActivityState
    dispatch: Dispatch<ActivityActions>
}

//Se define un componente funcional llamado ActivityProvider que acepta un objeto con una propiedad children de tipo ReactNode.
//Este componente se encargará de proporcionar el valor del contexto a sus componentes hijos.
export const ActivityContext = createContext<ActivityContextProps>(null!)//confia en mi significa ese null


export const ActivityProvider = ({children}:ActivityProviderProps) =>{
    //lo que se va a compartir en este provider

    const [state,dispatch] = useReducer(activityReducer,initialState)

    return(
        <ActivityContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </ActivityContext.Provider>
    )
}