import { test, expect } from '@playwright/test';

const pagesToTest = [
  { name: 'Home (/)', path: '/' },
  { name: 'Privacidad (/privacidad)', path: '/privacidad' },
  { name: 'Privacy Policy (/privacy-policy)', path: '/privacy-policy' },
  { name: 'Blog (/blog)', path: '/blog' },
  {
    name: 'Artículo de Blog (/blog/arquitectura-sistemas-criticos-dotnet)',
    path: '/blog/arquitectura-sistemas-criticos-dotnet',
  },
];

for (const { name, path } of pagesToTest) {
  test(`Navegación y ausencia de errores de consola en ${name}`, async ({ page }) => {
    const consoleErrors: string[] = [];
    const pageErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    page.on('pageerror', (err) => {
      pageErrors.push(err.message);
    });

    const response = await page.goto(path);
    expect(response?.status()).toBeLessThan(400);

    // Esperar a que el DOM esté completamente cargado
    await page.waitForLoadState('domcontentloaded');

    expect(consoleErrors, `Errores de consola encontrados en ${path}: ${consoleErrors.join(', ')}`).toEqual([]);
    expect(pageErrors, `Excepciones de página encontradas en ${path}: ${pageErrors.join(', ')}`).toEqual([]);
  });
}

test('Interacciones en /: modal de contacto, presupuestos, acordeón y controles de grupo/rol', async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', (err) => {
    pageErrors.push(err.message);
  });

  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');

  // 1. Clic en el botón que abre el modal de contacto -> modal está visible
  const openModalBtn = page.locator('a[onclick*="openContactModal"]').first();
  await expect(openModalBtn).toBeVisible();
  await openModalBtn.click();

  const modal = page.locator('#contactModal');
  await expect(modal).toBeVisible();

  // 2. Elegir un presupuesto en el modal
  const modalBudgetBtn = modal.locator('.modal-pill').first();
  await expect(modalBudgetBtn).toBeVisible();
  await modalBudgetBtn.click();
  // Verificar que el presupuesto fue seleccionado en el modal (color de texto blanco sobre fondo azul)
  await expect(modalBudgetBtn).toHaveCSS('color', 'rgb(255, 255, 255)');

  // 3. Cerrar el modal
  const closeModalBtn = modal.locator('button[onclick*="closeContactModal"]');
  await expect(closeModalBtn).toBeVisible();
  await closeModalBtn.click();
  await expect(modal).toBeHidden();

  // 4. Elegir un presupuesto de la sección principal
  const mainBudgetContainer = page.locator('#budgetPillsContainer');
  await expect(mainBudgetContainer).toBeVisible();
  const mainBudgetBtn = mainBudgetContainer.locator('.pill').first();
  await expect(mainBudgetBtn).toBeVisible();
  await mainBudgetBtn.click();
  // Verificar que el presupuesto principal quedó seleccionado (color de texto blanco sobre fondo azul)
  await expect(mainBudgetBtn).toHaveCSS('color', 'rgb(255, 255, 255)');

  // 5. Abrir un ítem del acordeón de soluciones
  const solAccordion = page.locator('#solAccordionContainer');
  await expect(solAccordion).toBeVisible();
  const solItems = solAccordion.locator('button[onclick*="openSolItem"]');
  await expect(solItems.first()).toBeVisible();

  // Clic en el segundo ítem del acordeón (índice 1) para abrirlo
  await solItems.nth(1).click();
  await expect(solItems.nth(1)).toHaveAttribute('aria-expanded', 'true');

  // 6. Cambiar de grupo de soluciones si existen esos controles
  const solPill1 = page.locator('#solPill1');
  if (await solPill1.count() > 0) {
    await solPill1.click();
    // Verificar que el pill activo cambia de estilo
    await expect(solPill1).toHaveCSS('color', 'rgb(255, 255, 255)');
  }

  // 7. Cambiar de rol si existen esos controles
  const rolePill1 = page.locator('#rolePill1');
  if (await rolePill1.count() > 0) {
    await rolePill1.click();
    // Verificar que el pill activo cambia de estilo
    await expect(rolePill1).toHaveCSS('color', 'rgb(255, 255, 255)');
  }

  // Verificar que ninguna interacción produjo errores de consola ni excepciones no capturadas
  expect(consoleErrors, `Errores de consola durante interacciones: ${consoleErrors.join(', ')}`).toEqual([]);
  expect(pageErrors, `Excepciones durante interacciones: ${pageErrors.join(', ')}`).toEqual([]);
});

test('Enlace "Blog" está visible en el header y en el footer de / (desktop) y lleva a /blog', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');

  const headerBlogLink = page.locator('header a[href="/blog"]:has-text("Blog")');
  await expect(headerBlogLink).toBeVisible();

  const footerBlogLink = page.locator('footer a[href="/blog"]:has-text("Blog")');
  await expect(footerBlogLink).toBeVisible();

  await headerBlogLink.click();
  await page.waitForURL('**/blog');
  expect(page.url()).toMatch(/\/blog$/);
});

test('Enlace "Blog" está visible en el header y en el footer de / (viewport móvil 390x844) y lleva a /blog', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');

  const headerBlogLink = page.locator('header a[href="/blog"]:has-text("Blog")');
  await expect(headerBlogLink).toBeVisible();

  const footerBlogLink = page.locator('footer a[href="/blog"]:has-text("Blog")');
  await expect(footerBlogLink).toBeVisible();

  await headerBlogLink.click();
  await page.waitForURL('**/blog');
  expect(page.url()).toMatch(/\/blog$/);
});

