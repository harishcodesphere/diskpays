# Deploy to Netlify

You can deploy the DiskPays Developer Documentation to Netlify using one of the following methods:

## Method 1: Netlify CLI (Recommended)

1. Open your terminal in this directory.
2. Run the deployment command:
   ```bash
   npx netlify deploy --prod
   ```
3. Follow the prompts:
   - **Link this directory to an existing site?** No (create a new site)
   - **Team:** Select your team
   - **Site name:** Leave blank (or choose a name)
   - **Publish directory:** `.next` (or accept default)

## Method 2: Drag & Drop (Manual)

1. Run the build command locally:
   ```bash
   npm run build
   ```
2. Log in to [Netlify Drop](https://app.netlify.com/drop).
3. Drag the `.next` folder into the upload area.
   *(Note: This might require configuring redirects for Next.js routes manually if not using the CLI).*

## Method 3: Git (Continuous Deployment)

1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Push to GitHub/GitLab/Bitbucket.
3. Log in to Netlify and click **"New site from Git"**.
4. Select your repository.
5. Netlify will automatically detect the settings from `netlify.toml`.
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`

---
**Note:** The `netlify.toml` file is already configured for optimal Next.js deployment.
