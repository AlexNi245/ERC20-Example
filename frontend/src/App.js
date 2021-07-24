
import ExampleToken from './artifacts/contracts/ExampleToken.sol/ExampleToken.json'
import {Faucet} from "./components/Faucet.jsx"
import {SendToken} from "./components/SendToken";
import {Header} from "./components/Header";

function App() {

    const {abi} = ExampleToken;

    return (
        <div className="App bg-yellow-50 h-screen">
            <Header/>

                <div className="flex flex-col h-full items-center justify-center ">
                    <SendToken abi={abi}/>
            </div>

        </div>
    );
}

export default App;
