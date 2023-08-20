"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import address from "../../../../../assets/contract_data/address.json";
import abi from '../../../../../assets/contract_data/abi.json';
import { useContractRead } from 'wagmi';
import Header from '@/components/Header';



const TransactionHistory = () => {

  const [isLoading,setLoading] = useState(true);

  const [userId,setId] = useState();

  
  
  useEffect(() => {
    const data = JSON.parse(localStorage.userInfo).data;
    console.log("inside transaction history",data)
    setId(data._id);
    setLoading(false);
  },[])

  const { loading, data, error } = useContractRead({
    address: address?.address,
    abi: abi?.abi,
    functionName: "getParticipantDetails",
    args: [userId]
  });

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
              <>
                {loading ? (
                  <div>Loading....</div>
                      ) : error ? (
                        <div>Error: {error.message}</div>
                      ) : (
                        <>
                        <div>
                        <h2 className="text-3xl font-bold mb-4">
                          Current Balance: {data.balance}
                        </h2>
                        <div className="space-y-4">
                          {data.history.reverse().map((txn, index) => (
                            <Link href={`/user/supercoin`} key={index}>
                              <div className={`flex justify-between items-center border-b pb-4`}>
                                <div className="flex flex-col">
                                  <div className="text-black">{txn.desc}</div>
                                  <div className="text-gray-500">Transaction on date: {new Date(txn.timestamp).getDate()}-{new Date(txn.timestamp).getMonth() + 1}-{new Date(txn.timestamp).getFullYear()}</div>
                                </div>
                                <div className="bg-gray-500 px-2 py-1 rounded">{Number(txn.balance_after)-Number(txn.balance_before)}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                        </div>
                        <button onClick={()=>{console.log(data)}}>See Details</button>
                        </>
                    )}
              </>
            )
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;