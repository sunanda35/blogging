# Project Startup
 * if you are clonning this file, after cloning first run `npm install` then you can run `npm start`.

## Used things --
    |- React                 --Development
    |- React-router-dom      --Routing
    |- firebase              --Database
    |- Material UI           --Icon

## Project Dependancies --
    |- npm install create-react-dom         --Install router
    |- npm install firebase                 --Install firebase
    |- sudo npm install -g firebase-tools   -- setup firebase
    |- npm install @material-ui/core        --for Dependancy (Package.json)
    |- npm install @material-ui/icons       --To import SVG icons

`For linux sudo is root user, for windows user, please search it on internet for administrator mood ( may be only-> npm install -g firebase-tools)`

## Project Structure --
    |- App.js
        |- Home.js
            |- Header
            |- Body
                |- Top 7 posts
                |- Latest posts 10
                |- Top 5 tags ( side bar)
                |- Read more (Load more 5 posts)
            |- Footer

        |- BlogPage.js
            |- Header
            |- Story
            |- Author (Name and social links)
            |- Like or Clap option
            |- Related 6 posts for top two tags/3
            |- Footer

        |- TopStory
            |- Header
            |- Show story with desc order of `views` with pagination\10
            |- Footer

        |- Tag
            |- Header
            |- Top 10 tags in flex mode
            |- posts of this tag with pagination
            |- Footer

        |- Author.js
            |- Header
            |- Author photo, name, username
            |- Author social links
            |- Author Ad
            |- Footer

        |- Error
            |- Header
            |- Error message (Stylist)
            |- Footer



## Project File Structure --
    |- App.js
    |- Component
        |- header
            |- Header.js
            |- header.css
        |- footer
            |- Footer.js
            |- footer.css

    |- Pages
        |- home
            |- Home.js
            |- body
                |- body.js
                |- body.css
                |- posts
                    |- post.js
                    |- post.css
                    |- profile
                        |- profile.js
                        |- profile.css

        |- blog_page
            |- BlogPage.js

        |- error
            |- Error.js
            |- error.css

    |- Production
        |- Colors.css
        |- Firebase.js
        |- String.js