"use client";

import axios from 'axios';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import ToLoyalCustomer from '@/components/ContractFunctions/ToLoyalCustomers';
import Header from '@/components/Header';

const loyalcustomers = () => {
    const [threshold,setThreshold] = useState(0);
    const [seller,setSeller] = useState();
    const [sellerId,setSellerId] = useState();
    const [customers,setCustomers] = useState();
    const [customerId,setCustomerId] = useState([]);
    const [isLoading,setLoading] = useState(true);
    const [coins,setCoins] = useState(1);


    useEffect(() => {
        const data = JSON.parse(localStorage.userInfo).data;
        setSeller(data);
        setSellerId(data._id);
    },[])

    const router = useRouter();

    const submitHandler = async(e) => {
        // console.log(`inside the func`);
        e.preventDefault();
        if(!threshold ) {
            console.log(`fill the fields`);
            return;
        }
        const config = {
            headers: {
              "Content-type": "application/json",
              "Authorization": `Bearer ${seller.token}`,
            },
        };
        try{
            const data   = await axios.post(
                "http://localhost:5000/api/seller/loyalcustomers",
                { sellerId, threshold },
                config
            );
            // console.log(data.data);
            setCustomers(data.data);

            data.data.map(element => {
                customerId.push(element.buyerId);
            });

            // console.log(customerId);
            setLoading(false);
            // router.push('/seller');
        } catch(error) {
            console.log(error);
        }
    }


    return (
        <div className="bg-gray-100 min-h-screen">
            <Header/>
            <div className="bg-gray-100 py-12 px-8">
                <div className="container mx-auto bg-white border border-gray-300 shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-semibold mb-8">Loyal Customers</h2>
                    <div className="mb-8">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Threshold Loyalty</label>
                        <input
                            placeholder='Minimum Loyalty'
                            onChange={(e) => {setThreshold(e.target.value)}}
                            type="number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mb-8">
                        <label className="block text-gray-700 text-sm font-medium mb-2">Threshold Loyalty</label>
                        <input
                            placeholder='Number of Coins'
                            onChange={(e) => {setCoins(e.target.value)}}
                            type="number"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className="mt-8">
                        <button
                            type="submit"
                            onClick={submitHandler}
                            className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Filter Customers
                        </button>
                        <span className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <ToLoyalCustomer users={customerId} sellerId={sellerId} coins={Number(coins)} timestamp={Date.now()} />
                        </span>
                        {/* <button onClick={()=>{console.log(customerId)}} >see customerId</button> */}
                    </div>
                </div>
            </div>
            <div id='customer-list' className="bg-slate-700 p-4">
                {
                    isLoading ? (
                        <div>Loading......</div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {customers.map((e) => (
                                <div key={e.buyerId} className="bg-white p-4 rounded-lg shadow">
                                    <div className="text-xl font-semibold mb-2">{e.buyer?.name}</div>
                                    <div className="text-lg">{e.loyalty} Loyalty</div>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default loyalcustomers;