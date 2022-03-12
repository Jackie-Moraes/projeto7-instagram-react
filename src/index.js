import ReactDOM from 'react-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const divRoot = document.querySelector(".root");

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

ReactDOM.render(App(), divRoot);