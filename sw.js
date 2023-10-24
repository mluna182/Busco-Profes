console.log("Soy un service Worker");

self.addEventListener ("install", async event => {

const cache= await cache.open("recursos");
await cache.addAll(["/","index.html","pagina_busqueda_profes.html","pagina_profesor_1.html","pagina_registro_profesores.html","resultados_busqueda.html","procesar_iniciarsesion.html","fyq.html",
"styles.css","menu,css","busqueda.js","main.js","manifest.webmanifest", "imagenes/logo.png", "imagenes/persona1.jpg","imagenes/persona2.jpg"]);
 console.log("Archivos cacheados");

})

self.addEventListener("activate",event => {

})
self.addEventListener("fetch",event => {
    event.respondWitch(handleRequest(event.request));

    });

async function handleRequest(request){
    const cache = await caches.open("recursos");
    const cacheResponse = await cache.match(request);
    if ( cachedResponse) return cacheResponse
    const networkResponse = await fetch ( request);
     return networkResponse;
}

