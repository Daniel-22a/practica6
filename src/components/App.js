import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import About from "./About";


function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element = {<Home />} />
                    <Route path="/about" element = {<About />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;



