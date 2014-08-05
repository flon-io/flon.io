---
layout: site
title: home
---

# flon.io

work in progress.

## posts

{% for post in site.posts %}
  <div>
    <a class="post-link" href="{{ post.url }}">{{ post.title }}</a>
    {{ post.date | date: '%Y-%m-%d' }}
    <div class="excerpt" data-href="{{ post.url }}">
      {{ post.content | strip_html | truncatewords: 49 }}
    </div>
  </div>
{% endfor %}

