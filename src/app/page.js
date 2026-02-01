'use client';

import Link from 'next/link';
import Header from '@/components/Header';

// Product data (like iPOSpays but for DiskPays)
const products = [
    {
        id: 'spin',
        title: 'SPIn (Semi-Integration)',
        description: 'Bridge your POS system with DiskPays terminals. Cloud-based, secure, and PCI-compliant payment processing.',
        icon: '🔌',
        status: 'active',
        tags: ['SOAP API', 'REST API', 'POS'],
        href: '/spin',
    },
    {
        id: 'freedom',
        title: 'Freedom to Design',
        description: 'Build custom checkout experiences with full control. Our JavaScript SDK handles security while you own the design.',
        icon: '🎨',
        status: 'active',
        tags: ['JavaScript SDK', 'Custom UI', 'React'],
        href: '/freedom-to-design',
    },
    {
        id: 'hpp',
        title: 'Hosted Payment Page',
        description: 'Pre-built, secure checkout pages for your website. Quick integration with zero PCI burden.',
        icon: '🌐',
        status: 'active',
        tags: ['Redirect', 'Embedded', 'No-Code'],
        href: '/hosted-payment-page',
    },
    {
        id: 'woocommerce',
        title: 'WooCommerce Extension',
        description: 'Accept DiskPays payments in your WooCommerce store. Easy plugin installation and configuration.',
        icon: '🛒',
        status: 'active',
        tags: ['WordPress', 'Plugin', 'E-commerce'],
        href: '/woocommerce',
    },
    {
        id: 'terminal',
        title: 'Terminal Integrations',
        description: 'Full hardware access via peripheral SDKs and deep linking for Android terminals.',
        icon: '💳',
        status: 'active',
        tags: ['Android SDK', 'DvPayLite', 'Hardware'],
        href: '/terminal-integrations',
    },
    {
        id: 'migrate',
        title: 'Migrate to DiskPays',
        description: 'Seamlessly transition from other payment processors. Import customer data and card tokens.',
        icon: '🔄',
        status: 'active',
        tags: ['Migration', 'Data Import', 'Tokens'],
        href: '/migrate',
    },
    {
        id: 'feed',
        title: 'FEED Integration',
        description: 'Real-time transaction data to your CRM or portal. Build custom dashboards and reports.',
        icon: '📊',
        status: 'active',
        tags: ['Webhooks', 'Real-time', 'REST API'],
        href: '/feed-integration',
    },
    {
        id: 'transact',
        title: 'Disk Transact API',
        description: 'The core transaction engine. Process sales, voids, refunds, pre-auth, batch settlement, and more.',
        icon: '⚡',
        status: 'active',
        tags: ['REST API', 'V3', 'Tokenization'],
        href: '/disk-transact',
    },
    {
        id: 'onboard',
        title: 'Merchant Onboarding',
        description: 'Programmatically onboard merchants from your own CRM. Streamline the registration process.',
        icon: '👥',
        status: 'active',
        tags: ['REST API', 'KYC', 'Automation'],
        href: '/merchant-onboard',
    },
    {
        id: 'tap-android',
        title: 'Tap to Pay on Android',
        description: 'Turn Android phones into payment terminals. NFC-based EMV transactions with PCI-CPOC compliance.',
        icon: '📱',
        status: 'active',
        tags: ['Android SDK', 'NFC', 'Mobile'],
        href: '/tap-to-pay-android',
    },
    {
        id: 'tap-iphone',
        title: 'Tap to Pay on iPhone',
        description: 'Accept contactless payments directly on iPhone. No additional hardware required.',
        icon: '🍎',
        status: 'active',
        tags: ['iOS SDK', 'Swift', 'NFC'],
        href: '/tap-to-pay-iphone',
    },
];

// Status badge component
const StatusBadge = ({ status }) => {
    const statusStyles = {
        active: 'badge-success',
        limited: 'badge-warning',
        broken: 'badge-error',
    };

    const statusLabels = {
        active: '✓ Active',
        limited: '⚠ Limited',
        broken: '✗ Broken',
    };

    return (
        <span className={`badge ${statusStyles[status]}`}>
            {statusLabels[status]}
        </span>
    );
};

