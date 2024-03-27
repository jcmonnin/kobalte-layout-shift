import type { Component } from 'solid-js';
import { Checkbox } from './Checkbox';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <>
      <header class={styles.toolbar}>
        Header
      </header>
      <main class={styles.main}>
        <div class={styles.filler}>
          Content
        </div>
        <div>
          <Checkbox />
        </div>
      </main>
    </>
  );
};

export default App;