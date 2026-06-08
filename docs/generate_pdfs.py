"""Regenerate branded PDFs from the ops-doc markdown masters.

Run with the dashboard venv python (has WeasyPrint + GTK):
  E:\\Users\\Coen\\Claude\\gbp-dashboard\\venv\\Scripts\\python.exe generate_pdfs.py
"""
import os
import markdown
from weasyprint import HTML

DOCS = os.path.dirname(os.path.abspath(__file__))

FILES = [
    ("INVOICE-TEMPLATE.md", "INVOICE-TEMPLATE.pdf"),
    ("WEBSITE-TERMS.md", "WEBSITE-TERMS.pdf"),
    ("CLIENT-WELCOME-PACK.md", "CLIENT-WELCOME-PACK.pdf"),
]

CSS = """
<style>
@page { size: A4; margin: 2cm 2.2cm; }
body { font-family: 'Segoe UI', Arial, sans-serif; color: #1f2933; font-size: 11pt; line-height: 1.5; }
h1 { color: #1e3a5f; font-size: 22pt; border-bottom: 3px solid #d4941f; padding-bottom: 8px; margin-bottom: 6px; }
h2 { color: #1e3a5f; font-size: 15pt; margin-top: 22px; }
h3 { color: #1e3a5f; font-size: 12.5pt; margin-top: 16px; margin-bottom: 4px; }
strong { color: #1e3a5f; }
a { color: #1e3a5f; }
hr { border: none; border-top: 1px solid #cbd5e0; margin: 18px 0; }
table { width: 100%; border-collapse: collapse; margin: 12px 0; }
th { background: #1e3a5f; color: #fff; text-align: left; padding: 8px 10px; font-size: 10pt; }
td { border-bottom: 1px solid #cbd5e0; padding: 8px 10px; }
code { background: #f1f5f9; padding: 1px 4px; border-radius: 3px; font-size: 10pt; }
ul, ol { margin: 6px 0; }
li { margin: 3px 0; }
</style>
"""


def main():
    for md_name, pdf_name in FILES:
        md_path = os.path.join(DOCS, md_name)
        pdf_path = os.path.join(DOCS, pdf_name)
        with open(md_path, "r", encoding="utf-8") as f:
            text = f.read()
        body = markdown.markdown(text, extensions=["tables", "fenced_code", "sane_lists"])
        html = "<html><head><meta charset='utf-8'>" + CSS + "</head><body>" + body + "</body></html>"
        HTML(string=html).write_pdf(pdf_path)
        print("wrote", pdf_name)


if __name__ == "__main__":
    main()
