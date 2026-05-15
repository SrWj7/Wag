import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [novaNota, setNovaNota] = React.useState('');
  const [notas, setNotas] = React.useState([
    {
      titulo: 'Ideia de Projeto',
      texto: 'Criar uma plataforma de estudos baseada em inteligência artificial.',
    },
    {
      titulo: 'Livro para Ler',
      texto: 'Terminar leitura sobre arquitetura de software.',
    },
  ]);

  const [tarefas, setTarefas] = React.useState([
    {
      texto: 'Estudar React',
      concluida: true,
    },
    {
      texto: 'Criar layout do aplicativo',
      concluida: false,
    },
  ]);

  function adicionarNota() {
    if (novaNota.trim() === '') return;

    const nova = {
      titulo: 'Nova Nota',
      texto: novaNota,
    };

    setNotas([nova, ...notas]);
    setNovaNota('');
  }

  function alternarTarefa(index) {
    const lista = [...tarefas];
    lista[index].concluida = !lista[index].concluida;
    setTarefas(lista);
  }

  const cards = [
    {
      titulo: 'Notas Rápidas',
      descricao: 'Capture ideias, pensamentos e informações importantes.',
      emoji: '📝',
    },
    {
      titulo: 'Tarefas',
      descricao: 'Organize atividades e acompanhe seu progresso.',
      emoji: '✅',
    },
    {
      titulo: 'Objetivos',
      descricao: 'Defina metas pessoais e profissionais.',
      emoji: '🎯',
    },
    {
      titulo: 'Aprendizados',
      descricao: 'Armazene conteúdos, resumos e conhecimentos.',
      emoji: '📚',
    },
  ];

  return (
    <div className="container">
      <header className="header">
        <div>
          <h1>🧠 Segundo Cérebro</h1>
          <p>
            Organize pensamentos, tarefas, ideias e conhecimento em um só lugar.
          </p>
        </div>

        <button onClick={adicionarNota}>Adicionar Nota</button>
      </header>

      <section className="cards">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <div className="emoji">{card.emoji}</div>
            <h2>{card.titulo}</h2>
            <p>{card.descricao}</p>
          </div>
        ))}
      </section>

      <section className="new-note-section">
        <input
          type="text"
          placeholder="Digite uma nova anotação..."
          value={novaNota}
          onChange={(e) => setNovaNota(e.target.value)}
        />

        <button onClick={adicionarNota}>Salvar</button>
      </section>

      <section className="content">
        <div className="box">
          <h2>📌 Minhas Notas</h2>

          {notas.map((nota, index) => (
            <div className="note" key={index}>
              <h3>{nota.titulo}</h3>
              <p>{nota.texto}</p>
            </div>
          ))}
        </div>

        <div className="box">
          <h2>✅ Lista de Tarefas</h2>

          {tarefas.map((tarefa, index) => (
            <div className="task" key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={tarefa.concluida}
                  onChange={() => alternarTarefa(index)}
                />

                <span
                  style={{
                    textDecoration: tarefa.concluida
                      ? 'line-through'
                      : 'none',
                  }}
                >
                  {tarefa.texto}
                </span>
              </label>
            </div>
          ))}

          <div className="progress-item">
            <span>Progresso</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${
                    (tarefas.filter((t) => t.concluida).length /
                      tarefas.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
