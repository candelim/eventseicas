#!/bin/bash
docker stop $(docker ps -a -q --filter="name=eicas_")
docker rm $(docker ps -a -q --filter="name=eicas_")

