FROM golang:1.16-alpine

WORKDIR /app

COPY go.mod ./

RUN go mod download

COPY *.go ./

FROM golang:latest

COPY --from=0 /app .

RUN go build -o /docker-gs-ping

CMD [ "/docker-gs-ping" ]
