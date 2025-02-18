import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency="usd",
    amountDisable = false,
    currencyDisable = false,
    className = ""
}) {

    const inputId = useId()
    return (
        <div>
            <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
                <div className="w-1/2">
                    <label htmlFor={inputId} className="text-black/40 mb-2 inline-block">{label}</label>
                    <input
                        type="number"
                        placeholder='Amount'
                        name=""
                        id={inputId}
                        disabled={amountDisable}
                        value={amount}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        className="outline-none w-full bg-transparent py-1.5" />

                </div>
                <div className="w-1/2 flex flex-wrap justify-end text-right">
                    <label className="text-black/40 mb-2 w-full"> Currency Type</label>
                    <select name="" id="" value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencyDisable}
                        className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default InputBox
