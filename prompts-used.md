### 📝 LLM Prompts Used

Here are the prompts I used to generate the configuration above:

**Prompt 1 (Initial Site & Workflow):**
> "Create a minimal static site (HTML/CSS/JS) for a GitHub Pages demo. Also create a GitHub Actions workflow file that deploys it. The workflow should use the official `actions/upload-pages-artifact` and `actions/deploy-pages` actions. Make sure the workflow triggers only on a push to the `main` branch."

**Prompt 2 (Adding the Linter):**
> "Add a quality check step to the existing GitHub Actions workflow. Before the deploy job runs, add a separate job that installs Node.js, runs `npm install`, and then runs an ESLint check on `script.js`. The deploy job must only run if the lint job succeeds. Also create the necessary `package.json` and `.eslintrc.json` files to enforce the `semi` rule (requiring semicolons)."

**Prompt 3 (Test Scenario):**
> "Modify the generated `script.js` file to intentionally break the `semi` ESLint rule by removing a required semicolon from one of the statements, so I can demonstrate the workflow failing before fixing it."

**Prompt 4 (Deployment Settings Note):**
> "Explain what setting I need to change in my GitHub repository settings (Settings > Pages) so that the custom GitHub Actions workflow is allowed to publish the site." (The answer is to set the **Source** to **GitHub Actions** ).
