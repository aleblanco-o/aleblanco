---
layout: page
title: Home
id: home
permalink: /
---

# Welcome! 🌱

This is my digital garden, feel free to explore. 

<h2>Topics</h2>
  <ul>
    {% assign sorted_categories = site.categories | sort %}
    {% for category in sorted_categories %}
      {% assign category_name = category[0] %}
      {% assign posts = category[1] %}
      <li>
        <a class="internal-link" href="{{ site.baseurl }}/categories/{{ category_name | slugify }}">
          {{ category_name }} ({{ posts | size }})
        </a>
      </li>
    {% endfor %}
  </ul>

<strong>Last Notes</strong>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% assign count = 0 %}
  {% for note in recent_notes %}
    {% unless note.categories contains "wb" %}
      <li>
        {{ note.last_modified_at | date: "%Y · %m" }} — 
        <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
      </li>
      {% assign count = count | plus: 1 %}
      {% if count == 5 %}
        {% break %}
      {% endif %}
    {% endunless %}
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>

This webpage is based on the this template [available on GitHub here](https://github.com/maximevaillancourt/digital-garden-jekyll-template). The colors and structure are inspired by Steph Ango founder and CEO of Obsidian. 

