import os
import re
import json

def parse_rtf_to_json(directory):
    files = [f for f in os.listdir(directory) if f.endswith('.rtf')]
    docs = []
    
    for idx, f in enumerate(files):
        path = os.path.join(directory, f)
        with open(path, 'r', encoding='utf-8', errors='ignore') as file:
            content = file.read()
            
        # Clean RTF tags (very basic)
        text = re.sub(r'\\[a-z0-9]+\s?', '', content)
        text = re.sub(r'[{}]', '', text)
        text = text.replace('\r\n', '\n').replace('\n\n', '\n')
        
        # We'll just store the raw text and clean it up a bit
        lines = [line.strip() for line in text.split('\n') if line.strip()]
        
        # Simple extraction
        title = f.replace('DYAR Easy-Read — ', '').replace('.rtf', '')
        
        docs.append({
            'id': f'er-{idx}',
            'title': title,
            'raw_text': lines
        })
        
    with open('../frontend/src/data/easyReadData.json', 'w') as out:
        json.dump(docs, out, indent=2)

if __name__ == "__main__":
    parse_rtf_to_json('.')
