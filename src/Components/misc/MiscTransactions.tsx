import moment from "moment-jalaali"
import { MiscItem } from "./MiscItem";
moment.loadPersian({ dialect: 'persian-modern' });

export const MiscTransactions = ({ transactions }: { transactions: Array<object> }) => {

    return (
        <>
            {
                transactions.sort((a: any, b: any) => +new Date(a.time) - +new Date(b.time))
                    .reverse().map((row: any) => {
                        return <MiscItem
                            key={row.id}
                            amount={row.amount}
                            title={row.title}
                            created_at={row.created_at}

                        />


                    })
            }
        </>
    )
}