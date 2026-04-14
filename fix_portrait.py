from PIL import Image
import re, subprocess, os

base = '/root/.openclaw/workspace/looks-test/images'
os.makedirs(base + '/cropped', exist_ok=True)

crop_specs = {
    'low-low':    (0.10, 0.10),
    'low-mid':   (0.05, 0.05),
    'low-high':  (0.00, 0.35),
    'mid-low':   (0.00, 0.18),
    'mid-mid':   (0.08, 0.06),
    'mid-high':  (0.00, 0.12),
    'high-low':  (0.25, 0.00),
    'high-mid':  (0.00, 0.12),
    'high-high': (0.00, 0.10),
}

results_order = list(crop_specs.keys())
crop_sizes = {}

for key in results_order:
    path = base + '/' + key + '.jpg'
    out = base + '/cropped/' + key + '.jpg'
    img = Image.open(path).convert('RGB')
    w, h = img.size
    crop_size = min(w, h)
    avail_w = max(0, w - crop_size)
    avail_h = max(0, h - crop_size)
    sx = int(avail_w * crop_specs[key][0])
    sy = int(avail_h * crop_specs[key][1])
    cropped = img.crop((sx, sy, sx + crop_size, sy + crop_size))
    cropped.save(out, quality=88)
    crop_sizes[key] = crop_size
    print(key + ': ' + str(crop_size) + 'x' + str(crop_size) + ' at (' + str(sx) + ',' + str(sy) + ')')

print('Cropping done. Updating HTML...')

with open('/root/.openclaw/workspace/looks-test/index.html') as f:
    html = f.read()

for key in results_order:
    html = html.replace('./images/' + key + '.jpg', './images/cropped/' + key + '.jpg')
print('Paths updated.')

crop_js = 'var cropSizes = {' + ','.join('"' + k + '":' + str(v) for k, v in crop_sizes.items()) + '}; ';
html = html.replace('function exportShareCard()', crop_js + 'function exportShareCard()')
print('cropSizes added.')

old = "ctx.drawImage(img, px - pr, py - pr, pr * 2, pr * 2);"
new = "var cs = cropSizes[key] || img.width; ctx.drawImage(img, 0, 0, cs, cs, px - pr, py - pr, pr * 2, pr * 2);"
if old in html:
    html = html.replace(old, new)
    print('drawImage updated.')
else:
    print('WARNING: drawImage pattern not found')

m = re.search(r'<script>(.*?)</script>', html, re.DOTALL)
with open('/tmp/chk.js', 'w') as f:
    if m:
        f.write(m.group(1))
r = subprocess.run(['node', '--check', '/tmp/chk.js'], capture_output=True, text=True)
if r.returncode == 0:
    print('JS syntax OK')
else:
    print('JS ERROR:', r.stderr[:300])

with open('/root/.openclaw/workspace/looks-test/index.html', 'w') as f:
    f.write(html)
print('Done. HTML size:', len(html))
