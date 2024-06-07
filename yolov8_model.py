from ultralytics import YOLO

class YOLOModel:
    def __init__(self, modelPath):
        self.model = YOLO(modelPath)
        self.names = self.model.names
        self.classDescriptions = {
            0: "A reciclagem do plástico envolve processos como trituração e derretimento, permitindo a reutilização de materiais para criar produtos variados. Esta prática contribui para a redução do volume de resíduos em aterros e a diminuição da extração de novos recursos naturais."
        }

    def predict(self, image):
        results = self.model(image,conf=0.7)
        detections = []
        seenClasses = set()
        for result in results[0].boxes:
            cls = int(result.cls[0].cpu().numpy())
            if cls not in seenClasses:
                seenClasses.add(cls)
                className = self.names[cls]
                description = self.classDescriptions.get(cls, "Descrição genérica")
                detections.append({
                    "class": className,
                    "description": description
                })
        return detections
