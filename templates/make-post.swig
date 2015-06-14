{% extends 'layout.swig' %}

{% block css %}{% parent %}{% endblock %}

{% block body %}
	<form method='post' action='blog'>
		Title <input type="text" name="title" required pattern="^\S*$"> <br>
		Content <br> <textarea type="text" name="content" required pattern="."></textarea> <br>
		<input type="submit">
	</form>
{% endblock %}