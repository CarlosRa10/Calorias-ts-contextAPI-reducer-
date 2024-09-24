//createContext-Esta función se utiliza para crear un nuevo contexto. Un contexto es una forma de compartir datos entre componentes sin tener que pasar props a través de múltiples niveles.
//ReactNode: Este tipo representa cualquier elemento válido de React, como componentes, texto o fragmentos.
import {createContext, ReactNode } from "react";

type ActivityProviderProps ={
    children:ReactNode
}


//Se define un componente funcional llamado ActivityProvider que acepta un objeto con una propiedad children de tipo ReactNode.
//Este componente se encargará de proporcionar el valor del contexto a sus componentes hijos.
export const ActivityContext = createContext()

export const ActivityProvider = ({children}:ActivityProviderProps) =>{

    return(
        <ActivityContext.Provider value={{

        }}>
            {children}
        </ActivityContext.Provider>
    )
}