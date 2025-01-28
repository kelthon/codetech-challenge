function AuthenticationPage() {
  return (
    <div className={styles.container}>
      <div className={styles.col}></div>
      <div className={styles.col}>
        <section className={styles.section}>
          <h1 className={styles.title}>Login</h1>
          <p className={styles.text}>entre com seu email e senha</p>
          <form method="post">
            <label className={styles.label}>
              <span>email</span>
              <input className={styles.input} type="text" name="email" />
            </label>
            <label className={styles.label}>
              <span>senha</span>
              <input className={styles.input} type="password" name="password" />
            </label>
            <button className={styles.btn} type="submit">
              Entrar
            </button>
          </form>
        </section>
        <footer className={styles.footer}>
          desenvolvido por <strong>Kelthon</strong>, Codetech
        </footer>
      </div>
    </div>
  );
}

export default AuthenticationPage;
