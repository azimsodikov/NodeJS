/* Conceptual Aside */
/* Processors, Machine Code, C++ */
/* Microprocessor (a tiny machine) We give instructions to it and it performs
-- Not all microprocessors speaks the same language
-- Some speak IA-32, x86-64, ARM, MIPS */

/* Machine Code (Language) programming languages spoken by computer processors
-- Every program you run on your computer has been converted (compiled) into machine code 
-- All code eventually compiles to machine code
-- Low level languages hard to understand 
-- As time goes, languages evolve and code abstracted away, and we write more higher level code (ref2) 
*/


/* Section 2 */

/* Node is written in C++ because V8 is written in C++, Engine that compiles javasctipt into machine code is written in C++ */

/* Javascript Aside (Javascript engines and the ECMASCRIPT specifications) 
-- V8 keeps up to date with the ECMA specifications and implements new additions to the language
-- When V8 compiles to the machine code it should match what the specifications told it to do */

/* A Javascript engine a program that converts javascript code into something the computer processor can understand
-- And it should follow the ECMAScript standard on how the language should work and what fetaures it should have */

/* V8 Under the hood (It is a open source)*/
/* The purpose of the engine is convert JS code to far more lover level code so that machine can understand it */
/* You can run V8 standalone or inside the any C++ appplication as embedded and make its hooks available to the javascript
-- Javascript is not designed to access the file in the machine or connect to database directly, but C++ was designed to do that so 
-- we can embed C++ and using JS access the features that is not available to the JS (ref3) 
-- We can add features into JS just by adding that feature inside the C++ code (Just like "print" or "load" in the video) 
-- Tony also showed how to add features natively inside the C++ code so it is avaiable to every js code that I run through that code */

/* NODE JS IS THE C++ APPLICATION THAT IS EMBEDDED THE V8 ENGINE AND ADDED GREAT AMOUNT OF FEATURES TO MAKE IT SERVER TECHNOLOGY */

/* Section 3 */

/* Conceptual Aside */
/* Client-Server Model of Computing 
-- Client asks for the services which is standard form of request and Server performs the services and returns the standard response to the Client (ref4) */

/* Just like Google Chrome uses V8 and adds features to it, we can embed V8 code to do some server works like processing the request and sending the response */
/* What does JS need to manage a server? 
-- Better ways to organize our code into reusable pieces 
-- Ways to deal with Files
-- Ways to deal with Databases
-- The ability to communicate over the Internet
-- The ability to accept requests and send responses in the standard format 
-- A way to deal with work that takes a long time */

/* The C++ Core */
/* C++ core is features and utilities written in C++ and made avaiable to V8 engine */

/* The Javascript Core */
/* Node.js source code has a lot of js utility features that is wrapper for the C++ code, just like a zlib.js library that deals with zip files. If you open that files it 
-- has process.binding('zlib') line which is importing the C++ object to process the zip files */


