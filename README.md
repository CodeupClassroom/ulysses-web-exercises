# HTML and CSS notes

# Creating a git repository

1. `git init`
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



