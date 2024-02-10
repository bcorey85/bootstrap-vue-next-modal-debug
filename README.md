- `npm install`
- `npm run dev`

- Check developer console for the following error
- Notice modal doesnt open
```
entry.js:55 [Vue warn]: injection "Symbol(modalManagerPlugin)" not found. 
  at <BModal id="test" > 
  at <TestComponent> 
  at <App key=3 > 
  at <NuxtRoot>
```

- If you stop the Nuxt process and restart it, the error goes away and the modal opens

Additional Debugging:
- `rm -rf node_modules`
- `npm install`
- `npm run dev`
- Repeat previous debugging in developer console, notice error is back
