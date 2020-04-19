let rows = prompt(`How many rows do you want (between 1 and 10)?`)
let columns = prompt(`How many columns do you want (between 1 and 10)?`)

let rowNumber = parseInt(rows, 10)
let columnNumber = parseInt(columns, 10)

for(i = 0; i < rowNumber; i++) {
  document.writeln('<br />'+'*')
  for (j = 1; j <= columnNumber; j++) {
    document.writeln('*')
    }
  }