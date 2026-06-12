React и Asp.Net на одном хосте

Так используется Net.10 , то используется единый файл Program.cs.
Вместо Spa-midlware используются
app.UseDefaultFiles(); - позволяет серверу отдавать файл по умолчанию
app.MapStaticAssets(); - подключает раздачу статических файлов frontend-приложения
app.MapFallbackToFile("/index.html"); - перенаправляет неизвестные маршруты на index.html

А вместо UseProxyToSpaDevelopmentServer() в настройках самого сервера:
    <SpaRoot>..\reactappwithaspnet.client</SpaRoot> - путь к React-приложению
    <SpaProxyLaunchCommand>npm run dev</SpaProxyLaunchCommand> - указывает команду запуска frontend dev server
    <SpaProxyServerUrl>https://localhost:52921</SpaProxyServerUrl> - указывает адрес, на котором работает React dev server

Таким образом проект из коробки уже можно запускать как одновременно фроненд и бэкенд часть, так и по отдельности

