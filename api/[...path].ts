export default async function handler(req: any, res: any) {
  try {
    // @ts-ignore - generated at build time by esbuild from server.ts
    const mod: any = await import('./_server.mjs');
    const app = await mod.etwReady;

    if (!app) {
      res.status(500).json({ error: 'Server failed to initialize' });
      return;
    }

    app(req, res);
  } catch (e: any) {
    res.status(500).json({
      error: String((e && e.message) || e),
      stack: String((e && e.stack) || '').slice(0, 2000)
    });
  }
}
