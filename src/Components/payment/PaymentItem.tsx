import {  PaymentItems } from "../../types"
import moment from "moment-jalaali"
moment.loadPersian({ dialect: 'persian-modern' });

export const PaymentItem=({amount,datetime,description}:PaymentItems)=>{
    return(
        <>
          <div className="data__container payment">
                <ul>
                    <li><span>{moment(datetime).format("HH:mm jYYYY/jMM/jDD ")}</span></li>
                    <li><span>{description}</span></li>
                </ul>
                <span className={amount > 0 ? 'positive' : 'negetive'}>{amount}</span>
            </div>
        </>
    )
}