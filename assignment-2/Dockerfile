FROM golang:1.16-alpine

WORKDIR /app

COPY go.mod ./

#RUN go mod download

COPY *.go ./

#RUN go build -o /docker-gs-ping

EXPOSE 8084

CMD [ "go", "run", "main.go" ]
