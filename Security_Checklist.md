# Security Checklist - OWASP Juice Shop (Week 3)

## ✅ Implemented Security Measures

- [x] **Security Headers** - Added Helmet middleware
- [x] **Rate Limiting** - Global rate limiter (100 requests / 15 minutes)
- [x] **Structured Logging** - Winston logger with console + file output
- [x] **Input Validation & Sanitization** - Using `validateAndSanitizeUserInput()`
- [x] **Password Security** - Hashing with bcrypt (`hashPassword`)
- [x] **Global Error Handler** - Safe error handling with Winston logging
- [x] **Basic Penetration Testing** - Performed using Nmap

## Penetration Testing (Nmap)

**Command Used:**
```bash
nmap -sV -O localhost -p 3000
nmap -A localhost
nmap -T4 -A localhost
