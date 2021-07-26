import ExampleToken from './artifacts/contracts/ExampleToken.sol/ExampleToken.json'
import {SendToken} from "./components/SendToken";
import {Header} from "./components/Header";
import {Description} from "./components/Description";

function App() {

    const {abi} = ExampleToken;

    return (
        <div className="App bg-yellow-50 h-screen font-sans">
            <Header/>

            <div className="flex flex-col h-full items-center justify-center ">
                <Description/>
                <SendToken abi={abi}/>
            </div>

        </div>
    );
}

export default App;
