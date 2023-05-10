FROM golang:1.16-alpine
WORKDIR /app
COPY go.mod ./
RUN go mod download
COPY *.go ./
RUN go build -o /docker-gs-ping

FROM golang:1.17-alpine
WORKDIR /
COPY --from=0 /docker-gs-ping /docker-gs-ping
EXPOSE 8080
ENTRYPOINT ["/docker-gs-ping"]