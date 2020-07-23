# **Birdie** Full-Stack Django App
Birdie is a disc golf companion app that enables the user to save their disc ratings,
park specifics, create a bag to take and save their scores. Birdie also features an integrated user messaging system
## Installation
1. If you need Python on your machine, visit https://www.python.org/
1. Clone down the repo and `cd` into it
1. Set up your virtual environment:
   `python -m venv birdieappEnv`
1. Activate virtual environment:
   `source ./birdieappEnv/bin/activate`
1. Install dependencies:
   `pip install -r requirements.txt`
   `pip install django-bootstrap4`
1. Open Birdie in your IDE
   1. Click into `BirdieApp` folder
   1. Click into `views` folder and then open `connection.py`
   1. Replace file path with your local file path to the database
1. Create a Superuser:
   `python manage.py createsuperuser`
1. Run migrations:
   `python manage.py makemigrations BirdieApp`
   `python manage.py migrate`
1. Start the Server:
   `python manage.py runserver`
## How to use
1. Save your favorite parks
1. Create a disc bag and save your disc specs
1. Add your discs to any bag you create
1. Save game details such as:
- the bag you took
- the park where you played
- and your final score
1. Brag to your friends through direct messaging
## ERD
<img src="BirdieApp/imgs/2020-06-17.png">

