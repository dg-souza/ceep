import NoteList from './components/NoteList/NoteList'
import FormCadastro from './components/FormCadastro'
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <section>
        <FormCadastro />
        <NoteList />
      </section>
    )
  }
}

export default App;
