# Production Installation Guide

This guide will help you deploy the Shay RSS Reader frontend application in a production environment.

## Prerequisites

- Node.js (v18 or higher)
- npm (Node Package Manager)
- A web server (nginx, Apache, etc.)
- Access to your production server
- The backend API URL

## Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/chemel/shay-frontend.git
   cd shay-frontend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure the Production Environment**

   Edit the `src/environments/environment.prod.ts` file:
   ```typescript
   export const environment = {
     production: true,
     backendUrl: 'https://your-api-domain.com/api'  // Replace with your actual API URL
   };
   ```

4. **Build the Application**
   ```bash
   npm run build
   ```
   This will create a `dist` folder containing the production-ready files.

5. **Deploy to Your Server**

   Copy the contents of the `dist` folder to your web server's root directory:
   ```bash
   # Example using scp
   scp -r dist/* user@your-server:/path/to/web/root
   ```

6. **Web Server Configuration**

   ### For Nginx:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /path/to/web/root;
       
       location / {
           try_files $uri $uri/ /index.html;
       }

       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico)$ {
           expires 1y;
           add_header Cache-Control "public, no-transform";
       }
   }
   ```

   ### For Apache:
   Create or modify `.htaccess`:
   ```apache
   RewriteEngine On
   RewriteBase /
   RewriteRule ^index\.html$ - [L]
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   ```

7. **Verify Installation**
   - Navigate to your domain in a web browser
   - Check that the application loads correctly
   - Verify that the connection to the backend API works
   - Test the main features (login, feed management, etc.)

## Security Considerations

1. **HTTPS Configuration**
   - Always use HTTPS in production
   - Set up SSL certificates (Let's Encrypt is recommended)
   - Configure secure headers

2. **Access Control**
   - Ensure proper file permissions
   - Restrict direct access to sensitive files
   - Configure CORS properly on your backend

## Troubleshooting

Common issues and solutions:

1. **404 Errors on Page Refresh**
   - Verify your web server configuration for proper URL rewriting
   - Check that all routes point to index.html

2. **API Connection Issues**
   - Verify the backendUrl in environment.prod.ts
   - Check CORS configuration on the backend
   - Verify network connectivity between frontend and backend

3. **Static Asset Loading**
   - Ensure proper file permissions
   - Verify path configurations
   - Check browser console for specific errors

## Maintenance

1. **Updating the Application**
   ```bash
   git pull                  # Get latest changes
   npm install              # Update dependencies
   npm run build           # Rebuild the application
   # Deploy new files to server
   ```

## Support

If you encounter any issues, please:
1. Check the [GitHub issues](https://github.com/chemel/shay-frontend/issues)
2. Review the troubleshooting section
3. Create a new issue if needed