import { ConcurrencyItems } from "../../types"
import moment from "moment-jalaali"
moment.loadPersian({ dialect: 'persian-modern' });

export const ConcurrencyItem = ({ amount, created_at, started_date, end_date }: ConcurrencyItems) => {
    return (
        <>
            <div className="data__container concurrency">
                <ul>
                    <li><span>{moment(created_at).format("HH:mm jYYYY/jMM/jDD ")}</span></li>
                    <li><span>خرید ظرفیت همزمان</span></li>
                    <li>خرید ظرفیت از تاریخ {moment(end_date).format("jYYYY/jMM/jDD ")} تا {moment(started_date).format("jYYYY/jMM/jDD ")}</li>
                </ul>
                <span className={amount > 0 ? 'positive' : 'negetive'}>{amount}</span>
            </div>
        </>
    )
}