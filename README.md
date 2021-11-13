# Food Web Simulator

A React app developed to simulate the relationships between organisms in an environment for educational purposes.

View the app [here!](https://food-web-simulator.herokuapp.com/)

A sample dataset is included. Datasets can be managed via the Manage Datasets console. New data can be uploaded as a `.json` or `.txt` file, or manually via a text editor. Data can also be edited after creation or deleted. For a sample dataset, navigate to the `Edit Dataset` tab, or view the JSON schema for this data in the `View Schema` tab.

All data is stored locally in the browser. All uploaded data can be deleted via the Data Manager page.

Credit to Stacey Eady Reed for the text content and the sample dataset.

## Running this application locally

To run this application locally on your machine:

1. Ensure you have `node` installed. This can be installed via homebrew (`brew install node`) or via an [installer](https://nodejs.org/en/download/) downloaded from the Node.js website.
2. Inside of the parent directory, run `npm install` to install all dependencies.
3. Run `npm start` to begin the development server.

## TODO

- [ ] Add schema versioning to allow for potential future schema changes.
- [ ] Optimize layout for mobile.
- [ ] Create a UI dataset editor to make it easier to create new datasets.
- [x] Add the ability to download a dataset as a JSON file for easy sharing with students.
- [ ] Make the JSON errors more descriptive.
- [ ] Make the app prettier.
