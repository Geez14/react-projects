import random
import string

def generate_directory(depth=2, max_files=2):
  """Generates a recursive directory structure with fake data.

  Args:
    depth: The maximum depth of the directory structure.
    max_files: The maximum number of files per directory.

  Returns:
    A JSON object representing the directory structure.
  """

  directory = {
    "name": ''.join(random.choices(string.ascii_letters, k=8)),
    "type": "directory",
    "children": []
  }

  for _ in range(random.randint(0, max_files)):
    if depth > 0:
      directory["children"].append(generate_directory(depth - 1, max_files))
    else:
      directory["children"].append({
        "name": ''.join(random.choices(string.ascii_letters, k=8)),
        "type": "file",
        "size": random.randint(100, 1000)
      })

  return directory

# Example usage:
directory_structure = generate_directory()
print(directory_structure)