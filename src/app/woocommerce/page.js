'use client';

import Header from '@/components/Header';

export default function WooCommercePage() {
    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="main-content">
                    <div className="content-container">
                        <nav className="breadcrumbs">
                            <span className="breadcrumb-item">Docs</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Payment Solutions</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">WooCommerce Extension</span>
                        </nav>

                        <header className="page-header">
                            <h1 className="page-title">WooCommerce Extension</h1>
                            <p className="page-description">
                                Accept DiskPays payments in your WooCommerce store with our official WordPress plugin.
                                Easy installation and configuration.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <span className="badge badge-success">✓ Active</span>
                                <span className="badge badge-red">WordPress</span>
                                <span className="badge badge-info">E-commerce</span>
                            </div>
                        </header>

                        <section>
                            <h2>Installation</h2>
                            <div style={{ display: 'grid', gap: '1.5rem', margin: '2rem 0' }}>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--gradient-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.25rem', color: '#fff', flexShrink: 0 }}>1</div>
                                    <div>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Download the Plugin</h3>
                                        <p style={{ margin: 0 }}>Download the DiskPays WooCommerce plugin from the WordPress marketplace or from your DiskPays Portal.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--gradient-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.25rem', color: '#fff', flexShrink: 0 }}>2</div>
                                    <div>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Install & Activate</h3>
                                        <p style={{ margin: 0 }}>Go to WordPress Admin → Plugins → Add New → Upload Plugin. Select the zip file and click Install Now, then Activate.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--gradient-red)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.25rem', color: '#fff', flexShrink: 0 }}>3</div>
                                    <div>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Configure Settings</h3>
                                        <p style={{ margin: 0 }}>Navigate to WooCommerce → Settings → Payments → DiskPays. Enter your Merchant ID and API Token from the DiskPays Portal.</p>
                                    </div>
                                </div>
                                <div className="card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--color-success)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '1.25rem', color: '#000', flexShrink: 0 }}>✓</div>
                                    <div>
                                        <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Start Accepting Payments</h3>
                                        <p style={{ margin: 0 }}>Your store is now ready to accept credit card payments through DiskPays!</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2>Configuration Options</h2>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr><th>Setting</th><th>Description</th><th>Required</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><code>Merchant ID</code></td><td>Your DiskPays merchant identifier</td><td>Yes</td></tr>
                                        <tr><td><code>API Token</code></td><td>Authentication token for API calls</td><td>Yes</td></tr>
                                        <tr><td><code>Test Mode</code></td><td>Enable sandbox testing</td><td>No</td></tr>
                                        <tr><td><code>Capture Mode</code></td><td>Sale (immediate) or Auth-Only</td><td>No</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2>Features</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>💳 All Major Cards</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>Accept Visa, Mastercard, Amex, Discover, and more.</p>
                                </div>
                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>🔄 Automatic Refunds</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>Process refunds directly from WooCommerce orders.</p>
                                </div>
                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>📦 Subscriptions</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>Compatible with WooCommerce Subscriptions plugin.</p>
                                </div>
                            </div>
                        </section>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                            <a href="/hosted-payment-page" className="btn btn-ghost">← Hosted Payment Page</a>
                            <a href="/terminal-integrations" className="btn btn-ghost">Terminal Integrations →</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
