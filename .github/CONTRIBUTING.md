# Contribution Guidelines
<!-- markdownlint-disable required-headers -->

## Issues

Found a bug? Got a question? Want some enhancement?<br>
First place to go is the repository issues section and I'll try to help as much as possible.

## Pull Requests

Fixed a bug or just want to provided additional functionality?<br>
Simply fork this repository, implement your changes and create a pull request.<br>
Few guidelines regarding pull requests:

* This repository is integrated with travis.ci for continues integration.<br>

Your pull request build must pass (the build will run automatically).<br>
You can run the following command locally to ensure the build will pass:

````sh
npm run build
````

* This library is using multiple code inspection tools to validate certain level of standards.<br>The configuration is part of the repository and you can set your favorite IDE using that configuration.<br>You can run the following command locally to ensure the code inspection passes:

````sh
npm run lint
````

* There are many automatic unit tests as part of the library which provide full coverage of the functionality.<br>Any fix/enhancement must come with a set of tests to ensure its working well.
