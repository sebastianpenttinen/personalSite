from flask import Flask, render_template, send_file

app = Flask(__name__, static_folder="../build/static", template_folder="../build")


@app.route("/")
def main():
    return render_template("index.html")


@app.route("/cv")
def downloadCv():
    path = "cv/Sebastian-Penttinen-CV.pdf"
    return send_file(path, as_attachment=True)


print("Starting Flask!")

app.debug = True
app.run(host="0.0.0.0")

