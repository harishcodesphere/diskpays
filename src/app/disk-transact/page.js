'use client';

import { useState } from 'react';
import Header from '@/components/Header';

// Code block component with copy functionality
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
                }}>
                    {title}
                </div>
            )}
            <pre
                data-language={language}
                style={{
                    borderRadius: title ? '0 0 12px 12px' : '12px',
                    marginTop: title ? 0 : undefined
                }}
            >
                <button
                    onClick={handleCopy}
                    className="code-copy-btn"
                    style={{ top: title ? '0.5rem' : '0.5rem' }}
                >
                    {copied ? '✓ Copied!' : 'Copy'}
                </button>
                <code>{code}</code>
            </pre>
        </div>
    );
};

// Table of contents data
const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'authentication', label: 'Authentication' },
    { id: 'endpoints', label: 'API Endpoints' },
    { id: 'sale', label: 'Sale Transaction' },
    { id: 'void', label: 'Void Transaction' },
    { id: 'refund', label: 'Refund Transaction' },
    { id: 'preauth', label: 'Pre-Authorization' },
    { id: 'batch', label: 'Batch Settlement' },
    { id: 'errors', label: 'Error Codes' },
    { id: 'version-history', label: 'Version History' },
];

export default function DiskTransactPage() {
    const [activeSection, setActiveSection] = useState('overview');

    return (
        <>
            <Header />

            <main className="main-wrapper">
                <div className="main-content">
                    <div className="content-with-toc">
                        {/* Main Content */}
                        <div className="content-area">
                            {/* Breadcrumbs */}
                            <nav className="breadcrumbs">
                                <span className="breadcrumb-item">Docs</span>
                                <span className="breadcrumb-separator">›</span>
                                <span className="breadcrumb-item">APIs & SDKs</span>
                                <span className="breadcrumb-separator">›</span>
                                <span className="breadcrumb-item">Disk Transact API</span>
                            </nav>

                            {/* Page Header */}
                            <header className="page-header">
                                <h1 className="page-title">Disk Transact API</h1>
                                <p className="page-description">
                                    The core transaction engine for DiskPays. Process sales, voids, refunds,
                                    pre-authorizations, batch settlements, and more through a single unified API.
                                </p>
                                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                    <span className="badge badge-success">✓ V3 Available</span>
                                    <span className="badge badge-red">REST API</span>
                                    <span className="badge badge-info">Tokenization</span>
                                </div>
                            </header>

                            {/* Overview */}
                            <section id="overview">
                                <h2>Overview</h2>
                                <p>
                                    The Disk Transact API empowers merchants to streamline their payment processes by enabling
                                    void, full or partial refunds, and sale transactions using card tokens directly from their
                                    own CRM or billing software. With this API, merchants can bypass the need to log in to the
                                    DiskPays portal for many transaction types, improving efficiency and integration with
                                    third-party applications.
                                </p>

                                <div className="callout callout-info">
                                    <div className="callout-title">
                                        <span>💡</span> Key Features
                                    </div>
                                    <ul style={{ margin: 0, paddingLeft: '1.5rem' }}>
                                        <li>Process transactions using secure card tokens</li>
                                        <li>Support for HSA/FSA healthcare cards</li>
                                        <li>ACH (bank account) payment support</li>
                                        <li>Level 3 / VISA CEDP for commercial cards</li>
                                        <li>Google Pay and Apple Pay integration</li>
                                        <li>Encrypted card data support (V3)</li>
                                    </ul>
                                </div>
                            </section>

                            {/* Authentication */}
                            <section id="authentication">
                                <h2>Authentication</h2>
                                <p>
                                    All API requests must include your authentication token in the request header.
                                    You can obtain your token from the DiskPays portal under Settings → API Keys,
                                    or generate one programmatically using the V3 Token API.
                                </p>

                                <h3>Header Authentication</h3>
                                <CodeBlock
                                    language="http"
                                    title="Request Headers"
                                    code={`POST /api/v3/diskTransact HTTP/1.1
Host: api.diskpays.com
Content-Type: application/json
token: your_auth_token_here`}
                                />

                                <h3>Generate Token via API (V3)</h3>
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
  "token": "generated_token_here",
  "expiresIn": 3600
}`}
                                />
                            </section>

                            {/* Endpoints */}
                            <section id="endpoints">
                                <h2>API Endpoints</h2>

                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Version</th>
                                                <th>Endpoint</th>
                                                <th>Features</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><span className="badge badge-red">V3</span></td>
                                                <td><code>POST /api/v3/diskTransact</code></td>
                                                <td>Encrypted card data, enhanced security, token API</td>
                                            </tr>
                                            <tr>
                                                <td><span className="badge badge-info">V2</span></td>
                                                <td><code>POST /api/v2/diskTransact</code></td>
                                                <td>Standard tokenization, batch operations</td>
                                            </tr>
                                            <tr>
                                                <td><span className="badge badge-warning">V1</span></td>
                                                <td><code>POST /api/v1/diskTransact</code></td>
                                                <td>Legacy support (deprecated)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h3>Transaction Types</h3>
                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Type</th>
                                                <th>Value</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Sale</td>
                                                <td><code>1</code></td>
                                                <td>Charge the customer immediately</td>
                                            </tr>
                                            <tr>
                                                <td>Void</td>
                                                <td><code>2</code></td>
                                                <td>Cancel transaction before batch settlement</td>
                                            </tr>
                                            <tr>
                                                <td>Refund</td>
                                                <td><code>3</code></td>
                                                <td>Return funds after batch settlement</td>
                                            </tr>
                                            <tr>
                                                <td>Batch Settlement</td>
                                                <td><code>4</code></td>
                                                <td>Settle all transactions and close batch</td>
                                            </tr>
                                            <tr>
                                                <td>Pre-Auth</td>
                                                <td><code>5</code></td>
                                                <td>Hold funds without charging</td>
                                            </tr>
                                            <tr>
                                                <td>Ticket</td>
                                                <td><code>6</code></td>
                                                <td>Complete a pre-authorization</td>
                                            </tr>
                                            <tr>
                                                <td>Tip Adjust</td>
                                                <td><code>7</code></td>
                                                <td>Modify tip amount before settlement</td>
                                            </tr>
                                            <tr>
                                                <td>Incremental Auth</td>
                                                <td><code>8</code></td>
                                                <td>Increase pre-auth amount</td>
                                            </tr>
                                            <tr>
                                                <td>Open Batch</td>
                                                <td><code>9</code></td>
                                                <td>View transactions before settlement</td>
                                            </tr>
                                            <tr>
                                                <td>ACH Sale</td>
                                                <td><code>10</code></td>
                                                <td>Bank account payment (ACH)</td>
                                            </tr>
                                            <tr>
                                                <td>Gift Card</td>
                                                <td><code>12</code></td>
                                                <td>Gift card transaction</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Sale Transaction */}
                            <section id="sale">
                                <h2>Sale Transaction</h2>
                                <p>
                                    Process a sale transaction to charge the customer immediately. The transaction
                                    will be included in the next batch settlement.
                                </p>

                                <h3>Using Card Token</h3>
                                <CodeBlock
                                    language="json"
                                    title="POST /api/v3/diskTransact - Sale Request"
                                    code={`{
  "merchantAuthentication": {
    "merchantId": "139322815010",
    "transactionReferenceId": "TXN-2024-001"
  },
  "transactionRequest": {
    "transactionType": 1,
    "amount": "5000",
    "cardToken": "84C80CF2E93DBA227871DF03EAEA4AFD",
    "applySteamSettingTipFeeTax": true
  },
  "preferences": {
    "eReceipt": true,
    "customerEmail": "customer@example.com"
  },
  "AVS": {
    "StreetNo": "123",
    "Zip": "12345"
  }
}`}
                                />

                                <h3>Successful Response</h3>
                                <CodeBlock
                                    language="json"
                                    title="Response - 200 OK"
                                    code={`{
  "diskTransactResponse": {
    "responseCode": "200",
    "responseMessage": "Successful",
    "transactionId": "TRX-8291382",
    "RRN": "219313501821",
    "authCode": "123456",
    "totalAmount": "50.00",
    "tipAmount": "0.00",
    "taxAmount": "0.00",
    "cardType": "VISA",
    "lastFour": "4242",
    "transactionDateTime": "2024-01-15T14:30:00Z",
    "batchId": "BATCH-2024-01-15"
  }
}`}
                                />

                                <h3>Using Encrypted Card Data (V3)</h3>
                                <CodeBlock
                                    language="json"
                                    title="POST /api/v3/diskTransact - Encrypted Card"
                                    code={`{
  "merchantAuthentication": {
    "merchantId": "139322815010",
    "transactionReferenceId": "TXN-2024-002"
  },
  "transactionRequest": {
    "transactionType": 1,
    "amount": "2500",
    "encryptedCardData": "eyJlbmNyeXB0ZWQiOiJhYmNkZWYxMjM0NTY3ODkw...",
    "encryptionType": "RSA-2048"
  }
}`}
                                />
                            </section>

                            {/* Void Transaction */}
                            <section id="void">
                                <h2>Void Transaction</h2>
                                <p>
                                    Void a transaction before the batch settles. The funds are released back to
                                    the customer immediately. Voiding is only possible for transactions in the
                                    current open batch.
                                </p>

                                <CodeBlock
                                    language="json"
                                    title="POST /api/v3/diskTransact - Void Request"
                                    code={`{
  "merchantAuthentication": {
    "merchantId": "139322815010",
    "transactionReferenceId": "VOID-2024-001"
  },
  "transactionRequest": {
    "transactionType": 2,
    "rrn": "219313501821",
    "originalTransactionId": "TRX-8291382"
  }
}`}
                                />

                                <div className="callout callout-warning">
                                    <div className="callout-title">
                                        <span>⚠️</span> Important
                                    </div>
                                    <p style={{ margin: 0 }}>
                                        You can only void transactions that are in the current open batch.
                                        Once the batch has settled, you must use a Refund instead.
                                    </p>
                                </div>
                            </section>

                            {/* Refund Transaction */}
                            <section id="refund">
                                <h2>Refund Transaction</h2>
                                <p>
                                    Process a full or partial refund after the batch has settled. The refund
                                    amount will be credited back to the customer's card.
                                </p>

                                <h3>Full Refund</h3>
                                <CodeBlock
                                    language="json"
                                    title="POST /api/v3/diskTransact - Full Refund"
                                    code={`{
  "merchantAuthentication": {
    "merchantId": "139322815010",
    "transactionReferenceId": "REFUND-2024-001"
  },
  "transactionRequest": {
    "transactionType": 3,
    "rrn": "219313501821",
    "amount": "5000"
  }
}`}
                                />

                                <h3>Partial Refund</h3>
                                <CodeBlock
                                    language="json"
                                    title="POST /api/v3/diskTransact - Partial Refund"
                                    code={`{
  "merchantAuthentication": {
    "merchantId": "139322815010",
    "transactionReferenceId": "REFUND-2024-002"
  },
  "transactionRequest": {
    "transactionType": 3,
    "rrn": "219313501821",
    "amount": "1500"
  }
}`}
                                />
                            </section>

                            {/* Pre-Authorization */}
                            <section id="preauth">
                                <h2>Pre-Authorization</h2>
                                <p>
                                    Place a hold on funds without actually charging the customer. Common use cases
                                    include hotel check-ins, car rentals, and restaurant tabs.
                                </p>

                                <h3>Create Pre-Auth</h3>
                                <CodeBlock
                                    language="json"
                                    title="POST /api/v3/diskTransact - Pre-Auth"
                                    code={`{
  "merchantAuthentication": {
    "merchantId": "139322815010",
    "transactionReferenceId": "PREAUTH-2024-001"
  },
  "transactionRequest": {
    "transactionType": 5,
    "amount": "50000",
    "cardToken": "84C80CF2E93DBA227871DF03EAEA4AFD"
  }
}`}
                                />

                                <h3>Complete Pre-Auth (Ticket)</h3>
                                <CodeBlock
                                    language="json"
                                    title="POST /api/v3/diskTransact - Ticket"
                                    code={`{
  "merchantAuthentication": {
    "merchantId": "139322815010",
    "transactionReferenceId": "TICKET-2024-001"
  },
  "transactionRequest": {
    "transactionType": 6,
    "rrn": "219313501822",
    "amount": "45000"
  }
}`}
                                />

                                <h3>Increase Pre-Auth (Incremental)</h3>
                                <CodeBlock
                                    language="json"
                                    title="POST /api/v3/diskTransact - Incremental Auth"
                                    code={`{
  "merchantAuthentication": {
    "merchantId": "139322815010",
    "transactionReferenceId": "INCR-2024-001"
  },
  "transactionRequest": {
    "transactionType": 8,
    "rrn": "219313501822",
    "additionalAmount": "20000"
  }
}`}
                                />
                            </section>

                            {/* Batch Settlement */}
                            <section id="batch">
                                <h2>Batch Settlement</h2>
                                <p>
                                    Settle all transactions in the current batch and initiate fund transfers.
                                    Typically done at the end of each business day.
                                </p>

                                <h3>Settle Batch</h3>
                                <CodeBlock
                                    language="json"
                                    title="POST /api/v3/diskTransact - Batch Settlement"
                                    code={`{
  "merchantAuthentication": {
    "merchantId": "139322815010",
    "transactionReferenceId": "BATCH-2024-001"
  },
  "transactionRequest": {
    "transactionType": 4
  }
}`}
                                />

                                <h3>View Open Batch</h3>
                                <CodeBlock
                                    language="json"
                                    title="POST /api/v3/diskTransact - Open Batch"
                                    code={`{
  "merchantAuthentication": {
    "merchantId": "139322815010",
    "transactionReferenceId": "OPENBATCH-2024-001"
  },
  "transactionRequest": {
    "transactionType": 9
  }
}`}
                                />

                                <h3>Open Batch Response</h3>
                                <CodeBlock
                                    language="json"
                                    title="Response"
                                    code={`{
  "diskTransactResponse": {
    "responseCode": "200",
    "responseMessage": "Successful",
    "batchId": "BATCH-2024-01-15",
    "transactionCount": 47,
    "totalSales": "15234.50",
    "totalRefunds": "250.00",
    "netAmount": "14984.50",
    "transactions": [
      {
        "transactionId": "TRX-8291382",
        "type": "SALE",
        "amount": "50.00",
        "cardType": "VISA",
        "lastFour": "4242",
        "time": "14:30:00"
      }
    ]
  }
}`}
                                />
                            </section>

                            {/* Error Codes */}
                            <section id="errors">
                                <h2>Error Codes</h2>
                                <p>
                                    The API returns standardized error codes to help you handle failures appropriately.
                                </p>

                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Code</th>
                                                <th>Message</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><code>200</code></td>
                                                <td>Successful</td>
                                                <td>Transaction completed successfully</td>
                                            </tr>
                                            <tr>
                                                <td><code>400</code></td>
                                                <td>Bad Request</td>
                                                <td>Invalid request format or missing required fields</td>
                                            </tr>
                                            <tr>
                                                <td><code>401</code></td>
                                                <td>Unauthorized</td>
                                                <td>Invalid or missing authentication token</td>
                                            </tr>
                                            <tr>
                                                <td><code>05</code></td>
                                                <td>Do Not Honor</td>
                                                <td>Card issuer declined the transaction</td>
                                            </tr>
                                            <tr>
                                                <td><code>51</code></td>
                                                <td>Insufficient Funds</td>
                                                <td>Card does not have enough balance</td>
                                            </tr>
                                            <tr>
                                                <td><code>54</code></td>
                                                <td>Expired Card</td>
                                                <td>The card has expired</td>
                                            </tr>
                                            <tr>
                                                <td><code>57</code></td>
                                                <td>Transaction Not Permitted</td>
                                                <td>Card is not authorized for this type of transaction</td>
                                            </tr>
                                            <tr>
                                                <td><code>91</code></td>
                                                <td>Issuer Unavailable</td>
                                                <td>Card network or issuer is temporarily unavailable</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p>
                                    <a href="/error-codes" style={{ color: 'var(--color-red)' }}>
                                        View complete error codes reference →
                                    </a>
                                </p>
                            </section>

                            {/* Version History */}
                            <section id="version-history">
                                <h2>Version History</h2>
                                <p>
                                    Stay up to date with the latest API changes and improvements.
                                </p>

                                <div className="table-container">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Version</th>
                                                <th>Changes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2024-01-15</td>
                                                <td><span className="badge badge-red">V3.2</span></td>
                                                <td>Added encrypted card data support, authentication token API</td>
                                            </tr>
                                            <tr>
                                                <td>2023-10-19</td>
                                                <td><span className="badge badge-info">V3.1</span></td>
                                                <td>Added Level 3 / VISA CEDP support for commercial cards</td>
                                            </tr>
                                            <tr>
                                                <td>2023-09-25</td>
                                                <td><span className="badge badge-info">V3.0</span></td>
                                                <td>Added Gift Card transactions, HSA/FSA support</td>
                                            </tr>
                                            <tr>
                                                <td>2023-06-01</td>
                                                <td><span className="badge badge-warning">V2.5</span></td>
                                                <td>Added Google Pay and Apple Pay integration</td>
                                            </tr>
                                            <tr>
                                                <td>2023-03-15</td>
                                                <td><span className="badge badge-warning">V2.0</span></td>
                                                <td>Added ACH payments, Tip Adjust, Incremental Auth</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </section>

                            {/* Navigation */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: '3rem',
                                paddingTop: '2rem',
                                borderTop: '1px solid var(--color-border)'
                            }}>
                                <a href="/authentication" className="btn btn-ghost">
                                    ← Authentication
                                </a>
                                <a href="/recurring-payments" className="btn btn-ghost">
                                    Recurring Payments →
                                </a>
                            </div>
                        </div>

                        {/* Table of Contents */}
                        <aside className="toc">
                            <div className="toc-title">On This Page</div>
                            <ul className="toc-list">
                                {tocItems.map((item) => (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            className={`toc-link ${activeSection === item.id ? 'active' : ''}`}
                                            onClick={() => setActiveSection(item.id)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </div>
                </div>
            </main>
        </>
    );
}
