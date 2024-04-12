FROM golang:1.22.2-alpine3.19

WORKDIR /app


COPY . .
RUN cd backend && go mod download


CMD ["go", "run", "CMD/main.go"]
