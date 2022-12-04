import axios from "axios";
// import CounterReducer from "./reducer/CounterReducer.js";
// import User from "./reducer/User.js";
// import MemoParent from "./memo/MemoParent.js";
import ParentForm from "./form/ParentForm.js";
import ModalParent from "./forwardRef/ModalParent.js";
import StateProvider from "./context/StateProvider.js";
import StateConsumer from "./context/StateConsumer.js";
import UserContainer from "./container-component/UserContainer.js";
import DataSource from "./container-component/DataSource.jsx";
import useAxios from "./custom-hooks/useAxios.jsx";
// ----
import MemoParent from "./memo/MemoParent.js";
import { MemoChild } from "./memo/MemoChild.js";
// ----

function App() {
    const { data, isLoading, error } = useAxios("https://jsonplaceholder.typicode.com/users")
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
            <hr />
            <div className="container border">
                <h4>MEMO stop rendering</h4>
                <MemoParent>
                    <MemoChild />
                </MemoParent>
            </div>
        </div>
    );
}

export default App;
