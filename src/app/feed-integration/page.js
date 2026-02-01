'use client';

import { useState } from 'react';
import Header from '@/components/Header';

const CodeBlock = ({ language, code, title }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    return (
        <div style={{ position: 'relative', margin: '1.5rem 0' }}>
            {title && (
                <div style={{ background: 'var(--color-bg-tertiary)', padding: '0.5rem 1rem', borderRadius: '12px 12px 0 0', border: '1px solid var(--color-border)', borderBottom: 'none', fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: '500' }}>{title}</div>
            )}
            <pre data-language={language} style={{ borderRadius: title ? '0 0 12px 12px' : '12px', marginTop: title ? 0 : undefined }}>
                <button onClick={handleCopy} className="code-copy-btn">{copied ? '✓ Copied!' : 'Copy'}</button>
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default function FeedIntegrationPage() {
    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="main-content">
                    <div className="content-container">
                        <nav className="breadcrumbs">
                            <span className="breadcrumb-item">Docs</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Data & Reporting</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">FEED Integration</span>
                        </nav>

                        <header className="page-header">
                            <h1 className="page-title">FEED Integration</h1>
                            <p className="page-description">
                                Real-time transaction data delivered to your CRM, portal, or data warehouse.
                                Build custom dashboards and reports with live data.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <span className="badge badge-success">✓ Active</span>
                                <span className="badge badge-red">Webhooks</span>
                                <span className="badge badge-info">REST API</span>
                            </div>
                        </header>

                        <section>
                            <h2>Overview</h2>
                            <p>FEED (Financial Event Enterprise Data) provides real-time notifications whenever transactions occur on your merchant accounts. Use webhooks to receive instant updates or poll our REST API for batch processing.</p>
                        </section>

                        <section>
                            <h2>Webhook Setup</h2>
                            <p>Register your webhook endpoint to receive real-time transaction events:</p>
                            <CodeBlock
                                language="json"
                                title="POST /api/v3/webhooks/register"
                                code={`{
  "url": "https://your-server.com/webhooks/diskpays",
  "events": ["transaction.sale", "transaction.refund", "transaction.void"],
  "secret": "whsec_your_signing_secret"
}`}
                            />
                        </section>

                        <section>
                            <h2>Event Types</h2>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr><th>Event</th><th>Description</th><th>Trigger</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><code>transaction.sale</code></td><td>Sale completed</td><td>Immediate</td></tr>
                                        <tr><td><code>transaction.refund</code></td><td>Refund processed</td><td>Immediate</td></tr>
                                        <tr><td><code>transaction.void</code></td><td>Transaction voided</td><td>Immediate</td></tr>
                                        <tr><td><code>batch.settled</code></td><td>Batch settlement complete</td><td>Daily</td></tr>
                                        <tr><td><code>chargeback.opened</code></td><td>Dispute initiated</td><td>Immediate</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2>Webhook Payload</h2>
                            <CodeBlock
                                language="json"
                                title="Sample Webhook Event"
                                code={`{
  "id": "evt_1234567890",
  "type": "transaction.sale",
  "created": "2024-01-15T10:30:00Z",
  "data": {
    "transactionId": "txn_abc123",
    "amount": "125.50",
    "currency": "USD",
    "status": "approved",
    "cardBrand": "VISA",
    "lastFour": "4242",
    "merchantId": "139322815010"
  },
  "signature": "sha256=abc123..."
}`}
                            />
                        </section>

                        <section>
                            <h2>Signature Verification</h2>
                            <p>Always verify webhook signatures to ensure authenticity:</p>
                            <CodeBlock
                                language="javascript"
                                title="Node.js Signature Verification"
                                code={`const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from('sha256=' + expectedSignature)
  );
}`}
                            />
                        </section>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                            <a href="/migrate" className="btn btn-ghost">← Migrate to DiskPays</a>
                            <a href="/error-codes" className="btn btn-ghost">Error Codes →</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
