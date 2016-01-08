// Importing dependency modules
var React = require('react');

var Stream = require('./Stream.jsx');
var Collection = require('./Collection.jsx');

// Defining React components
var Application = React.createClass({

  getInitialState: function () {
    return {
      collectionTweets: {}
    };
  },

  addTweetToCollection: function (tweet) {
    var collectionTweets = this.state.collectionTweets;

    collectionTweets[tweet.id] = tweet;

    this.setState({
      collectionTweets: collectionTweets
    });
  },

  removeTweetFromCollection: function (tweet) {
    var collectionTweets = this.state.collectionTweets;

    delete collectionTweets[tweet.id];

    this.setState({
      collectionTweets: collectionTweets
    });
  },

  removeAllTweetsFromCollection: function () {
    this.setState({
      collectionTweets: {}
    });
  },

  render: function () {
    return (
      <div className="container-fluid">

        <div className="row">
          <div className="col-md-4 text-center">

            <Stream onAddTweetToCollection={this.addTweetToCollection} />

          </div>
          <div className="col-md-8">

            <Collection
              tweets={this.state.collectionTweets}
              onRemoveTweetFromCollection={this.removeTweetFromCollection}
              onRemoveAllTweetsFromCollection={this.removeAllTweetsFromCollection} />

          </div>
        </div>

      </div>
    );
  }
});

// Exporting a React component as a module 
module.exports = Application;
