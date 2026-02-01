'use client';

import { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: 1,
            type: 'bot',
            text: 'Hello! 👋 I\'m DiskPays AI Assistant. How can I help you with your payment integration today?'
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const quickReplies = [
        'How do I get started?',
        'API authentication help',
        'Error code lookup',
        'Contact support'
    ];

    const getBotResponse = (userMessage) => {
        const msg = userMessage.toLowerCase();

        if (msg.includes('get started') || msg.includes('start') || msg.includes('begin')) {
            return 'Great! To get started with DiskPays:\n\n1. Visit the Quick Start guide at /quick-start\n2. Get your API keys from the portal\n3. Choose your integration method (HPP, SDK, or API)\n4. Test in sandbox, then go live!\n\nWould you like me to explain any of these steps?';
        }

        if (msg.includes('authentication') || msg.includes('auth') || msg.includes('token') || msg.includes('api key')) {
            return 'For API authentication:\n\n• Include your token in the request header:\n  `token: sk_live_your_token`\n\n• Get tokens from Portal → Settings → API Keys\n• Use sk_test_ prefix for sandbox\n• Never expose tokens in client-side code\n\nSee /authentication for full details.';
        }

        if (msg.includes('error') || msg.includes('code') || msg.includes('decline')) {
            return 'Common error codes:\n\n• 00 - Approved ✓\n• 05 - Do Not Honor (generic decline)\n• 51 - Insufficient Funds\n• 14 - Invalid Card Number\n• 54 - Expired Card\n\nVisit /error-codes for the complete list with solutions.';
        }

        if (msg.includes('contact') || msg.includes('support') || msg.includes('help') || msg.includes('phone')) {
            return 'DiskPays Support:\n\n📧 Email: devsupport@diskpays.com\n📞 Phone: (877) 358-6797 (24/7)\n💬 Live Chat: Available in portal\n\nOur dev support team typically responds within 2 hours during business hours.';
        }

        if (msg.includes('webhook') || msg.includes('notification')) {
            return 'To set up webhooks:\n\n1. Register your endpoint via API\n2. Subscribe to events (transaction.sale, etc.)\n3. Verify signatures for security\n\nVisit /feed-integration for webhook documentation.';
        }

        if (msg.includes('test') || msg.includes('sandbox')) {
            return 'For sandbox testing:\n\n• Use endpoint: sandbox.diskpays.com\n• Test card: 4242 4242 4242 4242\n• Any future expiry date\n• Any 3-digit CVV\n\nCheck /quick-start for more test cards.';
        }

        if (msg.includes('woocommerce') || msg.includes('wordpress')) {
            return 'WooCommerce integration:\n\n1. Download the plugin from portal\n2. Install via WordPress admin\n3. Configure with your Merchant ID and API Token\n\nSee /woocommerce for step-by-step guide.';
        }

        if (msg.includes('mobile') || msg.includes('tap') || msg.includes('nfc') || msg.includes('iphone') || msg.includes('android')) {
            return 'Mobile payment options:\n\n📱 Tap to Pay on iPhone - /tap-to-pay-iphone\n🤖 Tap to Pay on Android - /tap-to-pay-android\n💳 Terminal Integrations - /terminal-integrations\n\nAll use NFC for contactless payments!';
        }

        return 'I can help you with:\n\n• Getting started with integration\n• API authentication\n• Error code lookups\n• Webhook setup\n• Testing in sandbox\n• Mobile payment options\n\nWhat would you like to know more about?';
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { id: Date.now(), type: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        setTimeout(() => {
            const botResponse = { id: Date.now() + 1, type: 'bot', text: getBotResponse(input) };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 800);
    };

    const handleQuickReply = (reply) => {
        setInput(reply);
        setTimeout(() => handleSend(), 100);
    };

    return (
        <>
            {/* Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'fixed',
                    bottom: '24px',
                    right: '24px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'var(--gradient-red)',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 20px rgba(255, 26, 26, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    zIndex: 9999,
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 6px 30px rgba(255, 26, 26, 0.5)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(255, 26, 26, 0.4)';
                }}
            >
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                ) : (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                )}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '24px',
                    width: '380px',
                    maxWidth: 'calc(100vw - 48px)',
                    height: '500px',
                    maxHeight: 'calc(100vh - 150px)',
                    background: 'var(--color-bg-secondary)',
                    borderRadius: '20px',
                    border: '1px solid rgba(255, 26, 26, 0.3)',
                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    zIndex: 9998,
                    animation: 'fadeIn 0.3s ease',
                }}>
                    {/* Header */}
                    <div style={{
                        padding: '1rem 1.25rem',
                        background: 'var(--gradient-red)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'rgba(255, 255, 255, 0.2)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.25rem',
                        }}>
                            🤖
                        </div>
                        <div>
                            <div style={{ fontWeight: '600', color: 'white' }}>DiskPays Assistant</div>
                            <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.8)' }}>
                                <span style={{ display: 'inline-block', width: '8px', height: '8px', background: '#00ff88', borderRadius: '50%', marginRight: '6px' }}></span>
                                Online
                            </div>
                        </div>
                    </div>

                    {/* Messages */}
                    <div style={{
                        flex: 1,
                        overflowY: 'auto',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.75rem',
                    }}>
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                style={{
                                    alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                                    maxWidth: '85%',
                                }}
                            >
                                <div style={{
                                    padding: '0.75rem 1rem',
                                    borderRadius: msg.type === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                                    background: msg.type === 'user' ? 'var(--gradient-red)' : 'var(--color-bg-tertiary)',
                                    color: msg.type === 'user' ? 'white' : 'var(--color-text-primary)',
                                    fontSize: '0.9rem',
                                    lineHeight: '1.5',
                                    whiteSpace: 'pre-wrap',
                                    border: msg.type === 'bot' ? '1px solid var(--color-border)' : 'none',
                                }}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div style={{ alignSelf: 'flex-start' }}>
                                <div style={{
                                    padding: '0.75rem 1rem',
                                    borderRadius: '16px 16px 16px 4px',
                                    background: 'var(--color-bg-tertiary)',
                                    border: '1px solid var(--color-border)',
                                    display: 'flex',
                                    gap: '4px',
                                }}>
                                    <span style={{ width: '8px', height: '8px', background: 'var(--color-red)', borderRadius: '50%', animation: 'pulse 1s infinite' }}></span>
                                    <span style={{ width: '8px', height: '8px', background: 'var(--color-red)', borderRadius: '50%', animation: 'pulse 1s infinite 0.2s' }}></span>
                                    <span style={{ width: '8px', height: '8px', background: 'var(--color-red)', borderRadius: '50%', animation: 'pulse 1s infinite 0.4s' }}></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Quick Replies */}
                    {messages.length <= 2 && (
                        <div style={{
                            padding: '0 1rem 0.5rem',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                        }}>
                            {quickReplies.map((reply, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handleQuickReply(reply)}
                                    style={{
                                        padding: '0.4rem 0.75rem',
                                        background: 'transparent',
                                        border: '1px solid var(--color-red)',
                                        borderRadius: '20px',
                                        color: 'var(--color-red)',
                                        fontSize: '0.8rem',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 26, 26, 0.1)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                >
                                    {reply}
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Input */}
                    <div style={{
                        padding: '1rem',
                        borderTop: '1px solid var(--color-border)',
                        display: 'flex',
                        gap: '0.5rem',
                    }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Ask about integration..."
                            style={{
                                flex: 1,
                                padding: '0.75rem 1rem',
                                background: 'var(--color-bg-tertiary)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '12px',
                                color: 'var(--color-text-primary)',
                                fontSize: '0.9rem',
                                outline: 'none',
                            }}
                        />
                        <button
                            onClick={handleSend}
                            disabled={!input.trim()}
                            style={{
                                width: '44px',
                                height: '44px',
                                background: input.trim() ? 'var(--gradient-red)' : 'var(--color-bg-tertiary)',
                                border: 'none',
                                borderRadius: '12px',
                                cursor: input.trim() ? 'pointer' : 'not-allowed',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.2s',
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={input.trim() ? 'white' : 'var(--color-text-muted)'} strokeWidth="2">
                                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
