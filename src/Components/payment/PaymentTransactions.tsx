import moment from "moment-jalaali"
import { PaymentItem } from "./PaymentItem";
moment.loadPersian({ dialect: 'persian-modern' });

export const PaymentTransactions = ({ transactions }: { transactions: Array<object> }) => {

    return (
        <>
            {
                transactions.sort((a: any, b: any) => +new Date(a.time) - +new Date(b.time))
                    .reverse().map((row: any) => {
                        return <PaymentItem
                            key={row.id}
                            amount={row.amount}
                            description={row.description}
                            datetime={row.datetime}

                        />
                    })
            }
        </>
    )
}