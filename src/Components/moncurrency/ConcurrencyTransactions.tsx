import moment from "moment-jalaali"
import { ConcurrencyItem } from "./ConcurrencyItem";
moment.loadPersian({ dialect: 'persian-modern' });

export const ConcurrencyTransactions = ({ transactions }: { transactions: Array<object> }) => {
    return (
        <>
            {
                transactions.sort((a: any, b: any) => +new Date(a.time) - +new Date(b.time))
                    .reverse().map((row: any) => {
                        return <ConcurrencyItem
                            key={row.id}
                            amount={row.amount}
                            started_date={row.started_date}
                            end_date={row.end_date}
                            created_at={row.created_at}

                        />
                    })
            }
        </>
    )
}