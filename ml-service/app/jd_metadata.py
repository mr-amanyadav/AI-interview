import re


def extract_metadata(job_text: str):

    metadata = {
        "job_title": "",
        "company": "",
        "location": "",
        "employment_type": ""
    }

    patterns = {
        "job_title": [
            r"^Position\s*:\s*(.+)$",
            r"^Job Title\s*:\s*(.+)$",
            r"^Role\s*:\s*(.+)$",
            r"^Title\s*:\s*(.+)$"
        ],

        "company": [
            r"^Company\s*:\s*(.+)$"
        ],

        "location": [
            r"^Location\s*:\s*(.+)$"
        ],

        "employment_type": [
            r"^Type\s*:\s*(.+)$",
            r"^Employment Type\s*:\s*(.+)$"
        ]
    }

    for key, regex_list in patterns.items():
        for regex in regex_list:
            match = re.search(regex, job_text, re.MULTILINE | re.IGNORECASE)

            if match:
                metadata[key] = match.group(1).strip()
                break

    return metadata