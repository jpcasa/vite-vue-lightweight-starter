module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        '@vue/typescript/recommended',
        'prettier',
        'plugin:vue-pug/vue3-recommended'
    ],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest', // Specify the ECMAScript version
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json', './tsconfig.node.json'], // Path to the TypeScript configuration
        extraFileExtensions: ['.vue'], // Additional file extensions
        ignorePatterns: ['.eslintrc.cjs']
    },
    plugins: ['no-relative-import-paths', 'vue', '@typescript-eslint', 'prettier', 'unused-imports', 'pug'],
    rules: {
        'vue/component-api-style': ['error', ['script-setup']], // Use script setup
        'vue/component-name-in-template-casing': ['error', 'PascalCase'], // PascalCase component names
        'vue/v-for-delimiter-style': ['error', 'in'], // Use 'in' delimiter for v-for
        radix: ['error', 'always'], // Enforce radix when using parseInt()
        curly: 1, // Enforce curly braces for control statements
        '@typescript-eslint/explicit-function-return-type': [2], // Enforce explicit return types for functions
        '@typescript-eslint/no-explicit-any': [2], // Disallow 'any' type
        '@typescript-eslint/prefer-ts-expect-error': [2], // Prefer @ts-expect-error over @ts-ignore
        '@typescript-eslint/ban-ts-comment': [0], // Allow @ts-comment
        'ordered-imports': [0], // Allow/disallow ordered imports
        'object-literal-sort-keys': [0], // Allow/disallow sorting of object literal keys
        'new-parens': 1, // Enforce parentheses with 'new'
        'no-bitwise': 1, // Disallow bitwise operators
        'no-cond-assign': 1, // Disallow assignment within conditionals
        'no-trailing-spaces': 0, // Allow/disallow trailing spaces
        'eol-last': 1, // Enforce newline at end of files
        'func-style': ['error', 'declaration', { allowArrowFunctions: true }], // Enforce function style
        'no-var': 2, // Disallow 'var' keyword
        'prettier/prettier': 'warn', // Integrate Prettier and warn about style discrepancies
        'no-void': ['error', { allowAsStatement: true }], // Disallow 'void' operator, except as a statement
        'no-relative-import-paths/no-relative-import-paths': [
            'warn',
            { allowSameFolder: true, rootDir: 'src', prefix: '@' }
        ], // No relative imports

        // Find and remove unused ES6 module imports.
        'no-unused-vars': 'off', // Disable ESLint's 'no-unused-vars'
        'unused-imports/no-unused-imports': 'error', // Disallow unused imports
        "vue/setup-compiler-macros": 0,
        'unused-imports/no-unused-vars': [
            'error',
            { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' }
        ],// Disallow unused variables and arguments
        'no-console': 'error', // Disallow the use of console.log and other console methods
        'no-debugger': 'error', // Disallow the use of debugger statements
        'no-alert': 'error', // Disallow the use of alert statements
        'no-eval': 'error', // Disallow the use of eval()
        'no-implied-eval': 'error', // Disallow the use of implied eval()
        'no-new-func': 'error', // Disallow the use of the Function constructor
        'no-new-wrappers': 'error', // Disallow the use of String, Number, and Boolean with the new operator
        'no-octal': 'error', // Disallow the use of octal literals
        'no-octal-escape': 'error', // Disallow octal escape sequences in string literals
        'no-proto': 'error', // Disallow the use of the __proto__ property
        'no-script-url': 'error', // Disallow the use of javascript: URLs
        'no-self-compare': 'error', // Disallow self-comparison
        'no-sequences': 'error', // Disallow comma operators
        'no-throw-literal': 'error', // Disallow throwing literals as exceptions
        'no-unused-expressions': 'error', // Disallow unused expressions
        'no-useless-call': 'error', // Disallow unnecessary calls to .call() and .apply()
        'no-useless-concat': 'error', // Disallow unnecessary concatenation of literals or template literals
        'no-useless-escape': 'error', // Disallow unnecessary escape characters
        'no-with': 'error', // Disallow the use of the with statement
        'prefer-promise-reject-errors': 'error', // Require using Error objects as Promise rejection reasons
        'no-shadow': 'error', // Disallow variable declarations that shadow variables declared in the outer scope
        'no-shadow-restricted-names': 'error', // Disallow shadowing of restricted names
        'no-undef-init': 'error', // Disallow initializing variables to undefined
        'no-use-before-define': 'error', // Disallow the use of variables before they are defined
        'no-unused-labels': 'error', // Disallow unused labels
        'no-useless-computed-key': 'error', // Disallow unnecessary computed property keys in object literals
        'no-useless-rename': 'error', // Disallow unnecessary renaming of import, export, and destructured assignments
        'no-useless-return': 'error', // Disallow unnecessary return statements
        'no-var': 'error', // Require using let or const instead of var
        'prefer-const': 'error', // Require using const for variables that are never reassigned after declared
        'prefer-rest-params': 'error', // Require using the rest parameters instead of arguments
        'prefer-spread': 'error', // Require using the spread operator instead of .apply()
        'prefer-template': 'error', // Require using template literals instead of string concatenation
        'require-await': 'error', // Require async functions to have an await expression
        'symbol-description': 'error', // Require symbols to have a description
        'no-useless-catch': 'error', // Disallow unnecessary catch clauses
        'no-useless-constructor': 'error', // Disallow unnecessary constructors
        'no-useless-escape': 'error', // Disallow unnecessary escape characters
        'no-useless-rename': 'error', // Disallow unnecessary renaming of import, export, and destructured assignments
        'no-useless-return': 'error', // Disallow unnecessary return statements
        'no-void': 'error', // Require using void operator only to discard a value
        'no-warning-comments': 'error', // Disallow specific warning terms in comments
        'prefer-destructuring': 'error', // Require using destructuring assignment for arrays and objects
        'prefer-exponentiation-operator': 'error', // Require using the exponentiation operator (**) instead of Math.pow()
        'prefer-named-capture-group': 'error', // Require using named capture groups in regular expressions
        'prefer-regex-literals': 'error', // Require using regex literals instead of the RegExp constructor
        'require-unicode-regexp': 'error', // Require using the u flag for regular expressions
        'rest-spread-spacing': 'error', // Enforce spacing between rest and spread operators and their expressions
        'sort-imports': 'error', // Enforce sorted import declarations within modules
        'template-curly-spacing': 'error', // Enforce spacing around embedded expressions of template strings
        'yield-star-spacing': 'error', // Enforce spacing around the * in yield* expressions
        'no-constant-condition': 'error', // Disallow constant expressions in conditions
        'no-dupe-else-if': 'error', // Disallow duplicate conditions in if-else-if chains
        'no-duplicate-case': 'error', // Disallow duplicate case labels
        'no-empty': 'error', // Disallow empty block statements
        'no-extra-semi': 'error', // Disallow unnecessary semicolons
        'no-func-assign': 'error', // Disallow reassigning function declarations
        'no-import-assign': 'error', // Disallow reassigning imports
        'no-inner-declarations': 'error', // Disallow function or variable declarations in nested blocks
        'no-invalid-regexp': 'error', // Disallow invalid regular expression strings in RegExp constructors
        'no-loss-of-precision': 'error', // Disallow literal numbers that lose precision
        'no-misleading-character-class': 'error', // Disallow characters which are made with multiple code points in character class syntax
        'no-obj-calls': 'error', // Disallow calling global object properties as functions
        'no-promise-executor-return': 'error', // Disallow returning values from Promise executor functions
        'no-regex-spaces': 'error', // Disallow multiple spaces in regular expressions
        'no-setter-return': 'error', // Disallow returning values from setters
        'no-sparse-arrays': 'error', // Disallow sparse arrays
        'no-unexpected-multiline': 'error', // Disallow confusing multiline expressions
        'no-unreachable-loop': 'error', // Disallow loops with a body that allows only one iteration
        'no-unsafe-finally': 'error', // Disallow control flow statements in finally blocks
        'no-unsafe-negation': 'error', // Disallow negating the left operand of relational operators
        'no-unsafe-optional-chaining': 'error', // Disallow use of optional chaining in contexts where the undefined value is not allowed
        'no-useless-backreference': 'error', // Disallow useless backreferences in regular expressions
        'require-atomic-updates': 'error', // Disallow assignments that can lead to race conditions due to usage of await or yield
        'require-yield': 'error', // Require generator functions to contain at least one yield expression
        'use-isnan': 'error', // Require using the isNaN() function to compare with NaN
        'valid-typeof': 'error', // Require using valid typeof checks
        'array-callback-return': 'error', // Require returning a value in array methods that expect a return value
        'block-scoped-var': 'error', // Require variables to be declared at the top of their scope
        'class-methods-use-this': 'error', // Require class methods to use this if they access instance properties
        'consistent-return': 'error', // Require consistent return statements in functions
        'default-case': 'error', // Require default cases in switch statements
        'default-case-last': 'error', // Require default cases to be placed last in switch statements
        'default-param-last': 'error', // Require default parameters to be placed last
        'dot-notation': 'error', // Require using dot notation whenever possible
        'eqeqeq': 'error', // Require using strict equality (=== and !==)
        'grouped-accessor-pairs': 'error', // Require grouped accessor pairs in object literals and classes
        'guard-for-in': 'error', // Require using a for...in statement with an if statement inside to filter unwanted properties
        'max-classes-per-file': 'error', // Limit the number of classes per file
        'no-alert': 'error', // Disallow the use of alert statements
        'no-caller': 'error', // Disallow the use of arguments.caller or arguments.callee
        'no-case-declarations': 'error', // Disallow lexical declarations in case clauses
        'no-constructor-return': 'error', // Disallow returning values from constructors
        'no-div-regex': 'error', // Disallow division operators explicitly at the beginning of regular expressions
        'no-else-return': 'error', // Disallow unnecessary else clauses
        'no-empty-function': 'error', // Disallow empty functions
        'no-empty-pattern': 'error', // Disallow empty destructuring patterns
        'no-eq-null': 'error', // Disallow null comparisons
        'no-eval': 'error', // Disallow the use of eval()
        'no-extend-native': 'error', // Disallow extending native objects
        'no-extra-bind': 'error', // Disallow unnecessary calls to .bind()
        'no-extra-label': 'error', // Disallow unnecessary labels
        'no-fallthrough': 'error', // Disallow fallthrough of switch cases
        'no-global-assign': 'error', // Disallow assignments to native objects or read-only global variables
        'no-implicit-coercion': 'error', // Disallow implicit type coercion
        'no-implicit-globals': 'error', // Disallow variable and function declarations in the global scope
        'no-implied-eval': 'error', // Disallow the use of implied eval()
        'no-invalid-this': 'error', // Disallow this keywords outside of classes or class-like objects
        'no-iterator': 'error', // Disallow the use of the __iterator__ property
        'no-labels': 'error', // Disallow labels that are not used with break or continue statements
        'no-lone-blocks': 'error', // Disallow unnecessary nested blocks
        'no-loop-func': 'error', // Disallow function declarations and expressions inside loop statements
        'no-multi-spaces': 'error', // Disallow multiple spaces
        'no-multi-str': 'error', // Disallow multiline strings
        'no-new': 'error', // Disallow the use of the new operator without assignment
        'no-new-func': 'error', // Disallow the use of the Function constructor
        'no-new-object': 'error', // Disallow Object constructors
        'no-new-wrappers': 'error', // Disallow String, Number, and Boolean constructors
        'no-octal': 'error', // Disallow octal literals
        'no-octal-escape': 'error', // Disallow octal escape sequences in string literals
        'no-param-reassign': 'error', // Disallow reassigning function parameters
        'no-proto': 'error', // Disallow the use of the __proto__ property
        'no-redeclare': 'error', // Disallow variable redeclaration
        'no-restricted-properties': 'error', // Disallow certain properties on certain objects
        'no-return-assign': 'error', // Disallow assignment operators in return statements
        'no-return-await': 'error', // Disallow unnecessary return await
        'no-script-url': 'error', // Disallow the use of javascript: URLs
        'no-self-assign': 'error', // Disallow assignments where both sides are exactly the same
        'no-self-compare': 'error', // Disallow self-comparison
        'no-sequences': 'error', // Disallow comma operators
        'no-throw-literal': 'error', // Disallow throwing literals as exceptions
        'no-unmodified-loop-condition': 'error', // Disallow loop conditions that can never evaluate to true or false
        'no-unused-expressions': 'error', // Disallow unused expressions
        'no-unused-labels': 'error', // Disallow unused labels
        'no-useless-call': 'error', // Disallow unnecessary calls to .call() and .apply()
        'no-useless-catch': 'error', // Disallow unnecessary catch clauses
        'no-useless-concat': 'error', // Disallow unnecessary concatenation of literals or template literals
        'no-useless-escape': 'error', // Disallow unnecessary escape characters
        'no-useless-return': 'error', // Disallow unnecessary return statements
        'no-void': 'error', // Disallow the use of the void operator
        'no-warning-comments': 'error', // Disallow specific warning terms in comments
        'prefer-named-capture-group': 'error', // Require using named capture groups in regular expressions
        'prefer-promise-reject-errors': 'error', // Require using Error objects as Promise rejection reasons
        'prefer-regex-literals': 'error', // Require using regex literals instead of the RegExp constructor
        'radix': 'error', // Require using the radix parameter with parseInt()
        'require-unicode-regexp': 'error', // Require using the u flag for regular expressions
        'vars-on-top': 'error', // Require variable declarations to be at the top of their scope
        'wrap-iife': 'error', // Require parentheses around immediate function invocations
        'yoda': 'error', // Require or disallow Yoda conditions
        'no-shadow-restricted-names': 'error', // Disallow shadowing of restricted names
        'no-undef-init': 'error', // Disallow initializing variables to undefined
        'no-use-before-define': 'error', // Disallow the use of variables before they are defined
        'no-useless-computed-key': 'error', // Disallow unnecessary computed property keys in object literals
        'no-useless-rename': 'error', // Disallow unnecessary renaming of import, export, and destructured assignments
        'no-useless-return': 'error', // Disallow unnecessary return statements
        'no-void': 'error', // Disallow the use of the void operator
        'prefer-const': 'error', // Require using const for variables that are never reassigned after declared
        'prefer-rest-params': 'error', // Require using the rest parameters instead of arguments
        'prefer-spread': 'error', // Require using the spread operator instead of .apply()
        'prefer-template': 'error', // Require using template literals instead of string concatenation
        'require-await': 'error', // Require async functions to have an await expression
        'symbol-description': 'error', // Require symbols to have a description
        'no-useless-catch': 'error', // Disallow unnecessary catch clauses
        'no-useless-constructor': 'error', // Disallow unnecessary constructors
        'no-useless-escape': 'error', // Disallow unnecessary escape characters
        'no-useless-rename': 'error', // Disallow unnecessary renaming of import, export, and destructured assignments
        'no-useless-return': 'error', // Disallow unnecessary return statements
        'no-void': 'error', // Require using void operator only to discard a value
        'no-warning-comments': 'error', // Disallow specific warning terms in comments
        'prefer-destructuring': 'error', // Require using destructuring assignment for arrays and objects
        'prefer-exponentiation-operator': 'error', // Require using the exponentiation operator (**) instead of Math.pow()
        'prefer-named-capture-group': 'error', // Require using named capture groups in regular expressions
        'prefer-regex-literals': 'error', // Require using regex literals instead of the RegExp constructor
        'require-unicode-regexp': 'error', // Require using the u flag for regular expressions
        'rest-spread-spacing': 'error', // Enforce spacing between rest and spread operators and their expressions
        'sort-imports': 'error', // Enforce sorted import declarations within modules
        'template-curly-spacing': 'error', // Enforce spacing around embedded expressions of template strings
        'yield-star-spacing': 'error', // Enforce spacing around the * in yield* expressions
        'no-constant-condition': 'error', // Disallow constant expressions in conditions
        'no-dupe-else-if': 'error', // Disallow duplicate conditions in if-else-if chains
        'no-duplicate-case': 'error', // Disallow duplicate case labels
        'no-empty': 'error', // Disallow empty block statements
        'no-extra-semi': 'error', // Disallow unnecessary semicolons
        'no-func-assign': 'error', // Disallow reassigning function declarations
        'no-import-assign': 'error', // Disallow reassigning imports
        'no-inner-declarations': 'error', // Disallow function or variable declarations in nested blocks
        'no-invalid-regexp': 'error', // Disallow invalid regular expression strings in RegExp constructors
        'no-loss-of-precision': 'error', // Disallow literal numbers that lose precision
        'no-misleading-character-class': 'error', // Disallow characters which are made with multiple code points in character class syntax
        'no-obj-calls': 'error', // Disallow calling global object properties as functions
        'no-promise-executor-return': 'error', // Disallow returning values from Promise executor functions
        'no-regex-spaces': 'error', // Disallow multiple spaces in regular expressions
        'no-setter-return': 'error', // Disallow returning values from setters
        'no-sparse-arrays': 'error', // Disallow sparse arrays
        'no-unexpected-multiline': 'error', // Disallow confusing multiline expressions
        'no-unreachable-loop': 'error', // Disallow loops with a body that allows only one iteration
        'no-unsafe-finally': 'error', // Disallow control flow statements in finally blocks
        'no-unsafe-negation': 'error', // Disallow negating the left operand of relational operators
        'no-unsafe-optional-chaining': 'error', // Disallow use of optional chaining in contexts where the undefined value is not allowed
        'no-useless-backreference': 'error', // Disallow useless backreferences in regular expressions
        'require-atomic-updates': 'error', // Disallow assignments that can lead to race conditions due to usage of await or yield
        'require-yield': 'error', // Require generator functions to contain at least one yield expression
        'use-isnan': 'error', // Require using the isNaN() function to compare with NaN
        'vue/multi-word-component-names': 'off'
    }
};
