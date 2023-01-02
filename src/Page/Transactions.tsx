import { useEffect, useState } from "react"
import { TransactionList } from "../Components/TransactionList"
import { useAppDispatch } from "../Redux/hooks"
import { fetchTransaction } from "../Redux/TransactionSlice"

export const Transactions = () => {

    const dispach = useAppDispatch()
    const [fetch, setFetch] = useState(false)

    useEffect(() => {
        //get data from public folder
        dispach(fetchTransaction()).then(() => {
            setFetch(true)
        })
    }, [])

    return (
        fetch ?
            <TransactionList />
            : null
    )
}