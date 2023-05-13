function App({ children }) {
  return (
    <section className='border-green-500 border-2 m-2 p-2 min-h-screen'>
      <h3>Home Page</h3>
      {children}
    </section>
  );
}

export default App;
