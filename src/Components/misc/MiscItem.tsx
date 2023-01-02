import { MiscItems } from "../../types"
import moment from "moment-jalaali"
moment.loadPersian({ dialect: 'persian-modern' });

export const MiscItem=({amount,created_at,title}:MiscItems)=>{
    return(
        <>
          <div className="data__container misc">
                <ul>
                    <li><span>{moment(created_at).format("HH:mm jYYYY/jMM/jDD ")}</span></li>
                    <li><span>{title}</span></li>
                </ul>
                <span className={amount > 0 ? 'positive' : 'negetive'}>{amount}</span>
            </div>
        </>
    )
}