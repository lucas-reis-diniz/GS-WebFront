from flask import Flask,request, jsonify
import cv2
from flask_cors import CORS
from yolov8_model import YOLOModel
import numpy as np
from log import save_data_to_json as log


app = Flask(__name__)
model = YOLOModel('best.pt')
CORS(app)

@app.before_request
def log_request():
    log(request)

@app.route('/detect', methods=['POST'])
def detect():
    try:
        file = request.files['image'].read()
        npimg = np.frombuffer(file, np.uint8)
        img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
        results = model.predict(img)
        return jsonify({'results': results})
    except Exception as e:
        return jsonify({'error': str(e)})


if __name__ == '__main__':
    app.run(debug=True)