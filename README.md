# Trench Hub Provider Template

A template repository for creating custom data providers for the Trench Hub platform. This template helps you implement your own API provider to fetch and format token data according to Trench Hub standards.

## Quick Start Guide

1. **Install Node.js**: Download and install from [nodejs.org](https://nodejs.org/)

2. **Clone the repository**:

   ```
   git clone https://github.com/trench-hub/provider-template.git
   cd provider-template
   ```

3. **Install dependencies**:
   ```
   npm install
   ```
4. **Start the development server**:
   ```
   npm run start
   ```

You'll be prompted to enter required API keys and URLs. Just hit enter to use defaults

- HELIUS_API_KEY
- HELIUS_API_URL (default: https://mainnet.helius-rpc.com)
- PORT (default: 3000)
- IS_LOCAL (default: true)

That's it! Your local data server should now be running.
Now just add it to the provider on the app, for the default port it should be http://localhost:3000/v1 or http://127.0.0.1/v1

**Contributing**

1. Fork the repository
2. Create your feature branch (git checkout -b feature/AmazingFeature)
3. Commit your changes (git commit -m 'Add some AmazingFeature')
4. Push to the branch (git push origin feature/AmazingFeature)
5. Open a Pull Request
