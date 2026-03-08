console.log('[worker] starting background worker');
setInterval(() => {
  console.log(`[worker] heartbeat ${new Date().toISOString()}`);
}, 3000);