<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mt. Masaraga Protected Landscape</title>
    <meta name="theme-color" content="#39670d">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <link rel="manifest" href="{{ asset('manifest.json') }}">
    <link rel="apple-touch-icon" href="{{ asset('assets/icon-192.png') }}">
    <link rel="icon" type="image/x-icon" href="{{ asset('MT. MASARAGA.ico') }}" />
</head>

<body>
    <div id="app"></div>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
</body>

</html>