module.exports = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            background-color: antiquewhite;
            text-align: center;
            font-size: 18px;
            font-family: arial;
        }
        #mainContainer {
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            
            width: 60%;
            height: 600px;
            background-color:bisque;
        }
        h1 {
            color: crimson;
        }
        strong {
            font-size: 22px;
        }
        button {
            border: 1px solid firebrick;
            border-radius: 10px;
            width: 40%;
            height: 25px;
            color: white;
            background-color: crimson;
        }
        button:hover{
            transform: scale(1.05, 1.05);
        }
    </style>
    <title>Klein Page</title>

</head>
<body>
    <div id="mainContainer">
        <h1>Welcome</h1>
        <p>Before anything, just one statement should be clear for those who enter this page:</p>
        <p>O <strong>KLEIN</strong> é corno</p>

        <button>Welcome page</button>
    </div>
    
    <script>
        const button = document.querySelector('button');

        button.addEventListener('click', () => {
            window.location.href = 'http://localhost:3000/mainpage'
        });
    </script>
</body>
</html>
`