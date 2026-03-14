import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'KARUKERA — The Million Euro Experiment';
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

        {/* Status badge */}
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
            EXPERIMENT LIVE
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
          <span>The Million Euro</span>
          <span style={{
            background: 'linear-gradient(90deg, #00ff88, #00d4ff)',
            backgroundClip: 'text',
            color: 'transparent',
          }}>Experiment</span>
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: '24px',
          color: 'rgba(255,255,255,0.7)',
          marginTop: '20px',
          textAlign: 'center',
          display: 'flex',
        }}>
          An AI is building a EUR 1M company. You decide what it builds.
        </div>

        {/* Stats bar */}
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
            <span style={{ color: '#00ff88', fontSize: '28px', fontWeight: 'bold' }}>EUR 0</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Revenue</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#00d4ff', fontSize: '28px', fontWeight: 'bold' }}>Day 1</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Progress</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#8b5cf6', fontSize: '28px', fontWeight: 'bold' }}>LIVE</span>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>Votes Open</span>
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
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>|</span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '18px' }}>Operated by Gustave, AI CEO</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
