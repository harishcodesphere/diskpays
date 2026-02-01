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

export default function HostedPaymentPage() {
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
                            <span className="breadcrumb-item">Hosted Payment Page</span>
                        </nav>

                        {/* Page Header */}
                        <header className="page-header">
                            <h1 className="page-title">Hosted Payment Page</h1>
                            <p className="page-description">
                                A pre-built, secure checkout page that can be integrated into any eCommerce website
                                or software. Accept payments without any compliance burden — we handle everything.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <span className="badge badge-success">✓ Active</span>
                                <span className="badge badge-red">Redirect</span>
                                <span className="badge badge-red">Embedded</span>
                                <span className="badge badge-info">No-Code</span>
                            </div>
                        </header>

                        {/* Overview */}
                        <section id="overview">
                            <h2>Overview</h2>
                            <p>
                                The Hosted Payment Page (HPP) is a checkout page that can be integrated into an
                                eCommerce website or any software that wants to accept payments without any compliance
                                burden. DiskPays hosts and maintains the payment form, handles all sensitive card data,
                                and ensures PCI DSS compliance on your behalf.
                            </p>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '1rem',
                                margin: '2rem 0'
                            }}>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Quick Setup</h4>
                                    <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--color-text-secondary)' }}>
                                        Integrate in minutes with just a few lines of code
                                    </p>
                                </div>

                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔒</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Zero PCI Scope</h4>
                                    <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--color-text-secondary)' }}>
                                        Card data never touches your servers
                                    </p>
                                </div>

                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎨</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Customizable</h4>
                                    <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--color-text-secondary)' }}>
                                        Match your brand with colors and logo
                                    </p>
                                </div>

                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📱</div>
                                    <h4 style={{ marginTop: 0, marginBottom: '0.5rem' }}>Mobile Ready</h4>
                                    <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--color-text-secondary)' }}>
                                        Responsive design works on all devices
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Integration Modes */}
                        <section id="modes">
                            <h2>Integration Modes</h2>
                            <p>
                                Choose the integration mode that best fits your user experience needs.
                            </p>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Mode</th>
                                            <th>Description</th>
                                            <th>Best For</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><span className="badge badge-red">Redirect</span></td>
                                            <td>Redirects customer to DiskPays-hosted page, then returns to your site</td>
                                            <td>Simplest integration, any platform</td>
                                        </tr>
                                        <tr>
                                            <td><span className="badge badge-info">Embedded (iFrame)</span></td>
                                            <td>Embed payment form directly in your page using an iFrame</td>
                                            <td>Seamless checkout experience</td>
                                        </tr>
                                        <tr>
                                            <td><span className="badge badge-success">Lightbox</span></td>
                                            <td>Opens payment form in a modal overlay</td>
                                            <td>Modern UX, single-page apps</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Redirect Mode */}
                        <section id="redirect">
                            <h2>Redirect Mode</h2>
                            <p>
                                The redirect mode is the simplest way to integrate. Generate a payment URL and
                                redirect your customer to complete the payment.
                            </p>

                            <h3>Step 1: Create Payment Session</h3>
                            <CodeBlock
                                language="json"
                                title="POST /api/v1/hpp/session"
                                code={`{
  "merchantId": "139322815010",
  "amount": "99.99",
  "currency": "USD",
  "orderId": "ORDER-12345",
  "description": "Premium Subscription",
  "customerEmail": "customer@example.com",
  "returnUrl": "https://yoursite.com/payment/success",
  "cancelUrl": "https://yoursite.com/payment/cancel",
  "webhookUrl": "https://yoursite.com/api/webhook",
  "customization": {
    "logoUrl": "https://yoursite.com/logo.png",
    "primaryColor": "#d4af37",
    "companyName": "Your Company"
  }
}`}
                            />

                            <h3>Step 2: Response with Payment URL</h3>
                            <CodeBlock
                                language="json"
                                title="Response - 200 OK"
                                code={`{
  "responseCode": "200",
  "responseMessage": "Session created",
  "sessionId": "sess_abc123xyz789",
  "paymentUrl": "https://pay.diskpays.com/checkout/sess_abc123xyz789",
  "expiresAt": "2024-01-15T15:30:00Z"
}`}
                            />

                            <h3>Step 3: Redirect Customer</h3>
                            <CodeBlock
                                language="javascript"
                                title="Frontend Redirect"
                                code={`// Redirect the customer to complete payment
window.location.href = response.paymentUrl;

// Or in React/Next.js
<button onClick={() => window.location.href = paymentUrl}>
  Pay Now - $99.99
</button>`}
                            />

                            <h3>Step 4: Handle Return</h3>
                            <p>
                                After payment, the customer is redirected to your <code>returnUrl</code> with
                                query parameters containing the result.
                            </p>
                            <CodeBlock
                                language="text"
                                title="Return URL Parameters"
                                code={`https://yoursite.com/payment/success
  ?sessionId=sess_abc123xyz789
  &transactionId=TXN-8291382
  &status=approved
  &amount=99.99
  &rrn=219313501821`}
                            />
                        </section>

                        {/* Embedded Mode */}
                        <section id="embedded">
                            <h2>Embedded Mode (iFrame)</h2>
                            <p>
                                Embed the payment form directly in your page for a seamless checkout experience.
                            </p>

                            <h3>Step 1: Create Session (Same as Redirect)</h3>
                            <CodeBlock
                                language="json"
                                title="POST /api/v1/hpp/session"
                                code={`{
  "merchantId": "139322815010",
  "amount": "99.99",
  "currency": "USD",
  "orderId": "ORDER-12345",
  "mode": "embedded",
  "returnUrl": "https://yoursite.com/payment/success"
}`}
                            />

                            <h3>Step 2: Embed the iFrame</h3>
                            <CodeBlock
                                language="html"
                                title="HTML - Embed Payment Form"
                                code={`<!-- Payment Container -->
<div id="payment-container">
  <iframe 
    id="diskpays-frame"
    src="https://pay.diskpays.com/embed/sess_abc123xyz789"
    width="100%"
    height="450"
    frameborder="0"
    allow="payment"
    style="border: none; border-radius: 12px;"
  ></iframe>
</div>

<!-- Listen for Payment Events -->
<script>
  window.addEventListener('message', function(event) {
    if (event.origin !== 'https://pay.diskpays.com') return;
    
    const { type, data } = event.data;
    
    if (type === 'payment_complete') {
      console.log('Payment successful:', data.transactionId);
      // Handle success
    } else if (type === 'payment_failed') {
      console.error('Payment failed:', data.error);
      // Handle failure
    } else if (type === 'payment_cancelled') {
      console.log('Payment cancelled');
      // Handle cancellation
    }
  });
</script>`}
                            />

                            <div className="callout callout-info">
                                <div className="callout-title">
                                    <span>💡</span> Cross-Origin Communication
                                </div>
                                <p style={{ margin: 0 }}>
                                    The embedded iFrame uses <code>postMessage</code> to communicate payment results
                                    back to your parent page. Always validate the origin before processing events.
                                </p>
                            </div>
                        </section>

                        {/* Lightbox Mode */}
                        <section id="lightbox">
                            <h2>Lightbox Mode</h2>
                            <p>
                                Display the payment form in a sleek modal overlay. Perfect for single-page applications.
                            </p>

                            <CodeBlock
                                language="html"
                                title="HTML + JavaScript - Lightbox Integration"
                                code={`<!-- Include DiskPays SDK -->
<script src="https://js.diskpays.com/hpp-lightbox.js"></script>

<!-- Pay Button -->
<button id="pay-button">
  Pay $99.99
</button>

<script>
  const diskpays = new DiskPaysHPP({
    merchantId: '139322815010',
    mode: 'lightbox'
  });

  document.getElementById('pay-button').addEventListener('click', async () => {
    try {
      const result = await diskpays.checkout({
        amount: '99.99',
        currency: 'USD',
        orderId: 'ORDER-12345',
        customerEmail: 'customer@example.com',
        customization: {
          primaryColor: '#d4af37',
          companyName: 'Your Company'
        }
      });

      if (result.status === 'approved') {
        console.log('Payment successful!', result.transactionId);
        // Redirect to success page
        window.location.href = '/order/success?id=' + result.transactionId;
      }
    } catch (error) {
      console.error('Payment failed:', error);
    }
  });
</script>`}
                            />
                        </section>

                        {/* Webhooks */}
                        <section id="webhooks">
                            <h2>Webhooks</h2>
                            <p>
                                Receive real-time payment notifications on your server. Webhooks are the most
                                reliable way to confirm payment status.
                            </p>

                            <h3>Webhook Payload</h3>
                            <CodeBlock
                                language="json"
                                title="POST to your webhookUrl"
                                code={`{
  "event": "payment.completed",
  "timestamp": "2024-01-15T14:30:00Z",
  "data": {
    "sessionId": "sess_abc123xyz789",
    "transactionId": "TXN-8291382",
    "orderId": "ORDER-12345",
    "amount": "99.99",
    "currency": "USD",
    "status": "approved",
    "rrn": "219313501821",
    "cardType": "VISA",
    "lastFour": "4242",
    "customerEmail": "customer@example.com"
  },
  "signature": "sha256=abc123..."
}`}
                            />

                            <h3>Verify Webhook Signature</h3>
                            <CodeBlock
                                language="javascript"
                                title="Node.js - Webhook Verification"
                                code={`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expected = 'sha256=' + crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
    
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}

// In your webhook handler
app.post('/api/webhook', (req, res) => {
  const signature = req.headers['x-diskpays-signature'];
  
  if (!verifyWebhook(req.body, signature, process.env.WEBHOOK_SECRET)) {
    return res.status(401).json({ error: 'Invalid signature' });
  }
  
  const { event, data } = req.body;
  
  if (event === 'payment.completed' && data.status === 'approved') {
    // Update order status in your database
    await updateOrder(data.orderId, 'paid');
  }
  
  res.status(200).json({ received: true });
});`}
                            />

                            <div className="callout callout-warning">
                                <div className="callout-title">
                                    <span>⚠️</span> Always Verify Signatures
                                </div>
                                <p style={{ margin: 0 }}>
                                    Always verify the webhook signature before processing. This prevents attackers
                                    from sending fake payment notifications to your server.
                                </p>
                            </div>
                        </section>

                        {/* Customization */}
                        <section id="customization">
                            <h2>Customization Options</h2>
                            <p>
                                Customize the hosted payment page to match your brand identity.
                            </p>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Parameter</th>
                                            <th>Type</th>
                                            <th>Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>logoUrl</code></td>
                                            <td>string</td>
                                            <td>URL to your company logo (recommended: 200x50px)</td>
                                        </tr>
                                        <tr>
                                            <td><code>primaryColor</code></td>
                                            <td>string</td>
                                            <td>Hex color for buttons and accents (e.g., #d4af37)</td>
                                        </tr>
                                        <tr>
                                            <td><code>companyName</code></td>
                                            <td>string</td>
                                            <td>Your company name displayed on the page</td>
                                        </tr>
                                        <tr>
                                            <td><code>backgroundColor</code></td>
                                            <td>string</td>
                                            <td>Background color of the payment form</td>
                                        </tr>
                                        <tr>
                                            <td><code>fontFamily</code></td>
                                            <td>string</td>
                                            <td>Custom font (Google Fonts supported)</td>
                                        </tr>
                                        <tr>
                                            <td><code>showBillingAddress</code></td>
                                            <td>boolean</td>
                                            <td>Show/hide billing address fields</td>
                                        </tr>
                                        <tr>
                                            <td><code>language</code></td>
                                            <td>string</td>
                                            <td>Checkout language (en, es, fr, de, etc.)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        {/* Testing */}
                        <section id="testing">
                            <h2>Testing</h2>
                            <p>
                                Use the sandbox environment to test your integration before going live.
                            </p>

                            <h3>Sandbox Endpoint</h3>
                            <CodeBlock
                                language="text"
                                code={`https://sandbox.diskpays.com/api/v1/hpp/session`}
                            />

                            <h3>Test Card Numbers</h3>
                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Card Number</th>
                                            <th>Result</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>4242 4242 4242 4242</code></td>
                                            <td><span className="badge badge-success">Approved</span></td>
                                        </tr>
                                        <tr>
                                            <td><code>4000 0000 0000 0002</code></td>
                                            <td><span className="badge badge-error">Declined</span></td>
                                        </tr>
                                        <tr>
                                            <td><code>4000 0000 0000 9995</code></td>
                                            <td><span className="badge badge-warning">Insufficient Funds</span></td>
                                        </tr>
                                        <tr>
                                            <td><code>4000 0000 0000 0069</code></td>
                                            <td><span className="badge badge-error">Expired Card</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                                Use any future expiration date and any 3-digit CVV for test cards.
                            </p>
                        </section>

                        {/* Navigation */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '3rem',
                            paddingTop: '2rem',
                            borderTop: '1px solid var(--color-border)'
                        }}>
                            <a href="/freedom-to-design" className="btn btn-ghost">
                                ← Freedom to Design
                            </a>
                            <a href="/woocommerce" className="btn btn-ghost">
                                WooCommerce Extension →
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
