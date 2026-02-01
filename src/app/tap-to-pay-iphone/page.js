'use client';

import Header from '@/components/Header';

export default function TapToPayiPhonePage() {
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
                            <span className="breadcrumb-item">Tap to Pay on iPhone</span>
                        </nav>

                        <header className="page-header">
                            <h1 className="page-title">Tap to Pay on iPhone</h1>
                            <p className="page-description">
                                Accept contactless payments directly on iPhone using Apple's Tap to Pay technology.
                                No additional hardware required.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <span className="badge badge-success">✓ Active</span>
                                <span className="badge badge-red">iOS SDK</span>
                                <span className="badge badge-info">Swift</span>
                            </div>
                        </header>

                        <section>
                            <h2>Overview</h2>
                            <p>
                                Tap to Pay on iPhone enables merchants to accept Apple Pay, contactless credit
                                and debit cards, and other digital wallets using just an iPhone. Built on Apple's
                                ProximityReader framework.
                            </p>

                            <div className="callout callout-info">
                                <div className="callout-title"><span>🍎</span> Device Requirements</div>
                                <p style={{ margin: 0 }}>
                                    iPhone XS or later running iOS 16.4+. Available in US, UK, Canada, Australia, and more.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2>Features</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>🔒 Secure Enclave</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>Leverages iPhone's hardware security.</p>
                                </div>
                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>⚡ Instant Setup</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>No dongles or additional hardware.</p>
                                </div>
                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>🌍 Multi-Network</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>Visa, Mastercard, Amex, Discover.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2>Swift Integration</h2>
                            <h3>1. Add SDK</h3>
                            <pre data-language="swift"><code>{`// Package.swift
dependencies: [
    .package(url: "https://github.com/diskpays/taptopay-ios.git", from: "2.1.0")
]`}</code></pre>

                            <h3>2. Initialize Reader</h3>
                            <pre data-language="swift"><code>{`import DiskPaysTapToPay
import ProximityReader

class PaymentManager: ObservableObject {
    private var reader: PaymentCardReader?
    
    func initialize() async throws {
        let config = DiskPaysConfig(
            merchantId: "139322815010",
            apiToken: "sk_live_xxx"
        )
        
        reader = try await DiskPaysTapToPay.shared.createReader(config: config)
    }
}`}</code></pre>

                            <h3>3. Accept Payment</h3>
                            <pre data-language="swift"><code>{`func acceptPayment(amount: Decimal) async throws -> PaymentResult {
    guard let reader = reader else { throw PaymentError.notInitialized }
    
    let request = ReadRequest(amount: amount, currencyCode: "USD")
    let result = try await reader.read(request)
    
    return try await DiskPaysTapToPay.shared.processPayment(
        cardData: result.cardData,
        amount: amount
    )
}`}</code></pre>
                        </section>

                        <section>
                            <h2>Supported Payment Methods</h2>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr><th>Method</th><th>Status</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Apple Pay</td><td><span className="badge badge-success">Supported</span></td></tr>
                                        <tr><td>Contactless Visa/MC</td><td><span className="badge badge-success">Supported</span></td></tr>
                                        <tr><td>Contactless Amex</td><td><span className="badge badge-success">Supported</span></td></tr>
                                        <tr><td>Contactless Discover</td><td><span className="badge badge-success">Supported</span></td></tr>
                                        <tr><td>Google Pay (NFC)</td><td><span className="badge badge-success">Supported</span></td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                            <a href="/tap-to-pay-android" className="btn btn-ghost">← Tap to Pay Android</a>
                            <a href="/quick-start" className="btn btn-ghost">Quick Start →</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
