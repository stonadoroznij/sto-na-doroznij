export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    import('@/services/telegram/startBot').then((module) => {
      module.default()
    })
  }
}
