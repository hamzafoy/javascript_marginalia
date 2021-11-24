/*:::::

TYPESCRIPT NOTES:

! TypeScript files end in `.ts`

! TypeScript, a compiled language, utilizes a compiler `tsc` to generate
a JavaScript file. Basic command/terminal usage looks like `tsc [filename].ts`

! Visual Studio Code & many IDEs can handle TypeScript

! Make changes to the `.ts` file to update the generated `.js` file.

! Run `npm i -g typescript` to install TS globally and the `tsc` compiler.
Check the version of tsc with `tsc -v`.

! Running `tsc -h` will pull up documentation about various flags and compiler options.

** COMPILER OPTIONS include. . .

1. `--target [js language version]` will specify which ECMA version you want
TypeScript to compile into.

2. `--outDir [filename]` will create a directory which the compiled JS file will be
stored in.

! You can place commonly used compiler options in a `tsconfig.json` file to avoid using
the flags repeatedly in the command line. Generate this file easily by running
`tsc --init`

:::::*/

/*:::::

TYPE INFERENCE

TypeScript will "infer" the static typing of a variable based on the first data type of 
value it is given. The dev must treat that variable as only that type of data, any
attempts to alter the value to another data type will result in a TypeError.

:::::*/

let typeScriptNum = 3;
let typeScriptString = 'This is an example!';
let typeScriptBoolean = false;
let typeScriptAny;

typeScriptBoolean = 3; //This results in a TypeError.
typeScriptBoolean = true; //This alteration is accepted, data value matches the inferred type.
typeScriptAny = 2.4512; //A declared variable with no data type assigned is treated like a regular JS variable.

let typeScriptExplicitlyString: string;
//You can explicitly dictate the data type that a given variable should deal with with the above syntax.

/*:::::

EXPLICIT TYPE ANNOTATION FOR FUNCTIONS

You can explicitly annotate what data type is expected for parameters and returned
values in functions. The expected data types for the parameters go after each
parameter within the round brackets of a declared function and the data type for
the return value is after a colon to the right of the parentheses.

:::::*/

function typeScriptFunc(paramOne: string, paramTwo: number): string {
    return `${paramOne}: ${paramTwo}`;
}