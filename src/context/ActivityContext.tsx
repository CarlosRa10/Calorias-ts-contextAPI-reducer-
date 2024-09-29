//aqui cinfiguramos todo nuestro context y nuestro provider

//createContext-Esta función se utiliza para crear un nuevo contexto. Un contexto es una forma de compartir datos entre componentes sin tener que pasar props a través de múltiples niveles.
//ReactNode: Este tipo representa cualquier elemento válido de React, como componentes, texto o fragmentos.
import {createContext, Dispatch, ReactNode, useMemo, useReducer } from "react";
import { ActivityActions, activityReducer,ActivityState,initialState } from "../reducers/activity-reducer";

type ActivityProviderProps ={
    children:ReactNode
}

type ActivityContextProps ={
    state:ActivityState
    dispatch: Dispatch<ActivityActions>
    caloriesConsumed:number
    caloriesBurned:number
    netCalories:number
}

//Se define un componente funcional llamado ActivityProvider que acepta un objeto con una propiedad children de tipo ReactNode.
//Este componente se encargará de proporcionar el valor del contexto a sus componentes hijos.
export const ActivityContext = createContext<ActivityContextProps>(null!)//confia en mi significa ese null-lo que indica que el contexto está inicialmente vacío y será reemplazado por el Provider.


export const ActivityProvider = ({children}:ActivityProviderProps) =>{
    //lo que se va a compartir en este provider

    const [state,dispatch] = useReducer(activityReducer,initialState)

    
    // Contadores
    const caloriesConsumed = useMemo(() => state.activities.reduce((total, activity) => activity.category === 1 ? total + activity.calories : total, 0), [ state.activities])
    const caloriesBurned = useMemo(() =>  state.activities.reduce((total, activity) => activity.category === 2 ? total + activity.calories : total, 0), [ state.activities])
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [ state.activities])
    

    return(
        <ActivityContext.Provider value={{
            state,
            dispatch,
            caloriesConsumed,
            caloriesBurned,
            netCalories
        }}>
            {children}
        </ActivityContext.Provider>
    )
}