import sys, asyncio
from playwright.async_api import async_playwright
B="http://localhost:3311"; O=sys.argv[1] if len(sys.argv)>1 else "/workspace/mogdad-qa"
async def main():
  async with async_playwright() as p:
    br=await p.chromium.launch(executable_path="/usr/bin/google-chrome")
    for w,h,tag,mob in [(1440,900,"1440",False),(390,844,"390",True)]:
      ctx=await br.new_context(viewport={"width":w,"height":h},device_scale_factor=1.5 if not mob else 2,is_mobile=mob,has_touch=mob)
      pg=await ctx.new_page(); errs=[]
      pg.on("console",lambda m: errs.append(m.text) if m.type=="error" else None)
      await pg.goto(B+"/"); await pg.wait_for_timeout(1100); await pg.screenshot(path=f"{O}/{tag}-open-1.1s.png")
      await pg.wait_for_timeout(2600)
      for path in ["/","/services","/about","/contact","/appointments"]:
        await pg.goto(B+path); await pg.wait_for_timeout(500)
        await pg.evaluate("document.querySelectorAll('.rv').forEach(e=>e.classList.add('in'))")
        await pg.evaluate("window.scrollTo(0,document.body.scrollHeight)"); await pg.wait_for_timeout(700); await pg.evaluate("window.scrollTo(0,0)"); await pg.wait_for_timeout(400)
        n=path.strip('/') or 'home'
        await pg.screenshot(path=f"{O}/{tag}-{n}-top.png")
        await pg.screenshot(path=f"{O}/{tag}-{n}-full.png",full_page=True)
        sw=await pg.evaluate("document.documentElement.scrollWidth"); print(tag,n,"scrollW",sw)
      await pg.evaluate("localStorage.setItem('ma-theme','dark');localStorage.setItem('ma-lang','pt')")
      await pg.goto(B+"/"); await pg.wait_for_timeout(600); await pg.evaluate("document.querySelectorAll('.rv').forEach(e=>e.classList.add('in'))"); await pg.wait_for_timeout(500)
      await pg.screenshot(path=f"{O}/{tag}-home-dark-pt.png",full_page=True)
      if mob:
        await pg.goto(B+"/"); await pg.click(".menu-btn",timeout=5000); await pg.wait_for_timeout(300); await pg.screenshot(path=f"{O}/{tag}-menu.png")
      print(tag,"errors",errs[:5]); await ctx.close()
    await br.close()
asyncio.run(main())
