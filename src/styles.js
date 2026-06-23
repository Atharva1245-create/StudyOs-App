export const styles = {
  app: { display: 'flex', minHeight: '100vh', background: 'linear-gradient(135deg, #0F0F1A, #1A1A2E)', color: '#E5E7EB', fontFamily: 'sans-serif' },
  main: { flex: 1, padding: '30px', overflowY: 'auto' },
  sidebar: { display: 'flex', flexDirection: 'column', width: '240px', padding: '25px', background: 'rgba(255,255,255,0.02)', backdropFilter: 'blur(15px)', borderRight: '1px solid rgba(255,255,255,0.05)' },
  link: { display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 15px', margin: '10px 0', borderRadius: '10px', textDecoration: 'none', color: '#A78BFA', fontWeight: 'bold', transition: '0.3s' },
  banner: { background: 'linear-gradient(135deg, #8B5CF6, #6D28D9)', borderRadius: '20px', padding: '30px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 10px 30px rgba(139, 92, 246, 0.2)', marginBottom: '30px' },
  gridCard: { background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '20px', padding: '25px' },
  dashboardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px', marginBottom: '25px' },
  weeklyGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '15px', marginTop: '20px' },
  dayBox: { background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '15px', padding: '15px', textAlign: 'center', transition: '0.2s', position: 'relative' },
  button: { padding: '8px 12px', borderRadius: '8px', border: 'none', background: '#8B5CF6', color: 'white', cursor: 'pointer', fontWeight: 'bold', margin: '0 5px', transition: '0.2s' },
  inputGroup: { display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' },
  input: { flex: 1, padding: '10px 15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none' },
  textarea: { width: '100%', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.2)', color: 'white', outline: 'none', minHeight: '120px', resize: 'vertical', marginTop: '10px', marginBottom: '15px' },
  deleteBtn: { background: 'transparent', border: 'none', color: '#EF4444', cursor: 'pointer', fontSize: '12px', marginTop: '10px' },
  // NEW STYLES FOR LOGIN
  loginContainer: { height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0F0F1A, #1A1A2E)' },
  loginBox: { background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', padding: '50px', borderRadius: '20px', width: '100%', maxWidth: '400px', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }
};