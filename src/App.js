import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Main from './Main';
import { useStorageState } from 'react-storage-hooks';

const App = () => {
  const [tasks, setTasks, writeError] = useStorageState(
    localStorage,
    'ja-fiz:db',
    []
  );
  return (
    <>
      <Header />
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
  );
};

export default App;
