# OWASP Juice Shop - Cybersecurity Enhancement Project

**Internship Project | DHC Internship Program**  
**Intern:** Syeda Arooj Fatima  
**Intern ID:** DHC-1161  

---

## 📋 Project Overview

This project demonstrates a complete **Cybersecurity Internship** where I analyzed, tested, and secured the **OWASP Juice Shop** — a deliberately vulnerable web application.

The internship was divided into 3 weeks:

- **Week 1**: Vulnerability Assessment  
- **Week 2**: Implementing Security Measures  
- **Week 3**: Advanced Security & Final Reporting  

---

## 🛠️ Technologies Used

- **Backend**: Node.js, Express, TypeScript
- **Database**: SQLite / Sequelize
- **Security Tools**: OWASP ZAP, Nmap, Helmet, Rate Limiter
- **Security Libraries**: bcrypt, jsonwebtoken, validator, Winston
- **Others**: JWT Authentication, Input Sanitization

---

## 📅 Internship Summary

### Week 1: Security Assessment
- Performed manual and automated vulnerability testing using **OWASP ZAP**
- Identified multiple critical vulnerabilities:
  - Cross-Site Scripting (XSS)
  - Broken Authentication (SQL Injection)
  - Access Log Disclosure
  - Information Disclosure
- Documented findings with screenshots and evidence

**Report:** [Vulnerability Assessment Report](Juice%20shop%20Vulnerability%20Assessment.pdf)

---

### Week 2: Implementing Security Measures
- Implemented strong **Input Validation & Sanitization**
- Added **Password Hashing** using bcrypt
- Implemented **JWT Token-based Authentication**
- Added **Helmet.js** for secure HTTP headers
- Implemented **Rate Limiting** to prevent brute-force attacks
- Created custom security utilities (`utils/security.ts`)

**Report:** [Week 2 Report](Week%202%20Implementing%20Security%20Measures.pdf)

---

### Week 3: Advanced Security and Final Reporting
- Performed **Basic Penetration Testing** using **Nmap**
- Implemented **Structured Logging** using **Winston**
- Added Global Error Handler
- Created Security Checklist and Final Report
- Documented all security improvements

**Key Files Added/Modified:**
- `utils/logger.ts`
- `SECURITY_CHECKLIST.md`
- `FINAL_REPORT.md`
- Enhanced `server.ts`

**Report:** [FINAL_REPORT.md](FINAL_REPORT.md)

---

## 🔒 Security Improvements Summary

| Security Feature              | Implemented | Tool/Library          |
|-----------------------------|-------------|-----------------------|
| Input Validation            | Yes         | validator             |
| Password Hashing            | Yes         | bcrypt                |
| JWT Authentication          | Yes         | jsonwebtoken          |
| Security Headers            | Yes         | Helmet.js             |
| Rate Limiting               | Yes         | express-rate-limit    |
| Structured Logging          | Yes         | Winston               |
| Penetration Testing         | Yes         | Nmap + Manual         |

---

## 📁 Project Structure (Important Files)
