<!DOCTYPE html>
<html lang="pt-BR">
<head>
	<meta charset="utf-8">
	<meta name='viewport' content='width=device-width, initial-scale=1'>
	<meta name='author' content="Gabriel">
	<link href="https://fonts.googleapis.com/css?family=Oxygen:400,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<title>Api Flipper-Veiculos</title>
</head>
	<body>
		<header>
			<div class="title">
				<h1>API FLIPPER-VEICULOS</h1>
				<hr/>
			</header>
			<div class="container">
				<h1>Formulario</h1>
				<hr/>
				<form name="formFipe" id="formFipe" method="POST" action="controller/ControllerFlipper.php" id="formFipe">
					<select name="brand" id="brand" class="selectBox">
						<option value="">Selecione a marca</option>
					</select>
					<select name="vehicles" id="vehicles" class="selectBox">
						<option value="">Selecione o Veiculo</option>
					</select>
					<select name="year" id="year" class="selectBox">
						<option value="">Selecione o Ano</option>
					</select>
				</form>


			</div>
		</div>	
<script type="text/javascript" src="js/app.js"></script>
</body>
</html>