'use client';

import Header from '@/components/Header';

export default function TerminalIntegrationsPage() {
    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="main-content">
                    <div className="content-container">
                        <nav className="breadcrumbs">
                            <span className="breadcrumb-item">Docs</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Mobile Payments</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Terminal Integrations</span>
                        </nav>

                        <header className="page-header">
                            <h1 className="page-title">Terminal Integrations</h1>
                            <p className="page-description">
                                Full hardware access via peripheral SDKs and deep linking for DiskPays Android terminals.
                                Build custom POS experiences with direct terminal control.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <span className="badge badge-success">✓ Active</span>
                                <span className="badge badge-red">Android SDK</span>
                                <span className="badge badge-info">Hardware</span>
                            </div>
                        </header>

                        <section>
                            <h2>Available SDKs</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', margin: '2rem 0' }}>
                                <div className="card">
                                    <h3 style={{ marginTop: 0, color: 'var(--color-red)' }}>📱 DvPayLite SDK</h3>
                                    <p>Lightweight SDK for basic payment terminal operations. Ideal for simple integrations.</p>
                                    <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                                        <li>Sale, void, refund transactions</li>
                                        <li>Card reader access</li>
                                        <li>Receipt printing</li>
                                    </ul>
                                    <a href="#" className="btn btn-secondary" style={{ marginTop: '1rem' }}>View Documentation</a>
                                </div>
                                <div className="card">
                                    <h3 style={{ marginTop: 0, color: 'var(--color-red)' }}>⚙️ Peripheral SDK</h3>
                                    <p>Full hardware access for advanced terminal control and customization.</p>
                                    <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                                        <li>Printer control</li>
                                        <li>Barcode scanner</li>
                                        <li>LED & buzzer control</li>
                                        <li>Customer display</li>
                                    </ul>
                                    <a href="#" className="btn btn-secondary" style={{ marginTop: '1rem' }}>View Documentation</a>
                                </div>
                                <div className="card">
                                    <h3 style={{ marginTop: 0, color: 'var(--color-red)' }}>🔗 Deep Linking</h3>
                                    <p>Launch DiskPays app from any Android application with intent URLs.</p>
                                    <ul style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
                                        <li>No SDK required</li>
                                        <li>Cross-app integration</li>
                                        <li>Simple URL scheme</li>
                                    </ul>
                                    <a href="#" className="btn btn-secondary" style={{ marginTop: '1rem' }}>View Documentation</a>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2>Supported Terminals</h2>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr><th>Model</th><th>Display</th><th>Printer</th><th>NFC</th><th>SDK Support</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>DiskPay P400</td><td>4" Touch</td><td>Yes</td><td>Yes</td><td>Full</td></tr>
                                        <tr><td>DiskPay P200</td><td>2.8" Touch</td><td>Yes</td><td>Yes</td><td>Full</td></tr>
                                        <tr><td>DiskPay M10</td><td>5.5" Touch</td><td>Yes</td><td>Yes</td><td>Full</td></tr>
                                        <tr><td>DiskPay S900</td><td>3.5" Touch</td><td>Yes</td><td>Yes</td><td>Full</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                            <a href="/woocommerce" className="btn btn-ghost">← WooCommerce</a>
                            <a href="/tap-to-pay-android" className="btn btn-ghost">Tap to Pay Android →</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
