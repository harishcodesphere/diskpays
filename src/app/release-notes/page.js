'use client';

import Header from '@/components/Header';

export default function ReleaseNotesPage() {
    const releases = [
        {
            version: '3.2.0',
            date: 'January 15, 2024',
            type: 'major',
            changes: [
                { type: 'new', text: 'Encrypted card data support for enhanced security' },
                { type: 'new', text: 'Programmatic authentication token generation' },
                { type: 'improved', text: 'Faster transaction processing (avg 200ms reduction)' },
                { type: 'fixed', text: 'Batch settlement timezone handling' },
            ]
        },
        {
            version: '3.1.0',
            date: 'October 19, 2023',
            type: 'minor',
            changes: [
                { type: 'new', text: 'Level 3 / VISA CEDP support for commercial cards' },
                { type: 'new', text: 'Enhanced transaction metadata fields' },
                { type: 'improved', text: 'Error message clarity' },
            ]
        },
        {
            version: '3.0.0',
            date: 'September 25, 2023',
            type: 'major',
            changes: [
                { type: 'new', text: 'Gift Card transaction support' },
                { type: 'new', text: 'HSA/FSA card support' },
                { type: 'new', text: 'Tip adjust endpoint' },
                { type: 'breaking', text: 'API authentication header changed from "auth" to "token"' },
            ]
        },
        {
            version: '2.5.0',
            date: 'June 1, 2023',
            type: 'minor',
            changes: [
                { type: 'new', text: 'Google Pay integration' },
                { type: 'new', text: 'Apple Pay integration' },
                { type: 'improved', text: '3DS2 challenge flow' },
            ]
        },
        {
            version: '2.0.0',
            date: 'March 15, 2023',
            type: 'major',
            changes: [
                { type: 'new', text: 'ACH payment support' },
                { type: 'new', text: 'Incremental authorization' },
                { type: 'new', text: 'Partial refunds' },
                { type: 'breaking', text: 'Deprecated V1 endpoints removed' },
            ]
        },
    ];

    const getChangeIcon = (type) => {
        switch (type) {
            case 'new': return '✨';
            case 'improved': return '⚡';
            case 'fixed': return '🔧';
            case 'breaking': return '⚠️';
            default: return '•';
        }
    };

    const getChangeBadge = (type) => {
        switch (type) {
            case 'new': return 'badge-success';
            case 'improved': return 'badge-info';
            case 'fixed': return 'badge-warning';
            case 'breaking': return 'badge-error';
            default: return 'badge-info';
        }
    };

    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="main-content">
                    <div className="content-container">
                        <nav className="breadcrumbs">
                            <span className="breadcrumb-item">Docs</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Release Notes</span>
                        </nav>

                        <header className="page-header">
                            <h1 className="page-title">Release Notes</h1>
                            <p className="page-description">
                                Stay up to date with the latest DiskPays API changes, new features, and improvements.
                            </p>
                        </header>

                        <section>
                            {releases.map((release, index) => (
                                <div key={release.version} style={{
                                    marginBottom: '2rem',
                                    paddingBottom: '2rem',
                                    borderBottom: index < releases.length - 1 ? '1px solid var(--color-border)' : 'none'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                        <h2 style={{ margin: 0, borderBottom: 'none', paddingBottom: 0 }}>v{release.version}</h2>
                                        <span className={`badge ${release.type === 'major' ? 'badge-red' : 'badge-info'}`}>
                                            {release.type}
                                        </span>
                                        <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                            {release.date}
                                        </span>
                                    </div>

                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                        {release.changes.map((change, idx) => (
                                            <li key={idx} style={{
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: '0.75rem',
                                                padding: '0.5rem 0',
                                                color: 'var(--color-text-secondary)'
                                            }}>
                                                <span>{getChangeIcon(change.type)}</span>
                                                <span className={`badge ${getChangeBadge(change.type)}`} style={{ fontSize: '0.65rem', padding: '0.2rem 0.5rem' }}>
                                                    {change.type}
                                                </span>
                                                <span>{change.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>

                        <div className="callout callout-info">
                            <div className="callout-title"><span>📧</span> Stay Updated</div>
                            <p style={{ margin: 0 }}>
                                Subscribe to our developer newsletter to receive release notifications directly in your inbox.
                            </p>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                            <a href="/error-codes" className="btn btn-ghost">← Error Codes</a>
                            <a href="/" className="btn btn-ghost">Home →</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
