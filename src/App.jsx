import Student from './student.jsx'

function App() {
  return(
    <>
      <Student name="Spongbob" age={30} isStudent={true}/>
      <Student name="Patric" age={42} isStudent={false}/>
      <Student name="Sandy" age={27} isStudent={true}/>
      <Student name="Handry" age={50} isStudent={false}/>
      <Student/>
    </>
  );
}

export default App
