#!/usr/bin/env node

/**
 * Script to analyze and display cyclomatic complexity of functions
 */

const { ESLint } = require('eslint');
const path = require('path');

async function analyzeComplexity() {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [{
      files: ['**/*.js'],
      rules: {
        'complexity': ['warn', { max: 1 }], // Set to 1 to report all functions
      },
    }],
  });

  const filesToAnalyze = 'students/**/src/**/*.js';
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  CYCLOMATIC COMPLEXITY ANALYSIS');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  try {
    const results = await eslint.lintFiles([filesToAnalyze]);
    
    let totalFunctions = 0;
    const complexityStats = {
      low: 0,      // 1-5
      medium: 0,   // 6-10
      high: 0,     // 11+
    };

    results.forEach(result => {
      if (result.messages.length > 0) {
        const fileName = path.relative(process.cwd(), result.filePath);
        console.log(`${fileName}`);
        console.log('─'.repeat(70));
        
        result.messages.forEach(msg => {
          if (msg.ruleId === 'complexity') {
            totalFunctions++;
            const match = msg.message.match(/complexity of (\d+)/);
            const complexity = match ? parseInt(match[1]) : 0;
            
            let status = '';
            let level = '';
            
            if (complexity <= 5) {
              status = '✅';
              level = 'Low';
              complexityStats.low++;
            } else if (complexity <= 10) {
              status = '⚠️ ';
              level = 'Medium';
              complexityStats.medium++;
            } else {
              status = '🚨';
              level = 'High';
              complexityStats.high++;
            }
            
            console.log(`  ${status} Line ${msg.line}: ${msg.message}`);
            console.log(`     Level: ${level} | Complexity: ${complexity}`);
          }
        });
        console.log('');
      }
    });

    if (totalFunctions === 0) {
      console.log('No functions found to analyze or all have complexity of 1.\n');
    } else {
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(' COMPLEXITY SUMMARY');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
      console.log(`Total functions analyzed: ${totalFunctions}\n`);
      console.log(`Low complexity (1-5):     ${complexityStats.low} functions`);
      console.log(`Medium complexity (6-10): ${complexityStats.medium} functions`);
      console.log(`High complexity (11+):    ${complexityStats.high} functions\n`);
      
      const percentage = ((complexityStats.low / totalFunctions) * 100).toFixed(1);
      console.log(`Percentage of functions with low complexity: ${percentage}%\n`);
      
      if (complexityStats.high > 0) {
        console.log('RECOMMENDATION: Refactor functions with high complexity (>10)');
      } else if (complexityStats.medium > 0) {
        console.log('SUGGESTION: Consider simplifying functions with medium complexity (6-10)');
      } else {
        console.log('Excellent! All functions have low complexity');
      }
      console.log('');
    }
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  } catch (error) {
    console.error('Error analyzing complexity:', error.message);
    process.exit(1);
  }
}

analyzeComplexity();
