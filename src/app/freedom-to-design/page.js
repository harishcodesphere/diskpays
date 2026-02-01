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

export default function FreedomToDesignPage() {
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
                            <span className="breadcrumb-item">Freedom to Design</span>
                        </nav>

                        {/* Page Header */}
                        <header className="page-header">
                            <h1 className="page-title">Freedom to Design</h1>
                            <p className="page-description">
                                Build custom checkout experiences with full control over look and feel. Our JavaScript
                                SDK handles security and tokenization while you own the design.
                            </p>
                            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
                                <span className="badge badge-success">✓ Active</span>
                                <span className="badge badge-red">JavaScript SDK</span>
                                <span className="badge badge-red">React</span>
                                <span className="badge badge-info">Custom UI</span>
                            </div>
                        </header>

                        {/* Overview */}
                        <section id="overview">
                            <h2>Overview</h2>
                            <p>
                                Freedom to Design is a JavaScript framework that allows merchants to collect sensitive
                                payment information from their customers without exposing their websites to sensitive
                                information. This can be done while allowing merchants to retain full control over the
                                look and feel of their checkout experience.
                            </p>

                            <div className="callout callout-success">
                                <div className="callout-title">
                                    <span>🎨</span> Your Design, Our Security
                                </div>
                                <p style={{ margin: 0 }}>
                                    You build the checkout form exactly how you want it. Our SDK intercepts the card data,
                                    tokenizes it securely, and you never touch raw card numbers. Full PCI compliance without
                                    the hassle.
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
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                                    gap: '1.5rem',
                                    textAlign: 'center'
                                }}>
                                    <div>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            background: 'var(--gradient-red)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 0.75rem',
                                            fontWeight: '700',
                                            color: 'var(--color-bg-primary)'
                                        }}>1</div>
                                        <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Include SDK</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                            Add our script to your page
                                        </div>
                                    </div>

                                    <div>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            background: 'var(--gradient-red)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 0.75rem',
                                            fontWeight: '700',
                                            color: 'var(--color-bg-primary)'
                                        }}>2</div>
                                        <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Build Your Form</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                            Create your custom design
                                        </div>
                                    </div>

                                    <div>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            background: 'var(--gradient-red)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 0.75rem',
                                            fontWeight: '700',
                                            color: 'var(--color-bg-primary)'
                                        }}>3</div>
                                        <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Tokenize</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                            SDK creates secure token
                                        </div>
                                    </div>

                                    <div>
                                        <div style={{
                                            width: '50px',
                                            height: '50px',
                                            background: 'var(--gradient-red)',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 0.75rem',
                                            fontWeight: '700',
                                            color: 'var(--color-bg-primary)'
                                        }}>4</div>
                                        <div style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Charge</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                                            Use token with Disk Transact
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Quick Start */}
                        <section id="quickstart">
                            <h2>Quick Start</h2>

                            <h3>Step 1: Include the SDK</h3>
                            <CodeBlock
                                language="html"
                                title="Add to your HTML"
                                code={`<script 
  id="ftd" 
  src="https://payment.diskpays.com/ftd/v1/freedomtodesign.js" 
  security_key="your_security_key_here"
  defer>
</script>`}
                            />

                            <h3>Step 2: Create Your Form</h3>
                            <CodeBlock
                                language="html"
                                title="Custom Checkout Form"
                                code={`<form id="payment-form">
  <div class="form-group">
    <label for="ccnumber">Card Number</label>
    <input type="text" id="ccnumber" placeholder="4242 4242 4242 4242" />
  </div>
  
  <div class="form-row">
    <div class="form-group">
      <label for="ccexpiry">Expiration</label>
      <input type="text" id="ccexpiry" placeholder="MM/YY" />
    </div>
    
    <div class="form-group">
      <label for="cccvv">CVV</label>
      <input type="text" id="cccvv" placeholder="123" />
    </div>
  </div>
  
  <button type="submit" id="pay-button">
    Pay $99.99
  </button>
</form>

<!-- Error display -->
<div id="payment-error" style="display: none; color: red;"></div>`}
                            />

                            <h3>Step 3: Initialize and Tokenize</h3>
                            <CodeBlock
                                language="javascript"
                                title="JavaScript - Tokenization"
                                code={`document.getElementById('payment-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const payButton = document.getElementById('pay-button');
  const errorDiv = document.getElementById('payment-error');
  
  // Disable button during processing
  payButton.disabled = true;
  payButton.textContent = 'Processing...';
  errorDiv.style.display = 'none';
  
  try {
    // FreedomToDesign SDK automatically finds inputs by ID
    // It intercepts: ccnumber, ccexpiry, cccvv
    const result = await FreedomToDesign.tokenize();
    
    if (result.success) {
      // Token created! Send to your backend
      const paymentTokenId = result.paymentTokenId;
      
      // Call your backend to process payment
      const response = await fetch('/api/charge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentTokenId: paymentTokenId,
          amount: 9999, // $99.99 in cents
          orderId: 'ORDER-12345'
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        window.location.href = '/order/success';
      } else {
        throw new Error(data.error || 'Payment failed');
      }
    } else {
      throw new Error(result.error || 'Tokenization failed');
    }
  } catch (error) {
    errorDiv.textContent = error.message;
    errorDiv.style.display = 'block';
    payButton.disabled = false;
    payButton.textContent = 'Pay $99.99';
  }
});`}
                            />

                            <h3>Step 4: Process on Backend</h3>
                            <CodeBlock
                                language="javascript"
                                title="Node.js Backend - /api/charge"
                                code={`// Using the paymentTokenId with Disk Transact API
app.post('/api/charge', async (req, res) => {
  const { paymentTokenId, amount, orderId } = req.body;
  
  try {
    const response = await fetch('https://api.diskpays.com/api/v3/diskTransact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': process.env.DISKPAYS_API_TOKEN
      },
      body: JSON.stringify({
        merchantAuthentication: {
          merchantId: process.env.MERCHANT_ID,
          transactionReferenceId: orderId
        },
        transactionRequest: {
          transactionType: 1, // SALE
          amount: amount.toString(),
          paymentTokenId: paymentTokenId // Single-use token from FTD
        }
      })
    });
    
    const data = await response.json();
    
    if (data.diskTransactResponse.responseCode === '200') {
      // Payment successful!
      await saveOrder(orderId, data.diskTransactResponse);
      res.json({ success: true, transactionId: data.diskTransactResponse.transactionId });
    } else {
      res.json({ success: false, error: data.diskTransactResponse.responseMessage });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: 'Payment processing failed' });
  }
});`}
                            />
                        </section>

                        {/* React Integration */}
                        <section id="react">
                            <h2>React Integration</h2>
                            <p>
                                Integrate Freedom to Design into your React or Next.js application.
                            </p>

                            <CodeBlock
                                language="jsx"
                                title="React Component - CheckoutForm.jsx"
                                code={`import { useState, useEffect } from 'react';

export default function CheckoutForm({ amount, onSuccess, onError }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Load FTD SDK
  useEffect(() => {
    const script = document.createElement('script');
    script.id = 'ftd';
    script.src = 'https://payment.diskpays.com/ftd/v1/freedomtodesign.js';
    script.setAttribute('security_key', process.env.NEXT_PUBLIC_DISKPAYS_SECURITY_KEY);
    script.defer = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      // Tokenize card data
      const result = await window.FreedomToDesign.tokenize();
      
      if (!result.success) {
        throw new Error(result.error || 'Tokenization failed');
      }
      
      // Send token to your API
      const response = await fetch('/api/charge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentTokenId: result.paymentTokenId,
          amount: amount
        })
      });
      
      const data = await response.json();
      
      if (data.success) {
        onSuccess(data);
      } else {
        throw new Error(data.error);
      }
    } catch (err) {
      setError(err.message);
      onError?.(err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <div className="form-field">
        <label htmlFor="ccnumber">Card Number</label>
        <input 
          type="text" 
          id="ccnumber" 
          placeholder="4242 4242 4242 4242"
          autoComplete="cc-number"
        />
      </div>
      
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="ccexpiry">Expiration</label>
          <input 
            type="text" 
            id="ccexpiry" 
            placeholder="MM/YY"
            autoComplete="cc-exp"
          />
        </div>
        
        <div className="form-field">
          <label htmlFor="cccvv">CVV</label>
          <input 
            type="text" 
            id="cccvv" 
            placeholder="123"
            autoComplete="cc-csc"
          />
        </div>
      </div>
      
      {error && (
        <div className="error-message">{error}</div>
      )}
      
      <button type="submit" disabled={loading}>
        {loading ? 'Processing...' : \`Pay $\${(amount / 100).toFixed(2)}\`}
      </button>
    </form>
  );
}`}
                            />
                        </section>

                        {/* Google Pay */}
                        <section id="google-pay">
                            <h2>Google Pay Integration</h2>
                            <p>
                                Accept Google Pay payments alongside traditional card entry using Freedom to Design.
                            </p>

                            <CodeBlock
                                language="javascript"
                                title="Google Pay Setup"
                                code={`// Initialize Google Pay
const paymentsClient = new google.payments.api.PaymentsClient({
  environment: 'PRODUCTION' // or 'TEST' for sandbox
});

const googlePayConfig = {
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [{
    type: 'CARD',
    parameters: {
      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
      allowedCardNetworks: ['VISA', 'MASTERCARD', 'AMEX', 'DISCOVER']
    },
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      parameters: {
        gateway: 'diskpays',
        gatewayMerchantId: 'your_merchant_id'
      }
    }
  }],
  merchantInfo: {
    merchantId: 'your_google_merchant_id',
    merchantName: 'Your Company'
  },
  transactionInfo: {
    totalPriceStatus: 'FINAL',
    totalPrice: '99.99',
    currencyCode: 'USD'
  }
};

// Handle Google Pay button click
async function onGooglePayClick() {
  try {
    const paymentData = await paymentsClient.loadPaymentData(googlePayConfig);
    const token = paymentData.paymentMethodData.tokenizationData.token;
    
    // Send Google Pay token to your backend
    const response = await fetch('/api/charge-google-pay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ googlePayToken: token, amount: 9999 })
    });
    
    const data = await response.json();
    if (data.success) {
      window.location.href = '/order/success';
    }
  } catch (error) {
    console.error('Google Pay error:', error);
  }
}`}
                            />
                        </section>

                        {/* Token Types */}
                        <section id="tokens">
                            <h2>Token Types</h2>
                            <p>
                                Freedom to Design creates single-use tokens. For recurring payments, you'll need
                                reusable tokens from the Hosted Payment Page or SPIn integration.
                            </p>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Token Type</th>
                                            <th>Source</th>
                                            <th>Usage</th>
                                            <th>Expiration</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>paymentTokenId</code></td>
                                            <td>Freedom to Design</td>
                                            <td><span className="badge badge-warning">Single Use</span></td>
                                            <td>24 hours</td>
                                        </tr>
                                        <tr>
                                            <td><code>cardToken</code></td>
                                            <td>HPP, SPIn</td>
                                            <td><span className="badge badge-success">Multi Use</span></td>
                                            <td>No expiration</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="callout callout-info">
                                <div className="callout-title">
                                    <span>💡</span> For Recurring Payments
                                </div>
                                <p style={{ margin: 0 }}>
                                    If you need to charge the same card multiple times (subscriptions, saved cards),
                                    use the initial <code>paymentTokenId</code> to create a sale, then store the returned
                                    <code>cardToken</code> for future charges.
                                </p>
                            </div>
                        </section>

                        {/* Input Field IDs */}
                        <section id="field-ids">
                            <h2>Required Field IDs</h2>
                            <p>
                                The SDK automatically finds and intercepts inputs with these specific IDs:
                            </p>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Field ID</th>
                                            <th>Purpose</th>
                                            <th>Format</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>ccnumber</code></td>
                                            <td>Card number</td>
                                            <td>16 digits (spaces optional)</td>
                                        </tr>
                                        <tr>
                                            <td><code>ccexpiry</code></td>
                                            <td>Expiration date</td>
                                            <td>MM/YY or MMYY</td>
                                        </tr>
                                        <tr>
                                            <td><code>cccvv</code></td>
                                            <td>Security code</td>
                                            <td>3-4 digits</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="callout callout-warning">
                                <div className="callout-title">
                                    <span>⚠️</span> Important
                                </div>
                                <p style={{ margin: 0 }}>
                                    These IDs are required. If you use different IDs, the SDK will not be able to
                                    intercept the card data and tokenization will fail.
                                </p>
                            </div>
                        </section>

                        {/* Error Handling */}
                        <section id="errors">
                            <h2>Error Handling</h2>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Error Code</th>
                                            <th>Message</th>
                                            <th>Solution</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>INVALID_CARD</code></td>
                                            <td>Invalid card number</td>
                                            <td>Verify card number is correct</td>
                                        </tr>
                                        <tr>
                                            <td><code>INVALID_EXPIRY</code></td>
                                            <td>Invalid expiration date</td>
                                            <td>Check format is MM/YY</td>
                                        </tr>
                                        <tr>
                                            <td><code>INVALID_CVV</code></td>
                                            <td>Invalid CVV</td>
                                            <td>CVV must be 3-4 digits</td>
                                        </tr>
                                        <tr>
                                            <td><code>EXPIRED_CARD</code></td>
                                            <td>Card has expired</td>
                                            <td>Use a valid, non-expired card</td>
                                        </tr>
                                        <tr>
                                            <td><code>NETWORK_ERROR</code></td>
                                            <td>Network request failed</td>
                                            <td>Check internet connection, retry</td>
                                        </tr>
                                        <tr>
                                            <td><code>INVALID_KEY</code></td>
                                            <td>Invalid security key</td>
                                            <td>Verify security_key attribute</td>
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
                            <a href="/spin" className="btn btn-ghost">
                                ← SPIn Integration
                            </a>
                            <a href="/hosted-payment-page" className="btn btn-ghost">
                                Hosted Payment Page →
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
