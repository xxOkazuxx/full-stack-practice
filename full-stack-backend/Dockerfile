FROM python:3.10.4-alpine
WORKDIR /backend
COPY ./full-stack-backend/requirements.txt /backend/requirements.txt
RUN set -eux \
    && apk add --no-cache build-base \
    && pip install --upgrade pip setuptools wheel \
    && pip install --no-cache-dir --trusted-host pypi.python.org -r /backend/requirements.txt \
    && apk del build-base 

COPY . /backend
