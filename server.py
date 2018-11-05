from flask import Flask, render_template
import content_generator

app = Flask(__name__)


@app.route('/')
def home_page():
    return render_template('index.html')


@app.route('/table')
def change_color():
    content = content_generator.make_content_for_table(10)
    js_file = "table"
    return render_template('index.html', js_file=js_file, content=content)


if __name__ == '__main__':
    app.run(debug=True)
