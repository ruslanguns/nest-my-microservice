# Microservice Sample Monorepo

## Description

In this repository I have a monorepo generated the with Nest CLI, the idea is to share the different settings per Microservice Transport Layer.

## Transports supported
- [x] TCP
- [ ] Redis
- [ ] MQTT
- [ ] NATS
- [ ] RabbitMQ
- [ ] Kafka
- [ ] gRPC

## Installation

```bash
$ yarn
```

## Running the app

```bash
# development
$ nest start --watch

# Run the correspondent Transport App Project
$ nest start micro-tcp
```

## How to use it?

Open an API Test Client like curl, insomia or postman and then just run the HTTP POST call to the following endpoint: 

`http://localhost:3000/add`

and then provide in the Body the data with the values to sum each other:

`{
  "data": [10,10, 10]
}`

This will output: `60` if everything is fine.

Please make sure both the microservice and my-app applications are running. 

## Author information

- Author - Ruslan Gonzalez
- Website - [https://rusgunx.tk](https://rusgunx.tk/)
- Twitter - [@ruslangonzalez](https://twitter.com/ruslangonzalez)

## License

  Nest is [MIT licensed](LICENSE).
