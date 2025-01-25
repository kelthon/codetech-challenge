import styles from './menu.module.css';

export function AsideMenu() {
  return (
    <aside className={styles.aside}>
      <section className={styles.section}>
        <hgroup>
          <h2 className={styles.title}>Codetech</h2>
          <p>desenvolvimento de sistemas</p>
        </hgroup>
        <nav>
          <ul>
            <li>Alunos</li>
          </ul>
        </nav>
      </section>
      <footer className={styles.footer}>
        desenvolvido por <strong>Kelthon</strong>, Codetech
      </footer>
    </aside>
  );
}
