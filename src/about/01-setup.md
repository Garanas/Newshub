---
layout: page
title: Setup of a development environment
permalink: /about/01-setup

image:
    path: assets/images/2025/tournament-event-01-2024.png
    alt: A siege of Cybran amphibious units against a Seraphim base.
---

{% toc %}

# Accounts and tooling

To contribute you need various accounts and tooling. The accounts are mandatory but the tooling is entirely a suggestion. With the suggested tooling it will work and the community can provide support when necessary.

You're free to make different choices but you will be on your own.

## Accounts

You'll need to create an account for the following service:

- [GitHub](https://github.com/): GitHub is an online workspace where people collaborate on projects, similar to Google Drive but designed for teamwork. It keeps track of changes so multiple people can work on the same files without issues.

## Required Tools

You'll need the following tools to interact with GitHub and run the website on your computer:

- [Git](https://git-scm.com/): A tool that keeps track of changes to files, ensuring you can save, update, or undo changes if needed.
- [GitHub Desktop](https://desktop.github.com/download/): A simple app that lets you work with GitHub without needing to use complex commands.

To run the website on your computer, you'll also need:

- [Docker Desktop)](https://www.docker.com/products/docker-desktop/): A tool that automatically sets up everything needed to build and view the website on your device.

_Additional step for Windows users:_

- [Windows Subsystem Linux](https://learn.microsoft.com/en-us/windows/wsl/install): A feature that helps Windows computers run the necessary tools for the website.

## Recommended Tools

These tools are optional but can make editing the website easier:

- [Visual Studio Code](https://code.visualstudio.com/): A user-friendly text editor that makes it easier to work with website files.

## Sanity check

Make sure to restart your device. To confirm all the tooling is available you can open a command prompt. Then type the following:

```bash
  git -v      # check for Git
  docker -v   # check for Docker

  # in case you want to use Visual Studio Code
  code -v     # Check for Visual Studio code

  # in case you are on Windows
  wsl -v      # Check for Windows Subsystem Linux
```

If all the commands return one or more version number(s) then you are good to proceed.

# Run the website

To contribute you

## Forking

## Cloning

## Serve the website via Docker
