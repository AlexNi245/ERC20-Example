import React, {useState} from "react";
import {ethers} from "ethers";
import {CONTRACT_ADDRESS} from "../constants";


export const SendToken = ({abi}) => {

    const [destination, setDestination] = useState("");
    const [amount, setAmount] = useState("");

    const sendCoins = async () => {
        if (typeof window.ethereum === "undefined") {
            return
        }
        await window.ethereum.request({method: 'eth_requestAccounts'});
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, signer);
        const transaction = await contract.transfer(destination, amount);
        await transaction.wait()

    }

    return <div className="flex-col flex bg-white w-9/12 max-w-xl rounded-2xl p-2">
            <p className="px-4 pb-2 text-lg bg-white ">Send EXP Token</p>
            <div className="flex justify-between bg-gray-200 rounded-2xl  mx-2 px-2 py-4 ">
                <input
                    className="bg-gray-200 focus:outline-none text-right w-full block "
                    value={amount}
                    onChange={e => setAmount(e.target.value)}/>
            </div>
            <div className="flex justify-between bg-gray-200 rounded-2xl  mx-2 px-2 py-4 mt-2">
                <input
                    className="bg-gray-200 focus:outline-none text-right w-full block "
                    value={destination}
                    placeholder="Destination Address"
                    onChange={e => setDestination(e.target.value)}/>
            </div>
            <div className="m-2"></div>
            <button className="bg-yellow-300 rounded-2xl mx-2 px-2 p-2 mb-2 " onClick={sendCoins}>Send Coins</button>
        </div>

}