export default function HomePage() {
    return (
        <>
            <Header />

            <main className="main-wrapper">
                <div className="main-content" style={{ marginLeft: 'var(--sidebar-width)' }}>
                    {/* Hero Section */}
                    <section className="hero-section">
                        <h1 className="hero-title">DiskPays Developer Central</h1>
                        <p className="hero-subtitle">
                            Build powerful payment integrations with our enterprise-grade APIs, SDKs, and documentation.
                            Accept payments anywhere, anytime.
                        </p>
                        <div className="hero-actions">
                            <Link href="/quick-start" className="btn btn-primary">
                                Get Started
                            </Link>
                            <Link href="/disk-transact" className="btn btn-secondary">
                                API Reference
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div style={{
                            display: 'flex',
                            gap: '2rem',
                            justifyContent: 'center',
                            marginTop: '3rem',
                            flexWrap: 'wrap',
                            opacity: 0.7
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-red)' }}>99.99%</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Uptime SLA</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-red)' }}>PCI DSS</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Compliant</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-red)' }}>550+</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Integrators</div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--color-red)' }}>24/7</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>Dev Support</div>
                            </div>
                        </div>
                    </section>

                    {/* Products Grid */}
                    <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
                        <h2 style={{
                            textAlign: 'center',
                            marginBottom: '0.5rem',
                            background: 'var(--gradient-red)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                        }}>
                            Payment Solutions
                        </h2>
                        <p style={{
                            textAlign: 'center',
                            color: 'var(--color-text-secondary)',
                            marginBottom: '2.5rem',
                            maxWidth: '600px',
                            margin: '0 auto 2.5rem'
                        }}>
                            Choose the integration method that fits your business needs. From full-featured APIs to no-code solutions.
                        </p>

                        <div className="products-grid">
                            {products.map((product, index) => (
                                <Link
                                    key={product.id}
                                    href={product.href}
                                    className="product-card"
                                    style={{
                                        opacity: 0,
                                        animation: 'fadeIn 0.5s ease forwards',
                                        animationDelay: `${index * 0.05}s`
                                    }}
                                >
                                    <div className="product-status">
                                        <StatusBadge status={product.status} />
                                    </div>

                                    <div className="icon" style={{ fontSize: '2rem' }}>
                                        {product.icon}
                                    </div>

                                    <h3 className="product-title">{product.title}</h3>
                                    <p className="product-description">{product.description}</p>

                                    <div className="product-tech">
                                        {product.tags.map((tag, idx) => (
                                            <span key={idx} className="badge badge-red">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Features Section */}
                    <section style={{
                        maxWidth: '1200px',
                        margin: '5rem auto 3rem',
                        padding: '3rem',
                        background: 'var(--glass-bg)',
                        backdropFilter: 'blur(20px)',
                        borderRadius: '24px',
                        border: '1px solid var(--glass-border)'
                    }}>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem', marginTop: 0 }}>
                            Why Developers Choose DiskPays
                        </h2>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '2rem'
                        }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1rem',
                                    filter: 'drop-shadow(0 0 10px rgba(255, 26, 26, 0.3))'
                                }}>🚀</div>
                                <h4 style={{ marginBottom: '0.5rem', marginTop: 0 }}>5-Minute Setup</h4>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                    Pre-built SDKs and copy-paste code samples get you integrated fast.
                                </p>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1rem',
                                    filter: 'drop-shadow(0 0 10px rgba(255, 26, 26, 0.3))'
                                }}>🔒</div>
                                <h4 style={{ marginBottom: '0.5rem', marginTop: 0 }}>PCI Compliant</h4>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                    Vault-level tokenization. Sensitive card data never touches your servers.
                                </p>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1rem',
                                    filter: 'drop-shadow(0 0 10px rgba(255, 26, 26, 0.3))'
                                }}>🌍</div>
                                <h4 style={{ marginBottom: '0.5rem', marginTop: 0 }}>Omnichannel</h4>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                    In-person, online, mobile — all on one unified platform.
                                </p>
                            </div>

                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    fontSize: '2.5rem',
                                    marginBottom: '1rem',
                                    filter: 'drop-shadow(0 0 10px rgba(255, 26, 26, 0.3))'
                                }}>📚</div>
                                <h4 style={{ marginBottom: '0.5rem', marginTop: 0 }}>Complete Docs</h4>
                                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                    Detailed API references, code samples, and step-by-step guides.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="footer" style={{ marginLeft: 0, marginTop: '3rem' }}>
                        <div className="footer-container">
                            <div className="footer-copyright">
                                © 2024 DiskPays. All rights reserved.
                            </div>
                            <div className="footer-links">
                                <a href="#" className="footer-link">Terms of Service</a>
                                <a href="#" className="footer-link">Privacy Policy</a>
                                <a href="mailto:devsupport@diskpays.com" className="footer-link">Developer Support</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>
        </>
    );
}
