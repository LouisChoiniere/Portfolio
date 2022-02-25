import Contact from './components/contact/contact.component';
import Header from './components/header/header.component';
import Hello from './components/hello/hello.component';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';

import './App.scss';

const App = () => {
    return (<>
        <Header />
        <Hello />
        <hr />
        <Resume />
        <hr />
        <Portfolio />
        <hr />
        <Contact />
    </>
    );
}

export default App;