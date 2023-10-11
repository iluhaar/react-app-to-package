# INFO

We need to have the TS (Not TSX) file which will export the main file of the project (in this example the file is `main.tsx`)

## To create local package you need:

- `npm run build`;
- `npm pack`;
- copy the path of the archive
- go to the app were you want to use the package:

  - `npm install 'path/to/archive'`
  - start the project
