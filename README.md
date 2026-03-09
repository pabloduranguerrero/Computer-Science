# Web personal — Pablo Durán Guerrero (Informática IB NM)

Sitio estático, responsive y listo para desplegar gratis.

## Desarrollo local
```bash
cd pablo-duran-web
python3 -m http.server 8092
```
Abrir: http://localhost:8092

## Despliegue gratis
### GitHub Pages
1. Crear repositorio y subir esta carpeta.
2. En GitHub: Settings → Pages.
3. Source: `Deploy from a branch`.
4. Branch: `main` / carpeta raíz (`/`).

### Netlify
- Arrastra la carpeta `pablo-duran-web` al panel de Netlify.

### Vercel
- Importa el repositorio.
- Framework preset: `Other` (sitio estático).

## Personalización rápida
- Nombre/marca: editar `index.html` y `sobre-mi.html`.
- Estilo visual: `assets/styles.css`.
- Comportamiento del menú móvil: `assets/main.js`.

## Aviso legal recomendado
Mantén visible el texto de plataforma educativa independiente y no oficial del IB.
