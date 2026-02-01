'use client';

import Header from '@/components/Header';

export default function MigratePage() {
    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="main-content">
                    <div className="content-container">
                        <nav className="breadcrumbs">
                            <span className="breadcrumb-item">Docs</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Getting Started</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Migrate to DiskPays</span>
                        </nav>

                        <header className="page-header">
                            <h1 className="page-title">Migrate to DiskPays</h1>
                            <p className="page-description">
                                Seamlessly transition from other payment processors. Import customer data,
                                migrate card tokens, and preserve transaction history.
                            </p>
                        </header>

                        <section>
                            <h2>Migration Process</h2>
                            <div style={{ display: 'grid', gap: '1.5rem', margin: '2rem 0' }}>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--gradient-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.25rem', color: '#fff', flexShrink: 0 }}>1</div>
                                    <div>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Token Migration Request</h3>
                                        <p style={{ margin: 0 }}>Contact our migration team to initiate the token transfer process from your existing processor.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--gradient-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.25rem', color: '#fff', flexShrink: 0 }}>2</div>
                                    <div>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Data Mapping</h3>
                                        <p style={{ margin: 0 }}>We map your existing customer tokens to DiskPays format while ensuring PCI compliance throughout.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--gradient-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.25rem', color: '#fff', flexShrink: 0 }}>3</div>
                                    <div>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Integration Testing</h3>
                                        <p style={{ margin: 0 }}>Test your integration with migrated tokens in our sandbox environment before going live.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--color-success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.25rem', color: '#000', flexShrink: 0 }}>✓</div>
                                    <div>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Go Live</h3>
                                        <p style={{ margin: 0 }}>Switch your production traffic to DiskPays with zero customer disruption.</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2>Supported Processors</h2>
                            <p>We support token migration from most major payment processors:</p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
                                {['Stripe', 'Square', 'Braintree', 'Authorize.net', 'PayPal', 'Worldpay', 'Adyen', 'First Data'].map(processor => (
                                    <div key={processor} className="card" style={{ textAlign: 'center', padding: '1rem' }}>
                                        <span style={{ fontWeight: '600' }}>{processor}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2>What Gets Migrated</h2>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr><th>Data Type</th><th>Supported</th><th>Notes</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Card Tokens</td><td><span className="badge badge-success">Yes</span></td><td>PCI-compliant token transfer</td></tr>
                                        <tr><td>Customer Profiles</td><td><span className="badge badge-success">Yes</span></td><td>Name, email, billing address</td></tr>
                                        <tr><td>Subscription Data</td><td><span className="badge badge-success">Yes</span></td><td>Recurring billing schedules</td></tr>
                                        <tr><td>Transaction History</td><td><span className="badge badge-warning">Partial</span></td><td>Report export available</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <div className="callout callout-info">
                            <div className="callout-title"><span>📞</span> Contact Migration Team</div>
                            <p style={{ margin: 0 }}>
                                Ready to migrate? Contact our dedicated migration team at{' '}
                                <a href="mailto:migration@diskpays.com">migration@diskpays.com</a> or call (877) 358-6797.
                            </p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                            <a href="/terminal-integrations" className="btn btn-ghost">← Terminal Integrations</a>
                            <a href="/feed-integration" className="btn btn-ghost">FEED Integration →</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
