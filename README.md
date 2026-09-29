# JavaScript Mini Projects

A collection of ten standalone browser exercises built with HTML, CSS, and vanilla JavaScript. Each folder contains its own `index.html`, `style.css`, and `script.js`.

## Projects

| Folder | What it does |
| --- | --- |
| [Age-Calculator](./Age-Calculator/) | Calculates age in years from a date of birth |
| [Ascii-Unicode](./Ascii-Unicode/) | Checks whether the first UTF-16 code unit is within the ASCII range |
| [Digital-Clock](./Digital-Clock/) | Displays local hours, minutes, and seconds, updating every second |
| [Expense-Tracker](./Expense-Tracker/) | Adds/removes expenses and tracks their total |
| [FD-Calculator](./FD-Calculator/) | Calculates a maturity amount using simple interest |
| [PW-Generator](./PW-Generator/) | Generates strings with selected character groups and length |
| [Pop-Over](./Pop-Over/) | Opens and closes a popover |
| [Tip-Calculator](./Tip-Calculator/) | Calculates a tip and total bill |
| [To-Do list](./To-Do%20list/) | Adds and deletes tasks |
| [Vowel-Checker](./Vowel-Checker/) | Counts English vowels in input text |

## Run locally

Clone or download the repository and open an individual project's `index.html` in your browser. You can also serve the repository with VS Code Live Server and navigate to a project folder.

No npm installation, database, or backend is required.

## Concepts practiced

DOM selection and updates, event listeners, input handling, arrays, string operations, dates, timers, and basic arithmetic.

## Implementation notes

- Expense and task data live in memory and do not persist after a page reload.
- The password exercise uses `Math.random()`; it is a learning demo, not a cryptographically secure password generator.
- The deposit calculator uses simple interest, not compounding.
- ASCII is part of Unicode; the character exercise distinguishes ASCII-range input from input outside that range.
