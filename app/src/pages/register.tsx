function RegisterPage() {
  return (
    <div className={styles.container}>
      <AsideMenu />
      <section className={styles.content}>
        <h2 className={styles.title}>
          <span>Alunos</span>
          <button type="button">Voltar</button>
        </h2>

        <form action="post">
          <div>
            <p className={styles.inputGroup}>
              <label className={styles.inputText}>
                nome completo
                <input type="text" />
              </label>
              <label className={styles.inputText}>
                turma
                <input type="text" />
              </label>
            </p>
            <p className={styles.inputGroup}>
              <label className={styles.inputNumber}>
                idade
                <input type="text" />
              </label>
            </p>
          </div>
          <p className={styles.inputGroup}>
            <button type="submit">Salvar</button>
          </p>
        </form>
      </section>
    </div>
  );
}

export default RegisterPage;
