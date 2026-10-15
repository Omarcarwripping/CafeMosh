import base64, html, os, sys, unicodedata
sys.path.insert(0, os.path.dirname(__file__))
from data import PANELS

D = os.path.dirname(os.path.abspath(__file__))
def uri(n):
    return "data:image/webp;base64," + base64.b64encode(open(f"{D}/assets/{n}.webp", "rb").read()).decode()

e = html.escape
def slug(s):
    s = unicodedata.normalize("NFKD", s).encode("ascii", "ignore").decode().lower()
    return "".join(c if c.isalnum() else "-" for c in s).strip("-").replace("--", "-")

ART = {
 "pumpkin": '<i class="art m-pumpkin" aria-hidden="true"></i>',
 "cinnamon": '<i class="art m-cinnamon" aria-hidden="true"></i>',
 "martini": '<i class="art m-martini" aria-hidden="true"></i>',
 "burger": '<i class="art m-burger" aria-hidden="true"></i>',
 "badge": '''<div class="badge" aria-label="Kuchen auf Anfrage 5,90 €">
  <svg viewBox="0 0 120 120" aria-hidden="true"><defs><path id="ring" d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"/></defs>
  <circle cx="60" cy="60" r="58" class="b-bg"/><text class="b-ring"><textPath href="#ring">loveyouso · loveyouso · loveyouso · loveyouso ·</textPath></text></svg>
  <span>Kuchen<br>auf Anfrage<b>5,90 €</b></span></div>''',
}

def item(n, p, d):
    return (f'<li class="it"><div class="it-row"><span class="it-n">{e(n)}</span>'
            + (f'<span class="it-p">{e(p)}</span>' if p else "") + "</div>"
            + (f'<p class="it-d">{e(d)}</p>' if d else "") + "</li>")

panels, tabs = [], []
for pi, P in enumerate(PANELS):
    tabs.append(f'<a class="tab" role="tab" href="#{P["id"]}" data-p="{P["id"]}" aria-controls="p-{P["id"]}">{e(P["tab"])}'
                + ('<i class="leaf" aria-hidden="true"></i>' if P.get("seasonal") else "") + "</a>")
    chips, secs = [], []
    for si, (title, items, note) in enumerate(P["sections"]):
        sid = f'{P["id"]}-{slug(title)}'
        cls, hp = "sec", ""
        if note == "@matcha": cls += " matcha"; note = ""
        if "|" in note: note, hp = note.split("|")
        chips.append(f'<a class="chip" href="#{sid}" data-s="{sid}">{e(title.replace(" zu jedem Signature",""))}</a>')
        secs.append(f'<section class="{cls}" id="{sid}" style="--i:{min(si,8)}"><h3 class="sec-h"><span>{e(title)}</span>'
                    + (f'<span class="sec-p">{e(hp)}</span>' if hp else "") + "</h3>"
                    + (f'<p class="sec-note">{e(note)}</p>' if note and hp else "")
                    + '<ul class="items">' + "".join(item(*i) for i in items) + "</ul>"
                    + (f'<p class="sec-foot">{e(note)}</p>' if note and not hp else "") + "</section>")
    promo = ""
    if P["id"] == "drinks":
        promo = ('<aside class="promo" style="--i:0"><p class="promo-a">After Work.</p><p class="promo-b">Jeden Donnerstag · 18–22 Uhr</p>'
                 '<ul class="promo-c"><li>Spritz Drinks 6 €</li><li>Good Vibes</li><li>House Music</li></ul></aside>')
    panels.append(f'''<div class="panel" id="p-{P["id"]}" role="tabpanel" data-p="{P["id"]}"{"" if pi==0 else " hidden"}>
 <header class="ph"><h2 class="mega" aria-label="Menu {e(P["sub"])}"><span>ME</span><em>{e(P["sub"])}</em><span>NU</span></h2>{ART[P["art"]]}</header>
 {promo}<div class="cols">{"".join(secs)}</div></div>''')

tpl = open(f"{D}/template.html", encoding="utf-8").read()
out = (tpl.replace("{{TABS}}", "".join(tabs)).replace("{{PANELS}}", "\n".join(panels)))
for n in ["cafe", "mosh", "pumpkin", "cinnamon", "martini", "burger"]:
    out = out.replace("{{" + n + "}}", uri(n))
open(f"{D}/../index.html", "w", encoding="utf-8").write(out)
print(len(out))
