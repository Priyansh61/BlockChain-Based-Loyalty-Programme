"use client";

import Header from '@/components/Header';
import Link from 'next/link';
import React, { useState } from 'react';

const transactions = [
  { status: 'credited', date: '2023-08-15', amount: -100 },
  { status: 'debited', date: '2023-08-14', amount: 200 },
];

const TransactionHistory = () => {
  const balance = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  const [isLoading,setLoading] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <Header/>
      <div className="bg-gray-100 py-12 px-8">
        <div className="container mx-auto bg-white border border-gray-300 shadow-lg rounded-lg p-8 w-70">
          <h2 className="text-3xl font-semibold mb-8">SuperCoin Transaction History</h2>
          <div>
          {
            isLoading?(<div>Loading....</div>):
            (
              <div className="space-y-4">
                  {transactions.map((txn, index) => (
                    <Link href={`/user/supercoin`} key={index}>
                    <div className={`flex justify-between items-center border-b pb-4`}>
                      <div className="flex flex-col">
                        <div className="text-black">Transaction {index + 1}</div>
                        <div className="text-gray-500">Transaction on date: {txn.date}</div>
                      </div>
                      <div className="bg-gray-500 px-2 py-1 rounded">
                        {txn.amount}
                      </div>
                    </div>
                    </Link>
                  ))}
              </div>
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
