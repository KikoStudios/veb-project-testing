# VEB Project Testing

Sample project for testing VEB install, run, validate, and OST commands.

## Files

- `project.vexp.config` - sample VEXP config
- `.veb/ost/tasks.json` - sample OST task export file
- `server.js` - tiny HTTP server
- `worker.js` - tiny background worker

## Quick test

```powershell
veb vexp validate project.vexp.config
veb run .
veb ost import
veb ost list
veb ost start 1
veb ost inspect 1
veb ost tail 1 --follow
```