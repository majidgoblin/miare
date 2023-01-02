import { useEffect, useState } from "react"
import { useAppSelector } from "../Redux/hooks"
import { TransactionCategory } from "./TransactionCategory"
import moment from "moment-jalaali"
import { FilterBox } from "./FileterBox";
moment.loadPersian({ dialect: 'persian-modern' });

export const TransactionList = () => {

    const transaction = useAppSelector(state => state.Transaction)

    // const [data, setData] = useState([])

    // const handleScroll = () => {
    //     if (Array.from(new Set(data)) !== transaction.dates) {
    //         if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {

    //             for (let i = 1; i < transaction.dates.length; i++) {
    //                 setData((prev) => [...prev, transaction.dates[i]])
    //             }
    //         }
    //     }

    // }

    // useEffect(() => {
    //     if (window.innerHeight > document.body.clientHeight )
    //         setData(transaction.dates)
    //     else setData([transaction.dates[0]])

    // }, [transaction.transactionType])

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll)

    // }, [])



    return (
        <>
            <FilterBox />
            {
                transaction.dates.map((row: any) => {
                    return <TransactionCategory date={row} />
                })
            }

        </>
    )
}