import { useState, useEffect } from "react";
import Navbar from "./Navbar";

const BudgetCalculator = () => {
    const [balance, setBalance] = useState(() => {
        const localValue = localStorage.getItem("BALANCE")
        if (localValue == null) return []
        return JSON.parse(localValue)
    })
    const [inputValue, setValue] = useState();
    const [labelValue, setLabelValue] = useState();
    const [greetingMsg, setGreetingMsg] = useState("Good morning, user")
    const [calculatorMood, setCalculatorMood] = useState("calculator")
    const [balanceMood, setBalanceMood] = useState("balance")
    const [addButtonMood, setAddButtonMood] = useState("add_button")
    const [subtractButtonMood, setSubtractButtonMood] = useState("subtract_button")
    const [numinputMood, setNuminputMood] = useState("numinput")

    const addition = () => {
        if (!inputValue || inputValue === "Enter the amount") {
            setValue("Enter the amount");
        } else {
            setBalance(Number(balance) + Number(inputValue));
            setValue("Enter the amount");
        }
    }

    const subtraction = () => {
        if (!inputValue || inputValue === "Enter the amount") {
            setValue("Enter the amount");
        } else {
            setBalance(Number(balance) - Number(inputValue));
            setValue("Enter the amount");
        }
    }

    useEffect(() => {
        localStorage.setItem("BALANCE", JSON.stringify(balance))
        if (Number(balance) < 0) {
            document.body.style.backgroundImage = "radial-gradient(#C31313, #140000)";
            setCalculatorMood("calculator_evil")
            setBalanceMood("balance_evil")
            setGreetingMsg("You owe me money...")
            setAddButtonMood("add_button_evil")
            setSubtractButtonMood("subtract_button_evil")
            setNuminputMood("numinput_evil")
        } else {
            document.body.style.backgroundImage = null
            setGreetingMsg("Good morning, user")
            setCalculatorMood("calculator")
            setBalanceMood("balance")
            setAddButtonMood("add_button")
            setSubtractButtonMood("subtract_button")
            setNuminputMood("numinput")
        }
    }, [balance])

    return (
        <>
            <Navbar />
            <div className="container">
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
                        <div
                            className={addButtonMood}
                            onClick={addition}
                        >
                            <p>+</p>
                        </div>
                        <div
                            className={subtractButtonMood}
                            onClick={subtraction}
                        >
                            <p>-</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BudgetCalculator;