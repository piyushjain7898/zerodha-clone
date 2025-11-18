import React from 'react';
import { Link } from 'react-router-dom';

const Apps = () => {
  const apps = [
    {
      key: 'research',
      name: 'Research',
      desc: 'Market reports, analyst calls and idea flows to help you decide',
      icon: '📈',
    },
    {
      key: 'console',
      name: 'Console',
      desc: 'Account statements, tax, and reports in one place',
      icon: '📄',
    },
    {
      key: 'kite',
      name: 'Kite',
      desc: 'Fast trading platform with charts and order management',
      icon: '⚡',
    },
    {
      key: 'smallcase',
      name: 'Smallcase',
      desc: 'Curated portfolios for long term investing',
      icon: '🧩',
    },
    {
      key: 'coin',
      name: 'Coin',
      desc: 'Mutual funds and SIPs with instant KYC',
      icon: '🏦',
    },
  ];

  return (
    <>
      <h3 className="title">Apps</h3>

      <div className="apps-grid">
        {apps.map((a) => (
          <div className="app-col" key={a.key}>
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ fontSize: '1.6rem' }}>{a.icon}</div>
                <div>
                  <h4 style={{ margin: 0 }}>{a.name}</h4>
                  <p style={{ margin: '0.25rem 0 0', color: '#666' }}>{a.desc}</p>
                </div>
              </div>

              <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
                <Link className="btn btn-blue" to="#">Open</Link>
                <Link className="btn" to="#">Learn more</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Apps;