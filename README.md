# QlikEmbed_QSE-CM

** In progress **

## Use case
Simple example with : 
- Qlik Sense Enterprise Client Managed
- Qlik Embed
- JWT

## Configuration
0. Prerequisites
    - Configure a VP properly with JWT authentication in QSE
    - **Important** the VP must be named **jwt**

1. Create a .env file with :
    ```
    TOKEN=<YOURJWTTOKEN>
    APP_URL=<https://yourQSsite>
    ```

2. Add a *server_certs* folder at the root with your certificates for https

3. In dashboard.html
    1. Modify the data-host attribute with your QS site
    2. Edit the attributes : *data-qlik-embed-app-id*, *app-id*, *object-id* in the Qlik-Embed Tag with your content

```
<script 
      crossorigin="anonymous"
      type="application/javascript"
      src="https://cdn.jsdelivr.net/npm/@qlik/embed-web-components@1/dist/index.min.js"
      data-host="https://QSUrl/jwt"
      data-cross-site-cookies="true"
      data-auth-type="windowscookie">
</script>
```

```
<qlik-embed
    ui="analytics/chart"
    object-id="asRPu"
    app-id="{AppId}" 
    id="qe1"
>
</qlik-embed>
```
