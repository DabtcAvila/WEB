// ========================================
// FUNCIONES EN JAVASCRIPT - CLASE 4
// ========================================

// ========================================
// 1. FUNCIÓN CLÁSICA PARA MULTIPLICACIÓN
// ========================================

// Las funciones clásicas se declaran con la palabra clave 'function'
// Son 'hoisted', es decir, pueden ser llamadas antes de ser declaradas
// Tienen su propio contexto de 'this'
function multiplicarClassic(numero1, numero2) {
    // Validamos que ambos parámetros sean números
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        return 'Error: Ambos parámetros deben ser números';
    }
    
    // Realizamos la multiplicación
    const resultado = numero1 * numero2;
    
    // Retornamos el resultado
    return resultado;
}

// ========================================
// 2. FUNCIÓN CLÁSICA PARA ELEVAR AL CUADRADO
// ========================================

// Esta función toma un número y lo eleva al cuadrado (potencia de 2)
function elevarAlCuadradoClassic(numero) {
    // Validamos que el parámetro sea un número
    if (typeof numero !== 'number') {
        return 'Error: El parámetro debe ser un número';
    }
    
    // Método 1: usar el operador ** (exponenciación)
    const resultado = numero ** 2;
    
    // Método alternativo sería: numero * numero
    // const resultado = numero * numero;
    
    return resultado;
}

// ========================================
// 3. FUNCIÓN ARROW PARA MULTIPLICACIÓN
// ========================================

// Las funciones arrow fueron introducidas en ES6 (2015)
// Son más concisas y no tienen su propio contexto de 'this'
// No son 'hoisted', deben ser declaradas antes de ser usadas
const multiplicarArrow = (numero1, numero2) => {
    // Validación de tipos
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        return 'Error: Ambos parámetros deben ser números';
    }
    
    // Con arrow functions, si solo hay una línea de código,
    // podemos omitir las llaves {} y el return será implícito
    return numero1 * numero2;
};

// ========================================
// 4. FUNCIÓN ARROW PARA ELEVAR AL CUADRADO
// ========================================

// Versión arrow function más concisa
// Cuando solo hay un parámetro, los paréntesis son opcionales
const elevarAlCuadradoArrow = numero => {
    // Validación
    if (typeof numero !== 'number') {
        return 'Error: El parámetro debe ser un número';
    }
    
    // Retorno usando el operador de exponenciación
    return numero ** 2;
};

// ========================================
// EJEMPLOS DE USO Y PRUEBAS
// ========================================

console.log('=== EJEMPLOS DE USO ===');

// Probando funciones clásicas
console.log('--- Funciones Clásicas ---');
console.log('multiplicarClassic(5, 3):', multiplicarClassic(5, 3)); // Resultado: 15
console.log('elevarAlCuadradoClassic(4):', elevarAlCuadradoClassic(4)); // Resultado: 16

// Probando funciones arrow
console.log('--- Funciones Arrow ---');
console.log('multiplicarArrow(7, 2):', multiplicarArrow(7, 2)); // Resultado: 14
console.log('elevarAlCuadradoArrow(5):', elevarAlCuadradoArrow(5)); // Resultado: 25

// Probando validaciones
console.log('--- Pruebas de Validación ---');
console.log('multiplicarClassic("a", 5):', multiplicarClassic("a", 5)); // Error
console.log('elevarAlCuadradoArrow("texto"):', elevarAlCuadradoArrow("texto")); // Error

// ========================================
// CONCEPTOS CLAVE PARA RECORDAR:
// ========================================

/*
1. FUNCIONES CLÁSICAS vs ARROW FUNCTIONS:
   - Clásicas: function nombre() {} - tienen hoisting y su propio 'this'
   - Arrow: const nombre = () => {} - más concisas, no tienen hoisting

2. HOISTING:
   - Las funciones clásicas pueden ser llamadas antes de ser declaradas
   - Las arrow functions deben ser declaradas antes de ser usadas

3. VALIDACIÓN DE TIPOS:
   - Siempre es buena práctica validar los tipos de datos
   - typeof nos permite verificar el tipo de una variable

4. OPERADORES MATEMÁTICOS:
   - * para multiplicación
   - ** para exponenciación (más moderno que Math.pow())

5. RETURN:
   - En funciones clásicas y arrow con {}, necesitas 'return' explícito
   - En arrow functions de una línea sin {}, el return es implícito
*/