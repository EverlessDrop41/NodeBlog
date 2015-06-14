{% extends 'layout.swig' %}

{% block css %}{% parent %}{% endblock %}

{% block body %}
  {% for post in blogs -%}
  <div class="blog-post">
    <h3 class="blog-title">
      <a href={{ url_for('blog/' + post['title']) }}>
        {{ post['title'] }}
      </a>
    </h3>
    <div class="blog-content">{{ post['content'] }}</div>
  </div>
  {%- endfor %}
{% endblock %}