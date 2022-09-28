// import CounterReducer from "./reducer/CounterReducer.js";
// import User from "./reducer/User.js";
// import MemoParent from "./memo/MemoParent.js";
import ParentForm from "./form/ParentForm.js";
import ModalParent from "./forwardRef/ModalParent.js";
import StateProvider from "./context/StateProvider.js";
import StateConsumer from "./context/StateConsumer.js";
import UserContainer from "./container-component/UserContainer.js";

function App() {
    return (
        <div className="App container">
            <ParentForm />
            <ModalParent />
            <StateProvider>
                <StateConsumer />
            </StateProvider>

            <UserContainer />
            
            {/* <MemoParent /> */}
            {/* <CounterReducer /> */}
            {/* <User /> */}
        </div>
    );
}

export default App;
