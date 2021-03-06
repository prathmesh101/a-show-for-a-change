
# A Show For A Change
# Summary
A video web application that connects socially conscious filmmakers with their audiences and raises funds for organizations seeking to improve the world.

# Team
* Jared Milrad - Chief Executive Officer (CEO)
* Daniel Yeh - Cheif Marketing Officer (CMO)
* David Martinez - Front End Lead
* Prathmesh Pardhiye - Front End Developer
* Alex Choi - Front End Developer
* Sivak Khodaverdian - Back End Lead
* Alia Wilkinson - Back End Developer & Product Manager & SCRUM Lord

# Feature List
## store and stream video
* dummy videos for testing
* AWS s3 video storage
* finalized database design
* PHP endpoints, display videos on the front end
* describe video to customers - tag with genres and causes
* associate videos with tags, store tags based on id on the back end
* send to front end via endpoint
* Sortable by tags based on genre and cause
* display tags, control display based on user input via javascript
## Layout 
* Recognizable branding
* See David & Front End Team
* Finalizing the layout and theme of site so it is recognizable on sight
* demo layout for donations - “drop some change”
* web application with mobile forward design
## UX testing - easy to use and fun  
* See David & Front End Team
* Send to users, gain feedback, adjust accordingly
* ability to donate to charity - demo charity donations 
* button that goes to a splash page and asks for email for updates on when that feature will be ready, asks for feedback (?)
## user accounts - allow users to sign up with email 
* form - user sign up
* login component
* sign up component
* User page component once logged in
* AJAX calls to the backend to get user data - axios recommended
* name, email, birthday, password in database
* write endpoints to transfer data to and from database - authentication
* plan out roles (?) in database for user authentication
## demo channel using Jared’s content
* mock up design
* develop front end components for channel
* store videos in database with tags
* write endpoint to display data on front end
* axios call from front end to back end

# Technologies
React.js

HTML5

CSS3

PHP for RESTful API

LAMP stack - Linux, Apache, MySQL, PHP

AWS EC2 (free tier)

AWS S3 (super simple storage)

AWS RDS (for databases)

# Dependencies
* node.js
  * check node version in bash(aka terminal, command line) command: node -v
* npm
  * check npm version in bash(aka terminal, command line) command: npm -v
  
* If you don't have node or npm, download them together here: https://nodejs.org/en/download/

* Check Apache version: httpd -v
* Check MySQL version: mysql -v
* Check PHP version: php -v

* Install LAMP stack: https://howtoubuntu.org/how-to-install-lamp-on-ubuntu

* MAMP for Mac or WAMP for Windows (to run the LAMP backend)
  * preferences => Web-Server
    * Set document root to cloned a-show-for-a-change directory
* Check for AWS CLI with command: aws --version
* Download AWS CLI here: https://docs.aws.amazon.com/cli/latest/userguide/installing.html

* Contact Sivak for access to AWS access if necessary

# Instructions to start front-end server

First time, run these commands: 
* npm install
* npm start
Wait for the web server to start, then go to localhost:3000 in your browser.

After the first time, run: 
* npm start
Wait for the web server to start, then go to localhost:3000 in your browser.

If the server does not start after the first opening, contact the last person who committed changes to the branch. 
