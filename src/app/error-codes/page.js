'use client';

import { useState } from 'react';
import Header from '@/components/Header';

export default function ErrorCodesPage() {
    const [searchQuery, setSearchQuery] = useState('');

    const errorCodes = [
        { code: '00', message: 'Approved', category: 'Success', action: 'Transaction successful' },
        { code: '01', message: 'Refer to Card Issuer', category: 'Decline', action: 'Customer should contact their bank' },
        { code: '02', message: 'Refer to Card Issuer, Special Condition', category: 'Decline', action: 'Customer should contact their bank' },
        { code: '03', message: 'Invalid Merchant', category: 'Error', action: 'Check merchant configuration' },
        { code: '05', message: 'Do Not Honor', category: 'Decline', action: 'Generic decline - customer should contact bank' },
        { code: '12', message: 'Invalid Transaction', category: 'Error', action: 'Check transaction type and parameters' },
        { code: '13', message: 'Invalid Amount', category: 'Error', action: 'Verify amount is valid and within limits' },
        { code: '14', message: 'Invalid Card Number', category: 'Error', action: 'Card number failed Luhn check' },
        { code: '19', message: 'Re-enter Transaction', category: 'Error', action: 'Retry the transaction' },
        { code: '25', message: 'Unable to Locate Record', category: 'Error', action: 'Transaction not found for void/refund' },
        { code: '28', message: 'File is Temporarily Unavailable', category: 'Error', action: 'Retry after a few minutes' },
        { code: '41', message: 'Lost Card, Pick Up', category: 'Decline', action: 'Card reported lost - do not retry' },
        { code: '43', message: 'Stolen Card, Pick Up', category: 'Decline', action: 'Card reported stolen - do not retry' },
        { code: '51', message: 'Insufficient Funds', category: 'Decline', action: 'Customer has insufficient balance' },
        { code: '54', message: 'Expired Card', category: 'Decline', action: 'Card has expired' },
        { code: '55', message: 'Incorrect PIN', category: 'Decline', action: 'PIN entered incorrectly' },
        { code: '57', message: 'Transaction Not Permitted', category: 'Decline', action: 'Card not authorized for this transaction type' },
        { code: '58', message: 'Transaction Not Permitted to Terminal', category: 'Decline', action: 'Terminal not authorized for this transaction' },
        { code: '61', message: 'Exceeds Withdrawal Limit', category: 'Decline', action: 'Amount exceeds card limit' },
        { code: '62', message: 'Restricted Card', category: 'Decline', action: 'Card has restrictions' },
        { code: '63', message: 'Security Violation', category: 'Decline', action: 'Security check failed' },
        { code: '65', message: 'Exceeds Withdrawal Frequency', category: 'Decline', action: 'Too many transactions' },
        { code: '75', message: 'PIN Tries Exceeded', category: 'Decline', action: 'Too many incorrect PIN attempts' },
        { code: '76', message: 'Unable to Locate Previous', category: 'Error', action: 'Original transaction not found' },
        { code: '78', message: 'Blocked, First Used', category: 'Decline', action: 'New card not yet activated' },
        { code: '82', message: 'Negative CAM, dCVV, iCVV, or CVV Results', category: 'Decline', action: 'Card verification failed' },
        { code: '85', message: 'No Reason to Decline', category: 'Success', action: 'Card verification only - no charge' },
        { code: '91', message: 'Issuer or Switch Unavailable', category: 'Error', action: 'Network issue - retry later' },
        { code: '92', message: 'Destination Cannot Be Found', category: 'Error', action: 'Routing error' },
        { code: '93', message: 'Transaction Cannot Be Completed', category: 'Error', action: 'Violation of law' },
        { code: '94', message: 'Duplicate Transmission', category: 'Error', action: 'Transaction already processed' },
        { code: '96', message: 'System Malfunction', category: 'Error', action: 'System error - retry later' },
        { code: 'N7', message: 'CVV2 Mismatch', category: 'Decline', action: 'Incorrect CVV entered' },
        { code: 'TO', message: 'Timeout', category: 'Error', action: 'Request timed out - check status before retry' },
    ];

    const filteredCodes = errorCodes.filter(error =>
        error.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        error.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
        error.action.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const getCategoryBadge = (category) => {
        switch (category) {
            case 'Success': return 'badge-success';
            case 'Decline': return 'badge-error';
            case 'Error': return 'badge-warning';
            default: return 'badge-info';
        }
    };

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
                            <span className="breadcrumb-item">Reference</span>
                            <span className="breadcrumb-separator">›</span>
                            <span className="breadcrumb-item">Error Codes</span>
                        </nav>

                        {/* Page Header */}
                        <header className="page-header">
                            <h1 className="page-title">Error Codes & Messages</h1>
                            <p className="page-description">
                                Complete reference of response codes returned by the DiskPays API. Use these codes
                                to handle transaction results and provide appropriate feedback to users.
                            </p>
                        </header>

                        {/* Search */}
                        <div style={{
                            background: 'var(--color-bg-tertiary)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '12px',
                            padding: '1rem',
                            marginBottom: '2rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem'
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-muted)" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search error codes, messages, or solutions..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    flex: 1,
                                    background: 'none',
                                    border: 'none',
                                    outline: 'none',
                                    color: 'var(--color-text-primary)',
                                    fontSize: '1rem',
                                    fontFamily: 'var(--font-body)'
                                }}
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--color-text-muted)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        {/* Quick Reference */}
                        <section id="common">
                            <h2>Most Common Codes</h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                                gap: '1rem',
                                marginBottom: '2rem'
                            }}>
                                <div className="card" style={{ borderLeft: '3px solid var(--color-success)' }}>
                                    <code style={{ fontSize: '1.25rem' }}>00</code>
                                    <div style={{ fontWeight: '600', marginTop: '0.5rem' }}>Approved</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                                        Transaction successful
                                    </div>
                                </div>

                                <div className="card" style={{ borderLeft: '3px solid var(--color-error)' }}>
                                    <code style={{ fontSize: '1.25rem' }}>05</code>
                                    <div style={{ fontWeight: '600', marginTop: '0.5rem' }}>Do Not Honor</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                                        Generic decline
                                    </div>
                                </div>

                                <div className="card" style={{ borderLeft: '3px solid var(--color-error)' }}>
                                    <code style={{ fontSize: '1.25rem' }}>51</code>
                                    <div style={{ fontWeight: '600', marginTop: '0.5rem' }}>Insufficient Funds</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                                        Not enough balance
                                    </div>
                                </div>

                                <div className="card" style={{ borderLeft: '3px solid var(--color-warning)' }}>
                                    <code style={{ fontSize: '1.25rem' }}>91</code>
                                    <div style={{ fontWeight: '600', marginTop: '0.5rem' }}>Network Error</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                                        Retry transaction
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Full Table */}
                        <section id="all-codes">
                            <h2>All Response Codes</h2>
                            <p>
                                Showing {filteredCodes.length} of {errorCodes.length} codes
                                {searchQuery && ` matching "${searchQuery}"`}
                            </p>

                            <div className="table-container">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Code</th>
                                            <th>Message</th>
                                            <th>Category</th>
                                            <th>Recommended Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredCodes.map((error) => (
                                            <tr key={error.code}>
                                                <td><code>{error.code}</code></td>
                                                <td>{error.message}</td>
                                                <td>
                                                    <span className={`badge ${getCategoryBadge(error.category)}`}>
                                                        {error.category}
                                                    </span>
                                                </td>
                                                <td style={{ color: 'var(--color-text-secondary)' }}>{error.action}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {filteredCodes.length === 0 && (
                                <div style={{
                                    textAlign: 'center',
                                    padding: '3rem',
                                    color: 'var(--color-text-muted)'
                                }}>
                                    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔍</div>
                                    No error codes found matching "{searchQuery}"
                                </div>
                            )}
                        </section>

                        {/* Best Practices */}
                        <section id="best-practices">
                            <h2>Error Handling Best Practices</h2>

                            <div className="callout callout-info">
                                <div className="callout-title">
                                    <span>💡</span> User-Friendly Messages
                                </div>
                                <p style={{ margin: 0 }}>
                                    Never show raw error codes to customers. Map them to friendly messages like
                                    "Your payment was declined. Please try a different card or contact your bank."
                                </p>
                            </div>

                            <div className="callout callout-warning">
                                <div className="callout-title">
                                    <span>⚠️</span> Retry Logic
                                </div>
                                <p style={{ margin: 0 }}>
                                    For timeout errors (TO) or system errors (91, 96), always check the transaction
                                    status before retrying to prevent duplicate charges.
                                </p>
                            </div>

                            <div className="callout callout-success">
                                <div className="callout-title">
                                    <span>✓</span> Logging
                                </div>
                                <p style={{ margin: 0 }}>
                                    Log all response codes and RRN values. This data is essential for debugging
                                    issues and resolving disputes.
                                </p>
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
                            <a href="/feed-integration" className="btn btn-ghost">
                                ← FEED Integration
                            </a>
                            <a href="/release-notes" className="btn btn-ghost">
                                Release Notes →
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
