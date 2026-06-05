# 🚀 Deployment Guide: Cloudflare Pages, Netlify, and Vercel

This guide provides step-by-step instructions for deploying your rank-and-rent boilerplate to the three most popular static hosting platforms: **Cloudflare Pages**, **Netlify**, and **Vercel**. 

Since this boilerplate is built with Astro and configured for **static site generation (SSG)**, it generates pure HTML, CSS, and JS files. This makes it extremely fast, secure, and 100% free to host on any of these platforms.

---

## 📋 Common Prerequisites

Before deploying to any platform, ensure you have the following ready:

1. **GitHub Repository**: Your code must be pushed to a GitHub repository (public or private).
2. **Production Domain**: While each platform provides a free subdomain (e.g., `*.pages.dev`, `*.netlify.app`, `*.vercel.app`), you should configure a custom domain (e.g., `yournichecity.com`) for SEO purposes.
3. **Environment Variables**:
   - `SITE_URL`: Set this to your production domain (e.g., `https://yournichecity.com`). This is critical for generating correct sitemaps, canonical tags, and schema URLs.

---

## 1. 🧡 Cloudflare Pages (Recommended)

Cloudflare Pages is the recommended platform for rank-and-rent sites due to its global edge network, unlimited bandwidth, and seamless integration with Cloudflare DNS (which you should be using for your domains).

### Method A: Git Integration (Continuous Deployment)
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com/).
2. Navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your GitHub repository.
4. Configure the Build settings:
   - **Framework preset**: `Astro`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Under **Environment variables (advanced)**, add:
   - Variable: `SITE_URL`
   - Value: `https://yournichecity.com`
6. Click **Save and Deploy**.

### Method B: Automated GitHub Actions (Multi-Tenant Switcher)
If you manage multiple niche sites from a single repository using our config switcher, use the pre-configured GitHub Actions workflow:
1. Obtain your Cloudflare credentials:
   - **Account ID**: Found on your Cloudflare dashboard homepage URL.
   - **API Token**: Create a token under **My Profile** > **API Tokens** > **Create Token** > **Edit Cloudflare Pages** template.
2. Add these as Secrets in your GitHub repository (**Settings** > **Secrets and variables** > **Actions**):
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_PROJECT_NAME` (The name of your Cloudflare Pages project)
3. Set the repository variable:
   - `SITE_URL` = `https://yournichecity.com`
4. Go to the **Actions** tab in GitHub, select **Deploy to Cloudflare Pages**, click **Run workflow**, and enter your config name (e.g., `dualmark`).

---

## 2. 🩵 Netlify

Netlify is incredibly user-friendly and offers robust forms, split testing, and instant rollbacks.

### Step-by-Step Deployment
1. Log in to the [Netlify App](https://app.netlify.com/).
2. Click **Add new site** > **Import an existing project** > **GitHub**.
3. Authorize Netlify and select your repository.
4. Configure the build settings:
   - **Base directory**: Leave blank (root)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Add environment variables**:
   - Key: `SITE_URL`
   - Value: `https://yournichecity.com`
6. Click **Deploy [project-name]**.

### Custom Redirects Note
Netlify handles redirects via a `_redirects` file in the publish directory. If you implement custom routing or multilingual fallbacks, the boilerplate automatically handles this during the build phase.

---

## 3. 🖤 Vercel

Vercel is the creator of Next.js but provides first-class support for Astro static sites with zero configuration.

### Step-by-Step Deployment
1. Log in to the [Vercel Dashboard](https://vercel.com/).
2. Click **Add New...** > **Project**.
3. Import your GitHub repository.
4. Vercel will automatically detect **Astro** as the framework.
5. Expand the **Environment Variables** section and add:
   - Name: `SITE_URL`
   - Value: `https://yournichecity.com`
6. Leave the Build and Output settings as default (`npm run build` and `dist`).
7. Click **Deploy**.

---

## 🛠️ Post-Deployment Checklist

After your site is live, perform these three critical steps to ensure your rank-and-rent site is fully optimized:

### 1. Configure Custom Domain & SSL
- Always point your domain's nameservers to **Cloudflare** for fast propagation and advanced security.
- Add your custom domain in your hosting provider's panel (Cloudflare Pages, Netlify, or Vercel).
- Ensure **SSL/TLS** is active and set to **Full/Strict** (Cloudflare) or automatic Let's Encrypt (Netlify/Vercel).

### 2. Verify Sitemap & Robots.txt
- Visit `https://yournichecity.com/sitemap-index.xml` to verify your multilingual sitemaps are generated.
- Visit `https://yournichecity.com/robots.txt` to ensure search engines are allowed to crawl.
- Submit your sitemap index URL to **Google Search Console** immediately to kickstart indexing.

### 3. Test Lead Generation Forms & Webhooks
- Submit a test lead through the interactive estimate form or the popup form.
- Verify that:
  - The success message displays correctly.
  - The data is sent to your CRM or email via the webhook URL configured in `site.config.ts` (`integrations.crmWebhookUrl`).
  - Local browser storage prevents spam submissions.
