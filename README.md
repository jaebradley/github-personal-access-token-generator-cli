# github-personal-access-token-generator-cli

![alt-text](https://imgur.com/NBzcu8N.png)
![alt-text](https://imgur.com/ZJyz9KJ.png)

[A GitHub personal access token is pretty seamless to do from the web UI](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/).

However, if you're a command line freak like me and want to create a personal access token quickly without having to leave the Terminal...

## Installation

```
npm install github-personal-access-token-generator-cli -g
```

## Usage

```
ghpat create
```

You will be asked for

* Your username + password combination
* The various scopes / permissions you'd like your access token to have
* A reason for this personal access token - aka what's it going to be used for?
* A two-factor authentication code if you've turned on 2FA for GitHub

If successful your personal access token **will be copied to your clipboard**.

## Uhhh not all the GitHub personal access token options are available?

Yeah, they're not.

This utility is mostly to create personal access tokens quickly - most of the time (I would argue), you need to set one of the "overriding" scopes rather than any of the "sub-scopes".

If this is something that's not the case for end-users, this can be added.