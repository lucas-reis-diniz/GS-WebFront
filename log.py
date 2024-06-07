from datetime import datetime
import json
import os
caminho_path = os.path.join(os.path.dirname(__file__))

def save_data_to_json(data):
    try:
        file_name = datetime.now().strftime('%d-%m-%Y') + '.txt'
        dir_path = caminho_path+'/acess_log'
        if not os.path.exists(dir_path):
            os.makedirs(dir_path)
        file_path = os.path.join(dir_path, file_name)
        if file_name in os.listdir(dir_path):
            with open(file_path, 'r+') as file:
                content = file.read()
                content += json.dumps(data_log(data)) + '\n'
                file.seek(0)
                file.write(content)
        else:
            with open(file_path, 'w') as file:
                content = json.dumps(data_log(data)) + '\n'
                file.write(content)
    except Exception as e:
        print(e)
        print('Error saving data to json')

def data_log(data):
    return {
        'ip': data.remote_addr,
        'url': data.url,
        'time': datetime.now().strftime('%d/%m/%Y - %H:%M:%S'),
        'obs': 'Quero meu 10 para a GS kkkkk'
    }

