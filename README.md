# HTML and CSS notes

# Creating a git repository

1. `git init` (is how you create a brand new repo in a folder. *only do this once*)
1. Create a new repository on Github
1. Add your remote server `git@github.com:CodeupClassroom/ulysses-web-exercises.git`
1. The default name of remote is always `origin`. `git remote add origin git@github.com:CodeupClassroom/ulysses-web-exercises.git`
1. Commit a file, generally the first file to commit is the `README.md` file
1. Start tracking the changes to your `README` file
1. `git add README.md`
1. Commit your changes: `git commit -m "docs: Add initial notes about using git"`
1. Push to Github `git push origin master`


## HTML

* **Goal** structure documents
* Main components
    - Element
        * tags (opening and, optionally a closing tag)
        * attributes
            - name, value (key-value pairs)
            - value is between quotes
            - value is optional, for instance `checked`, `selected`
        * contents, if it's text or more elements, or both
    - Types of elements
        * Inline -> `span`, `strong`, `em`, `input`
        * Block -> `div`, `h1`, `ul`, `p`
        * Void -> `br` (block), `img` (inline), `hr` (block)
        
## CSS

* **Goal** Visual style of a page
* Main components
    - Selector
        * selector, name
        * declaration
            * property
            * value
        * the content between the opening and closing curly brace is called a declaration block
    - Types of selectors
        * class
        * id
        * element
* Types of properties
    * color
    * fonts
    * text
    * layout
        - floats
        - positioning -> relative or absolute
    * box model -> width, height, border, padding and margin
* Types of layouts
    - fixed. We use pixels
    - fluid. We use percents
    - responsive. We use media queries


## CSS Frameworks

* Separation of container and content
* `.component .modifier` (container)
        `.component-header .modifier-2`
        `.component-body`
        `.component-footer`


## Getting Help on the Command Line

- git specifically

    ```
    git help <subcommand>
    ```

- broadly speaking

    ```
    <command> --help
    ```

    ```
    man <command>
    ```

- help I'm stuck in the manual page!

    - d: down
    - u: up
    - e: down (just a little)
    - y: up (just a little)
    - q: quit

- rename a branch

    ```
    git branch -m oldname newname
    ```

## Steps to create a pull request

1. Create a local branch  `git checkout -b my-solution`.
1. Make your changes and commit in that branch.
1. Once your solution is complete. Push your changes
   `git push origin my-solution`.
1. Go to github.com and create a new pull request from your new branch
    - Add a comment in the PR explaining your changes (summary)
1. Click on `Create PR`
1. Click on `Merge PR`
1. Go back to IntelliJ
1. Switch to `master`. `git checkout master`
1. Pull the new changes. `git pull origin master`