test('Datos estructurados JSON-LD válidos con @type esperado en Home (/)', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('domcontentloaded');

  const scripts = await page.locator('script[type="application/ld+json"]').all();
  expect(scripts.length).toBeGreaterThan(0);

  const typesFound: string[] = [];
  for (const script of scripts) {
    const content = await script.textContent();
    expect(content).toBeTruthy();
    const parsed = JSON.parse(content!);
    if (parsed['@graph']) {
      for (const item of parsed['@graph']) {
        if (Array.isArray(item['@type'])) {
          typesFound.push(...item['@type']);
        } else if (item['@type']) {
          typesFound.push(item['@type']);
        }
      }
    } else if (parsed['@type']) {
      if (Array.isArray(parsed['@type'])) {
        typesFound.push(...parsed['@type']);
      } else {
        typesFound.push(parsed['@type']);
      }
    }
  }

  expect(typesFound).toContain('Organization');
  expect(typesFound).toContain('ProfessionalService');
  expect(typesFound).toContain('WebSite');
});

test('Datos estructurados JSON-LD válidos con @type esperado en /blog', async ({ page }) => {
  await page.goto('/blog');
  await page.waitForLoadState('domcontentloaded');

  const scripts = await page.locator('script[type="application/ld+json"]').all();
  expect(scripts.length).toBeGreaterThan(0);

  const typesFound: string[] = [];
  for (const script of scripts) {
    const content = await script.textContent();
    expect(content).toBeTruthy();
    const parsed = JSON.parse(content!);
    if (parsed['@type']) {
      typesFound.push(parsed['@type']);
    }
    if (parsed.blogPost && Array.isArray(parsed.blogPost)) {
      typesFound.push('blogPost');
    }
  }

  expect(typesFound).toContain('Blog');
  expect(typesFound).toContain('blogPost');
});

test('Datos estructurados JSON-LD válidos con @type esperado en Artículo de Blog', async ({ page }) => {
  await page.goto('/blog/arquitectura-sistemas-criticos-dotnet');
  await page.waitForLoadState('domcontentloaded');

  const scripts = await page.locator('script[type="application/ld+json"]').all();
  expect(scripts.length).toBeGreaterThan(0);

  const typesFound: string[] = [];
  for (const script of scripts) {
    const content = await script.textContent();
    expect(content).toBeTruthy();
    const parsed = JSON.parse(content!);
    if (parsed['@graph']) {
      for (const item of parsed['@graph']) {
        if (item['@type']) typesFound.push(item['@type']);
      }
    } else if (parsed['@type']) {
      typesFound.push(parsed['@type']);
    }
  }

  expect(typesFound).toContain('BlogPosting');
  expect(typesFound).toContain('BreadcrumbList');
});

test('SEO técnico: robots.txt permite todo y declara sitemap sin bloquear IAs', async ({ request }) => {
  const res = await request.get('/robots.txt');
  expect(res.status()).toBe(200);
  const text = await res.text();
  expect(text).toContain('Allow: /');
  expect(text).toContain('Sitemap: https://daractivosdigitales.com.ar/sitemap-index.xml');
  expect(text).not.toContain('Disallow: /');
});

test('GEO (IAs): llms.txt generado dinámicamente con servicios, contacto y artículos', async ({ request }) => {
  const res = await request.get('/llms.txt');
  expect(res.status()).toBe(200);
  const text = await res.text();
  expect(text).toContain('DAR Activos Digitales');
  expect(text).toContain('Servicios');
  expect(text).toContain('Zona');
  expect(text).toContain('Contacto');
  expect(text).toContain('Artículos');
  expect(text).toContain('/blog/arquitectura-sistemas-criticos-dotnet');
});

test('SEO y sección "En resumen" en artículo de blog', async ({ page }) => {
  await page.goto('/blog/arquitectura-sistemas-criticos-dotnet');
  await page.waitForLoadState('domcontentloaded');

  // Lang="es"
  const htmlLang = await page.locator('html').getAttribute('lang');
  expect(htmlLang).toBe('es');

  // Canonical
  const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
  expect(canonical).toBe('https://daractivosdigitales.com.ar/blog/arquitectura-sistemas-criticos-dotnet');

  // OpenGraph
  expect(await page.locator('meta[property="og:type"]').getAttribute('content')).toBe('article');
  expect(await page.locator('meta[property="og:title"]').getAttribute('content')).toBeTruthy();
  expect(await page.locator('meta[property="og:description"]').getAttribute('content')).toBeTruthy();
  expect(await page.locator('meta[property="og:url"]').getAttribute('content')).toBe('https://daractivosdigitales.com.ar/blog/arquitectura-sistemas-criticos-dotnet');
  expect(await page.locator('meta[property="og:image"]').getAttribute('content')).toBeTruthy();

  // Twitter
  expect(await page.locator('meta[property="twitter:card"]').getAttribute('content')).toBe('summary_large_image');

  // Article published/modified
  expect(await page.locator('meta[property="article:published_time"]').getAttribute('content')).toBeTruthy();
  expect(await page.locator('meta[property="article:modified_time"]').getAttribute('content')).toBeTruthy();

  // "En resumen" block
  const resumen = page.locator('.resumen-box');
  await expect(resumen).toBeVisible();
  await expect(resumen).toContainText('En resumen');
});
