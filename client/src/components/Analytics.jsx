import { Progress } from 'antd'

import React from 'react'

const Analytics = ({allTransaction}) => {


  // categories 

  const categories = [
    "salary",
    "tip",
    "project",
    "food",
    "movie",
    "bills",
    "medical",
    "fee",
    "tax",
  ];

    // total transactions 
    const totalTransaction = allTransaction.length
    const totalIncomeTransactions = allTransaction.filter(transaction => transaction.type === "income")
    const totalExpenseTransactions = allTransaction.filter(transaction => transaction.type === "expense")
    const totalIncomePercent = ( totalIncomeTransactions.length / totalTransaction) * 100
    const totalExpensePercent = ( totalExpenseTransactions.length / totalTransaction) * 100

    // total turnover 
    const totalTurnover = allTransaction.reduce((acc,transaction) => acc + transaction.amount,0);

    const totalIncomneTurnover = allTransaction.filter(transaction => transaction.type === "income").reduce((acc , transaction) => acc + transaction.amount,0 )


    const totalExpenseTurnover = allTransaction.filter(transaction => transaction.type === "expense").reduce((acc,transaction) => acc + transaction.amount,0 )


    const totalIncomneTurnoverPercent = (totalIncomneTurnover / totalTurnover) * 100;
    const totalExpenseTurnoverPercent = (totalExpenseTurnover / totalTurnover) * 100;


  return (
    <div>
    <div className='container-fluid'>
      <div className=" mt-2 text-center">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Total Transactions : {totalTransaction}
              </div>

              <div className="card-body">
                <h5 className="text-success">
                  Income : {totalIncomeTransactions.length}
                </h5>
                <h5 className="text-danger">
                  Expense : {totalExpenseTransactions.length}
                </h5>
              </div>

              <div className="m-5">
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalIncomePercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalExpensePercent.toFixed(0)}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                Total turnover : {totalTurnover}
              </div>

              <div className="card-body">
                <h5 className="text-success">
                  Income : {totalIncomneTurnover}
                </h5>
                <h5 className="text-danger">
                  Expense : {totalExpenseTurnover}
                </h5>
              </div>

              <div className="m-5">
                <Progress
                  type="circle"
                  strokeColor={"green"}
                  className="mx-2"
                  percent={totalIncomneTurnoverPercent.toFixed(0)}
                />
                <Progress
                  type="circle"
                  strokeColor={"red"}
                  className="mx-2"
                  percent={totalExpenseTurnoverPercent.toFixed(0)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 text-center">
        <div className="row">
          <div className="col-md-6 ">
            <h4>CategoryWise Income</h4>
            {categories.map((category) => {
              const amount = allTransaction
                .filter(
                  (transaction) =>
                    transaction.type === "income" &&
                    transaction.category === category
                )
                .reduce((acc, transaction) => acc + transaction.amount, 0);
              return (
                amount > 0 && (
                  <div className="card">
                    <div className="card-body">
                      <h5>{category}</h5>
                      <Progress
                        percent={((amount/totalIncomneTurnover) * 100).toFixed(0)}
                      />
                    </div>
                  </div>
                )
              );
            })}
          </div>

          <div className="col-md-6 h-100">
          <h4>CategoryWise Expense</h4>
          {categories.map((category) => {
            const amount = allTransaction
              .filter(
                (transaction) =>
                  transaction.type === "expense" &&
                  transaction.category === category
              )
              .reduce((acc, transaction) => acc + transaction.amount, 0);
            return (
              amount > 0 && (
                <div className="card">
                  <div className="card-body">
                    <h5>{category}</h5>
                    <Progress
                      percent={((amount/totalExpenseTurnover) * 100).toFixed(0)}
                    />
                  </div>
                </div>
              )
            );
          })}
        </div>
        </div>
      </div>
      
    </div>
    </div>
  );
}

export default Analytics
