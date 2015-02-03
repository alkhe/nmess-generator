var github = require('octonode'),
	nmess = github.client().repo('edge/nmess');

nmess.commits(function(err, commits) {
	console.log(commits[0].sha);
});
