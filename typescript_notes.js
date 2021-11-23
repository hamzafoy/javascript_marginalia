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