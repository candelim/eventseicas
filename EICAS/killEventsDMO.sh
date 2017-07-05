#!/bin/bash
docker stop $(docker ps -a -q --filter="name=eicas_dmo")
docker rm $(docker ps -a -q --filter="name=eicas_dmo")
