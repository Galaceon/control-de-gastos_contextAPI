import { useReducer, createContext, type ActionDispatch } from "react"
import { budgetReducer, initialState, type BudgetState, type BudgetActions } from "../reducers/budgetReducer"

type BudgetContextProps = {
    state: BudgetState
    dispatch: ActionDispatch<[action: BudgetActions]>
}

export const BudgetContext = createContext<BudgetContextProps>(null!)

export const BudgetProvider = ({children}) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState) 

    return (
        <BudgetContext.Provider>
            {children}
        </BudgetContext.Provider>
    )
}