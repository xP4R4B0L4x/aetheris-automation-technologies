import re

with open(r'C:\Users\xP4R4\Desktop\Ætheris Website\awcmp.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_block = '''    <div class="privacy-points fade-up delay-2">
      <div class="pp">
        <span class="pp-icon">&#x2705;</span>
        <div class="pp-text"><strong>USDOT &amp; FHWA compliant</strong> &#x2014; designed for federal procurement</div>
      </div>
      <div class="pp">
        <span class="pp-icon">&#x1F6AB;</span>
        <div class="pp-text"><strong>No license plate recognition</strong> &#x2014; architecturally excluded, not suppressed</div>
      </div>
      <div class="pp">
        <span class="pp-icon">&#x2705;</span>
        <div class="pp-text"><strong>Transparent data retention</strong> &#x2014; clear policies on what is stored and why</div>
      </div>
      <div class="pp">
        <span class="pp-icon">&#x1F6AB;</span>
        <div class="pp-text"><strong>No facial recognition</strong> &#x2014; not present in any system component</div>
      </div>
      <div class="pp">
        <span class="pp-icon">&#x2705;</span>
        <div class="pp-text"><strong>Community governance</strong> &#x2014; local stakeholders have oversight of deployment data</div>
      </div>
      <div class="pp">
        <span class="pp-icon">&#x1F6AB;</span>
        <div class="pp-text"><strong>No persistent human tracking</strong> &#x2014; humans are not a detection target</div>
      </div>
    </div>'''

# Replace the privacy-points div using regex
pattern = r'<div class="privacy-points fade-up delay-2">.*?</div>\s*</div>\s*</section>'
replacement = new_block + '\n  </div>\n</section>'

new_content = re.sub(pattern, replacement, content, flags=re.DOTALL, count=1)

if new_content != content:
    with open(r'C:\Users\xP4R4\Desktop\Ætheris Website\awcmp.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print('SUCCESS: File updated')
else:
    print('WARNING: Pattern not matched, file unchanged')
    # Print surrounding context to debug
    idx = content.find('privacy-points')
    print(repr(content[idx:idx+300]))
