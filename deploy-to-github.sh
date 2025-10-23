#!/bin/bash

echo "🎸 Southern Cross Rangers - Automatic GitHub Deployment"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Not in the project directory"
    exit 1
fi

echo "✅ Found project files"

# Remove any existing git history
echo "🧹 Cleaning up..."
rm -rf .git

# Initialize new git repository
echo "📦 Initializing Git repository..."
git init
git config user.email "george@southerncrossrangers.com"
git config user.name "Southern Cross Rangers"

# Add all files
echo "📁 Adding files to Git..."
git add .

# Commit everything
echo "💾 Committing changes..."
git commit -m "Deploy new Southern Cross Rangers website - Professional version with admin panel, payments, and newsletter integration"

# Add remote repository
echo "🔗 Connecting to GitHub repository..."
git remote add origin https://github.com/George-McLarry/SouthernCrossRangers.git

# Force push to replace everything
echo "🚀 Deploying to GitHub..."
echo "⚠️  This will replace ALL existing content in your repository!"
echo "Press Enter to continue, or Ctrl+C to cancel..."
read

git push origin master:main --force

echo ""
echo "🎉 SUCCESS! Your new website has been deployed!"
echo "🌐 Netlify should automatically deploy your new website"
echo "⏰ This may take 2-5 minutes to complete"
echo ""
echo "Check your Netlify dashboard for deployment status"
echo "Your domain should show the new website soon!"
