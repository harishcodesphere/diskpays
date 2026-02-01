'use client';

import { useState } from 'react';
import Header from '@/components/Header';

// Code block component
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
                <button onClick={handleCopy} className="code-copy-btn">
                    {copied ? '✓ Copied!' : 'Copy'}
                </button>
                <code>{code}</code>
            </pre>
        </div>
    );
};

export default function SPInPage() {
    return (
        <>
            <Header />

            <main className="main-wrapper">
                <div className="main-content">
                    <div className="content-container">
                        {/* Breadcrumbs */}
                        <nav className="breadcrumbs">
                            <span className="breadcrumb-item">Docs</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Payment Solutions</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">SPIn Specification</span>
                        </nav>

                        {/* Page Header */}
                        <header className="page-header">
                            <h1 className="page-title">SPIn (Semi-Integration)</h1>
                            <p className="page-description">
                                Bridge your Point of Sale (POS) system with DiskPays Payment Terminals through our
                                Secure Payment Interface. Cloud-based, secure, and fully PCI-compliant.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <span className="badge badge-success">✓ Active</span>
                                <span className="badge badge-red">SOAP API</span>
                                <span className="badge badge-red">REST API</span>
                                <span className="badge badge-info">POS Integration</span>
                            </div>
                        </header>

                        {/* Overview */}
                        <section id="overview">
                            <h2>Overview</h2>
                            <p>
                                SPIn (Secure Payment Interface) is a robust semi-integration solution that bridges
                                Point of Sale (POS) systems — such as cash registers, billing software, or tills —
                                with DiskPays Payment Terminals. By creating a secure, cloud-based connection, SPIn
                                enables the Merchant's Host System to communicate seamlessly with DiskPays terminals.
                            </p>

                            <div className="callout callout-success">
                                <div className="callout-title">
                                    <span>🔒</span> Zero PCI Burden
                                </div>
                                <p style={{ margin: 0 }}>
                                    Sensitive cardholder data such as PAN and expiration dates never touch the Host System.
                                    This completely eliminates PCI compliance requirements for your application.
                                </p>
                            </div>

                            <h3>How It Works</h3>
                            <div style={{
                                background: 'var(--glass-bg)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '16px',
                                padding: '2rem',
                                margin: '1.5rem 0'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: '1rem'
                                }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🖥️</div>
                                        <div style={{ fontWeight: '600' }}>Your POS System</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                            Cash register, billing software
                                        </div>
                                    </div>

                                    <div style={{ color: 'var(--color-red)', fontSize: '1.5rem' }}>→</div>

                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>☁️</div>
                                        <div style={{ fontWeight: '600' }}>SPIn Cloud</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                            SOAP / REST API
                                        </div>
                                    </div>

                                    <div style={{ color: 'var(--color-red)', fontSize: '1.5rem' }}>→</div>

                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>💳</div>
                                        <div style={{ fontWeight: '600' }}>Payment Terminal</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                            DiskPays devices
                                        </div>
                                    </div>

                                    <div style={{ color: 'var(--color-red)', fontSize: '1.5rem' }}>→</div>

                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✅</div>
                                        <div style={{ fontWeight: '600' }}>Payment Complete</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                            Transaction processed
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Prerequisites */}
                        <section id="prerequisites">
                            <h2>Prerequisites</h2>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Requirement</th>
                                            <th>Description</th>
                                            <th>How to Get</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>AuthKey</code></td>
                                            <td>Unique authentication key for API requests</td>
                                            <td>DiskPays Portal → Settings → API Keys</td>
                                        </tr>
                                        <tr>
                                            <td><code>TPN</code></td>
                                            <td>Terminal Profile Number (12 digits)</td>
                                            <td>Assigned during merchant onboarding</td>
                                        </tr>
                                        <tr>
                                            <td><code>RegisterId</code></td>
                                            <td>Register/Lane identifier</td>
                                            <td>Configure in your POS system</td>
                                        </tr>
                                        <tr>
                                            <td>Payment Terminal</td>
                                            <td>DiskPays-certified payment device</td>
                                            <td>Contact DiskPays sales</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* API Endpoints */}
                        <section id="endpoints">
                            <h2>API Endpoints</h2>

                            <h3>SOAP API</h3>
                            <CodeBlock
                                language="text"
                                title="SOAP Endpoint"
                                code={`Production: https://api.diskpays.com/spin/soap/v1
Sandbox:    https://sandbox.diskpays.com/spin/soap/v1

WSDL: https://api.diskpays.com/spin/soap/v1?wsdl`}
                            />

                            <h3>REST API</h3>
                            <CodeBlock
                                language="text"
                                title="REST Endpoint"
                                code={`Production: https://api.diskpays.com/spin/rest/v1
Sandbox:    https://sandbox.diskpays.com/spin/rest/v1`}
                            />
                        </section>

                        {/* SOAP API Examples */}
                        <section id="soap">
                            <h2>SOAP API</h2>
                            <p>
                                The SOAP API uses XML-based messaging for communication with the SPIn service.
                                This is the traditional integration method with comprehensive support.
                            </p>

                            <h3>Sale Transaction (SOAP)</h3>
                            <CodeBlock
                                language="xml"
                                title="SOAP Request - Sale"
                                code={`<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
                  xmlns:spin="http://diskpays.com/spin">
  <soapenv:Header/>
  <soapenv:Body>
    <spin:ProcessTransaction>
      <request>
        <AuthKey>234123-74653252-663525223</AuthKey>
        <RegisterId>3</RegisterId>
        <TPN>123456789123</TPN>
        <TerminalTransaction InvoiceNo="1234" RefId="REF-001">
          <Transaction>
            <TransactionType>SALE</TransactionType>
            <Amount>25.00</Amount>
          </Transaction>
        </TerminalTransaction>
      </request>
    </spin:ProcessTransaction>
  </soapenv:Body>
</soapenv:Envelope>`}
                            />

                            <h3>SOAP Response</h3>
                            <CodeBlock
                                language="xml"
                                title="SOAP Response - Success"
                                code={`<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <ProcessTransactionResponse>
      <result>
        <ResponseCode>00</ResponseCode>
        <ResponseMessage>APPROVED</ResponseMessage>
        <AuthCode>123456</AuthCode>
        <RRN>219313501821</RRN>
        <CardType>VISA</CardType>
        <MaskedPAN>************4242</MaskedPAN>
        <Amount>25.00</Amount>
        <TransactionDateTime>2024-01-15T14:30:00Z</TransactionDateTime>
      </result>
    </ProcessTransactionResponse>
  </soapenv:Body>
</soapenv:Envelope>`}
                            />

                            <h3>Display Cart Items</h3>
                            <p>
                                Send line items from your POS to display on the payment terminal screen.
                            </p>
                            <CodeBlock
                                language="xml"
                                title="SOAP Request - Cart Display"
                                code={`<request>
  <AuthKey>234123-74653252-663525223</AuthKey>
  <RegisterId>3</RegisterId>
  <TPN>123456789123</TPN>
  <TerminalTransaction InvoiceNo="1234">
    <Transaction>
      <TransactionType>SALE</TransactionType>
      <Amount>47.50</Amount>
    </Transaction>
    <LineItems>
      <Item>
        <Description>Coffee - Large</Description>
        <Quantity>2</Quantity>
        <UnitPrice>4.50</UnitPrice>
        <ExtendedPrice>9.00</ExtendedPrice>
      </Item>
      <Item>
        <Description>Sandwich - Turkey Club</Description>
        <Quantity>1</Quantity>
        <UnitPrice>12.00</UnitPrice>
        <ExtendedPrice>12.00</ExtendedPrice>
      </Item>
      <Item>
        <Description>Tax</Description>
        <Quantity>1</Quantity>
        <UnitPrice>2.50</UnitPrice>
        <ExtendedPrice>2.50</ExtendedPrice>
      </Item>
    </LineItems>
  </TerminalTransaction>
</request>`}
                            />
                        </section>

                        {/* REST API Examples */}
                        <section id="rest">
                            <h2>REST API</h2>
                            <p>
                                The REST API provides a modern JSON-based interface for SPIn integration.
                                Recommended for new implementations.
                            </p>

                            <h3>Sale Transaction (REST)</h3>
                            <CodeBlock
                                language="json"
                                title="POST /spin/rest/v1/transaction"
                                code={`{
  "authKey": "234123-74653252-663525223",
  "registerId": "3",
  "tpn": "123456789123",
  "transaction": {
    "invoiceNo": "INV-1234",
    "refId": "REF-001",
    "transactionType": "SALE",
    "amount": "25.00"
  }
}`}
                            />

                            <h3>REST Response</h3>
                            <CodeBlock
                                language="json"
                                title="Response - 200 OK"
                                code={`{
  "responseCode": "00",
  "responseMessage": "APPROVED",
  "authCode": "123456",
  "rrn": "219313501821",
  "cardType": "VISA",
  "maskedPan": "************4242",
  "amount": "25.00",
  "transactionDateTime": "2024-01-15T14:30:00Z",
  "terminalId": "TERM-001",
  "batchNo": "001"
}`}
                            />

                            <h3>Check Transaction Status</h3>
                            <CodeBlock
                                language="json"
                                title="POST /spin/rest/v1/status"
                                code={`{
  "authKey": "234123-74653252-663525223",
  "tpn": "123456789123",
  "refId": "REF-001"
}`}
                            />

                            <h3>Void Transaction</h3>
                            <CodeBlock
                                language="json"
                                title="POST /spin/rest/v1/transaction"
                                code={`{
  "authKey": "234123-74653252-663525223",
  "registerId": "3",
  "tpn": "123456789123",
  "transaction": {
    "invoiceNo": "INV-1234",
    "transactionType": "VOID",
    "rrn": "219313501821"
  }
}`}
                            />
                        </section>

                        {/* Transaction Types */}
                        <section id="transaction-types">
                            <h2>Supported Transaction Types</h2>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>SOAP Value</th>
                                            <th>REST Value</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Sale</td>
                                            <td><code>SALE</code></td>
                                            <td><code>"SALE"</code></td>
                                            <td>Standard payment transaction</td>
                                        </tr>
                                        <tr>
                                            <td>Void</td>
                                            <td><code>VOID</code></td>
                                            <td><code>"VOID"</code></td>
                                            <td>Cancel before batch close</td>
                                        </tr>
                                        <tr>
                                            <td>Return</td>
                                            <td><code>RETURN</code></td>
                                            <td><code>"RETURN"</code></td>
                                            <td>Refund after batch settlement</td>
                                        </tr>
                                        <tr>
                                            <td>Pre-Auth</td>
                                            <td><code>PREAUTH</code></td>
                                            <td><code>"PREAUTH"</code></td>
                                            <td>Authorization hold</td>
                                        </tr>
                                        <tr>
                                            <td>Auth Complete</td>
                                            <td><code>AUTHCOMPLETE</code></td>
                                            <td><code>"AUTHCOMPLETE"</code></td>
                                            <td>Capture pre-authorization</td>
                                        </tr>
                                        <tr>
                                            <td>Balance Inquiry</td>
                                            <td><code>BALANCE</code></td>
                                            <td><code>"BALANCE"</code></td>
                                            <td>Check gift/prepaid balance</td>
                                        </tr>
                                        <tr>
                                            <td>Batch Close</td>
                                            <td><code>BATCHCLOSE</code></td>
                                            <td><code>"BATCHCLOSE"</code></td>
                                            <td>Settle transactions</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Error Handling */}
                        <section id="errors">
                            <h2>Error Handling</h2>
                            <p>
                                Always implement proper timeout handling for SPIn requests. Terminal operations
                                may take up to 60 seconds depending on customer interaction.
                            </p>

                            <div className="callout callout-warning">
                                <div className="callout-title">
                                    <span>⏱️</span> Timeout Handling
                                </div>
                                <p style={{ margin: 0 }}>
                                    Set your HTTP client timeout to at least 120 seconds. If a timeout occurs,
                                    use the Status Check endpoint to verify whether the transaction completed.
                                </p>
                            </div>

                            <h3>Common Response Codes</h3>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Message</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>00</code></td>
                                            <td>APPROVED</td>
                                            <td>Transaction successful</td>
                                        </tr>
                                        <tr>
                                            <td><code>01</code></td>
                                            <td>CALL CENTER</td>
                                            <td>Refer to card issuer</td>
                                        </tr>
                                        <tr>
                                            <td><code>05</code></td>
                                            <td>DO NOT HONOR</td>
                                            <td>Decline - contact issuer</td>
                                        </tr>
                                        <tr>
                                            <td><code>51</code></td>
                                            <td>INSUFFICIENT FUNDS</td>
                                            <td>Try lower amount or different card</td>
                                        </tr>
                                        <tr>
                                            <td><code>91</code></td>
                                            <td>ISSUER UNAVAILABLE</td>
                                            <td>Retry in a few minutes</td>
                                        </tr>
                                        <tr>
                                            <td><code>TO</code></td>
                                            <td>TIMEOUT</td>
                                            <td>Check status, retry if needed</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Best Practices */}
                        <section id="best-practices">
                            <h2>Best Practices</h2>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                                gap: '1rem',
                                margin: '1.5rem 0'
                            }}>
                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>🔐 Secure Your AuthKey</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                        Never expose your AuthKey in client-side code. Always make SPIn calls from your backend server.
                                    </p>
                                </div>

                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>🔄 Implement Retry Logic</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                        For timeout scenarios, always check transaction status before retrying to prevent duplicate charges.
                                    </p>
                                </div>

                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>📝 Store RRN Values</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                        Always save the RRN from successful transactions. You'll need it for voids, refunds, and disputes.
                                    </p>
                                </div>

                                <div className="card">
                                    <h4 style={{ marginTop: 0, color: 'var(--color-red)' }}>🧪 Test in Sandbox</h4>
                                    <p style={{ fontSize: '0.9rem', margin: 0 }}>
                                        Always test your integration thoroughly in the sandbox environment before going live.
                                    </p>
                                </div>
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
                            <a href="/quick-start" className="btn btn-ghost">
                                ← Quick Start
                            </a>
                            <a href="/freedom-to-design" className="btn btn-ghost">
                                Freedom to Design →
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
