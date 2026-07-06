# Reform Fitness — Enterprise Management System

A complete enterprise ERP + CRM + Gym Management platform built with React, TypeScript, Supabase, and Electron.

## Features

- **Enterprise Dashboard** — Analytics, charts, KPIs
- **Customer Management** — Full CRUD, profiles, memberships, medical records
- **Employee Management** — HR, attendance, payroll, leave requests
- **Inventory & Products** — Products, categories, suppliers, stock tracking
- **Sales / POS** — Point of sale with cart, checkout, payment methods
- **Invoices & Billing** — Invoice management with payment tracking
- **Appointments** — Trainer, nutritionist, doctor booking
- **Workout & Nutrition Programs** — Fitness and diet planning
- **Call Center** — Call logging and tracking
- **Technical Support** — Ticket system with priorities and SLA
- **Accounting** — Expenses, revenue, profit & loss
- **Reports** — Comprehensive reports with CSV/PDF export
- **Email System** — SMTP config, templates, inbox, compose
- **SMS System** — Provider config, templates, message history
- **Settings Center** — 30+ configurable settings pages
- **Theme Customization** — Live color, font, layout customization
- **RTL & Arabic Support** — Full Arabic language with RTL
- **Dark/Light Mode** — Toggle between themes
- **Role-Based Access Control** — 16 system roles + custom roles

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, RLS)
- **Icons**: Lucide React
- **Desktop**: Electron (Windows .exe installer)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

The dev server runs automatically. To start manually:

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Desktop Application (Electron)

To build the Windows desktop installer (.exe):

```bash
npm run electron:build
```

This will:
1. Build the web app with Vite
2. Package it with Electron Builder
3. Generate a Windows NSIS installer in the `release/` folder

To run the desktop app in development:

```bash
npm run electron:dev
```

### Installation Instructions (End Users)

1. Download the `Reform Fitness Setup x.x.x.exe` file
2. Double-click to run the installer
3. Follow the installation wizard
4. Choose installation directory (optional)
5. Click "Install" and wait for completion
6. Launch "Reform Fitness" from the Start Menu or Desktop shortcut
7. Sign in with your credentials

### Desktop Features

- **Automatic Updates** — The app checks for updates on launch
- **Desktop Notifications** — Native Windows notifications
- **Barcode Scanner Support** — USB barcode scanners work in POS
- **Receipt/Thermal Printer Support** — Print receipts from POS
- **Keyboard Shortcuts** — Full keyboard navigation
- **Offline Mode** — App caches data for offline use
- **Secure Login** — Encrypted session storage
- **Windows 10/11 Support** — Full compatibility

## Database

The system uses Supabase (PostgreSQL) with:
- Row Level Security (RLS) on all tables
- Role-based access control
- Audit logging
- Multi-branch support
- Real-time subscriptions

## License

MIT License — Reform Fitness
