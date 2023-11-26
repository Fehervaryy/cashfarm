import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const LogTransaction = () => {
    const [balance, setBalance] = useState(() => {
        const localValue = localStorage.getItem("BALANCE")
        if (localValue == null) return 0
        return JSON.parse(localValue)
    })
    //calculator constants
    const [inputValue, setValue] = useState();
    const [calculatorMood, setCalculatorMood] = useState("calculator")
    const [balanceMood, setBalanceMood] = useState("balance")
    //const [addButtonMood, setAddButtonMood] = useState("add_button")
    //const [subtractButtonMood, setSubtractButtonMood] = useState("subtract_button")
    let [incomeClass, setIncomeClass] = useState('income')
    const [isIncome, setIsIncome] = useState(true)
    const [incomeLabel, setIncomeLabel] = useState("Income")
    const [numinputMood, setNuminputMood] = useState("numinput")
    const [greetingMsg, setGreetingMsg] = useState("Good morning, user")
    //transaction title constants
    const [transactions, setTransactions] = useState(() => {
        const localValue = localStorage.getItem("transactions")
        if (localValue == null) return []
        return JSON.parse(localValue)
    })
    const [transactionName, setName] = useState();
    const [expenseCategory, setCategory] = useState();

    //setCategory();

    const bool = false;
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var selector = document.getElementById('category');

    function logTransaction() {
        const date = new Date();
        setTransactions((currentTransactions) => {

            return [
                ...currentTransactions,
                {
                    "title": transactionName,
                    "total": inputValue * (isIncome * 2 - 1),
                    "date": month[date.getMonth()] + ', ' + date.getDate() + ' ' + date.getFullYear(),
                    "tag": selector.value,
                    "id": crypto.randomUUID()
                },
            ]
        })
    }

    const submit = () => {
        if (selector.value === "Select" || !transactionName || transactionName === "Enter transaction name" || !inputValue || inputValue === "Enter the amount") {
            return
        }
        if (isIncome) {
            setBalance(Number(balance) + Number(inputValue));
            console.log(inputValue)
        } else {
            setBalance(Number(balance) - Number(inputValue));
            console.log(inputValue)
        }
        logTransaction();
        setValue("Enter the amount");
        setName("Enter transaction name");
        setCategory("Select");
    }

    useEffect(() => {
        localStorage.setItem("BALANCE", JSON.stringify(balance))

        if (/*Number(balance) < 0*/ false) {
            document.body.style.backgroundImage = "radial-gradient(#C31313, #140000)";
            setCalculatorMood("calculator_evil")
            /* setBalanceMood("balance_evil")
            setAddButtonMood("add_button_evil")
            setSubtractButtonMood("subtract_button_evil") */
            setNuminputMood("numinput_evil")
        } else {
            document.body.style.backgroundImage = null
            setCalculatorMood("calculator")
            /*setBalanceMood("balance")
            setAddButtonMood("add_button")
            setSubtractButtonMood("subtract_button") */
            setNuminputMood("numinput")
        }
    }, [balance])

    useEffect(() => {
        localStorage.setItem("transactions", JSON.stringify(transactions))
    }, [transactions])

    /*
        <div
                    className={addButtonMood}
                    onClick={addition}
                >
                    <p>Income</p>
                </div>
                <div
                    className={subtractButtonMood} 
                    onClick={subtraction}
                >
                    <p>Expense</p>
                </div>
    */

    return (
        <div className={calculatorMood}>
            <h1>{greetingMsg}</h1>
            <div className={balanceMood}>
                <h1>{"$" + balance}</h1>
            </div>
            <input
                type="text"
                className={numinputMood}
                required
                value={inputValue}
                defaultValue="Enter the amount"
                onClick={(e) => setValue("")}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                    }
                }}
            />
            <div className="buttons">
                <p className={incomeClass} onClick={() => {
                    if (isIncome) {
                        setIncomeClass('expense');
                        setIsIncome(false)
                        console.log(isIncome)
                        setIncomeLabel("Expense")
                    } else {
                        setIncomeClass('income');
                        setIsIncome(true)
                        console.log(isIncome)
                        setIncomeLabel("Income")
                    }
                }}>{incomeLabel}</p>
            </div>
            <div className="inputs">
                <input
                    type="text"
                    className="nameinput"
                    required
                    value={transactionName}
                    defaultValue="Enter transaction name"
                    onClick={(e) => setName("")}
                    onChange={(e) => setName(e.target.value)}
                />
                <form className="tagselect">
                    <label for="category">
                        <select className="taginput" name="expensetype" id="category"
                        onChange={(e) => setCategory(e.target.value)}>
                            <option value="Select">Type of expense</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Bills">Rent and utilities</option>
                            <option value="Travel">Transport</option>
                            <option value="Other">Other expense</option>
                        </select>
                    </label>
                </form>
            </div>
            <div className="submitlog" onClick={submit}>
                <h4>Log Transaction</h4>
            </div>
        </div>
    );
}

export default LogTransaction;