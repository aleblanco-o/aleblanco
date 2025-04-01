---
layout: page
title: Topics
permalink: /topics
---

<h1>Topics</h1>

<ul>
  {% assign topics = site.notes | map: "category" | uniq | sort %}
  {% for topic in topics %}
    <li><a class="internal-link" href="{{ site.baseurl }}/topics/{{ topic }}/">{{ topic | replace: "-", " " | capitalize }}</a></li>
  {% endfor %}
</ul>
