# load-balancer-experiment

Experimenting weighted round robin load balancing with nginx

## Get started

Build project

```terminal
docker-compose build
```

Run services

```terminal
docker-compose up
```

Attach to the nginx container where the load balancer is configured.

```terminal
docker exec -it nginx sh
```

Start hitting the configured load balancer endpoint

```terminal
curl localhost:8081/hi
```

See the logs
