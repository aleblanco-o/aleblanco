---
layout: page
title: Home
id: home
permalink: /
---

# Welcome! 🌱

This is my digital garden, feel free to explore. 

<h2>Topics</h2>

{% assign all_categories = "" | split: "" %}

{% for note in site.notes %}
  {% if note.category %}
    {% unless all_categories contains note.category %}
      {% assign all_categories = all_categories | push: note.category %}
    {% endunless %}
  {% endif %}
{% endfor %}

{% assign cleaned_categories = all_categories | compact %}
{% assign sorted_categories = cleaned_categories | sort %}

<ul>
  {% for cat in sorted_categories %}
    <li>
      <a href="{{ site.baseurl }}/{{ cat | slugify }}">
        {{ cat }}
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

