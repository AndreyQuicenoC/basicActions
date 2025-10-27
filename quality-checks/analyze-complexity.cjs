#!/usr/bin/env node

/**
 * Script para analizar y mostrar la complejidad ciclomática de las funciones
 */

const { ESLint } = require('eslint');
const path = require('path');

async function analyzeComplexity() {
  const eslint = new ESLint({
    overrideConfigFile: true,
    overrideConfig: [{
      files: ['**/*.js'],
      rules: {
        'complexity': ['warn', { max: 1 }], // Establecer en 1 para reportar todas las funciones
      },
    }],
  });

  const filesToAnalyze = 'students/**/src/**/*.js';
  
  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('  ANÁLISIS DE COMPLEJIDAD CICLOMÁTICA');
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
              level = 'Baja';
              complexityStats.low++;
            } else if (complexity <= 10) {
              status = '⚠️ ';
              level = 'Media';
              complexityStats.medium++;
            } else {
              status = '🚨';
              level = 'Alta';
              complexityStats.high++;
            }
            
            console.log(`  ${status} Línea ${msg.line}: ${msg.message}`);
            console.log(`     Nivel: ${level} | Complejidad: ${complexity}`);
          }
        });
        console.log('');
      }
    });

    if (totalFunctions === 0) {
      console.log('No se encontraron funciones para analizar o todas tienen complejidad de 1.\n');
    } else {
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(' RESUMEN DE COMPLEJIDAD');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
      console.log(`Total de funciones analizadas: ${totalFunctions}\n`);
      console.log(`Complejidad baja (1-5):     ${complexityStats.low} funciones`);
      console.log(`Complejidad media (6-10):   ${complexityStats.medium} funciones`);
      console.log(`Complejidad alta (11+):     ${complexityStats.high} funciones\n`);
      
      const percentage = ((complexityStats.low / totalFunctions) * 100).toFixed(1);
      console.log(`Porcentaje de funciones con complejidad baja: ${percentage}%\n`);
      
      if (complexityStats.high > 0) {
        console.log('RECOMENDACIÓN: Refactoriza las funciones con complejidad alta (>10)');
      } else if (complexityStats.medium > 0) {
        console.log('SUGERENCIA: Considera simplificar las funciones con complejidad media (6-10)');
      } else {
        console.log('¡Excelente! Todas las funciones tienen baja complejidad');
      }
      console.log('');
    }
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  } catch (error) {
    console.error('Error al analizar la complejidad:', error.message);
    process.exit(1);
  }
}

analyzeComplexity();
