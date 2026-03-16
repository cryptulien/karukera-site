import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'KARUKERA — Julien Lelandais';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2f 50%, #0a0a0f 100%)',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          display: 'flex',
        }} />

        {/* Badge */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(0,255,136,0.1)',
          border: '1px solid rgba(0,255,136,0.3)',
          borderRadius: '20px',
          padding: '8px 20px',
          marginBottom: '30px',
        }}>
          <div style={{
            width: '8px', height: '8px',
            borderRadius: '50%',
            background: '#00ff88',
            display: 'flex',
          }} />
          <span style={{ color: '#00ff88', fontSize: '16px', letterSpacing: '2px' }}>
            PORTFOLIO
          </span>
        </div>

        {/* Title */}
        <div style={{
          fontSize: '72px',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
          lineHeight: 1.1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
          <span>Julien Lelandais</span>
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: '28px',
          marginTop: '20px',
          textAlign: 'center',
          display: 'flex',
        }}>
          <span style={{
            background: 'linear-gradient(90deg, #00ff88, #00d4ff)',
            backgroundClip: 'text',
            color: 'transparent',
          }}>Médecin, entrepreneur, builder.</span>
        </div>

        {/* Projects bar */}
        <div style={{
          display: 'flex',
          gap: '40px',
          marginTop: '40px',
          padding: '16px 32px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '12px',
          border: '1px solid rgba(255,255,255,0.1)',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#00ff88', fontSize: '22px', fontWeight: 'bold' }}>SuperPagr</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Santé · SaaS</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#00d4ff', fontSize: '22px', fontWeight: 'bold' }}>Le Lien</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Relation · Sens</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#8b5cf6', fontSize: '22px', fontWeight: 'bold' }}>Le Brasero</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Marque · Art de vivre</span>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}>karukera.xyz</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
