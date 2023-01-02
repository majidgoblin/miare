import react, { useEffect, useState } from "react"
import { useAppSelector } from "../Redux/hooks"
import { AllTransactions } from "./AllTransactions";
import moment from "moment-jalaali"
import { MiscTransactions } from "./misc/MiscTransactions";
import { PaymentTransactions } from "./payment/PaymentTransactions";
import { TripTransactions } from "./trip/TripTransactions";
import { ConcurrencyTransactions } from "./moncurrency/ConcurrencyTransactions";
moment.loadPersian({ dialect: 'persian-modern' });

export const TransactionCategory = ({ date }: { date: string }) => {

    const transaction = useAppSelector(state => state.Transaction)
    const [allRecoreds, setRecords] = useState<Array<object>>([])

    useEffect(() => {

        //create category of all data with same date
        transaction.concurrency_costs.map((row: any) => {
            if (moment(row.created_at).format("jDD jMMMM jYYYY") === date)
                setRecords((state) => [...state, { ...row, type: "concurrency", time: row.created_at }])
        })
        transaction.misc_expenses.map((row: any) => {
            if (moment(row.created_at).format("jDD jMMMM jYYYY") === date)
                setRecords((state) => [...state, { ...row, type: "misc", time: row.created_at }])
        })
        transaction.payments.map((row: any) => {
            if (moment(row.datetime).format("jDD jMMMM jYYYY") === date)
                setRecords((state) => [...state, { ...row, type: "payments", time: row.datetime }])
        })
        transaction.trip_financials.map((row: any) => {
            if (moment(row.request_datetime).format("jDD jMMMM jYYYY") === date)
                setRecords((state) => [...state, { ...row, type: "trip", time: row.request_datetime }])
        })
    }, [])

    return (
        <>
            {
                transaction.transactionType === "all"
                    || allRecoreds.filter((el: any) => el.type === transaction.transactionType).length > 0 ?

                    <div className="transaction-category__container">
                        <p>{date}</p>
                        {
                            transaction.transactionType === "all" ?
                                <AllTransactions transactions={allRecoreds} />
                                : null
                        }
                        {
                            transaction.transactionType === "misc" ?
                                <MiscTransactions transactions={allRecoreds.filter((el: any) => el.type === "misc")} />
                                : null
                        }
                        {
                            transaction.transactionType === "payments" ?
                                <PaymentTransactions transactions={allRecoreds.filter((el: any) => el.type === "payments")} />
                                : null
                        }
                        {
                            transaction.transactionType === "trip" ?
                                <TripTransactions transactions={allRecoreds.filter((el: any) => el.type === "trip")} />
                                : null
                        }
                        {
                            transaction.transactionType === "concurrency" ?
                                <ConcurrencyTransactions transactions={allRecoreds.filter((el: any) => el.type === "concurrency")} />
                                : null
                        }
                    </div>
                    : <p className="no-record">در تاریخ <span>{date}</span> اطلاعاتی وجود ندارد</p>
            }
        </>
    )
}