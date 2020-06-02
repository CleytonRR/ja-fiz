import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Main from './Main';
import { useStorageState } from 'react-storage-hooks';
import { ThemeProvider } from 'styled-components';

const THEMES = {
  dark: {
    background: '#3e3e3e',
    text: '#fff',
    categoryColor: '#fff',
  },
  light: {
    background: '#fff',
    text: '#333',
    categoryColor: '#929db6',
  },
};

const App = () => {
  const [tasks, setTasks] = useStorageState(localStorage, 'ja-fiz:db', []);

  const [darkTheme, setDarkTheme] = useStorageState(
    localStorage,
    'ja-fiz:theme',
    false
  );
  return (
    <ThemeProvider theme={THEMES[darkTheme ? 'dark' : 'light']}>
      <>
        <Header onToggleDarkTheme={() => setDarkTheme(!darkTheme)} />
        <Banner
          onNewTask={(t) => {
            setTasks([...tasks, t]);
          }}
        />
        <Main
          tasks={tasks}
          onNewTaskDone={(taskId, log) => {
            setTasks([
              ...tasks.map((t) => {
                if (t.id !== taskId) {
                  return t;
                }
                return { ...t, logs: [...t.logs, log] };
              }),
            ]);
          }}
          onRemoveTask={(taskId) => {
            if (!window.confirm('Tem certeza?')) {
              return;
            }
            setTasks([...tasks.filter((t) => t.id !== taskId)]);
          }}
        />
      </>
    </ThemeProvider>
  );
};

export default App;
