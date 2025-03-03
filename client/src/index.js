/* import '@fortawesome/fontawesome-free/css/all.css'; */ //entfällt ersatz durch laden über cdn in index html
import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import './css/style.css';

new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();
