# @lumigruppen/assets

This is a component library developed using React, Vite, and Tailwind. It consists of a variety of reusable UI components for React applications.

## Using the Components

This library can be installed and used in your projects. Follow these steps to get started:

### Installing the Library

To install this component library in your project, navigate to your project's root directory in your terminal and run the following command:

```shell
npm install @lumigruppen/assets
```

### Importing and Using the Components

After installation, you can import and use the components in your React application.

For example, to use the `Button` component, you would import it as follows:

```jsx
import { Button } from "@lumigruppen/assets";
```

Then you can use the `Button` component in your application like this:

```jsx
<Button>Click me!</Button>
```

## Local development

These instructions will get you a copy of the project up and running on your local machine for development purposes.

1. **Clone the Repository**

    Clone the repository onto your local machine.

    ```shell
    git clone https://github.com/Sonans/lumi-assets-public
    ```

2. **Navigate to the directory of the project**

    ```shell
    cd lumi-assets-public
    ```

3. **Install Dependencies**

    Use npm to install the necessary dependencies.

    ```shell
    npm install
    ```

4. **Run the Project**

    Use the following command to run the project locally.

    ```shell
    npm run dev
    ```

## Creating a New Version

To create a new version of this project, you can use the `npm version` command. This command will update the version number in your `package.json` file according to the type of version you specify:

- Patch Release (`0.0.X`)

    ```shell
    npm version patch
    ```

- Minor Release (`0.X.0`)

    ```shell
    npm version minor
    ```

- Major Release (`X.0.0`)

    ```shell
    npm version major
    ```

The `npm version` command will also create a version commit and tag. Don't forget to push the commit and tag with:

```shell
git push && git push --tags
```

## Publishing to NPM

To publish the new version to npm, you need to create a new release on GitHub. For detailed instructions on how to create a release, visit [this guide](https://docs.github.com/en/github/administering-a-repository/managing-releases-in-a-repository) provided by GitHub.

## Do you want to contribute?

Create a pull request