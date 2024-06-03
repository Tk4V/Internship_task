## Getting Set Up

### With Docker:

1. Navigate to the `Internship_task` folder:
   ```bash
   cd Internship_task
   docker-compose build && docker-compose up
   python3 -m venv env && pip install -r requirements.txt
   cd Internship_task/Backend && uvicorn main:app
   cd Internship_task/Front-end/testAng && ng serve
