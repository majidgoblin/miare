import moment from "moment-jalaali"
import { useEffect, useState } from "react";
import { useAppSelector } from "../../Redux/hooks";
import { TripItem } from "./TripItem";
moment.loadPersian({ dialect: 'persian-modern' });

export const TripTransactions = ({ transactions }: { transactions: Array<object> }) => {

    const transaction = useAppSelector(state => state.Transaction)
    const [filteredData, setData] = useState<Array<object>>([])

    useEffect(() => {
        //filter data of trip with driver name
        transaction.driver === "" ?
            setData(transactions)
            :
            setData(transactions.filter((el: any) => el.driver === transaction.driver))
    }, [transaction.driver])

    return (
        <>
            {
                filteredData.sort((a: any, b: any) => +new Date(a.time) - +new Date(b.time))
                    .reverse().map((row: any) => {
                        return <TripItem
                            key={row.id}
                            final_price={row.final_price}
                            source_title={row.source_title}
                            request_datetime={row.request_datetime}
                            hub={row.hub.title}
                            driver={row.driver}
                        />
                    })
            }
        </>
    )
}