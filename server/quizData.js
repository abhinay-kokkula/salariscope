module.exports = {
    java: [
        {
            question: "Which keyword is used to define a variable that belongs to a class, not an instance?",
            options: ["static", "final", "private", "public"], correctIndex: 0
        },
        {
            question: "What is the output of this code: int x = 10; System.out.println(x + 5);",
            options: ["10", "15", "105", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "Which data type is used to store a single character?",
            options: ["int", "char", "String", "boolean"], correctIndex: 1
        },
        {
            question: "What will this code print: for(int i = 0; i < 2; i++){System.out.print(i);}",
            options: ["0 1", "1 2", "0 1 2", "Error"], correctIndex: 0, coding: true
        },
        {
            question: "Which operator is used for equality comparison?",
            options: ["=", "==", "!=", "==="], correctIndex: 1
        },

        {
            question: "Which collection does not allow null elements?",
            options: ["ArrayList", "HashSet", "Hashtable", "LinkedList"], correctIndex: 2
        },
        {
            question: "What is the output: String str = 'Java'; System.out.println(str.substring(0, 2));",
            options: ["Ja", "av", "Jav", "Error"], correctIndex: 0, coding: true
        },
        {
            question: "Which keyword is used to handle exceptions?",
            options: ["try", "catch", "throw", "finally"], correctIndex: 0
        },
        {
            question: "What will this code return: public int multiply(int a, int b) { return a * b; } when called with multiply(3, 4)?",
            options: ["7", "12", "34", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "What is the default value of an object reference if not initialized?",
            options: ["0", "null", "undefined", "false"], correctIndex: 1
        },

        {
            question: "What happens when you compare two Integer objects with '==' outside the range of -128 to 127?",
            options: ["Always true", "Always false", "Depends on caching", "Compile error"], correctIndex: 1
        },
        {
            question: "What is the output: List<Integer> list = Arrays.asList(1, 2); list.set(0, 3); System.out.println(list);",
            options: ["[1, 2]", "[3, 2]", "UnsupportedOperationException", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "Which concurrency utility ensures atomic operations?",
            options: ["Semaphore", "AtomicInteger", "ThreadLocal", "ExecutorService"], correctIndex: 1
        },
        {
            question: "What will this code print: Stream.of(1, 2, 3).filter(x -> x > 1).forEach(System.out::print);",
            options: ["123", "23", "12", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "What is the purpose of the 'volatile' keyword?",
            options: ["Prevents inheritance", "Ensures visibility across threads", "Marks a field as final", "Enables serialization"], correctIndex: 1
        },


        {
            question: "If a method takes 2 parameters and returns their sum, what will be the result for inputs 15 and 25?",
            options: ["30", "40", "225", "10"], correctIndex: 1
        },
        {
            question: "What will this code return: public int calc(int n) { return n > 0 ? n : -n; } when called with calc(-5)?",
            options: ["-5", "0", "5", "Error"], correctIndex: 2, coding: true
        },
        {
            question: "If a loop increments a variable from 1 to 5, how many iterations will it perform?",
            options: ["4", "5", "6", "Infinite"], correctIndex: 1
        },
        {
            question: "What is the output: int x = 10; if(x > 5 && x < 15) { x += 2; } System.out.println(x);",
            options: ["10", "12", "15", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "If an array has 5 elements, what is the index of the last element?",
            options: ["4", "5", "6", "0"], correctIndex: 0
        }

    ],

    python: [
        //basic
        {
            question: "Which keyword is used to define a function in Python?",
            options: ["func", "define", "def", "function"], correctIndex: 2
        },
        {
            question: "What is the output of this code: x = 5; print(x + 3);",
            options: ["5", "8", "53", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "Which data type is used for a sequence of characters?",
            options: ["int", "str", "list", "bool"], correctIndex: 1
        },
        {
            question: "What will this code print: for i in range(3): print(i, end='');",
            options: ["012", "0 1 2", "123", "Error"], correctIndex: 0, coding: true
        },
        {
            question: "Which operator is used for exponentiation?",
            options: ["^", "**", "*", "//"], correctIndex: 1
        },

        //mid-level
        {
            question: "Which method adds an element to the end of a list?",
            options: ["add()", "append()", "insert()", "extend()"], correctIndex: 1
        },
        {
            question: "What is the output: s = 'Python'; print(s[1:4]);",
            options: ["Pyt", "yth", "Pyth", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "Which keyword is used to handle exceptions?",
            options: ["try", "catch", "except", "raise"], correctIndex: 0
        },
        {
            question: "What will this code return: def add(a, b): return a + b; print(add(2, 3));",
            options: ["5", "23", "6", "Error"], correctIndex: 0, coding: true
        },
        {
            question: "What is the default value of an uninitialized variable in Python?",
            options: ["0", "None", "undefined", "Error"], correctIndex: 3
        },

        //advanced
        {
            question: "What happens when you use '==' to compare two lists with the same elements?",
            options: ["Always True", "Always False", "True if contents match", "True if same object"], correctIndex: 2
        },
        {
            question: "What is the output: lst = [1, 2]; lst.extend([3]); print(lst);",
            options: ["[1, 2, 3]", "[1, 2, [3]]", "Error", "[1, 2]"], correctIndex: 0, coding: true
        },
        {
            question: "Which decorator is used to define a static method?",
            options: ["@classmethod", "@staticmethod", "@property", "@staticmethod"], correctIndex: 1
        },
        {
            question: "What will this code print: print(list(filter(lambda x: x > 2, [1, 2, 3, 4])));",
            options: ["[1, 2]", "[3, 4]", "[1, 2, 3, 4]", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "What does the 'global' keyword do?",
            options: ["Declares a local variable", "Accesses a variable from outer scope", "Modifies a variable in global scope", "Prevents variable assignment"], correctIndex: 2
        },

        //aptitude
        {
            question: "If a function multiplies two numbers, what is the result for inputs 4 and 6?",
            options: ["10", "24", "46", "12"], correctIndex: 1
        },
        {
            question: "What will this code return: def absolute(n): return n if n >= 0 else -n; print(absolute(-7));",
            options: ["-7", "0", "7", "Error"], correctIndex: 2, coding: true
        },
        {
            question: "If a loop runs from 0 to 4 (inclusive), how many iterations will it perform?",
            options: ["4", "5", "6", "Infinite"], correctIndex: 1
        },
        {
            question: "What is the output: x = 8; if x > 5: x += 3; print(x);",
            options: ["8", "11", "5", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "If a list has 6 elements, what is the index of the last element?",
            options: ["5", "6", "7", "0"], correctIndex: 0
        }

    ],
    cpp : [
        //basic
        {
            question: "Which keyword is used to declare a variable that cannot be modified?",
            options: ["static", "const", "final", "volatile"], correctIndex: 1
        },
        {
            question: "What is the output of this code: int x = 7; cout << x + 2;",
            options: ["7", "9", "72", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "Which header file is required to use cout?",
            options: ["<iostream>", "<stdio.h>", "<string>", "<vector>"], correctIndex: 0
        },
        {
            question: "What will this code print: for(int i = 0; i < 3; i++) { cout << i; }",
            options: ["012", "123", "0 1 2", "Error"], correctIndex: 0, coding: true
        },
        {
            question: "Which operator is used for pointer dereferencing?",
            options: ["&", "*", "->", "."], correctIndex: 1
        },
        //mid-level
        {
            question: "Which container stores elements in key-value pairs?",
            options: ["vector", "list", "map", "set"], correctIndex: 2
        },
        {
            question: "What is the output: string s = 'C++'; cout << s.substr(1, 2);",
            options: ["C+", "++", "C++", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "Which keyword is used to define a class inheritance?",
            options: ["extends", "inherits", ":", "class"], correctIndex: 2
        },
        {
            question: "What will this code return: int add(int a, int b) { return a + b; } cout << add(5, 3);",
            options: ["8", "53", "15", "Error"], correctIndex: 0, coding: true
        },
        {
            question: "What is the default access specifier for class members?",
            options: ["public", "private", "protected", "none"], correctIndex: 1
        },

        //advanced
        {
            question: "What happens when you compare two 'std::string' objects with '=='?",
            options: ["Compares pointers", "Compares contents", "Compile error", "Runtime error"], correctIndex: 1
        },
        {
            question: "What is the output: vector<int> v = {1, 2}; v.push_back(3); cout << v.size();",
            options: ["2", "3", "1", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "Which keyword is used to prevent a virtual function from being overridden?",
            options: ["final", "static", "override", "sealed"], correctIndex: 0
        },
        {
            question: "What will this code print: int arr[] = {1, 2, 3, 4}; cout << accumulate(arr, arr + 4, 0);",
            options: ["10", "4", "1", "Error"], correctIndex: 0, coding: true
        },
        {
            question: "What is the purpose of the 'mutable' keyword?",
            options: ["Allows modification in const objects", "Prevents inheritance", "Enables dynamic allocation", "Marks a variable as volatile"], correctIndex: 0
        },

        //aptitude
        {
            question: "If a function subtracts two numbers, what is the result for inputs 10 and 4?",
            options: ["14", "6", "40", "4"], correctIndex: 1
        },
        {
            question: "What will this code return: int max(int a, int b) { return a > b ? a : b; } cout << max(3, 7);",
            options: ["3", "7", "10", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "If a loop runs from 1 to 5 (inclusive), how many iterations will it perform?",
            options: ["4", "5", "6", "Infinite"], correctIndex: 1
        },
        {
            question: "What is the output: int x = 6; if(x > 0) { x -= 2; } cout << x;",
            options: ["6", "4", "8", "Error"], correctIndex: 1, coding: true
        },
        {
            question: "If an array has 7 elements, what is the index of the last element?",
            options: ["6", "7", "8", "0"], correctIndex: 0
        }
    ],

    html: [
        //basic
        { question: "Which tag is used to define a paragraph?", options: ["<div>", "<p>", "<span>", "<br>"], correctIndex: 1 },
        { question: "What is the output of this code: <h1>Hello</h1> in a browser?", options: ["Hello in large text", "Hello in small text", "Error", "Nothing"], correctIndex: 0, coding: true },
        { question: "Which attribute specifies the URL of a linked resource?", options: ["src", "href", "alt", "id"], correctIndex: 1 },
        { question: "What will this code do: <img src='pic.jpg' alt='Picture'>?", options: ["Display an image", "Create a link", "Show text", "Error"], correctIndex: 0, coding: true },
        { question: "Which tag is used to create a line break?", options: ["<break>", "<br>", "<lb>", "<hr>"], correctIndex: 1 },

        //mid-level
        { question: "Which attribute makes an input field required?", options: ["required", "mandatory", "validate", "need"], correctIndex: 0 },
        { question: "What is the output: <ul><li>Item1</li><li>Item2</li></ul> in a browser?", options: ["Numbered list", "Bulleted list", "Plain text", "Error"], correctIndex: 1, coding: true },
        { question: "Which tag is used to define a table row?", options: ["<tr>", "<td>", "<th>", "<table>"], correctIndex: 0 },
        { question: "What will this code do: <a href='https://example.com'>Click</a>?", options: ["Display 'Click' as text", "Create a clickable link", "Show an image", "Error"], correctIndex: 1, coding: true },
        { question: "Which element is used for semantic grouping of content?", options: ["<div>", "<section>", "<span>", "<p>"], correctIndex: 1 },

        //advannced
        { question: "Which attribute enables content to be edited directly in the browser?", options: ["editable", "contenteditable", "modify", "edit"], correctIndex: 1 },
        { question: "What is the output: <details><summary>More</summary><p>Info</p></details> when clicked?", options: ["Shows 'More' only", "Shows 'More' and 'Info'", "Hides 'Info'", "Error"], correctIndex: 1, coding: true },
        { question: "Which meta tag sets the character encoding?", options: ["<meta charset='UTF-8'>", "<meta encoding='UTF-8'>", "<meta type='text'>", "<meta lang='en'>"], correctIndex: 0 },
        { question: "What will this code do: <form method='POST' action='/submit'><input type='text'></form> on submit?", options: ["Sends data to '/submit'", "Displays data", "Refreshes page", "Error"], correctIndex: 0, coding: true },
        { question: "Which tag defines an independent, self-contained content block?", options: ["<article>", "<section>", "<div>", "<aside>"], correctIndex: 0 },

        //aptitude
        { question: "If a list has 4 items in <li> tags, how many bullets will an unordered list display?", options: ["3", "4", "5", "0"], correctIndex: 1 },
        { question: "What will this code do: <p style='color: red;'>Text</p> in a browser?", options: ["Black text", "Red text", "Hidden text", "Error"], correctIndex: 1, coding: true },
        { question: "How many columns will a table with 3 <td> tags in a single <tr> have?", options: ["2", "3", "4", "1"], correctIndex: 1 },
        { question: "What is the output: <h2>Title</h2><p>Body</p> in a browser?", options: ["Title above Body", "Body above Title", "Title and Body inline", "Error"], correctIndex: 0, coding: true },
        { question: "If an HTML document has 5 tags, how many are visible by default?", options: ["All 5", "None", "Depends on tags", "4"], correctIndex: 2 }
    ],
    css: [
        //basic
        { question: "Which property sets the text color?", options: ["background-color", "color", "font-color", "text-color"], correctIndex: 1 },
        { question: "What is the output: p { color: blue; } applied to <p>Text</p>?", options: ["Blue text", "Black text", "Blue background", "Error"], correctIndex: 0, coding: true },
        { question: "Which selector targets all elements?", options: ["#id", ".class", "*", "element"], correctIndex: 2 },
        { question: "What will this do: div { width: 100px; }?", options: ["Sets height to 100px", "Sets width to 100px", "Centers div", "Error"], correctIndex: 1, coding: true },
        { question: "Which unit represents a percentage of the parent element?", options: ["px", "em", "%", "rem"], correctIndex: 2 },

        //mid-level
        { question: "Which property aligns items in a flex container?", options: ["align-items", "justify-content", "flex-direction", "display"], correctIndex: 0 },
        { question: "What is the output: .box { display: flex; justify-content: center; } applied to <div class='box'><p>Hi</p></div>?", options: ["Left-aligned text", "Centered text", "Right-aligned text", "Error"], correctIndex: 1, coding: true },
        { question: "Which value makes an element invisible but keeps its space?", options: ["display: none", "visibility: hidden", "opacity: 0", "hidden"], correctIndex: 1 },
        { question: "What will this do: p { margin: 10px 20px; }?", options: ["10px top/bottom, 20px left/right", "20px all sides", "10px all sides", "Error"], correctIndex: 0, coding: true },
        { question: "Which pseudo-class targets an element on mouse hover?", options: [":hover", ":active", ":focus", ":visited"], correctIndex: 0 },

        //advamced
        { question: "Which property defines the stacking order of elements?", options: ["position", "z-index", "overflow", "layer"], correctIndex: 1 },
        { question: "What is the output: .box { position: absolute; top: 0; left: 0; } applied to <div class='box'>Test</div>?", options: ["Top-left of page", "Top-left of parent", "Centered", "Error"], correctIndex: 1, coding: true },
        { question: "Which at-rule defines media-specific styles?", options: ["@media", "@import", "@keyframes", "@font-face"], correctIndex: 0 },
        { question: "What will this do: @media (max-width: 600px) { .box { display: none; } }?", options: ["Hides .box on screens > 600px", "Hides .box on screens < 600px", "Shows .box always", "Error"], correctIndex: 1, coding: true },
        { question: "Which property creates a smooth transition effect?", options: ["transition", "animation", "transform", "effect"], correctIndex: 0 },

        //aptitue
        { question: "If a div has padding: 10px on all sides, how much extra space is added around its content?", options: ["10px", "20px", "40px", "0px"], correctIndex: 2 },
        { question: "What is the output: div { width: 50%; } in a 1000px wide parent?", options: ["500px", "50px", "1000px", "Error"], correctIndex: 0, coding: true },
        { question: "How many sides does margin: 5px 10px 15px affect?", options: ["2", "3", "4", "1"], correctIndex: 2 },
        { question: "What will this do: .test { font-size: 2em; } in a parent with font-size: 16px?", options: ["16px", "32px", "8px", "Error"], correctIndex: 1, coding: true },
        { question: "If a box has a 2px border, how much does it add to its total width?", options: ["2px", "4px", "0px", "Depends"], correctIndex: 1 }
    ],
    c: [
        { question: "Which keyword declares a pointer?", options: ["&", "*", "ptr", "point"], correctIndex: 1 },
        { question: "What is the output: int x = 4; printf('%d', x + 1);", options: ["4", "5", "41", "Error"], correctIndex: 1, coding: true },
        { question: "Which header file is needed for printf?", options: ["<stdio.h>", "<stdlib.h>", "<string.h>", "<math.h>"], correctIndex: 0 },
        { question: "What will this code print: for(int i = 0; i < 2; i++) { printf('%d', i); }", options: ["01", "12", "0 1", "Error"], correctIndex: 0, coding: true },
        { question: "Which symbol denotes the address-of operator?", options: ["*", "&", "@", "#"], correctIndex: 1 },
        { question: "Which function allocates memory dynamically?", options: ["alloc()", "malloc()", "new()", "calloc()"], correctIndex: 1 },
        { question: "What is the output: char str[] = 'Hello'; printf('%s', str);", options: ["Hello", "H", "Error", "Nothing"], correctIndex: 0, coding: true },
        { question: "Which keyword defines a constant?", options: ["const", "static", "define", "final"], correctIndex: 0 },
        { question: "What will this code return: int sum(int a, int b) { return a + b; } printf('%d', sum(2, 3));", options: ["5", "23", "6", "Error"], correctIndex: 0, coding: true },
        { question: "What is the size of an int on a 32-bit system?", options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"], correctIndex: 1 },
        { question: "What happens if you dereference a null pointer?", options: ["Returns 0", "Segmentation fault", "Compiles but fails", "Undefined behavior"], correctIndex: 1 },
        { question: "What is the output: int x = 5; int* p = &x; *p = 10; printf('%d', x);", options: ["5", "10", "Error", "Address"], correctIndex: 1, coding: true },
        { question: "Which keyword prevents a function from being inlined?", options: ["noinline", "static", "extern", "volatile"], correctIndex: 0 },
        { question: "What will this code print: int arr[3] = {1, 2, 3}; printf('%d', *(arr + 1));", options: ["1", "2", "3", "Error"], correctIndex: 1, coding: true },
        { question: "What does the 'volatile' keyword do?", options: ["Prevents optimization", "Makes variable constant", "Enables threading", "Marks as temporary"], correctIndex: 0 },
        { question: "If a function doubles a number, what is the result for input 6?", options: ["12", "6", "3", "18"], correctIndex: 0 },
        { question: "What will this code print: int x = -3; printf('%d', x > 0 ? x : -x);", options: ["-3", "3", "0", "Error"], correctIndex: 1, coding: true },
        { question: "How many times will a loop from 0 to 3 (inclusive) iterate?", options: ["3", "4", "5", "Infinite"], correctIndex: 1 },
        { question: "What is the output: int x = 5; if(x > 2) { x++; } printf('%d', x);", options: ["5", "6", "2", "Error"], correctIndex: 1, coding: true },
        { question: "If an array has 4 elements, what is the index of the last element?", options: ["3", "4", "5", "0"], correctIndex: 0 }
    ],
    javascript: [
        { question: "Which keyword declares a variable?", options: ["var", "int", "string", "def"], correctIndex: 0 },
        { question: "What is the output: let x = 3; console.log(x + 4);", options: ["3", "7", "34", "Error"], correctIndex: 1, coding: true },
        { question: "Which operator checks for equality without type coercion?", options: ["==", "===", "!=", "!-="], correctIndex: 1 },
        { question: "What will this code print: for(let i = 0; i < 2; i++) { console.log(i); }", options: ["0 1", "1 2", "0 1 2", "Error"], correctIndex: 0, coding: true },
        { question: "Which type represents a single character or text?", options: ["number", "string", "boolean", "char"], correctIndex: 1 },
        { question: "Which method adds an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], correctIndex: 0 },
        { question: "What is the output: let str = 'JavaScript'; console.log(str.slice(0, 4));", options: ["Java", "Script", "Jav", "Error"], correctIndex: 0, coding: true },
        { question: "Which keyword defines a function?", options: ["func", "function", "def", "fn"], correctIndex: 1 },
        { question: "What will this code return: function multiply(a, b) { return a * b; } console.log(multiply(2, 3));", options: ["5", "6", "23", "Error"], correctIndex: 1, coding: true },
        { question: "What is the default value of an uninitialized variable?", options: ["null", "undefined", "0", "false"], correctIndex: 1 },
        { question: "What does 'this' refer to in an arrow function?", options: ["Current object", "Global object", "Lexical scope", "Undefined"], correctIndex: 2 },
        { question: "What is the output: let arr = [1, 2]; arr = [...arr, 3]; console.log(arr);", options: ["[1, 2]", "[1, 2, 3]", "[3]", "Error"], correctIndex: 1, coding: true },
        { question: "Which method executes a function after a delay?", options: ["setTimeout()", "setInterval()", "delay()", "wait()"], correctIndex: 0 },
        { question: "What will this code print: Promise.resolve('Success').then(console.log);", options: ["Success", "Promise", "Undefined", "Error"], correctIndex: 0, coding: true },
        { question: "What does 'async' do to a function?", options: ["Makes it synchronous", "Returns a Promise", "Delays execution", "Prevents errors"], correctIndex: 1 },
        { question: "If a function adds 5 to a number, what is the result for input 10?", options: ["5", "10", "15", "50"], correctIndex: 2 },
        { question: "What will this code print: let x = 4; console.log(x > 0 ? x : -x);", options: ["-4", "4", "0", "Error"], correctIndex: 1, coding: true },
        { question: "How many times will a loop from 0 to 2 (inclusive) iterate?", options: ["2", "3", "4", "Infinite"], correctIndex: 1 },
        { question: "What is the output: let x = 7; if(x > 5) { x += 1; } console.log(x);", options: ["7", "8", "5", "Error"], correctIndex: 1, coding: true },
        { question: "If an array has 5 elements, what is the index of the last element?", options: ["4", "5", "6", "0"], correctIndex: 0 }
    ],
    sql: [
        { question: "Which keyword retrieves data from a table?", options: ["GET", "SELECT", "FETCH", "RETRIEVE"], correctIndex: 1 },
        { question: "What is the output: SELECT 2 + 3 AS result;", options: ["2", "3", "5", "Error"], correctIndex: 2, coding: true },
        { question: "Which clause filters rows in a query?", options: ["WHERE", "FROM", "ORDER BY", "GROUP BY"], correctIndex: 0 },
        { question: "What will this code do: SELECT * FROM users;", options: ["Selects all columns", "Selects one row", "Creates a table", "Error"], correctIndex: 0, coding: true },
        { question: "Which symbol denotes a wildcard in LIKE?", options: ["*", "%", "#", "&"], correctIndex: 1 },
        { question: "Which clause groups rows by a column?", options: ["GROUP BY", "ORDER BY", "HAVING", "WHERE"], correctIndex: 0 },
        { question: "What is the output: SELECT COUNT(*) FROM employees WHERE dept = 'HR';", options: ["All rows", "HR employees count", "Error", "Dept names"], correctIndex: 1, coding: true },
        { question: "Which keyword adds new rows to a table?", options: ["ADD", "INSERT", "UPDATE", "APPEND"], correctIndex: 1 },
        { question: "What will this code do: SELECT name FROM students ORDER BY name;", options: ["Sorts names alphabetically", "Counts names", "Filters names", "Error"], correctIndex: 0, coding: true },
        { question: "Which join returns all rows from both tables?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], correctIndex: 3 },
        { question: "What happens if a subquery returns multiple rows in a single-row context?", options: ["First row used", "Error", "All rows used", "Null"], correctIndex: 1 },
        { question: "What is the output: SELECT AVG(salary) FROM employees WHERE dept = 'IT';", options: ["Total salary", "Average IT salary", "Error", "Max salary"], correctIndex: 1, coding: true },
        { question: "Which clause filters grouped results?", options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"], correctIndex: 1 },
        { question: "What will this code do: CREATE INDEX idx_name ON users(name);", options: ["Creates a table", "Speeds up name queries", "Deletes data", "Error"], correctIndex: 1, coding: true },
        { question: "What does 'ON DELETE CASCADE' do in a foreign key?", options: ["Prevents deletion", "Deletes related rows", "Sets null", "Ignores deletion"], correctIndex: 1 },
        { question: "If a table has 5 rows and a query filters 2, how many rows are returned?", options: ["3", "5", "2", "0"], correctIndex: 0 },
        { question: "What is the output: SELECT 10 - 4 AS diff;", options: ["10", "4", "6", "Error"], correctIndex: 2, coding: true },
        { question: "How many rows will SELECT * FROM table WHERE id > 0 return if table has 4 rows with positive IDs?", options: ["3", "4", "5", "0"], correctIndex: 1 },
        { question: "What will this do: SELECT MAX(age) FROM students;", options: ["Youngest age", "Oldest age", "Average age", "Error"], correctIndex: 1, coding: true },
        { question: "If a table has 6 columns, how many are returned by SELECT *?", options: ["5", "6", "7", "Depends"], correctIndex: 1 }
    ]
};