import json
import os

# Load dictionary
with open("data/FRdictionary.json", "r", encoding="utf-8") as f:
    dictionary = json.load(f)

files = [
    "data/actions_mod.json"
]

def translate_item(item, dictionary):
    translated = {}

    for key, value in item.items():
        if key in dictionary and value in dictionary[key]:
            translated[key] = dictionary[key][value]
        else:
            translated[key] = value

    return translated


for file in files:
    with open(file, "r", encoding="utf-8") as f:
        source = json.load(f)

    translated = [translate_item(item, dictionary) for item in source]

    # Extract filename only
    filename = os.path.basename(file)

    output_name = os.path.join(
        os.path.dirname(file),
        f"FR{filename}"
    )
    with open(output_name, "w", encoding="utf-8") as f:
        json.dump(translated, f, indent=2, ensure_ascii=False)

    print(f"Translated: {file} → {output_name}")