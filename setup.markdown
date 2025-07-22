---
layout: default
---

[&larr; Back home](./index.html)

# Why did I write this section?

This page is very much meant for my direct reports, and any other colleagues (or indeed, anyone interested) in how I quickly setup a microsite to act as a bit of a portfolio.

## My context

For this, I specifically moved to developing on personal Windows laptop -- a platform I have not done much serious development on since my University days. As is generally the case, initial setup is likely a bit easier if you are on a Unix-based platform.

# The (easy) steps

## 0: Install basic tools (optional)

While you can develop Github Pages from entirely within the web UI, I find it more natural to have a local clone of the repository and a local editor.

Likely the easiest editor to use is [https://code.visualstudio.com/Download](Visual Studio Code), although only because its use is so common these days.

For Git, Github has a [good page of options](https://github.com/git-guides/install-git) if you need to install it:
* If you are on a modern Unix system you will likely already be covered
* On Windows, GitHub Desktop is likely the easiest option to get up and running

## 1: Setup Github Pages

For this, I used [this quickstart guide](https://docs.github.com/en/pages/quickstart) to get a basic site up and running quickly from a repository. Once the site is live, it forms a good foundation for either a single page site ([with different themes available](https://pages.github.com/themes/)) or as a starting point to launch into a more complex site.

# The (harder) steps

I wanted more than a single page site, and so the next step was to look into [getting Jekyll properly involved](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll).

Jekyll is a Ruby libary that can process text content and create static sites for them, and is what powers GitHub Pages, so is widely used for personal and project pages to quickly get a site up and running.

I attempted initially to install the needed development components directly in Windows, with the knowledge that this might be painful -- coming from a Ruby background, I knew that previously getting development up and running on Windows was a painful experience.

 It turns out that while things have improved a lot, it was still easy for me to hit into issues installing and running the needed Gems for Jeykll development. While there is [a guide for Windows setup](https://jekyllrb.com/docs/installation/windows/), I still had Gem version conflicts, which were easier solved by avoiding Windows setup entirely...

## 2: Windows Subsystem for Linux (WSL)

To make installation of Ruby and Gems easier, and to be able to quickly throw everything away and start again if it goes wrong, getting a Linux distro configured under WSL is a good way to for development.

I had previously [installed PowerShell](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.5) and had an [initial look at WSL setup](https://learn.microsoft.com/en-us/windows/wsl/install), so was already familiar enough to dive into it as an option.

I chose Ubuntu as that is the distro I am most familiar with.

## 3: Install the needed components

The first step you should take after installing and logging into yout WSL distro is to update your package manager, so that you can fetch other components:

```bash
sudo apt-get update
```

This might take a while, but should allow everything else to install correctly.

To work with a Jekyll site, you need a few things:
* Ruby (and RubyGems)
* Some other build tools (for native extensions for Gems)
* The Jekyll Gem itself and dependencies

The guide from [Jekyll itself for Ubuntu installation](https://jekyllrb.com/docs/installation/ubuntu/) worked a treat, and this was all I needed.

## 4: Site creation and editing

Within WSL, I created a clone of my repo, and then opened it using VSCode (using the `code .` shortcut to jump directly to the right place). It was good to see that VSCode could easily open the location within WSL, as previously using WSL, I had had problems getting the filesystems to cross-over.

I then started at [Step 7 of this guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll#creating-your-site), forcing the creation. I did this as I already had content locally I wanted to easily reuse, so having it generate the new structure within the existing checkout and then deleting the redundent files worked for me. Others might find it easier to just start from the top of that guide and check out an orphaned branch, or initialise the Git repository from the Jekyll scaffolding and force-push over any existing content.

## 5: Themes and local testing

For themes, I followed [this guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/adding-a-theme-to-your-github-pages-site-using-jekyll) to find simple themes, then followed the specific instructions [for the one I chose](https://github.com/pages-themes/architect) to get it working as a remote theme.

For locally building and previewing the site content, [I followed this guide](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll), having the components I needed installed after a `bundle install`. Then serving the page locally using the bundled version of Jekyll just worked (sort of -- see below).

## 5b: Local connection

Whilst getting Jekyll to compile and serve the page from WSL (on default port 4000) should have worked, I already had something running there. As such, I needed to change the `_config.yml` to include a different default port:

```yml
port: 4444
```

After this, serving the site and connecting to it from Windows via `localhost:4444` worked fine.

If there are additional issues, you might need to look into [changing the WSL networking mode](https://learn.microsoft.com/en-us/windows/wsl/networking#mirrored-mode-networking), but the default NAT mode worked for me after the port change. 

# Issues I saw

An issue I ran across was that the creation of a new file from within VSCode (this one in fact) created the file owned by root:root, rather than the local user. This worked initially for saving the content, but then returning to the file later VSCode could not save to the file (as it did not have permission). This was solved by a quick `sudo chown` and `sudo chgrp`.

Additionally, it should be noted that GitHub Pages currently uses v3.10 of Jekyll, while the head version of it is v4.4 -- this means that you will end up with two versions of Jekyll installed in your Gemset, which can confuse things if you just try to run `jekyll`. After initial site creation, you should stick to `bundle exec jekyll` to be specifically scoped to the version you are needing for development.