import { useContext } from "react"
import { BudgetContext } from "../context/budgetContext"



export const useBuget = () =>{
    const context=useContext(BudgetContext)
    if (!context){
        throw new Error('useBudget must be used within a BudgetPovider')
    }

    return context
}