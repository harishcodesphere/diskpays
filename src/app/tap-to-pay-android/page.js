'use client';

import Header from '@/components/Header';

export default function TapToPayAndroidPage() {
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
                            <span className="breadcrumb-item">Tap to Pay on Android</span>
                        </nav>

                        <header className="page-header">
                            <h1 className="page-title">Tap to Pay on Android</h1>
                            <p className="page-description">
                                Turn Android devices into payment terminals. Accept NFC-based EMV contactless
                                payments with PCI-CPOC compliance.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <span className="badge badge-success">✓ Active</span>
                                <span className="badge badge-red">Android SDK</span>
                                <span className="badge badge-info">NFC</span>
                            </div>
                        </header>

                        <section>
                            <h2>Overview</h2>
                            <p>
                                Tap to Pay on Android allows merchants to accept contactless payments directly
                                on compatible Android devices without additional hardware. Customers simply tap
                                their card or digital wallet on the phone to complete payment.
                            </p>

                            <div className="callout callout-info">
                                <div className="callout-title"><span>📱</span> Device Requirements</div>
                                <p style={{ margin: 0 }}>
                                    Requires Android 9.0+ with NFC capability and Google Play Services.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2>Supported Payment Methods</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💳</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Contactless Cards</h4>
                                    <p style={{ fontSize: '0.85rem', margin: 0 }}>Visa, Mastercard, Amex, Discover</p>
                                </div>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📱</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Digital Wallets</h4>
                                    <p style={{ fontSize: '0.85rem', margin: 0 }}>Google Pay, Apple Pay, Samsung Pay</p>
                                </div>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⌚</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Wearables</h4>
                                    <p style={{ fontSize: '0.85rem', margin: 0 }}>Smartwatches with NFC</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2>SDK Integration</h2>
                            <h3>1. Add Dependency</h3>
                            <pre data-language="gradle"><code>{`dependencies {
    implementation 'com.diskpays:taptopay-android:2.1.0'
}`}</code></pre>

                            <h3>2. Initialize SDK</h3>
                            <pre data-language="kotlin"><code>{`import com.diskpays.taptopay.DiskPaysTapToPay

class MainActivity : AppCompatActivity() {
    private lateinit var tapToPay: DiskPaysTapToPay
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        tapToPay = DiskPaysTapToPay.Builder(this)
            .setMerchantId("139322815010")
            .setApiToken("sk_live_xxx")
            .setEnvironment(Environment.PRODUCTION)
            .build()
    }
}`}</code></pre>

                            <h3>3. Start Payment</h3>
                            <pre data-language="kotlin"><code>{`tapToPay.startPayment(
    amount = 25.00,
    currency = "USD",
    onSuccess = { result ->
        Log.d("Payment", "Success: \${result.transactionId}")
    },
    onError = { error ->
        Log.e("Payment", "Error: \${error.message}")
    }
)`}</code></pre>
                        </section>

                        <section>
                            <h2>Security & Compliance</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>🔐 PCI-CPOC Certified</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                        Complies with PCI Contactless Payments on COTS standard.
                                    </p>
                                </div>
                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>🛡️ End-to-End Encryption</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                        Card data encrypted from reader to processor.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                            <a href="/merchant-onboard" className="btn btn-ghost">← Merchant Onboarding</a>
                            <a href="/tap-to-pay-iphone" className="btn btn-ghost">Tap to Pay iPhone →</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
