FROM tiangolo/uwsgi-nginx-flask:python3.6
COPY ./backend /app
ENV STATIC_PATH /app/build/static