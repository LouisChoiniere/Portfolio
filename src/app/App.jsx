import Contact from './components/contact/contact.component';
import Header from './components/header/header.component';
import Hello from './components/hello/hello.component';
import Projects from './components/projects/projects.component';
import Resume from './components/resume/resume.component';

import './App.scss';

const App = () => {
    return (<>
        <Header />
        <Hello />
        <hr />
        <Resume />
        <hr />
        <Projects />
        <hr />
        <Contact />
    </>);
}

export default App;