FROM python:3.8 AS base
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    POETRY_HOME="/opt/poetry" \
    POETRY_NO_INTERACTION=1 \
    POETRY_VIRTUALENVS_CREATE=false \
    POETRY_VIRTUALENVS_IN_PROJECT=false
ENV PATH="$POETRY_HOME/bin:$PATH"


FROM base AS builder-base
WORKDIR /app/server
RUN apt-get update \
    && apt-get install --no-install-recommends -y \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/* \
    && rm -rf /var/lib/opt/lists/* \
    && curl -sSL https://raw.githubusercontent.com/sdispater/poetry/master/get-poetry.py | python
COPY poetry.lock pyproject.toml ./
RUN poetry install --no-dev


FROM builder-base AS dev
COPY --from=builder-base $POETRY_HOME $POETRY_HOME
RUN poetry install
WORKDIR /app/server
EXPOSE 8000