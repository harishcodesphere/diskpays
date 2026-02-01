'use client';

import Header from '@/components/Header';
import Link from 'next/link';

export default function QuickStartPage() {
    return (
        <>
            <Header />

            <main className="main-wrapper">
                <div className="main-content">
                    <div className="content-container">
                        {/* Breadcrumbs */}
                        <nav className="breadcrumbs">
                            <span className="breadcrumb-item">Docs</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Quick Start</span>
                        </nav>

                        {/* Page Header */}
                        <header className="page-header">
                            <h1 className="page-title">Quick Start Guide</h1>
                            <p className="page-description">
                                Get up and running with DiskPays in under 5 minutes. Choose your integration
                                path and start accepting payments today.
                            </p>
                        </header>

                        {/* Progress Steps */}
                        <section id="setup">
                            <h2>Setup Steps</h2>

                            <div style={{
                                display: 'grid',
                                gap: '1.5rem',
                                margin: '2rem 0'
                            }}>
                                {/* Step 1 */}
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'var(--gradient-red)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: '700',
                                        fontSize: '1.25rem',
                                        color: 'var(--color-bg-primary)',
                                        flexShrink: 0
                                    }}>1</div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Create Your Account</h3>
                                        <p style={{ margin: 0, marginBottom: '1rem' }}>
                                            Sign up for a DiskPays merchant account. You'll receive your credentials
                                            within 24 hours after verification.
                                        </p>
                                        <button onClick={() => alert('Account signup coming soon! Contact sales@diskpays.com for merchant accounts.')} className="btn btn-primary">
                                            Create Account →
                                        </button>
                                    </div>
                                </div>

                                {/* Step 2 */}
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'var(--gradient-red)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: '700',
                                        fontSize: '1.25rem',
                                        color: 'var(--color-bg-primary)',
                                        flexShrink: 0
                                    }}>2</div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Get Your API Keys</h3>
                                        <p style={{ margin: 0, marginBottom: '1rem' }}>
                                            Log into the DiskPays Portal and navigate to <strong>Settings → API Keys</strong>
                                            to generate your authentication token.
                                        </p>
                                        <div style={{
                                            background: 'var(--color-bg-tertiary)',
                                            border: '1px solid var(--color-border)',
                                            borderRadius: '8px',
                                            padding: '1rem',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.85rem'
                                        }}>
                                            <div style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>// Your credentials</div>
                                            <div><span style={{ color: 'var(--color-red)' }}>Merchant ID:</span> 139322815010</div>
                                            <div><span style={{ color: 'var(--color-red)' }}>API Token:</span> sk_live_xxxxx...</div>
                                            <div><span style={{ color: 'var(--color-red)' }}>TPN:</span> 123456789012</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3 */}
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'var(--gradient-red)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: '700',
                                        fontSize: '1.25rem',
                                        color: 'var(--color-bg-primary)',
                                        flexShrink: 0
                                    }}>3</div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Choose Your Integration</h3>
                                        <p style={{ margin: 0, marginBottom: '1rem' }}>
                                            Select the integration method that best fits your business needs:
                                        </p>

                                        <div style={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                            gap: '1rem'
                                        }}>
                                            <Link href="/hosted-payment-page" style={{
                                                padding: '1rem',
                                                background: 'rgba(255, 26, 26, 0.1)',
                                                border: '1px solid rgba(255, 26, 26, 0.3)',
                                                borderRadius: '12px',
                                                textDecoration: 'none',
                                                transition: 'var(--transition-fast)'
                                            }}>
                                                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Hosted Payment Page</div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                                    Fastest setup, no coding
                                                </div>
                                            </Link>

                                            <Link href="/freedom-to-design" style={{
                                                padding: '1rem',
                                                background: 'rgba(255, 26, 26, 0.1)',
                                                border: '1px solid rgba(255, 26, 26, 0.3)',
                                                borderRadius: '12px',
                                                textDecoration: 'none',
                                                transition: 'var(--transition-fast)'
                                            }}>
                                                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Freedom to Design</div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                                    Custom checkout, JS SDK
                                                </div>
                                            </Link>

                                            <Link href="/spin" style={{
                                                padding: '1rem',
                                                background: 'rgba(255, 26, 26, 0.1)',
                                                border: '1px solid rgba(255, 26, 26, 0.3)',
                                                borderRadius: '12px',
                                                textDecoration: 'none',
                                                transition: 'var(--transition-fast)'
                                            }}>
                                                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>SPIn API</div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                                    POS terminal integration
                                                </div>
                                            </Link>

                                            <Link href="/disk-transact" style={{
                                                padding: '1rem',
                                                background: 'rgba(255, 26, 26, 0.1)',
                                                border: '1px solid rgba(255, 26, 26, 0.3)',
                                                borderRadius: '12px',
                                                textDecoration: 'none',
                                                transition: 'var(--transition-fast)'
                                            }}>
                                                <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Disk Transact API</div>
                                                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                                    Direct API integration
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 4 */}
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'var(--gradient-red)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: '700',
                                        fontSize: '1.25rem',
                                        color: 'var(--color-bg-primary)',
                                        flexShrink: 0
                                    }}>4</div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Test in Sandbox</h3>
                                        <p style={{ margin: 0, marginBottom: '1rem' }}>
                                            Use the sandbox environment to test your integration before going live.
                                            All sandbox transactions are simulated.
                                        </p>
                                        <div style={{
                                            background: 'var(--color-bg-tertiary)',
                                            border: '1px solid var(--color-border)',
                                            borderRadius: '8px',
                                            padding: '1rem',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.85rem'
                                        }}>
                                            <div style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>// Sandbox endpoints</div>
                                            <div><span style={{ color: 'var(--color-red)' }}>API:</span> https://sandbox.diskpays.com/api/v3</div>
                                            <div><span style={{ color: 'var(--color-red)' }}>Portal:</span> https://sandbox.diskpays.com/portal</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 5 */}
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        background: 'var(--color-success)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: '700',
                                        fontSize: '1.25rem',
                                        color: 'var(--color-bg-primary)',
                                        flexShrink: 0
                                    }}>✓</div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Go Live!</h3>
                                        <p style={{ margin: 0, marginBottom: '1rem' }}>
                                            Once testing is complete, switch your endpoints from sandbox to production
                                            and start accepting real payments.
                                        </p>
                                        <div style={{
                                            background: 'var(--color-bg-tertiary)',
                                            border: '1px solid var(--color-border)',
                                            borderRadius: '8px',
                                            padding: '1rem',
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.85rem'
                                        }}>
                                            <div style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>// Production endpoints</div>
                                            <div><span style={{ color: 'var(--color-success)' }}>API:</span> https://api.diskpays.com/api/v3</div>
                                            <div><span style={{ color: 'var(--color-success)' }}>Portal:</span> https://portal.diskpays.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Test Cards */}
                        <section id="test-cards">
                            <h2>Test Card Numbers</h2>
                            <p>
                                Use these test card numbers in the sandbox environment:
                            </p>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Card Number</th>
                                            <th>Brand</th>
                                            <th>Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>4242 4242 4242 4242</code></td>
                                            <td>Visa</td>
                                            <td><span className="badge badge-success">Approved</span></td>
                                        </tr>
                                        <tr>
                                            <td><code>5555 5555 5555 4444</code></td>
                                            <td>Mastercard</td>
                                            <td><span className="badge badge-success">Approved</span></td>
                                        </tr>
                                        <tr>
                                            <td><code>3782 822463 10005</code></td>
                                            <td>Amex</td>
                                            <td><span className="badge badge-success">Approved</span></td>
                                        </tr>
                                        <tr>
                                            <td><code>4000 0000 0000 0002</code></td>
                                            <td>Visa</td>
                                            <td><span className="badge badge-error">Declined</span></td>
                                        </tr>
                                        <tr>
                                            <td><code>4000 0000 0000 9995</code></td>
                                            <td>Visa</td>
                                            <td><span className="badge badge-warning">Insufficient Funds</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                Use any future expiration date (e.g., 12/30) and any 3-digit CVV (or 4-digit for Amex).
                            </p>
                        </section>

                        {/* Need Help */}
                        <section id="help">
                            <h2>Need Help?</h2>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '1rem',
                                margin: '1.5rem 0'
                            }}>
                                <div className="card">
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📚</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Documentation</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0, marginBottom: '1rem' }}>
                                        Explore our comprehensive API reference and guides.
                                    </p>
                                    <Link href="/disk-transact" style={{ color: 'var(--color-red)' }}>
                                        View API Docs →
                                    </Link>
                                </div>

                                <div className="card">
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>💬</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Developer Support</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0, marginBottom: '1rem' }}>
                                        Get help from our technical support team.
                                    </p>
                                    <a href="mailto:devsupport@diskpays.com" style={{ color: 'var(--color-red)' }}>
                                        Contact Support →
                                    </a>
                                </div>

                                <div className="card">
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📞</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Phone Support</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0, marginBottom: '1rem' }}>
                                        Call us 24/7 for urgent issues.
                                    </p>
                                    <a href="tel:+18773586797" style={{ color: 'var(--color-red)' }}>
                                        (877) 358-6797 →
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Navigation */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '3rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--color-border)'
                        }}>
                            <a href="/" className="btn btn-ghost">
                                ← Home
                            </a>
                            <a href="/authentication" className="btn btn-ghost">
                                Authentication →
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
