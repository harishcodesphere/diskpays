'use client';

import Header from '@/components/Header';

export default function MerchantOnboardPage() {
    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="main-content">
                    <div className="content-container">
                        <nav className="breadcrumbs">
                            <span className="breadcrumb-item">Docs</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Platform</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Merchant Onboarding</span>
                        </nav>

                        <header className="page-header">
                            <h1 className="page-title">Merchant Onboarding API</h1>
                            <p className="page-description">
                                Programmatically onboard merchants from your own CRM or platform.
                                Automate the registration process with our comprehensive Onboarding API.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <span className="badge badge-success">✓ Active</span>
                                <span className="badge badge-red">REST API</span>
                                <span className="badge badge-info">KYC</span>
                            </div>
                        </header>

                        <section>
                            <h2>Overview</h2>
                            <p>
                                The Merchant Onboarding API allows you to submit merchant applications,
                                upload required documents, and track approval status programmatically.
                                Perfect for ISOs, PayFacs, and platforms that need to onboard merchants at scale.
                            </p>
                        </section>

                        <section>
                            <h2>Onboarding Flow</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '2rem 0' }}>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📝</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>1. Submit Application</h4>
                                    <p style={{ fontSize: '0.85rem', margin: 0 }}>Send merchant details via API</p>
                                </div>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📎</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>2. Upload Documents</h4>
                                    <p style={{ fontSize: '0.85rem', margin: 0 }}>ID, bank statements, etc.</p>
                                </div>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔍</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>3. KYC Review</h4>
                                    <p style={{ fontSize: '0.85rem', margin: 0 }}>Automated verification</p>
                                </div>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>4. Approval</h4>
                                    <p style={{ fontSize: '0.85rem', margin: 0 }}>Merchant is live!</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2>Required Fields</h2>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr><th>Field</th><th>Type</th><th>Description</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><code>businessName</code></td><td>string</td><td>Legal business name</td></tr>
                                        <tr><td><code>dba</code></td><td>string</td><td>Doing Business As name</td></tr>
                                        <tr><td><code>ein</code></td><td>string</td><td>Employer Identification Number</td></tr>
                                        <tr><td><code>businessType</code></td><td>string</td><td>LLC, Corporation, Sole Proprietor, etc.</td></tr>
                                        <tr><td><code>ownerName</code></td><td>string</td><td>Primary owner full name</td></tr>
                                        <tr><td><code>ownerSSN</code></td><td>string</td><td>Owner SSN (last 4 or full)</td></tr>
                                        <tr><td><code>bankAccount</code></td><td>object</td><td>Bank routing and account number</td></tr>
                                        <tr><td><code>mcc</code></td><td>string</td><td>Merchant Category Code</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2>Application Status</h2>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr><th>Status</th><th>Description</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><span className="badge badge-info">PENDING</span></td><td>Application submitted, pending review</td></tr>
                                        <tr><td><span className="badge badge-warning">UNDER_REVIEW</span></td><td>KYC/underwriting in progress</td></tr>
                                        <tr><td><span className="badge badge-success">APPROVED</span></td><td>Merchant approved and active</td></tr>
                                        <tr><td><span className="badge badge-error">DECLINED</span></td><td>Application declined</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                            <a href="/disk-transact" className="btn btn-ghost">← Disk Transact API</a>
                            <a href="/tap-to-pay-android" className="btn btn-ghost">Tap to Pay Android →</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
