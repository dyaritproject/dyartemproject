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
            
        # Replace \par with newlines and \bullet with -
        text = content.replace('\\par', '\n').replace('\\bullet', '-')
        
        # Strip all other RTF tags
        text = re.sub(r'\\[a-z0-9]+\s?(-?[0-9]+)?', '', text)
        text = re.sub(r'[{}]', '', text)
        
        # Clean up some common artifacts
        text = text.replace('Calibri;', '')
        
        lines = [line.strip() for line in text.split('\n') if line.strip() and not line.startswith('DYAR Pty Ltd')]
        
        title = f.replace('DYAR Easy-Read — ', '').replace('.rtf', '')
        
        docs.append({
            'id': f'er-{idx}',
            'title': title,
            'content': lines
        })
        
    with open('../frontend/src/data/cm1EasyReadData.json', 'w') as out:
        json.dump(docs, out, indent=2)

if __name__ == "__main__":
    parse_rtf_to_json('.')
