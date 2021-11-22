<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mi sitio web</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div class= "container">
            <a href="/" class="navbar-brand h1">FW</a>
            <ul class = "navbar-nav mr-auto">
                <li class ="nav-item">
                    <a href="/" class="nav-link">home</a>

                </li>


            </ul>


        </div>

    </nav>
    <div class="container">

        <div class ="row">
            <?php echo $content; ?>
</body>
</html>
