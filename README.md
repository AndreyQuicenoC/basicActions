# 🧠 Node.js Practice Project – Unit Testing & Continuous Integration

Welcome to your Node.js learning project!  
This repository is designed to help you practice **writing clean code, unit testing, and collaborative development using GitHub Actions**.

You’ll work as a team and progressively complete different **levels (Level 1, Level 2, Level 3)** — each with its own logic challenges and unit tests.

---

## 🚀 Project Overview

Each student has their own folder inside `students/` with this structure:

```
students/
  s-yourname/
    src/
      level1.js
      level2.js
      level3.js
    tests/
      level1.test.js
      level2.test.js
      level3.test.js
```

Each level increases in complexity, but the focus remains on **clear logic and good testing**.

---

## 🧩 Level Examples

### 🧪 Level 1 – Basics
Simple functions with arrays, numbers, or strings.

**Examples:**
- Check if a word is a palindrome.
- Sum all numbers in an array.
- Count vowels in a sentence.
- Find the largest number.

> 🧠 *Goal:* Practice pure functions, validation, and basic testing.

---

### ⚙️ Level 2 – Logic and conditions
Slightly more complex logic that requires combining multiple programming concepts.

**Examples:**
- Convert text to Title Case.
- Create a FizzBuzz function.
- Detect if a word is an isogram.
- Find unique words in a paragraph.
- Validate if a string is a simple email.

> 🧠 *Goal:* Work with loops, arrays, and conditionals while maintaining clean, testable code.

---

### 🧠 Level 3 – Algorithms and metrics
Introduce small algorithms or scenarios that can be measured (complexity, performance).

**Examples:**
- Implement a mini calculator with multiple operations.
- Build a function to validate a password strength.
- Create a function to calculate factorial recursively.
- Build a function to detect duplicates or compute statistics.

> 🧠 *Goal:* Write optimized, maintainable code and analyze complexity (e.g., cyclomatic complexity).

---

## 🧪 Testing

All unit tests are written using **Jest**.  
Run them locally with:

```bash
npm test
```

Or run with coverage metrics:

```bash
npm run test:ci
```

This will display:
- ✅ **Tests passed/failed**
- 📊 **Code coverage**
- 🔍 **Percentage of tested lines**

---

## 📈 Code Coverage

The pipeline is configured to collect **coverage reports**.  
It helps visualize **how much of your code is actually tested**.

You should aim for:
- **Minimum 80% coverage** per file.
- Focus on covering *branches* and *functions*, not just lines.

Example output:
```
Statements   : 90%
Branches     : 80%
Functions    : 85%
Lines        : 89%
```

---

## ⚙️ Code Quality – Linting & Cyclomatic Complexity

We use **ESLint** to ensure code consistency and detect potential bugs early.

### Run lint locally:
```bash
npm run lint
```

### Run and auto-fix:
```bash
npm run lint:fix
```

### Cyclomatic Complexity
The pipeline also measures **cyclomatic complexity** —  
how many decision points your code has (`if`, `for`, `while`, etc.).

- Low complexity (1–5): ✅ Easy to read.
- Medium (6–10): ⚠️ Acceptable but could be simplified.
- High (>10): 🚨 Needs refactoring.

This helps you understand **how complex your code is** and motivates cleaner logic.

---

## 🤖 Continuous Integration (CI) with GitHub Actions

This project uses **GitHub Actions** for automation.  
Every **Pull Request (PR)** triggers the workflow:

1. **Linting:** checks syntax and style.
2. **Unit tests:** runs Jest for all tests.
3. **Coverage check:** ensures 80% minimum.
4. **Ready message:** prints “Project ready for production” when merged into `main`.

---

## 🚨 MANDATORY: STUDENT CONFIGURATION REQUIRED 🚨

> ⚠️ **Attention all students:**  
> You **must configure and demonstrate** the following tools by yourselves as part of your project delivery.

