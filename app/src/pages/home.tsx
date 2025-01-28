function HomePage() {
  return (
    <>
      <NavBar />
      <section className={styles.section}>
        <SectionHeader
          sectionTitle="Alunos"
          buttonTitle="Criar Registro"
          ref={sectionTitleRef}
        />
        <Table />
      </section>
    </>
  );
}

export default HomePage;
