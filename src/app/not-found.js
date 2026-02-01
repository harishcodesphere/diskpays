'use client';

import Link from 'next/link';
import Header from '@/components/Header';

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="main-content" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 'calc(100vh - 200px)',
                    textAlign: 'center',
                    padding: '2rem'
                }}>
                    <div style={{
                        fontSize: '8rem',
                        fontWeight: '700',
                        background: 'var(--gradient-red)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1,
                        marginBottom: '1rem'
                    }}>
                        404
                    </div>

                    <h1 style={{
                        fontSize: '2rem',
                        marginBottom: '1rem',
                        color: 'var(--color-text-primary)'
                    }}>
                        Page Not Found
                    </h1>

                    <p style={{
                        color: 'var(--color-text-secondary)',
                        maxWidth: '500px',
                        marginBottom: '2rem'
                    }}>
                        The page you're looking for doesn't exist or has been moved.
                        Let's get you back on track.
                    </p>

                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link href="/" className="btn btn-primary">
                            Go to Home
                        </Link>
                        <Link href="/quick-start" className="btn btn-secondary">
                            Quick Start Guide
                        </Link>
                    </div>

                    <div style={{
                        marginTop: '3rem',
                        padding: '1.5rem',
                        background: 'var(--glass-bg)',
                        borderRadius: '16px',
                        border: '1px solid var(--glass-border)',
                        maxWidth: '400px'
                    }}>
                        <h4 style={{ marginTop: 0, marginBottom: '1rem' }}>Popular Pages</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <Link href="/disk-transact" style={{ color: 'var(--color-red)', fontSize: '0.9rem' }}>
                                → Disk Transact API
                            </Link>
                            <Link href="/authentication" style={{ color: 'var(--color-red)', fontSize: '0.9rem' }}>
                                → Authentication
                            </Link>
                            <Link href="/error-codes" style={{ color: 'var(--color-red)', fontSize: '0.9rem' }}>
                                → Error Codes
                            </Link>
                            <Link href="/spin" style={{ color: 'var(--color-red)', fontSize: '0.9rem' }}>
                                → SPIn Integration
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
