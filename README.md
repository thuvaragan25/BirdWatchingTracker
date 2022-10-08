# Bird Watching Tracker
A web app made so you can store birds you find in the wild. Log in/Sign up to this web app, then if you find a bird add it so you can see all the birds you have found. If you do not know what bird you found, upload your image and the web app would predict the bird using results from the machine learning model. Using the Wikipedia API you can also find information about the birds using the search bar. Overall, this website is an all-in-one tool for bird watchers.
 
## Dataset
To train the machine learning model to classify bird species, I have used a [dataset](https://www.kaggle.com/datasets/gpiosenka/100-bird-species) from the Kaggle platform.

## Main Tools Used
- **Flask** - Framework used to create the web app and to integrate the machine learning model
- **Keras** - Used this library to perform transfer learning with the MobileNetV2. The MobileNetV2 is a Convolutional Neural Network architecture that is very effective for image classifcation while being lightweight. Using transfer learning the model contains the same architecture as the MobileNetV2 but is trained to specifically classify birds. More details on training this model can be viewed in this file: [BirdClassifierTrain.ipynb](MachineLearning/BirdClassifierTrain.ipynb)
- **SQLAlchemy** - Used to work with databases so users can login/sign up and save the birds they have found to their account


## How To Use
1. First download the repository
2. Then install `requirements.txt` to download all the required modules to run this program
```
pip install -r requirements.txt
```
3. Run `main.py`
4. Go to: http://127.0.0.1:5000/