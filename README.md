# Reddit Clone 

An attempt at cloning reddit utilizing a NoSQL relational database! 

Features: 
- a view of the list of posts 
- commenting on both posts and comments 
- creation of users and upvoting/downvoting system 

## Demo

![Alt text](./images/1.png?raw=true "Title")
![Alt text](./images/2.png?raw=true "Title")
![Alt text](./images/3.png?raw=true "Title")

## Key Technologies Used and Technical Challenges 

Key Technologies used: 
- Express Routing
- Mongoose ORM
- Database Inheritance 
- Database Seeding

Challenges:
- database organization structure for posts and comments -> utilized MongoDB's built-in 'scheme inheritance' to create a posts collection and a comments collection that inherits from the commentable scheme
- organization of routes for posts, comments, users, up/downvotes -> utilized a URL following REST guidelines (i.e. users/:id, posts/:id, etc) for creation of new posts, showing posts and comments, and the upvote/downvote system

## Deployment

### Prerequisites

What things you need to install the software and how to install them

* node
* npm
* mongodb

### How to deploy this on your local machine

```
git clone <project-folder-on-github>
cd <cloned-project-folder-on-your-local-machine>
npm install
npm seed
npm start 
```

## Authors

* **Steven Li** - _Initial work_ -
