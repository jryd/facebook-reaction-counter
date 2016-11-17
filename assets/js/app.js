var vm = new Vue({

    el: '#liveCounter',
    data: {

        items: [],
        query: '',
        angry: 0,
        haha: 0,
        like: 0,
        love: 0,
        sad: 0,
        wow: 0,
    },
    methods: {
        loadData: function() {
            this.$http.get('https://graph.facebook.com/v2.8/' + this.query + '?access_token=' + access_token + '&fields=     reactions.type(LIKE).summary(total_count).limit(0).as(like),     reactions.type(LOVE).summary(total_count).limit(0).as(love),     reactions.type(WOW).summary(total_count).limit(0).as(wow),     reactions.type(HAHA).summary(total_count).limit(0).as(haha),     reactions.type(SAD).summary(total_count).limit(0).as(sad),     reactions.type(ANGRY).summary(total_count).limit(0).as(angry)').then(function (response) {
                this.angry = response.body.angry.summary.total_count;
                this.haha = response.body.haha.summary.total_count;
                this.like = response.body.like.summary.total_count;
                this.love = response.body.love.summary.total_count;
                this.sad = response.body.sad.summary.total_count;
                this.wow = response.body.wow.summary.total_count;
            }, function(response) {
                //nothing
            });
        },
        pollLoadData: function() {
            this.$http.get('https://graph.facebook.com/v2.8/' + post_id + '?access_token=' + access_token + '&fields=     reactions.type(LIKE).summary(total_count).limit(0).as(like),     reactions.type(LOVE).summary(total_count).limit(0).as(love),     reactions.type(WOW).summary(total_count).limit(0).as(wow),     reactions.type(HAHA).summary(total_count).limit(0).as(haha),     reactions.type(SAD).summary(total_count).limit(0).as(sad),     reactions.type(ANGRY).summary(total_count).limit(0).as(angry)').then(function (response) {
                this.angry = response.body.angry.summary.total_count;
                this.haha = response.body.haha.summary.total_count;
                this.like = response.body.like.summary.total_count;
                this.love = response.body.love.summary.total_count;
                this.sad = response.body.sad.summary.total_count;
                this.wow = response.body.wow.summary.total_count;
                console.log('polled');
            }, function(response) {
                //nothing
            });
        },
    },

    mounted: function () {
        this.pollLoadData();

        setInterval(function () {
          this.pollLoadData();
        }.bind(this), 1000);
    }
});
