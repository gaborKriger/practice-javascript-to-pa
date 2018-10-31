from flask import Flask, render_template
import content_generator

app = Flask(__name__)


@app.route('/')
def hello_world():
    content = content_generator.make_content_for_table(10)
    return render_template('index.html', content=content)



if __name__ == '__main__':
    app.run(debug=True)