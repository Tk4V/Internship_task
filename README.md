## Getting Set Up

### With Docker:

1. Navigate to the `Internship_task` folder:
   ```bash
      cd Internship_task
2.```bash

      docker-compose build && docker-compose up
3.```bash
   
      python3 -m venv env && pip install -r requirements.txt
4.```bash
   
      cd Internship_task/Backend && uvicorn main:app
5.```bash
   
      cd Internship_task/Front-end/testAng && ng serve
