import moment from "moment-jalaali"
import { ConcurrencyItem } from "./moncurrency/ConcurrencyItem";
import { MiscItem } from "./misc/MiscItem";
import { PaymentItem } from "./payment/PaymentItem";
import { TripItem } from "./trip/TripItem";
moment.loadPersian({ dialect: 'persian-modern' });

export const AllTransactions = ({ transactions }: { transactions: Array<object> }) => {

    return (
        <>
            {
                transactions.sort((a: any, b: any) => +new Date(a.time) - +new Date(b.time))
                    .reverse().map((row: any) => {
                        return <p key={row.id}>
                            {
                                row.type === "concurrency" ?
                                    <ConcurrencyItem
                                        key={row.id}
                                        amount={row.amount}
                                        started_date={row.started_date}
                                        end_date={row.end_date}
                                        created_at={row.created_at}

                                    />
                                    : null
                            }
                            {
                                row.type === "misc" ?
                                    <MiscItem
                                        key={row.id}
                                        amount={row.amount}
                                        title={row.title}
                                        created_at={row.created_at}

                                    />
                                    : null
                            }
                            {
                                row.type === "payments" ?
                                    <PaymentItem
                                        key={row.id}
                                        amount={row.amount}
                                        description={row.description}
                                        datetime={row.datetime}

                                    />
                                    : null
                            }
                            {
                                row.type === "trip" ?
                                    <TripItem
                                        key={row.id}
                                        final_price={row.final_price}
                                        source_title={row.source_title}
                                        request_datetime={row.request_datetime}
                                        hub={row.hub.title}
                                        driver={row.driver}
                                    />
                                    : null
                            }
                        </p>
                    })
            }
        </>
    )
}