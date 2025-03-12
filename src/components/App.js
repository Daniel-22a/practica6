import Home from "./Home";
import About from "./About";
import {Router} from "react-router-dom";

function App (){
    return(
        <Router>
            <Layout>
                <Routers>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routers>
            </Layout>
        </Router>
    );
}
export default App;