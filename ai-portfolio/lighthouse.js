const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const {execSync} = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Lighthouse CI script to test performance and best practices
 */
async function runLighthouse() {
  console.log('Starting Lighthouse tests...');
  
  const urls = [
    'https://www.harknessai.nz',
    'https://www.harknessai.nz/contact',
    'https://www.harknessai.nz/how-i-can-help',
    'https://www.harknessai.nz/projects'
  ];
  
  // Create results directory if it doesn't exist
  const resultsDir = path.join(__dirname, 'lighthouse-results');
  if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir);
  }

  // Launch Chrome
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'html',
    port: chrome.port,
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    // Use desktop config
    formFactor: 'desktop',
    screenEmulation: {
      mobile: false,
      width: 1350,
      height: 940,
      deviceScaleFactor: 1,
      disabled: false,
    },
    throttling: {
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 1,
      requestLatencyMs: 0,
      downloadThroughputKbps: 0,
      uploadThroughputKbps: 0,
    },
  };

  // Set threshold scores
  const thresholds = {
    performance: 90,
    accessibility: 90,
    'best-practices': 90,
    seo: 90
  };

  let allPassed = true;
  let results = [];

  // Run Lighthouse for each URL
  for (const url of urls) {
    console.log(`Testing ${url}...`);
    
    const runnerResult = await lighthouse(url, options);
    
    // Save the HTML report
    const pageName = url.replace(/https?:\/\/www\.harknessai\.nz\/?/, '') || 'home';
    const reportPath = path.join(resultsDir, `${pageName}-report.html`);
    fs.writeFileSync(reportPath, runnerResult.report);
    
    // Check scores against thresholds
    const scores = {};
    Object.keys(thresholds).forEach(category => {
      const score = Math.round(runnerResult.lhr.categories[category].score * 100);
      scores[category] = score;
      
      if (score < thresholds[category]) {
        allPassed = false;
        console.error(`❌ ${url} - ${category}: ${score} (threshold: ${thresholds[category]})`);
      } else {
        console.log(`✅ ${url} - ${category}: ${score}`);
      }
    });
    
    results.push({
      url,
      scores
    });
  }

  // Close Chrome
  await chrome.kill();
  
  // Generate summary report
  const summaryPath = path.join(resultsDir, 'summary.json');
  fs.writeFileSync(summaryPath, JSON.stringify(results, null, 2));
  
  console.log(`\nLighthouse tests completed. Reports saved to ${resultsDir}`);
  
  // Return success or failure
  process.exit(allPassed ? 0 : 1);
}

runLighthouse().catch(err => {
  console.error('Error running Lighthouse:', err);
  process.exit(1);
}); 