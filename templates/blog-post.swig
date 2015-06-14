{% extends 'layout.swig' %}

{% block css %}{% parent %}{% endblock %}

{% block body %}
  <h1>{{ title }}</h1>
  <div class="blog-content">{{ content }}</div>
{% endblock %}