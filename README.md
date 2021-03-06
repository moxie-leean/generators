# Lean generators

> Set of generators to speed things a bit for some repetitive tasks.

## Requirements

- [Node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Yeoman](https://github.com/yeoman/yo)

## Installation

```bash
npm install -g generator-moxie-lean
```

## Update
   
```bash
npm update -g generator-moxie-lean
```

## Commands

- [new-wp](#yo-moxie-leannew-wp): Generates a new WordPress project.
- [new-wp-project](#yo-moxie-leannew-wp-project): Generates the config for a new WordPress project and initialises Git.
- [new-wp-plugin](#yo-moxie-leannew-wp-plugin): Generates a new WordPress plugin.
- [php-lib](#yo-moxie-leanphp-lib): Command to generate files from a PHP library with files like: composer, codesniffer and others.

### yo moxie-lean

> This is the main command.

### yo moxie-lean:new-wp

> This generator creates a new WordPress project, including root level config and [Lean plugin](https://github.com/moxie-lean/wp-plugin).

**Command**

```bash
yo moxie-lean:new-wp
```

It will prompt you for:

- The project name 
- github/bitbucket repo uri. (optional)

**Note:** that the plugin will take the same name as the project.
You should use a lowercase name separated with -'s.

### yo moxie-lean:new-wp-project

> Generates the config files required for a WordPress project.

**Command**

```bash
yo moxie-lean:new-wp-project
```
You need to set-up the remote repo first on GitHub or Bitbucket.

This generator creates: 

- `composer.json` file
- Default `.gitignore` file
- `.travis.yml` file to set up CI.

It then initialises `Git` and pushes to your remote repo.

It will prompt you for the project name and github/bitbucket repo uri. Alternatively you can pass the name as a CLI argument:

```bash
yo moxie-lean:new-wp-project --name my-plugin-name
```

### yo moxie-lean:new-wp-plugin

> Generates a new WordPress plugin.

To run this command just type on the terminal: 

```bash
yo moxie-lean:new-wp-plugin
```

This generator creates a new plugin and updates the namespace and constant names.

It will prompt you for the plugin name, which defaults to the folder name. Alternatively you can pass the name as a CLI argument:

```bash
yo moxie-lean:new-wp-plugin --name my-plugin-name
```

### yo moxie-lean:php-lib

**Command**

```bash
yo moxie-lean:php-lib
```

This generator is useful to create a new PHP libs with the same files used across other PHP libraries,
that uses `composer` as the package manager, and set a `CI` (continus
integration) system to used with travis in order to follow the WordPress
Code Standard as much as possible.

This generator creates: 

- A `composer.json` file
- A set of rules used for the codesniffer with some exceptions to allow `PSR4` and namespaces.
- A default `.gitignore` file
- An `.editorconfig` file
- A `.travis.yml` file to set up CI.
- A `MIT` licence file
