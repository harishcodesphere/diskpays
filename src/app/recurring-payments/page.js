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

export default function RecurringPaymentsPage() {
    return (
        <>
            <Header />
            <main className="main-wrapper">
                <div className="main-content">
                    <div className="content-container">
                        <nav className="breadcrumbs">
                            <span className="breadcrumb-item">Docs</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">APIs & SDKs</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Recurring Payments</span>
                        </nav>

                        <header className="page-header">
                            <h1 className="page-title">Recurring Payments</h1>
                            <p className="page-description">
                                Set up subscription billing, scheduled payments, and automatic card-on-file charges.
                                Build recurring revenue models with our flexible billing API.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <span className="badge badge-success">✓ Active</span>
                                <span className="badge badge-red">REST API</span>
                                <span className="badge badge-info">Tokenization</span>
                            </div>
                        </header>

                        <section>
                            <h2>Overview</h2>
                            <p>
                                The Recurring Payments API allows you to store card tokens securely and charge
                                customers on a schedule. Perfect for subscriptions, memberships, and installment plans.
                            </p>
                        </section>

                        <section>
                            <h2>Create a Subscription</h2>
                            <CodeBlock
                                language="json"
                                title="POST /api/v3/subscriptions"
                                code={`{
  "customerId": "cust_123456",
  "cardToken": "tok_visa_4242",
  "plan": {
    "amount": "49.99",
    "currency": "USD",
    "interval": "month",
    "intervalCount": 1
  },
  "startDate": "2024-02-01",
  "metadata": {
    "planName": "Pro Plan"
  }
}`}
                            />

                            <h4>Response</h4>
                            <CodeBlock
                                language="json"
                                code={`{
  "id": "sub_abc123",
  "status": "active",
  "currentPeriodStart": "2024-02-01T00:00:00Z",
  "currentPeriodEnd": "2024-03-01T00:00:00Z",
  "nextBillingDate": "2024-03-01T00:00:00Z"
}`}
                            />
                        </section>

                        <section>
                            <h2>Billing Intervals</h2>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr><th>Interval</th><th>Description</th><th>Example</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><code>day</code></td><td>Daily billing</td><td>Every 7 days</td></tr>
                                        <tr><td><code>week</code></td><td>Weekly billing</td><td>Every 2 weeks</td></tr>
                                        <tr><td><code>month</code></td><td>Monthly billing</td><td>Every 1 month</td></tr>
                                        <tr><td><code>year</code></td><td>Annual billing</td><td>Every 1 year</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2>Subscription Lifecycle</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🆕</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Draft</h4>
                                    <p style={{ fontSize: '0.8rem', margin: 0 }}>Subscription created but not started</p>
                                </div>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>✅</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Active</h4>
                                    <p style={{ fontSize: '0.8rem', margin: 0 }}>Billing normally</p>
                                </div>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>⏸️</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Paused</h4>
                                    <p style={{ fontSize: '0.8rem', margin: 0 }}>Temporarily stopped</p>
                                </div>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>❌</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Canceled</h4>
                                    <p style={{ fontSize: '0.8rem', margin: 0 }}>Permanently ended</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2>Failed Payment Handling</h2>
                            <div className="callout callout-warning">
                                <div className="callout-title"><span>⚠️</span> Retry Logic</div>
                                <p style={{ margin: 0 }}>
                                    Failed payments are automatically retried up to 3 times over 7 days.
                                    After 3 failed attempts, the subscription status changes to <code>past_due</code>.
                                </p>
                            </div>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr><th>Attempt</th><th>Timing</th><th>Action</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>1</td><td>Immediately</td><td>Initial charge attempt</td></tr>
                                        <tr><td>2</td><td>+3 days</td><td>First retry</td></tr>
                                        <tr><td>3</td><td>+7 days</td><td>Final retry</td></tr>
                                        <tr><td>—</td><td>+10 days</td><td>Mark as past_due</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2>Webhooks</h2>
                            <p>Subscribe to these events to stay updated on subscription changes:</p>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr><th>Event</th><th>Trigger</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr><td><code>subscription.created</code></td><td>New subscription created</td></tr>
                                        <tr><td><code>subscription.charged</code></td><td>Successful billing cycle</td></tr>
                                        <tr><td><code>subscription.payment_failed</code></td><td>Payment attempt failed</td></tr>
                                        <tr><td><code>subscription.canceled</code></td><td>Subscription canceled</td></tr>
                                        <tr><td><code>subscription.renewed</code></td><td>New billing period started</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                            <a href="/disk-transact" className="btn btn-ghost">← Disk Transact API</a>
                            <a href="/merchant-onboard" className="btn btn-ghost">Merchant Onboarding →</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
