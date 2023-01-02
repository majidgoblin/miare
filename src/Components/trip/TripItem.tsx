import {  TripItems } from "../../types"
import moment from "moment-jalaali"
moment.loadPersian({ dialect: 'persian-modern' });

export const TripItem = ({ final_price, request_datetime, driver, source_title,hub }: TripItems) => {
    return (
        <>
            <div className="data__container trip">
                <ul>
                    <li><span>{moment(request_datetime).format("HH:mm jYYYY/jMM/jDD ")}</span></li>
                    <li><span>{source_title}</span></li>
                    <li><span>کوریر : {driver}</span></li>
                    <li><span>شعبه : {hub}</span></li>
                </ul>
                <span className={final_price > 0 ? 'positive' : 'negetive'}>{final_price}</span>
            </div>
        </>
    )
}