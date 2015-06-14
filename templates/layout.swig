<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>{% block title %} BLOG {% endblock %}</title>
		{% block css %}
		<link href="//fonts.googleapis.com/css?family=Raleway:400,300,600" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href={{ url_for('css/normalize.css') }}>
		<link rel="stylesheet" href={{ url_for('css/skeleton.css') }}>
		{% endblock %}
	</head>
	
	<body>
		<h1>The Node.Js powered blog</h1>
		{% block body %}

		{% endblock %}
	</body>
</html>