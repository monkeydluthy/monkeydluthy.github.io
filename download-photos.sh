#!/bin/bash

# Create directory if it doesn't exist
mkdir -p src/assets/images/stock-photos

# Download photos from Unsplash
curl -L "https://unsplash.com/photos/m_HRfLhgABo/download?force=true" -o src/assets/images/stock-photos/web-design.jpg
curl -L "https://unsplash.com/photos/JKUTrJ4vK00/download?force=true" -o src/assets/images/stock-photos/digital-marketing.jpg
curl -L "https://unsplash.com/photos/gMsnXqILjp4/download?force=true" -o src/assets/images/stock-photos/consulting.jpg
curl -L "https://unsplash.com/photos/wD1LRb9OeEo/download?force=true" -o src/assets/images/stock-photos/social-media.jpg
curl -L "https://unsplash.com/photos/hostreviews-co-uk-3Mhgvrk4tjM/download?force=true" -o src/assets/images/stock-photos/seo.jpg
curl -L "https://unsplash.com/photos/tZc3vjPCk-Q/download?force=true" -o src/assets/images/stock-photos/logo-design.jpg
curl -L "https://unsplash.com/photos/f77Bh3inUpE/download?force=true" -o src/assets/images/stock-photos/website-maintenance.jpg
curl -L "https://unsplash.com/photos/CNbRsQj8mHQ/download?force=true" -o src/assets/images/stock-photos/social-media-management.jpg
curl -L "https://unsplash.com/photos/npxXWgQ33ZQ/download?force=true" -o src/assets/images/stock-photos/content-creation.jpg
curl -L "https://unsplash.com/photos/QckxruozjRg/download?force=true" -o src/assets/images/stock-photos/digital-services.jpg

echo "All photos have been downloaded successfully!" 