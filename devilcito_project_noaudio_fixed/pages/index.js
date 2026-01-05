import { useState } from "react";

export default function Home() {
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
  };

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        fontSize: '50px',
        textShadow: '0 0 20px red'
      }}>DEVILCITO</h1>

      <img src="/portada.jpg" alt="Portada DEVILCITO" style={{
        width: '300px',
        marginTop: '20px',
        border: '2px solid red'
      }} />

      {!started && (
        <button onClick={handleStart} style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '18px',
          cursor: 'pointer',
          backgroundColor: 'red',
          color: 'white',
          border: 'none'
        }}>START</button>
      )}

      {started && <p style={{ marginTop: '20px', fontSize: '18px' }}>¡Bienvenido al álbum! 😈</p>}
    </div>
  )
}
