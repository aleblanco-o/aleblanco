---
layout: page
title: Home
id: home
permalink: /
---

# Welcome! 🌱

This is my digital garden, feel free to explore. 



<strong>Last Notes</strong>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y · %m" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>

This webpage is based on the template [available on GitHub here](https://github.com/maximevaillancourt/digital-garden-jekyll-template). The colors and structure are inspired by Steph Ango founder and CEO of Obsidian. 

