import { useState, useEffect } from "react";
import data from './data/db.json';
import Navbar from "./Navbar";

const TransactionHistory = () => {
    const [transactionList, setTransactionsList] = useState(() => {
        const localValue = localStorage.getItem("transactions")
        if (localValue == null) return []
        return JSON.parse(localValue)
    })

    if (!transactionList[0]) {
        return (
            <><Navbar />
                <div className="transactionhistory">
                    <h2>Transaction History</h2>
                    <h2 style={{color: "#666666", fontSize: 30}}>You currently have no transactions.</h2>
                </div>
            </>
        )
    } else {
        return (
            <><Navbar />
                <div className="transactionhistory">
                    <h2>Transaction History</h2>
                    <div className="transactionlist">
                        <div className="transactioninformation">
                            <p style={{color: "#666666"}}>Date</p>
                            <p style={{color: "#666666"}}>Title</p>
                            <p style={{color: "#666666"}}>Amount</p>
                            <p style={{color: "#666666"}}>Tag</p>
                        </div>
                        {transactionList.map(transaction => (
                            <div className="transaction" key={transaction.id}>
                                <div className="transactioninformation">
                                    <p>{transaction.date}</p>
                                    <p>{transaction.title}</p>
                                    <p>{'$' + transaction.total}</p>
                                    <p>{transaction.tag}</p>
                                </div>
                            </div>))}
                    </div>
                </div>
            </>
        );
    }
}

export default TransactionHistory;