// Tells Jest to do NOT mock requires...

jest.dontMock('../TweetUtils');

const TweetUtils = require('../TweetUtils');

describe('Tweet utilities module', function tweetTestSuit() {
    
    // Test Suit Impementation
    
    it('returns an array of tweet ids', function listTweetIds() {

        var tweetsMock = {
            tweet1: {},
            tweet2: {},
            tweet3: {}
        };

        var expectedListOfTweetIds = ['tweet1', 'tweet2', 'tweet3'];
        var actualListOfTweetIds = TweetUtils.getListOfTweetIds(tweetsMock);

        expect(actualListOfTweetIds).toEqual(expectedListOfTweetIds);

    });
}); 