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
