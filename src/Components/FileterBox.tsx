import { useAppDispatch, useAppSelector } from "../Redux/hooks"
import { changeTransactionType, searchDriver } from "../Redux/TransactionSlice"

export const FilterBox = () => {

    const dispach = useAppDispatch()
    const transaction = useAppSelector(state => state.Transaction)

    return (
        <>
            <div className="filter-box__container">
                <select onChange={(e) => dispach(changeTransactionType(e.target.value))}>
                    <option value="all">همه تراکنش ها</option>
                    <option value="concurrency"> هزینه خرید ظرفیت</option>
                    <option value="misc">هزینه متفرقه</option>
                    <option value="payments">هزینه شارژ حساب</option>
                    <option value="trip">هزینه سفر</option>
                </select>

                {
                    transaction.transactionType === "trip" &&
                    <input type="text" placeholder="جستجو کوریر..." onChange={(e) => dispach(searchDriver(e.target.value))} />
                }
            </div>

        </>
    )
}