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
                <div style={{
                    background: 'var(--color-bg-tertiary)',
                    padding: '0.5rem 1rem',
                    borderRadius: '12px 12px 0 0',
                    border: '1px solid var(--color-border)',
                    borderBottom: 'none',
                    fontSize: '0.8rem',
                    color: 'var(--color-text-muted)',
                    fontWeight: '500'
                }}>{title}</div>
            )}
            <pre data-language={language} style={{ borderRadius: title ? '0 0 12px 12px' : '12px', marginTop: title ? 0 : undefined }}>
                <button onClick={handleCopy} className="code-copy-btn">{copied ? '✓ Copied!' : 'Copy'}</button>
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default function AuthenticationPage() {
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
                            <span className="breadcrumb-item">Authentication</span>
                        </nav>

                        <header className="page-header">
                            <h1 className="page-title">Authentication</h1>
                            <p className="page-description">
                                Learn how to authenticate your API requests with DiskPays. We use token-based
                                authentication to ensure secure access to all endpoints.
                            </p>
                        </header>

                        <section>
                            <h2>API Token</h2>
                            <p>
                                All DiskPays API requests require authentication using a token in the request header.
                                You can obtain your authentication token from the DiskPays Portal.
                            </p>

                            <div className="callout callout-info">
                                <div className="callout-title"><span>🔑</span> Getting Your Token</div>
                                <p style={{ margin: 0 }}>
                                    Log in to <strong>DiskPays Portal → Settings → API Keys</strong> to generate
                                    or retrieve your authentication token.
                                </p>
                            </div>

                            <h3>Header Authentication</h3>
                            <CodeBlock
                                language="http"
                                title="Request Headers"
                                code={`POST /api/v3/diskTransact HTTP/1.1
Host: api.diskpays.com
Content-Type: application/json
token: sk_live_your_auth_token_here`}
                            />
                        </section>

                        <section>
                            <h2>Token Types</h2>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>Prefix</th>
                                            <th>Use Case</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Live Token</td>
                                            <td><code>sk_live_</code></td>
                                            <td>Production transactions</td>
                                        </tr>
                                        <tr>
                                            <td>Test Token</td>
                                            <td><code>sk_test_</code></td>
                                            <td>Sandbox testing</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section>
                            <h2>Programmatic Token Generation (V3)</h2>
                            <p>
                                For V3 API, you can generate tokens programmatically using your API key and secret.
                            </p>

                            <CodeBlock
                                language="json"
                                title="POST /api/v3/auth/token"
                                code={`{
  "apiKey": "your_api_key",
  "secretKey": "your_secret_key",
  "scope": "PaymentTokenization"
}`}
                            />

                            <h4>Response</h4>
                            <CodeBlock
                                language="json"
                                code={`{
  "responseCode": "200",
  "responseMessage": "Success",
  "token": "sk_live_generated_token",
  "expiresIn": 3600
}`}
                            />
                        </section>

                        <section>
                            <h2>Security Best Practices</h2>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>🔐 Keep Tokens Secret</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                        Never expose tokens in client-side code, version control, or logs.
                                    </p>
                                </div>
                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>🔄 Rotate Regularly</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                        Regenerate tokens periodically and after any suspected exposure.
                                    </p>
                                </div>
                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>🌐 Use HTTPS</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                        Always make API calls over HTTPS to encrypt data in transit.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}>
                            <a href="/quick-start" className="btn btn-ghost">← Quick Start</a>
                            <a href="/spin" className="btn btn-ghost">SPIn Integration →</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
