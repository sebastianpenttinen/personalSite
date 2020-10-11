FROM python:3.8.1

COPY ./backend /app

ENV STATIC_PATH /app/build/static

RUN pip install -r /app/requirements.txt

CMD [ "python", "./app/main.py" ]