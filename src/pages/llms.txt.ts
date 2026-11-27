import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  })).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const articlesLines = posts.map((post) => {
    const summary = post.data.resumen || post.data.description;
    return `- [${post.data.title}](https://daractivosdigitales.com.ar/blog/${post.id}): ${summary}`;
  }).join('\n');

  const content = `# DAR Activos Digitales

> Estudio de desarrollo de software e ingeniería de sistemas dirigido por el Ing. David Ariel Raskovsky. Desarrollamos páginas web, aplicaciones a medida, tiendas digitales y chatbots con IA para empresas y pymes.

## Servicios

- Página web: Para que te encuentren y te escriban. Rápida y lista para buscadores.
- App a medida: Para tus clientes o tu equipo, en el celular y la computadora.
- Tienda digital: Catálogo, carrito y cobro online con Mercado Pago o tarjeta.
- Chatbot de ventas: Responde, arma el pedido y cobra por WhatsApp o Instagram, las 24 horas.
- Turnos online: Tus clientes reservan solos y el turno cae en tu agenda.
- Sistema para tu empresa: Arreglamos, mejoramos o renovamos el sistema que ya usás.

## Zona

- San Miguel de Tucumán, Argentina (cobertura en todo el país y clientes en el exterior).

## Contacto

- WhatsApp: https://wa.me/5493815000000
- Email: daractivosdigitales@gmail.com
- Web: https://daractivosdigitales.com.ar
- GitHub: https://github.com/RaskovskyDavid
- LinkedIn: https://www.linkedin.com

## Enlaces

- [Inicio](https://daractivosdigitales.com.ar): Presentación de servicios, casos de éxito, cotizador y contacto de DAR Activos Digitales.
- [Blog](https://daractivosdigitales.com.ar/blog): Artículos técnicos sobre ingeniería de software, arquitectura en .NET y sistemas distribuidos.

## Artículos

${articlesLines}
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
