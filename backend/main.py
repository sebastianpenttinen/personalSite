import os
from flask import Flask, send_file

app = Flask(__name__, static_folder="build/")


@app.route("/")
def main():
    index_path = os.path.join(app.static_folder, "index.html")
    return send_file(index_path)


@app.route("/cv")
def downloadCv():
    path = "cv/Sebastian-Penttinen-CV.pdf"
    return send_file(path, as_attachment=True)


if __name__ == "__main__":
    # Only for debugging while developing
    app.run(host="0.0.0.0", port=80)
