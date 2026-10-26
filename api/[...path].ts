export default async function handler(req, res) {
  const out = { step: 'start', reqUrl: req.url, method: req.method };
  try {
    const mod = await import('../server');
    out.step = 'imported';
    const app = await mod.etwReady;
    out.step = 'ready';
    if (!app) {
      res.status(500).json({ error: 'no app instance', out });
      return;
    }
    app(req, res);
  } catch (e) {
    res.status(500).json({
      error: String((e && e.message) || e),
      stack: String((e && e.stack) || '').slice(0, 3000),
      out
    });
  }
}
