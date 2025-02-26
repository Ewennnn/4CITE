const core = require("@actions/core");

try {
    const commitSha = process.env.GITHUB_SHA;
    const actor = process.env.GITHUB_ACTOR;
    const repository = process.env.GITHUB_REPOSITORY;
    const eventName = process.env.GITHUB_EVENT_NAME;
    
    console.log(`🔹 Commit SHA: ${commitSha}`);
    console.log(`🔹 Author: ${actor}`);
    console.log(`🔹 Repository: ${repository}`);
    console.log(`🔹 Event Name: ${eventName}`);

    core.setOutput("commit_sha", commitSha);
    core.setOutput("author", actor);
} catch (error) {
    core.setFailed(`Action failed with error: ${error.message}`);
}