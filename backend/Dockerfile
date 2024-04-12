FROM golang:1.22.2-alpine3.19

RUN mkdir /app
RUN apk update && apk add git curl

WORKDIR /app

ADD . /app

RUN go mod download

RUN go install github.com/cosmtrek/air@latest

EXPOSE 8080

CMD ["air", "-c", ".air.toml"]