Each team or student is responsible for:
- ✅ **Adding ESLint** (code style and syntax rules)  
- ✅ **Enabling Code Coverage reports** (e.g., via Jest or another tool)  
- ✅ **Measuring Cyclomatic Complexity** (to analyze the complexity of your functions)

💬 During your final submission, you must **explain and show evidence** of:
- How each of these tools was configured.  
- What results or metrics were obtained.  
- How those metrics help improve software quality.

> These configurations are **not pre-installed** in the repository.  
> You are expected to investigate, implement, and document them as part of your learning process.

---

### ✅ Example workflow summary
| Stage | Trigger | Description |
|-------|----------|-------------|
| **PR checks** | When a pull request is opened | Runs tests and lint |
| **Main branch merge** | When PR is merged to `main` | Shows message “Ready for Production 🚀” |

---

## 🧰 CI Enhancements (Ideas)

You can add these steps in the pipeline later:
- 🧾 **SonarCloud / CodeQL**: security and code smell detection.
- 📦 **npm audit**: dependency vulnerability checks.
- 🔢 **Complexity thresholds**: fail the build if functions are too complex.
- 🧹 **Prettier format check**: ensure consistent code style.

---

## 🧑‍🤝‍🧑 Team Collaboration Rules

1. Each student must work **only inside their own folder** under `/students/s-yourname/`.
2. Everyone must **add at least one new function and its tests** per level.
3. You may review and suggest improvements in other students’ PRs (peer review encouraged).
4. Every PR must:
   - Include meaningful commit messages.
   - Pass all CI checks.
   - Be reviewed and approved before merging.

---

## 🔒 Branch Protection Rules

The `main` branch is **protected** to ensure code quality and teamwork.

| Rule | Description |
|------|--------------|
| **Require Pull Request** | No direct commits to `main`. |
| **Require at least 2 reviewers** | Each PR must be approved by two peers. |
| **Require passing CI checks** | Lint and test workflows must succeed before merging. |
| **Require conversation resolution** | All review comments must be addressed. |
| **Restrict who can merge** | Only instructors or designated reviewers can merge. |
| **Include Copilot as reviewer (optional)** | Copilot can suggest improvements automatically. |

---

## 🧑‍💻 Everyone Must Participate

This is a **collaborative project** — everyone in the group must:
- Contribute meaningful code.
- Add tests for their functions.
- Review at least one teammate’s PR.
- Respect the branch protection and coding standards.

---

## 🌐 Example commands summary

| Command | Purpose |
|----------|----------|
| `npm install` | Install all dependencies |
| `npm test` | Run all tests |
| `npm run test:ci` | Run tests + coverage report |
| `npm run lint` | Check syntax and code quality |
| `npm run lint:fix` | Auto-fix lint issues |
| `npm run complexity` | Analyze cyclomatic complexity (detailed report) |
| `npm run complexity:check` | Strict complexity check for CI (fails if >5) |

---

## 💡 Pro Tips

- Keep functions **small and focused**.
- Use **descriptive test names**.
- Don’t copy logic between students; collaborate, don’t duplicate.
- Use comments only when necessary — clean code speaks for itself.
- Celebrate every PR that turns ✅ green!

---

## 🎯 Final Goal

When all students have completed **Level 3**:
- Each student should have written and tested at least 3–5 functions.
- The repository should have:
  - 80%+ coverage,
  - Passing CI pipeline,
  - Protected main branch,
  - Team reviews completed.

> 💬 *“Clean code and collaboration are the foundation of professional software development.”*

---

### 🏁 Ready to start?
1. Fork this repository or clone it into a Codespace.
2. Run `npm install`.
3. Open your `students/s-yourname/` folder.
4. Start coding your Level 1 challenge!
5. Push your changes and open a Pull Request.

---

🧩 **Instructor’s note:**  
This repository simulates a real-world development workflow.  
You’ll learn how modern teams work with **CI/CD, testing, quality gates, and branch protection** — essential skills for any DevOps or Cloud Engineer.
