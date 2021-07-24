import React, {useState, useEffect} from "react";
import {ethers} from "ethers";
import {CONTRACT_ADDRESS, ExampleToken} from "../constants";
import {GetTokens} from "./GetTokens"

export const Header = () => {

    const [balance, setBalance] = useState(0);

    useEffect(() => {
        getBalance();
    })
    const getBalance = async () => {
        if (typeof window.ethereum === "undefined") {
            throw("Metamask is not installed");
        }

        const [account] = await window.ethereum.request({method: "eth_requestAccounts"})
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ExampleToken.abi, provider);
        const balance = await contract.balanceOf(account);

        setBalance(balance.toString());
        console.log(balance.toString())
    }
    return <div className="flex justify-between px-8 pt-4  ">
        <p className="text-2xl ">EXP Balance : {balance}</p>
        <GetTokens/>
    </div>
}