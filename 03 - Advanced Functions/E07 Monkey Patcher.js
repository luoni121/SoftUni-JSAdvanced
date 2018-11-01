function solution(input) {
    let commands = {
        upvote: () => {
            this.upvotes += 1;
        },
        downvote: () => {
            this.downvotes += 1;
        },
        score: () => {
            let rating = 'new';
            let ups = this.upvotes;
            let downs = this.downvotes;
            let score = ups - downs;
            let votes = ups + downs;

            if (votes < 10) {
                rating = 'new';
            }

            else if (ups / votes > 0.66) {
                rating = 'hot';
            }
            else if (score >= 0 && (ups > 100 || downs > 100)) {
                rating = 'controversial';
            }
            else if (score < 0) {
                rating = 'unpopular';
            }

            if (votes > 50) {
                let moreVotes = Math.max(ups, downs);
                let inflacion = Math.ceil(moreVotes * 0.25);
                ups += inflacion;
                downs += inflacion;
            }
            return [ups, downs, score, rating];
        }
    }
    return commands[input]();
}

let post = {
    id: '1234',
    author: 'author name',
    content: 'these fields are irrelevant',
    upvotes: 4,
    downvotes: 5
};
// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// solution.call(post, 'downvote');       // (executed 50 times)

//score = solution.call(post, 'score');
//console.log(score);

