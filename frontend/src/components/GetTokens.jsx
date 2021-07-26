import React from "react";
import {ethers} from "ethers";
import {CONTRACT_ADDRESS, ExampleToken} from "../constants";

export const GetTokens = () => {

    const getTokens = async () => {
        if (typeof window.ethereum === "undefined") {
            throw("Metamask is not installed");
        }
        const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ExampleToken.abi, signer);
        await contract.faucet(account[0], 1000)
    }


    return <button className="bg-yellow-300 rounded-2xl mx-2 px-2 p-2 mb-2 " onClick={getTokens}>Get EXP Tokens</button>

}