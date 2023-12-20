export async function register() {
  console.log("NEXT_RUNTIME ",process.env.NEXT_RUNTIME)
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    console.log("register nodejs")
    await import('@/services/telegram/initBot')
  }
}
